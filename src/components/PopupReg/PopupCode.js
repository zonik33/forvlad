        import CodeInput from "../CodeInput";
        import axios from "axios";
        import React, { useEffect, useState } from "react";
        import Popup from "./Popup";

        export default function PopupCode(props) {
            const { postRegister } = props;
            const [isPopupOpen, setIsPopupOpen] = useState(false);
            const [timerDisplay, setTimerDisplay] = useState("");
            const [isTimerClickable, setIsTimerClickable] = useState(true);
            let [intervalId, setIntervalId] = useState(null);
            const [isRequestPending, setIsRequestPending] = useState(false); // New state

            const timerDuration = 90;
            let timer = timerDuration;

            const startTimer = () => {
                if (intervalId) {
                    clearInterval(intervalId);
                }
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

            const handleTimerClick = () => {
                if (isTimerClickable) {
                    startTimer();
                    setIsTimerClickable(false);
                    postRegisterCode(codeInputValue); // Вызываем функцию только при клике на таймер
                }
            };

            const openPopup = () => {
                closePopup2();
                setIsPopupOpen(true);
            };

            const closePopup = () => {
                setIsPopupOpen(false);

            };

            function openPopupPassword() {
                closePopup2();
                document.getElementById("popup-password").style.display = "block";
            }
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

            function closePopup2() {
                document.getElementById("popup-complete").style.display = "none";
                document.body.classList.remove("no-scroll");
            }
            function reloadPage1() {
                window.location.href = window.location.href;
            }

            React.useEffect(() => {
                function handleOutsideClick(event) {
                    const popupContent = document.getElementById("popup-content");
                    if (event.target !== popupContent && !popupContent.contains(event.target)) {
                        closePopup2();
                    }
                }

                document.addEventListener("click", handleOutsideClick);

                return () => {
                    document.removeEventListener("click", handleOutsideClick);
                };
            }, []);

            // Функция обновления страницы
            function reloadPage() {
                window.location.href = window.location.href;
            }


            const [registrationError, setRegistrationError] = useState("");
            const [codeInputValue, setCodeInputValue] = useState("");


            const handleCodeInputChange = (event) => {
                setCodeInputValue(event.target.value);
                setRegistrationError("");
            };


            const postRegisterCode = async (code) => {
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
                        console.log(response.data.result);
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
                            openPopupEnd()
                        }else {
                            console.log(response.data.result);
                            const hash = response.data.data.hash;
                            localStorage.setItem("hash", hash);
                            const isNew = response.data.data.isNew;
                            if (isNew ) {
                                openPopupPassword();
                            } else {
                                openPopupPasswordCopy();
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
            function handleSuccess() {
                let rutarget = window._rutarget || [];
                rutarget.push({'event': 'thankYou', 'conv_id': 'registration'});
            }

            return (
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
                                {/*<h1 className={"popup-h1"}>Регистрация</h1>*/}
                                <span id="phoneError" className="error"></span>
                                <br />
                                <div className={"form-group-password"}>
                                    <label className={"popupCode-form-label"}>
                                        Введите код, отправленный на ваш номер
                                    </label>
                                    <CodeInput
                                        id="code"
                                        registrationError={registrationError}
                                        value={codeInputValue}
                                        onChange={handleCodeInputChange}
                                        onSubmit={postRegisterCode} // change handleCodeInputSubmit to postRegisterCode
                                    />
                                    {registrationError && (
                                        <div
                                            className={"error-block-phone bonus-error-block-popup"}
                                            style={{ color: "#FFFFFF" }}
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
                                <span
                                    id="countdown"
                                    onClick={handleTimerClick}
                                    postRegister={postRegister}
                                    style={{
                                        textDecoration: isTimerClickable ? "underline" : "none",
                                        cursor: isTimerClickable ? "pointer" : "default"
                                    }}
                                >
      {timerDisplay}
    </span>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }