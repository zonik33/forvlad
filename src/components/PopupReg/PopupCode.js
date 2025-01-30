        import CodeInput from "../CodeInput";
        import axios from "axios";
        import React, {useEffect, useRef, useState} from "react";
        import Popup from "./Popup";
        import ReCAPTCHA from "react-google-recaptcha";
        import PopupE from "./PopupE";
        import PopupEg from "./PopupEg";

        export default function PopupCode(props) {
            const { postRegister } = props;
            const [isPopupOpen, setIsPopupOpen] = useState(false);
            const [timerDisplay, setTimerDisplay] = useState("");
            const [isTimerClickable, setIsTimerClickable] = useState(true);
            let [intervalId, setIntervalId] = useState(null);
            const [isRequestPending, setIsRequestPending] = useState(false); // New state
            const [attemptsLeft, setAttemptsLeft] = useState(5); // Maximum attempts

            const timerDuration = 120;
            let timer = timerDuration;

            const startTimer = () => {
                if (intervalId) {
                    clearInterval(intervalId);
                }
                timer = timerDuration; // Reset timer variable
                const newIntervalId = setInterval(() => {
                    let minutes = parseInt(timer / 60, 10);
                    let seconds = parseInt(timer % 60, 10);
                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }

                    setTimerDisplay(`Отправить СМС-код повторно через ${minutes}:${seconds}`);

                    if (--timer < 0) {
                        clearInterval(newIntervalId);
                        setIsTimerClickable(true);
                        setTimerDisplay("Отправить СМС-код повторно");
                    }
                }, 1000);
                setIntervalId(newIntervalId);
            };

            useEffect(() => {
                startTimer();
                setIsTimerClickable(false);

                return () => {
                    clearInterval(intervalId);
                };
            }, []);

            const handleTimerClick = async () => {
                if (isTimerClickable) {
                    setAttemptsLeft(5);
                    setIsTimerClickable(false);
                    startTimer(); // Перезапускаем таймер
                    try {
                        await handleResendCode(); // Вызов функции отправки кода
                    } catch (error) {
                        console.error('Ошибка при повторной отправке кода:', error);
                        // Вы можете также установить состояние для отображения ошибки пользователю
                        setRegistrationError('Не удалось отправить код. Попробуйте еще раз.');
                    }
                }
            };


            function openPopupPassword() {
                closePopup2();
                document.getElementById("popup-password").style.display = "block";
            }

            const [showPopupE2, setShowPopupE2] = useState(false);

            const openPopupPasswordE = () => {
                closePopup2();
                setShowPopupE2(true);
            };
            function openPopupPasswordCopy() {
                closePopup2();
                document.getElementById("popup-password-copy").style.display = "block";
            }



            function openPopupAuth() {
                closePopup2();
                document.getElementById("popup-auth").style.display = "block";
                document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
                document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
            }
            function openPopupEnd() {
                closePopup2()
                document.getElementById("popup-end").style.display = "block";
                document.body.classList.add("no-scroll");
                document.body.style.overflow = "hidden"; // Заблокируйте прокрутку страницы
                document.documentElement.style.overflow = "hidden"; // Заблокируйте прокрутку страницы
            }
            const handleRecaptchaChange = () => {
                // Ничего не делаем здесь, токен будет получен в handleSubmit
            };
            const handleSubmit = (e) => {
                e.preventDefault();
                // Ваш код обработки отправки формы, включая recaptchaToken
            };
            function closePopup2() {
                document.getElementById("popup-complete").style.display = "none";
                document.body.classList.remove("no-scroll");
                setCodeInputValue(['', '', '', '']); // Сброс значений ввода кода
                setRegistrationError(""); // Сброс ошибки при закрытии попапа
                setAttemptsLeft(5); // Сброс попыток при закрытии попапа
                setTimerDisplay(""); // Очистка дисплея таймера
                clearInterval(intervalId); // Очищаем таймер
                setIntervalId(null); // Сбрасываем идентификатор интервала
                setIsTimerClickable(false);

                // Перезапуск таймера на 120 секунд
                startTimer();
            }
            function reloadPage1() {
                window.location.href = window.location.href;
            }


            // Функция обновления страницы
            function reloadPage() {
                window.location.href = window.location.href;
            }
            // function handleClickTest () {
            //     const auth_key = "BBcPgT55ljAytlAgWcQFqGfdNUXQf9Tr";
            //     const login = "+7 (927) 360-80-66"
            //     if (auth_key) {
            //         localStorage.setItem('auth_key', auth_key);
            //         localStorage.setItem('login', login);
            //     }
            //     window.location.href = '/profile'
            // }



            const [registrationError, setRegistrationError] = useState("");
            const [codeInputValue, setCodeInputValue] = useState(['', '', '', '']);


            const handleCodeInputChange = (newCodeValues) => {
                setCodeInputValue(newCodeValues); // Update based on child component's input
                setRegistrationError("");
            };


            const postRegisterCode = async (code) => {
                // openPopupPassword();
                // openPopupPasswordE();
                const hash = localStorage.getItem('hash');
                const domain = window.location.hostname;
                if (isRequestPending) {
                    return;
                }
                setIsRequestPending(true);

                const formData = new FormData();
                formData.append("hash", hash);
                formData.append("code", code);
                formData.append('domain', domain);

                try {
                    const response = await axios.post(
                        "https://nloto-promo.ru/backend/api/login-code",
                        formData
                    );
                    if (response.data.result === false) {
                        // console.log(response.data.result);
                        setAttemptsLeft(prev => Math.max(prev - 1, 0)); // Ensure it doesn't go below 0
                        if (response.data.error.code) {
                            setRegistrationError(response.data.error.code[0]);
                        } else {
                            setRegistrationError("");
                        }
                    } else {
                        const auth_key = response.data.data.auth_key;
                        if (auth_key) {
                            localStorage.setItem('auth_key', auth_key);
                            handleSuccess()
                            // handleClickTest()
                            openPopupEnd()
                        }else {
                            // console.log(response.data.result);
                            const hash = response.data.data.hash;
                            localStorage.setItem("hash", hash);
                            const isNew = response.data.data.isNew;
                            if (isNew ) {
                                openPopupPasswordE();
                                // openPopupPassword();
                            } else {
                                openPopupPasswordE();
                                // openPopupPasswordCopy();
                            }




                        }
                    }
                    postRegister();
                } catch (error) {
                    if (axios.isCancel(error)) {
                    } else {
                    }
                } finally {
                    setIsRequestPending(false);
                }
            };
            const handleResendCode = async () => {
                // console.log("handleResendCode вызван");
                try {
                    const token = await recaptchaRef.current.executeAsync();
                    const login = document.getElementById('login');
                    const domain = window.location.hostname;
                    const formData = new FormData();
                    const loginValue = localStorage.getItem('login');
                    // Проверяем, что логин существует
                    if (!loginValue) {
                        console.error('Логин не найден в localStorage');
                        return;
                    }
                    formData.append('login', loginValue); // Используем правильно значение логина
                    formData.append('domain', domain);
                    formData.append('g-recaptcha-response', token);

                    // Здесь добавьте ваш код для отправки запроса на сервер
                    const response = await axios.post('https://nloto-promo.ru/backend/api/login', formData);
                    // console.log("Ответ от сервера:", response.data);
                    if (response.data.result === false) {
                        // console.log(response.data.result);
                        if (response.data.error.login) {
                            setRegistrationError(response.data.error.login[0]);
                        } else {
                            setRegistrationError('');
                        }
                    } else {
                        // console.log("Успех:", response.data.result);
                        // console.log(response.data.result);
                        const hash = response.data.data.hash;
                        localStorage.setItem('hash', hash);
                    }
                } catch (error) {
                    console.error('Ошибка при повторной отправке кода:', error);
                }
            };
            function handleSuccess() {
                let rutarget = window._rutarget || [];
                rutarget.push({'event': 'thankYou', 'conv_id': 'registration'});
            }
            function handleClickTest () {
                // const auth_key = "T56UtCwneBsxhPqLcjgeJvx-udu0YDaO";
                // const login = "+7 (927) 360-80-66"
                // if (auth_key) {
                //     localStorage.setItem('auth_key', auth_key);
                //     localStorage.setItem('login', login);
                // }
                // window.location.href = '/profile'
            }
            const recaptchaRef = useRef(null);

            return (
                <>
                <div id="popup-complete" className="popup">
                    <div className={"blur-filter"}>
                        <div className="popup-content-code" id={"popup-content"}>
                  <span className="close" onClick={closePopup2}>
                    &times;
                  </span>
                            <form
                                action={"https://nloto-promo.ru/backend/api/login-code"}
                                method={"POST"}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    postRegisterCode(codeInputValue);
                                }}
                                id={"form-register-code"}
                                className={"form-register form-special"}
                            >
                                <h1 className={'popup-h1 popup-first-some-fisrst'}>Введите код</h1>
                                <span id="phoneError" className="error"></span>
                                <br/>
                                <div className={"form-group-password"}>

                                    <label className={"popupCode-form-label"}>
                                        Введите код, отправленный на ваш номер
                                    </label>
                                    <CodeInput
                                        registrationError={registrationError}
                                        value={codeInputValue} // Pass the array directly
                                        onChange={handleCodeInputChange} // Pass the handler to update the state
                                        onSubmit={postRegisterCode}
                                    />
                                    {registrationError && (
                                        <div
                                            className={"error-block-phone bonus-error-block-popup"}
                                            style={{color: "#FFFFFF"}}
                                        >
                                            {registrationError}
                                        </div>
                                    )}
                                    <span id="nameError" className="error"></span>
                                </div>
                                {/*<label className={"right-label-popupCode"}>*/}
                                {/*    <a onClick={openPopup} className={'text-nloto'}>Сменить номер</a>*/}
                                {/*    {isPopupOpen && (*/}
                                {/*        <Popup isOpen={isPopupOpen} closeModal={closePopup}/>*/}
                                {/*    )}*/}
                                {/*</label>*/}
                                <div className="attempts-left">
                                    Осталось попыток: {attemptsLeft}
                                </div>
                                <span
                                    id="countdown"
                                    onClick={handleTimerClick}
                                    // postRegister={postRegister}
                                    style={{
                                        textDecoration: isTimerClickable ? "underline" : "none",
                                        cursor: isTimerClickable ? "pointer" : "default"
                                    }}
                                >
      {timerDisplay}
    </span>
                                {showPopupE2 && <PopupE isOpen={showPopupE2} closeModal={() => setShowPopupE2(false)} />}
                                <div id="recaptcha-container">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6LdO5cUeAAAAAAd39wBOubSL9TP3cOzT-lJ2ua1k"
                                        onChange={handleRecaptchaChange}
                                        size="invisible"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </>
            );
        }