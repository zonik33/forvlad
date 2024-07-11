import tickettext from "../../image/tickettext.png";
import ticketText from "../../image/tickettext.png";
import users from "../../image/users-logo.png";
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
    return (
        <header className={'header-error'}>
            <div className={'container'}>
                <div className={'content'}>
                    <div className={'logo-content'}>
                        <Link to="">
                            <img className={'logo'} src={ticket}
                                 alt="Logo"
                                 onMouseOver={() => { /* Обработчик наведения на картинку */
                                 }}
                                 onClick={handleImageClick}/>
                        </Link>
                        <Link to="">
                            <img className={'logo-text'} src={tickettext}
                                 alt="Logo"
                                 onMouseOver={() => { /* Обработчик наведения на картинку */
                                 }}
                                 onClick={handleImageClick}/>
                        </Link>
                        <div className={'header-burger'} onClick={toggleMenu}>
                            <span className={'span-burger'}></span>
                        </div>
                    </div>
                    <div className={'menu'}>
                        <div className={'menu-content-profile error-menu-profile'}>
                            <a href={`${currentDomain}/rules.pdf`} target="_blank"> Правила </a>
                            <a className="smooth" href={'#'} onClick={(event) => {
                                closeMenu();
                                handleGoToPrizes(event)
                            }}> Призы </a>
                            {/*<a className="smooth" href={'#'} onClick={(event) => {*/}
                            {/*    closeMenu();*/}
                            {/*    handleGoToWinners(event)*/}
                            {/*}}>Победители</a>*/}
                            <a className="smooth" href={'#'} onClick={(event) => {
                                closeMenu();
                                handleGoToFaq(event)
                            }}> Вопрос-ответ </a>
                            <a className="smooth backFaq" href={'#'} onClick={(event) => {
                                closeMenu();
                                handleGoToSupport(event)
                            }}> Обратная связь </a>
                            <div className={'random-block for-error-random-block'}>
                                {isAuthenticated ? (
                                    <div className={'left-some'}>
                                        <SelectProfile/>
                                    </div>
                                ) : (
                                    <div className={'right-block-margin'}>
                                        <button id="login-button" onClick={openPopup} className="button-animation">
                                            Вход
                                        </button>
                                        <b className={'random-b'}>/</b>
                                        <button id="registration-button" onClick={openPopup1}
                                                className="button-animation">
                                            Регистрация
                                        </button>
                                        {isPopupOpen && (
                                            <Popup isOpen={isPopupOpen} closeModal={closePopup}/>
                                        )}
                                    </div>
                                )}
                            </div>

                            <img className={'users-logo user-logo-for-error'} src={users}/>
                            <a onClick={handleOnClick} className={'shadow-button-animation-text haha-nfp'}> <b>Принять
                                участие в акции</b> </a>
                        </div>
                        <div className={'back-ground-with-img'}>
                            {/*<img className={'profile-snake-left NFP-snake-left'} src={snake}/>*/}
                            {/*<img className={'profile-rings NFP-rings'} src={rings}/>*/}
                            {/*<img className={'profile-full-hearth NFP-full-hearth'} src={fullhearth}/>*/}
                            {/*<img className={'profile-pluse1 NFP-pluse1'} src={pluse1}/>*/}
                            {/*<img className={'profile-left-half-ring NFP-left-half-ring'} src={leftring}/>*/}
                            {/*<img className={'profile-center-hearth NFP-center-hearth'} src={centerhearth}/>*/}
                            {/*<img className={'profile-right-ring NFP-right-ring'} src={rightRing}/>*/}
                            {/*<img className={'full-snake NFP-full-snake'} src={snakefulls}/>*/}

                        </div>
                    </div>
                </div>
            </div>
            <main>
                <div className={'main-error'} id={'main-error'}>
                    <div className={'main-items main-items-profile'}>
                        <div className={'items-block-how-error'}></div>
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
                <div className="myElementFooter">
                </div>
                <div className="footer-left">

                    <div className={'footer-row'}>
                        <div className={'footer-colm'}>
                            <img className={'footer-logo'} src={ticketText}/>
                        </div>
                    </div>
                    <div className={'footer-medium'}>
                        <div className={'footer-row-left'}>
                            {/*<a href={`${currentDomain}/rules.pdf`} target="_blank">Полные правила</a>*/}
                        </div>
                        <div className={'footer-row-left'}>
                            <a href={`${currentDomain}/1_1_Политика_в_отношении_обработки_ПДн_1.pdf`}
                               target="_blank">Конфиденциальность</a>
                        </div>
                        <div className={'footer-row-left'}>
                            <a href={`${currentDomain}/Обработка_персональных_данных_третьими_лицами_3.pdf`}
                               target="_blank">Пользовательское соглашение</a>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className={'footer-row1'}>
                        <a>Лотерея «Мечталлион», ВГЛ-2Т Спорт Союз, алгоритм определения выигрышей № 4 («Мечталлион»),
                            срок проведения лотереи – до 29.08.2034 г. Подробности на сайте www.nloto.ru и по
                            телефону 8 800 333-7-333.
                        </a>
                    </div>
                    <div className={'footer-row2'}>
                        <a>Специальные призы от Redmond разыгрываются только среди билетов, купленных в «Почте
                            России». </a>

                    </div>
                    <div className={'footer-row3'}>
                        <a>Рекламная акция «Мечталлион. С нами миллионы!», срок проведения с 03.10.2022 по 30.11.2022
                            г.,
                            включая период вручения призов. Подробности на сайте www.promo-mechtalion.ru.</a>
                    </div>
                    <div className={'footer-row4'}>
                        <a>Реклама. Рекламодатель ООО «Спортивные Лотереи» (ОГРН: 1195027010386, ИНН: 5003133760).</a>
                    </div>
                </div>
                <PopupTicket1/>
                <PopupTicket2/>
                <PopupTicket3/>
                <PopupTicket4/>
                <PopupTicket5/>
                <PopupVideos/>
            </footer>
        </header>


    );
}
