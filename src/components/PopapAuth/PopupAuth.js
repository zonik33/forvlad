
import axios from "axios";
import PhoneInputForAuth from "./PhoneInputForAuth";
import React, {useState} from "react";
import Popup from "../PopupReg/Popup";


export default function PopupAuth (props) {

    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    function openPopupPassRecovery() {
        closePopup2();
        document.getElementById("popup-recovery").style.display = "block";
        document.body.classList.add("no-scroll");

    }

    function openPopupAuth() {
        setIsPopupOpen(true);
    }

    function openPopupAuth() {
        closePopup2();
        document.getElementById("popup-auth").style.display = "block";
        document.body.style.overflow = "hidden"; // Заблокируйте прокрутку страницы
        document.documentElement.style.overflow = "hidden"; // Заблокируйте прокрутку страницы
    }
    function openPopup2() {
        document.getElementById("popup-auth").style.display = "block";
        document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
        document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
    }

    function closePopup2() {
        setIsPopupOpen(false);
        document.getElementById("popup-auth").style.display = "none";
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        document.body.style.position = "static";
        document.documentElement.style.position = "static";
        document.body.classList.remove("no-scroll"); // Добавить класс "no-scroll" к <body>
    }

    React.useEffect(() => {
        function handleOutsideClick(event) {
            const popupContent = document.getElementById("popup-content");

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
    function openPopupEnd() {
        closePopup2()
        document.getElementById("popup-end").style.display = "block";
        document.body.classList.add("no-scroll");
        document.body.style.overflow = "hidden"; // Заблокируйте прокрутку страницы
        document.documentElement.style.overflow = "hidden"; // Заблокируйте прокрутку страницы
    }


    const [authError, setAuthError] = useState('');
    const [authLoginError, setAuthLoginError] = useState('');


    async function postLoginAuth(event) {
        const form = document.getElementById('form-auth');
        event.preventDefault();

        const login = document.getElementById('loginAuth');
        const password = document.getElementById('passwordAuth');

        if (isRequestPending) {
            return;
        }
        isRequestPending = true;

        const formData = new FormData(form);

        formData.append('login', login.value);
        formData.append('password', password.value);

        try {
            const response = await axios.post('', formData);
            if (response.data.result === false) {
                const error = response.data.error;
                if (error && error.password) {
                    setAuthError(error.password[0]);
                } else {
                    setAuthError('');
                }
                if (error && error.login) {
                    setAuthLoginError(error.login[0]);
                }else {
                    setAuthLoginError('');
                }
            } else {

                console.log (response.data.result)
                const login = response.data.data.login;
                localStorage.setItem('login', login);
                const auth_key = response.data.data.auth_key;
                if (auth_key) {
                    localStorage.setItem('auth_key', auth_key);
                    openPopupEnd()
                    // window.location.href = '/profile';
                } else {
                }

            }


        } catch (error) {

            if (axios.isCancel(error)) {
            } else {

            }
        } finally {
            isRequestPending = false;
        }

    }

    let isRequestPending = false;

    const [isPopupOpened, setIsPopupOpened] = useState(false);

    const openPopup22 = () => {
        closePopup2()
        setIsPopupOpened(true);
    };

    const closePopup = () => {
        setIsPopupOpened(false);
    };
    return (
        <div id="popup-auth" className="popup popup-animation">
            <div className={'blur-filter'}>
            <div className="popup-content-auth" id={'popup-content'}>
                <span className="close" onClick={closePopup2}>&times;</span>
                <form action={'https://nloto-promo.ru/backend/api/login'} method={'POST'}
                      onSubmit={postLoginAuth} id={'form-auth'}
                      className={'form-register form-auth'} >
                    <h1 className={'popup-h1'}>Авторизация</h1>
                    <p className={'popup-p'}>Телефон</p>
                    <div className={'form-group-password'}>
                    <PhoneInputForAuth id='loginAuth' name='login' className={'popupAuth-input'} registrationError={authLoginError}  />
                        {authLoginError && <div className={'error-block-phone'} style={{color: '#FFFFFF'}}>{authLoginError}</div>}
                        <span id="phoneError" className="error"></span>
                    <br/>
                    </div>
                    <div className={'form-group-password'}>
                        <div>
                            <label className={'left-label'}>Пароль</label>
                            <span id="phoneError" className="error"></span>
                            <label className={'right-label'}><a onClick={openPopupPassRecovery} href={'#'}> Забыли пароль?</a></label>
                        </div>
                        <input className={`popupAuth-input ${authError ? 'error' : ''}`} type={"password"} name={"password"} id={"passwordAuth"}
                               placeholder={'Введите ваш пароль'}/>
                        {authError && <div className={'error-block-phone'} style={{color: '#FFFFFF'}}>{authError}</div>}
                        <div className={'error-block'} style={{color: 'red'}}></div>


                    </div>
                    <button type={'submit'} id={'submit-auth'}
                            className={'button-animation-code'}>Войти</button>
                    <div className={'form-under-button-auth'}>
                        <p className={'popup-p-under'}>Если у вас уже есть логин и пароль <a href={'https://nloto.ru/'} className={'text-nloto'}>Nloto.ru</a>,
                            вы можете использовать их на этом сайте</p>
                        <p className={'popup-p-under-acrom14'}>
                            Нет личного кабинета? <a href={'#'} onClick={openPopup22} id={'authorizationButton'}> Регистрация</a></p>
                        {isPopupOpened && (
                            <Popup isOpen={isPopupOpened} closeModal={closePopup} />
                        )}
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}