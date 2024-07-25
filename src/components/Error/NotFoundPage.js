import tickettext from "../../image/tickettext.png";
import ticketText from "../../image/img_99.png";
import users from "../../image/img_98.png";
import {Link, useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import snake from "../../image/snake.png";
import rings from "../../image/ring.png";
import fullhearth from "../../image/full-hearth.png";
import pluse1 from "../../image/pluse1.png";
import leftring from "../../image/half-ring.png";
import centerhearth from "../../image/center-hearth.png";
import rightRing from "../../image/right-ring.png";
import SelectProfile from "../lk-profile/SelectProfile";
import snakefulls from "../../image/full-snake.png";
import Popup from "../PopupReg/Popup";
import PopupAuth from "../PopapAuth/PopupAuth";
import PopupCode from "../PopupReg/PopupCode";
import PopupPassword from "../PopupReg/PopupPassword";
import PopupPassRecovery from "../PopapAuth/PopupPassRecovery";
import PopupEnd from "../PopupTicket/PopupEnd";
import PopupTicket1 from "../PopupTicket/PopupTicket1";
import PopupTicket2 from "../PopupTicket/PopupTicket2";
import PopupTicket3 from "../PopupTicket/PopupTicket3";
import PopupTicket4 from "../PopupTicket/PopupTicket4";
import PopupTicket5 from "../PopupTicket/PopupTicket5";
import PopupVideos from "../Winners-videos/PopupVideos";
import ticket from "../../image/ticket.png";
import ticketTextRight from "../../image/img_100.png";
import tickets from "../../image/img_107.png";
import tickettextblue from "../../image/img_99.png";
import ScrollPrizes from "../Scroll/ScrollPrizes";
import ScrollFaq from "../Scroll/ScrollFaq";
import ScrollSupport from "../Scroll/ScrollSupport";
import PopupPasswordCopy from "../PopupReg/PopupPasswordCopy";

export default function NotFoundPage(props){
    const currentDomain = window.location.origin;
    const openPopup = () => {
        setIsPopupOpen(true);
    };


    function toggleMenu() {
        const navLists = document.querySelector('.header-error .header-burger');
        navLists.classList.toggle('active');
        const navList = document.querySelector('.header-error .menu');
        navList.classList.toggle('show');
    }
    const handleImageClick = () => {
        window.location.href = '/'
    };
    function openPopup2() {
        document.getElementById("popup-ticket1").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    const handleOnClick = () => {
        if (isAuthenticated) {
            openPopup2(); // Открываем попап для зарегистрированного пользователя
            document.body.classList.add("no-scroll");
        } else {
            openPopup();

        }
    };

    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup1 = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    const redirectToProfile = () => {
        window.location.href = '/profile';
    };
    function closeMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.remove('active');
        const navList = document.querySelector('header .menu');
        navList.classList.remove('show');
        document.documentElement.classList.remove('menu-open'); // Удаление класса 'menu-open' у элемента <html>
        document.body.classList.remove('menu-open');
    }
    const navigate = useNavigate();

    const handleGoToPrizes = (event) => {
        event.preventDefault();
        navigate("/?section=prizes"); // Передаем параметр "section" в URL
    };

    const handleGoToWinners = (event) => {
        event.preventDefault();
        navigate("/?section=winners"); // Передаем параметр "section" в URL
    };
    const handleGoToFaq = (event) => {
        event.preventDefault();
        navigate("/?section=faq"); // Передаем параметр "section" в URL
    };
    const handleGoToSupport = (event) => {
        event.preventDefault();
        navigate("/?section=support"); // Передаем параметр "section" в URL
    };
    const [activeSection, setActiveSection] = useState(null);
    const prizesRef = useRef(null);
    const winnersRef = useRef(null);
    const faqRef = useRef(null);
    const supportRef = useRef(null);

    useEffect(() => {
        if (activeSection === 'prizes' && prizesRef.current) {
            setTimeout(() => {
                prizesRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        } else if (activeSection === 'winners' && winnersRef.current) {
            setTimeout(() => {
                winnersRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        } else if (activeSection === 'faq' && faqRef.current) {
            setTimeout(() => {
                faqRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        } else if (activeSection === 'support' && supportRef.current) {
            setTimeout(() => {
                supportRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        }
    }, [activeSection]);
    const [isBlockVisible, setBlockVisibility] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.pageYOffset;

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const scrollingDown = prevScrollPos < currentScrollPos;

            setBlockVisibility(!scrollingDown);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <header className={'header'}>
                <div className={'container'}>
                    <div className={'content'}>
                        <div className={'logo-content'}>
                            <Link to="">
                                <img className={'logo'} src={ticket} alt="Logo" onClick={handleImageClick}/>
                            </Link>
                            <Link to="">
                                <img className={'logo-text'} src={tickettext} alt="Logo" onClick={handleImageClick}/>
                            </Link>
                            <Link to="">
                                <img className={'logo-text-mobile'} src={tickettextblue} alt="Logo"
                                     onClick={handleImageClick}/>
                            </Link>
                        </div>
                        <div className={'menu'}>
                            <div className={'menu-content'}>
                                <div className={`secret-block ${isBlockVisible ? '' : 'hidden'}`}>
                                    <a href={`${currentDomain}/rules.pdf`} target="_blank"> Правила </a>
                                    <a className="smooth" href={'#'} onClick={(event) => {
                                        handleGoToPrizes(event)
                                    }}> Призы </a>
                                    {/*<a className="smooth" href={'#'} onClick={(event) => {*/}
                                    {/*    closeMenu();*/}
                                    {/*    handleGoToWinners(event)*/}
                                    {/*}}>Победители</a>*/}
                                    <a className="smooth" href={'#'} onClick={(event) => {
                                        handleGoToFaq(event)
                                    }}> Вопрос-ответ </a>
                                    <a className="smooth" href={'#'} onClick={(event) => {
                                        handleGoToSupport(event)
                                    }}> Обратная связь </a>
                                </div>
                                <div className={'random-block'}>
                                    {isAuthenticated ? (
                                        <button id="profile-button" onClick={redirectToProfile}
                                                className="button-animation">
                                            Личный кабинет
                                        </button>
                                    ) : (
                                        <div className={'random-block-2'}>
                                            <button id="registration-button" onClick={openPopup}
                                                    className="button-animation">
                                                Вход / Регистрация
                                            </button>
                                            {isPopupOpen && <Popup isOpen={isPopupOpen} closeModal={closePopup}/>}
                                        </div>
                                    )}
                                </div>
                                <img className={'users-logo top-side'} src={users}/>
                                {/*<a onClick={handleOnClick} className={'shadow-button-animation-text'}> <b>Принять участие в*/}
                                {/*    акции</b> </a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className={'main-error'}>
                <div className={'main-error'} id={'main-error'}>
                    <div className={'main-items main-items-profile'}>
                        <img className={'tsxt error'} src={tickets}/>
                        {/*<div className={'items-block-how-error'}></div>*/}
                        <div className={'global-name-name'}>
                            <p className={'global-name-biggest'}>
                                404</p>
                            <p className={'global-name-halfest'}>
                                Страница не найдена</p>
                            <p className={'global-name-lowest'}>
                                Проверьте корректность адреса страницы. Если он верный, ошибка повторяется, обратитесь
                                в поддержку <a className={'text-nloto'}>support@nloto.ru</a></p>

                        </div>

                    </div>
                </div>

            </main>
            <footer className={'footer'}>
                <div className="footer-left">

                    <div className={'footer-row'}>
                        <div className={'footer-colm'}>
                            <img className={'footer-logo'} src={ticketText}/>
                            <img className={'footer-logo right'} src={ticketTextRight}/>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className={'footer-row1'}>
                        <a className={'footer-color-size'}>Лотерея «Мечталлион», ВГЛ-2Т Спорт Союз, алгоритм определения
                            выигрышей № 4 («Мечталлион»),
                            срок проведения лотереи – до 29.08.2034 г. Подробности на сайте www.nloto.ru и по
                            телефону 8 800 333-7-333.
                        </a>
                    </div>
                    <div className={'footer-row2'}>
                        <a className={'footer-color-size'}>Специальные призы от Redmond разыгрываются только среди
                            билетов, купленных в «Почте России». </a>

                    </div>
                    <div className={'footer-row3'}>
                        <a className={'footer-color-size'}>Рекламная акция «Мечталлион. С нами миллионы!», срок
                            проведения с 03.10.2022 по 30.11.2022 г.,
                            включая период вручения призов. Подробности на сайте www.promo-mechtalion.ru.</a>
                    </div>
                    <div className={'footer-row4'}>
                        <a className={'footer-color-size'}>Реклама. Рекламодатель ООО «Спортивные Лотереи» (ОГРН:
                            1195027010386, ИНН: 5003133760).</a>
                    </div>
                    <div className={'footer-row-left'}>
                        {/*<a href={`${currentDomain}/rules.pdf`} target="_blank">Полные правила</a>*/}
                    </div>
                    <div className="container-footer-bottom">
                        <div className={'footer-row-left'}>
                            <a href={`${currentDomain}/Обработка_персональных_данных_третьими_лицами_3.pdf`}
                               target="_blank" className={'footer-color-size left'}>Пользовательское соглашение</a>
                        </div>
                        <div className={'footer-row-left'}>
                            <a href={`${currentDomain}/1_1_Политика_в_отношении_обработки_ПДн_1.pdf`}
                               target="_blank" className={'footer-color-size left margin-left'}>Конфиденциальность</a>
                    </div>

                </div>
            </div>
            <PopupTicket1/>
            <PopupTicket2/>
            <PopupTicket3/>
            <PopupTicket4/>
            <PopupTicket5/>
            <PopupVideos/>
        </footer>
        </>

    );
}
