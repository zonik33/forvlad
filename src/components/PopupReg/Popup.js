import React, {useEffect, useRef, useState} from 'react';
import Modal from 'react-modal';
import PhoneInput from "../PhoneInput";
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';
import PopupCode from "./PopupCode";


function Popup(props) {
    const { isOpen, closeModal } = props;
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const popupRef = useRef(null);
    const [isPopupCodeOpen, setIsPopupCodeOpen] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState('');



    const handleRecaptchaChange = () => {
        // Ничего не делаем здесь, токен будет получен в handleSubmit
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ваш код обработки отправки формы, включая recaptchaToken
    };

    const handleMouseDown = (e) => {
        if (e.target !== popupRef.current) {
            return;
        }

        const initialX = e.clientX;
        const initialY = e.clientY;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - initialX;
            const deltaY = e.clientY - initialY;

            setPosition((prevPosition) => ({
                x: prevPosition.x + deltaX,
                y: prevPosition.y + deltaY,
            }));
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };


    function openPopup2() {
        closeModal();
        document.getElementById("popup-complete").style.display = "block";
        const hash = localStorage.getItem('hash');
        const referralCode = localStorage.getItem('referralCode');
        document.body.classList.add("no-scroll");
    }
    function openPopup3() {
        closeModal()
        document.getElementById("popup-auth").style.display = "block";
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        document.body.classList.add("no-scroll");

    }
    const [registrationError, setRegistrationError] = useState('');
    const urlParams = new URLSearchParams(window.location.search);
    const refParam = urlParams.get('ref');
    let promocodeValue = null;

    if (refParam) {
        promocodeValue = refParam;
        localStorage.setItem('promocodeValue', promocodeValue);
    }

    const postRegister = async (event) => {
        const form = document.getElementById('form-register');
        event.preventDefault();
        const token = await recaptchaRef.current.executeAsync();
        // Отправка формы на сервер с токеном reCAPTCHA

        const login = document.getElementById('login');
        const domain = window.location.hostname;
        if (isRequestPending) {
            return;
        }
        isRequestPending = true;

        const formData = new FormData(form);
        if (promocodeValue) {
            formData.append('promocode', promocodeValue);
        }
        formData.append('login', login.value);
        formData.append('domain', domain);
        formData.append('g-recaptcha-response', token);


        try {
            const response = await axios.post('https://nloto-promo.ru/backend/api/login', formData);
            if (response.data.result === false) {
                // console.log(response.data.result);
                if (response.data.error.login) {
                    setRegistrationError(response.data.error.login[0]);
                } else {
                    setRegistrationError('');
                }
            } else {
                handleSuccess()
                // console.log(response.data.result);
                const hash = response.data.data.hash;

                const loginValue = login.value; // Сохраняем значение логина
                localStorage.setItem('login', loginValue); // Сохраняем логин в localStorage
                localStorage.setItem('hash', hash);
                openPopup2();
            }
        } catch (error) {

            if (axios.isCancel(error)) {
            } else {

            }
        } finally {
            isRequestPending = false;
        }
    }
    function handleSuccess() {
        let rutarget = window._rutarget || [];
        rutarget.push({'event': 'thankYou', 'conv_id': 'registration'});
    }

    const modalRef = useRef();
    let isRequestPending = false;
    const [modalIsOpen, setModalPosition] = useState('center');
    useEffect(() => {
        const handleResize = () => {
            if (modalIsOpen && modalRef.current) {
                const windowHeight = window.innerHeight;
                const modalHeight = modalRef.current.scrollHeight;
                const isModalOverflowing = modalHeight > windowHeight;

                if (isModalOverflowing) {
                    setModalPosition('top');
                } else {
                    setModalPosition('center');
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [modalIsOpen]);
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const referralCode = urlParams.get('ref');
        if (referralCode) {
            localStorage.setItem('referralCode', referralCode);
        }
    }, []);
    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#registration') {
                // console.log('123') // Здесь вызывайте функцию, которая открывает всплывающее окно
            }
        };

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);
    const recaptchaRef = useRef(null);


    return (
        <div id="popup" className='popup'>
            <div className={'blur-filter'}>
                <Modal
                    className={`Modal`}
                    contentLabel="Модальное окно"
                    overlayClassName="Overlay"
                    isOpen={isOpen}
                    appElement={document.getElementById('root')}
                    onRequestClose={closeModal}
                    ref={popupRef}
                    onMouseDown={handleMouseDown}

                    styles={{
                        top: position.y,
                        left: position.x,

                    }}
                >
                    <form
                        onSubmit={postRegister}
                        ref={popupRef}
                        onMouseDown={handleMouseDown}
                        action={''}
                        method={'POST'}
                        id={'form-register'}
                        className={'form-register'}
                    >

                        <div className="content-container-modal">
                            <span className="close close-for-popup-first" onClick={closeModal}>&times;</span>
                            <h1 className={'popup-h1 popup-first-some'}>Вход / Регистрация</h1>
                            <p className={'popup-p-next'}>На ваш номер будет отправлен СМС-код</p>
                            <p className={'popup-p'}>Телефон</p>
                            <PhoneInput id='login' name='login' className={'main-input'} registrationError={registrationError}  />
                            {registrationError &&  <div className={'error-block-phone only-for-phone'} style={{color: '#FFFFFF'}}>{registrationError}</div>}
                            <span id="phoneError" className="error"></span>
                            <br/>

                            <button type={'submit'} id={'submit'}
                                    className={'button-animation  sumbit-button-submit'}>Получить код</button>
                            <div id="recaptcha-container">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6LdO5cUeAAAAAAd39wBOubSL9TP3cOzT-lJ2ua1k"
                                    onChange={handleRecaptchaChange}
                                    size="invisible"
                                />
                            </div>

                        </div>
                    </form>
                </Modal>

            </div>
        </div>
    );
};

export default Popup;