import users from '../image/users-logo.png'
import ticket from '../image/ticket.png'
import tickettext from '../image/tickettext.png'
import ScrollPrizes from "./Scroll/ScrollPrizes";
import ScrollWinners from "./Scroll/ScrollWinners";
import ScrollFaq from "./Scroll/ScrollFaq";
import Popup from "./PopupReg/Popup";
import PopupCode from "./PopupReg/PopupCode";
import PopupPassword from "./PopupReg/PopupPassword";
import PopupAuth from "./PopapAuth/PopupAuth";
import PopupPassRecovery from "./PopapAuth/PopupPassRecovery";
import {Link} from "react-router-dom";
import Main from "./Main";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import PopupRegisterCopy from "./PopupReg/PopupRegisterCopy";
import PopupEnd from "./PopupTicket/PopupEnd";
import PopupPasswordCopy from "./PopupReg/PopupPasswordCopy";
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Скроллим вверх
        document.querySelector("header .logo").classList.remove("transparent");
        document.querySelector("header .logo").classList.add("visible");
    } else {
        // Скроллим вниз
        document.querySelector("header .logo").classList.remove("visible");
        document.querySelector("header .logo").classList.add("transparent");
    }

    prevScrollPos = currentScrollPos;
}
export default function Header (props){

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    function openPopup2() {
        document.getElementById("popup-ticket1").style.display = "block";
        document.getElementById("popup-ticket1").classList.add("popup-animation");
        document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
        document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
    }
    function openPopup3() {
        document.getElementById("popup-ticket1").style.display = "block";
        document.getElementById("popup-ticket1").classList.add("popup-animation");
        document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
        document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
    }


    function toggleMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.toggle('active');
        const navList = document.querySelector('header .menu');
        navList.classList.toggle('show');
        document.documentElement.classList.toggle('menu-open');
        document.body.classList.toggle('menu-open');
    }
    function closeMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.remove('active');
        const navList = document.querySelector('header .menu');
        navList.classList.remove('show');
        document.documentElement.classList.remove('menu-open'); // Удаление класса 'menu-open' у элемента <html>
        document.body.classList.remove('menu-open');
    }
    const currentDomain = window.location.origin;
    const handleOnClick = () => {
        if (isAuthenticated) {
            openPopup2(); // Открываем попап для зарегистрированного пользователя
        } else {
            openPopup();
        }
    };

    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    const redirectToProfile = () => {
        window.location.href = '/profile';
    };


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isGuest, setIsGuest] = useState(true);

    function checkGuestStatus() {
        const currentUrl = window.location.hash;
        const isRegistrationLink = currentUrl === '#registration';

        if (isAuthenticated) {
            // Пользователь зарегистрирован, перенаправляем в личный кабинет
            window.location.assign('/profile');
        } else if (isRegistrationLink) {
            // Гость и переход по ссылке регистрации, открываем popup регистрации
            openPopup();
        }
    }
    useEffect(() => {
        const currentUrl = window.location.href;
        const isRegistrationLink = currentUrl.includes("#registration");

        if (isRegistrationLink) {
            checkGuestStatus();
        }
    }, []);
    return(

        <header className={'header'}>
            <div className={'container'}>
                <div className={'content'}>
                    <div className={'logo-content'}>
                        <img className={'logo'} src={ticket}/>
                        <img className={'logo-text'} src={tickettext}/>
                        <div className={'header-burger'} onClick={toggleMenu}>
                            <span className={'span-burger'}></span>
                        </div>
                    </div>
                    <div className={'menu'}>
                        <div className={'menu-content'}>
                            <a href={`${currentDomain}/rules.pdf`} target="_blank"> Правила </a>
                            <a className="smooth" href={'#prizes'} onClick={(event) => {closeMenu(); ScrollPrizes(event); }}>Призы</a>
                            {/*<a className="smooth" href={'#winners'} onClick={(event) => {closeMenu(); ScrollWinners(event); }}> Победители </a>*/}
                            <a className="smooth" href={'#faq'} onClick={(event) => {closeMenu(); ScrollFaq(event); }}> Вопрос-ответ </a>
                            <a className="smooth backFaq" href={'#faq'} onClick={ScrollFaq}> Обратная связь </a>
                            <div className={'random-block'}>
                                {isAuthenticated ? (
                                    <button id="profile-button"  onClick={redirectToProfile} className="button-animation">
                                        Личный кабинет
                                    </button>
                                ) : (
                                    <div className={'random-block-2'}>
                                        <button id="registration-button" onClick={openPopup} className="button-animation">
                                            Вход / Регистрация
                                        </button>
                                        {isPopupOpen && (
                                            <Popup isOpen={isPopupOpen} closeModal={closePopup} />
                                        )}
                                    </div>
                                )}
                            </div>
                            <img className={'users-logo top-side'} src={users}/>
                            <a onClick={handleOnClick} className={'shadow-button-animation-text'}> <b>Принять участие в акции</b> </a>

                        </div>
                    </div>
                </div>

            </div>
            <Popup/>
            <PopupCode/>
            <PopupPassword/>
            <PopupPasswordCopy/>
            <PopupAuth/>
            <PopupPassRecovery/>
            <PopupEnd/>
        </header>


    )
}