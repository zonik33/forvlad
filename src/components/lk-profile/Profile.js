import ticketText from "../../image/img_99.png";
import tickettext from "../../image/tickettext.png";
import users from "../../image/img_98.png";
import snake from "../../image/snake.png";
import rings from "../../image/ring.png";
import fullhearth from "../../image/full-hearth.png";
import pluse1 from "../../image/pluse1.png";
import leftring from "../../image/half-ring.png";
import centerhearth from "../../image/center-hearth.png";
import rightRing from "../../image/right-ring.png";
import bonus from "../../image/img_13.png"
import {Link, NavLink, useLocation} from "react-router-dom";
import SelectProfile from "./SelectProfile";
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import PopupTicket1 from "../PopupTicket/PopupTicket1";
import PopupTicket2 from "../PopupTicket/PopupTicket2";
import PopupTicket3 from "../PopupTicket/PopupTicket3";
import PopupTicket4 from "../PopupTicket/PopupTicket4";
import PopupTicket5 from "../PopupTicket/PopupTicket5";
import { useNavigate } from 'react-router-dom';
import ScrollPrizes from "../Scroll/ScrollPrizes";
import scrollToPrizes from "../Scroll/ScrollToPrizes";
import ticket from "../../image/ticket.png";
import tickets from "../../image/img_106.png";
import ticketsmb from "../../image/img_108.png";
import PopupVideos from "../Winners-videos/PopupVideos";
import PopupEnd from "../PopupTicket/PopupEnd";
import prizesCenterCard from "../../image/mv-card.png";
import bgImagese from "../../image/bg-image.png";
import howCenterIcon from "../../image/img_58.png";
import Test from "../test";
import TestForSpin from "../TestSpinProfile";
import PopupAddSpin from "../PopupTicket/PopupAddSpin";
import Popup from "../PopupReg/Popup";
import ticketTextRight from "../../image/img_100.png";
import tickettextblue from '../../image/img_109.png'
import PopupTakeGifts from "../PopupTicket/PopupTakeGifts";
import PopupTicket6 from "../PopupTicket/PopupTickets6";



export default function Profile(props){
    function closeMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.remove('active');
        const navList = document.querySelector('header .menu');
        navList.classList.remove('show');
        document.documentElement.classList.remove('menu-open'); // Удаление класса 'menu-open' у элемента <html>
        document.body.classList.remove('menu-open');
    }


    function closeMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.remove('active');
        const navList = document.querySelector('header .menu');
        navList.classList.remove('show');
        document.documentElement.classList.remove('menu-open'); // Удаление класса 'menu-open' у элемента <html>
        document.body.classList.remove('menu-open');
    }

    function openPopupTicket2() {
        document.getElementById("popup-end").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    function toggleMenu() {
        const navLists = document.querySelector('.header-profile .header-burger');
        navLists.classList.toggle('active');
        const navList = document.querySelector('.header-profile .menu');
        navList.classList.toggle('show');
        document.documentElement.classList.toggle('menu-open');
        document.body.classList.toggle('menu-open');
    }
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchUpdatedProfileData = () => {
            const storedProfile = JSON.parse(localStorage.getItem('profile'));
            if (storedProfile) {
                setProfile(storedProfile);
            }
            setLoading(false);
        };

        fetchUpdatedProfileData();
    }, [profile]); // Это сработает при изменении profile
    const currentDomain = window.location.origin;
    const location = useLocation();
    const selectChoose = (text) => {
        // Удалить токен из localStorage
        localStorage.removeItem('auth_key');

        // Перенаправить на главную страницу
        window.location.href = '/';
    };

    const handleImageClick = () => {
        window.location.href = '/'
    };
    const handleImageClickTest = () => {
        window.open('https://nloto.ru/', '_blank');
    };
    useEffect(() => {
        const copyLinkButton = document.querySelector('.copy-link');
        const notification = document.querySelector('.notification');

        if (copyLinkButton) { // Проверка, что кнопка существует

            copyLinkButton.addEventListener('click', () => {
                const linkToCopy = `${currentDomain}/?ref=${profile?.referralCode || ''}`;
                const tempInput = document.createElement('input');
                tempInput.value = linkToCopy;
                document.body.appendChild(tempInput);

                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);

                showNotification();
            });
        }

        function showNotification() {
            notification.classList.add('showCopy');
            setTimeout(() => {
                notification.classList.remove('showCopy');
            }, 1000); // Через 2 секунды уведомление исчезнет
        }
    }, [profile]);

    function getTicketForm(number) {
        const lastDigit = number % 10;
        if (number > 10 && number < 20) {
            return 'б' + 'илетов';
        }
        if (lastDigit === 1) {
            return 'б' + 'илет';
        }
        if (lastDigit >= 2 && lastDigit <= 4 && lastDigit === 4) {
            return 'б' + 'илета';
        }
        return 'б' + 'илетов';
    }
    function getStatusForm(number) {
        const lastDigit = number % 10;
        if (number > 10 && number < 20) {
            return 'о' + 'добрено';
        }
        if (lastDigit === 1) {
            return 'о' + 'добрен';
        }
        if (lastDigit >= 2 && lastDigit <= 4 && lastDigit === 4) {
            return 'о' + 'добрено';
        }
        return 'о' + 'добрено';
    }
    function getStatusFormOtc(number) {
        const lastDigit = number % 10;
        if (number > 10 && number < 20) {
            return 'о' + 'тклонено';
        }
        if (lastDigit === 1) {
            return 'о' + 'тклонен';
        }
        if (lastDigit >= 2 && lastDigit <= 4 && lastDigit === 4) {
            return 'о' + 'тклонено';
        }
        return 'о' + 'тклонено';
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
    const [isPopupOpen, setIsPopupOpen] = useState(null);
    // const openPopup = (popupName) => {
    //     setIsPopupOpen(popupName);
    //     document.body.classList.add("no-scroll");
    // };
    function openPopup() {
        document.getElementById("popup-ticket1").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    function openPopup1() {
        if (profile && profile.countRoulette > 0) {
            setIsPopupOpen(true); // Показывать попап, если onlyTest больше 0
        } else {
            document.getElementById("popup-banner").style.display = "block"; // Показывать другой попап
            document.body.classList.add("no-scroll");

        }
    }
    const closePopup = () => {
        setIsPopupOpen(false);
        document.body.classList.remove("no-scroll");
    };

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
    function profileExit () {
        // Удалить токен из localStorage
        localStorage.removeItem('auth_key');

        // Перенаправить на главную страницу
        window.location.href = '/';
    };
    // if (loading) {
    //     return <div>Loading...</div>; // You can replace this with a spinner or loading skeleton
    // }
    return (
        <>
        <header className={'header-profile'}>
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
                        <div className={'menu-content-profile error-menu-profile'}>
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
                                <button id="profile-button"
                                        className="button-animation">
                                    Личный кабинет
                                </button>
                            </div>
                            <img className={'users-logo top-side'} src={users}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <main className={'main-profile'}>
                <div className={''} id={'main-profile'}>
                    <div className={'main-items main-items-profile'}>
                        <img className={'tsxt'} src={tickets}/>
                        <img className={'tsxt-mobile'} src={ticketsmb}/>
                        <p className={'global-name-move-mobile shadow-exit'}><a className={'exit-pro'} onClick={profileExit}>Выйти
                            из профиля
                        </a></p>
                        <div className={'items-block-profile'}>
                            <div className={'background-container'}></div>
                            <div className={'global-name'}>
                                <p className={'global-name-move'}>Личный кабинет</p>
                                <p className={'global-name-move shadow-exit'}><a className={'exit-pro'}
                                                                                 onClick={profileExit}>Выйти из профиля
                                </a></p>
                            </div>
                            <a onClick={openPopup} className={'button-animation-text-profile first-one'}>
                                <b>Зарегистрировать билет</b> </a>
                            <div className="container-profile">
                                <div className="left-column-profile">
                                    {/*<div className={'left-first-profile'}>*/}
                                    {/*    /!*<div>*!/*/}
                                    {/*    /!*    <img className={'for-he4lth-profile'} src={prizesCenterCard}/>*!/*/}
                                    {/*    /!*    <img className={'for-he4lth-bg-profile'} src={bgImagese}/>*!/*/}
                                    {/*    /!*</div>*!/*/}
                                    {/*    <p className={'p-bonus-profile'}>Приглашайте друзей и выигрывайте специальный приз*/}
                                    {/*        от Мвидео!</p>*/}
                                    {/*    <a className={'a-bonus-profile copy-link'}>Скопировать ссылку</a>*/}
                                    {/*    <div className="notification">Ссылка скопирована!</div>*/}
                                    {/*    <p className={'left-first-profile-p2-p2'}>*/}
                                    {/*        {profile && profile.countReferrals}*/}
                                    {/*        <a className={'left-first-profile-a2-a2'}>Количество друзей, воспользовавшихся*/}
                                    {/*            реферальной ссылкой</a>*/}
                                    {/*    </p>*/}
                                    {/*    {profile && profile.countReferrals > 0 ? (*/}
                                    {/*        <>*/}
                                    {/*            <p className={'left-first-profile-p2-p2-p2'}>*/}
                                    {/*                Поздравляем! Вы привлекли новых пользователей на сайт. Благодаря этому*/}
                                    {/*                вы сможете принять участие в дополнительном розыгрыше призов в конце*/}
                                    {/*                акции.*/}
                                    {/*            </p>*/}

                                    {/*        </>*/}
                                    {/*    ) : null}*/}

                                    {/*</div>*/}
                                    {/*<div className={'backdrop-profile1'}></div>*/}
                                    <div className={'profile-right-float-img'}>
                                        {/*<img className={'profile-snake-left'} src={snake}/>*/}
                                        {/*<img className={'profile-rings'} src={rings}/>*/}
                                        {/*<img className={'profile-full-hearth'} src={fullhearth}/>*/}
                                        {/*<img className={'profile-pluse1'} src={pluse1}/>*/}
                                        {/*<img className={'profile-left-half-ring'} src={leftring}/>*/}
                                        {/*<img className={'profile-center-hearth'} src={centerhearth}/>*/}
                                        {/*<img className={'profile-right-ring'} src={rightRing}/>*/}
                                    </div>
                                    <div className={'left-second-profile'}>
                                        {/*<img className={'how-left-icon profile'} src={howCenterIcon}/>*/}
                                        <div className="spin-block">
                                            <TestForSpin/>
                                        </div>
                                        <p className={'left-first-profile-p'}>Вы зарегистрировали
                                            <br></br>{profile && profile.countTicketsTotal} лотерейных билетов
                                            <br></br>на сумму {profile?.sumTickets ?? 0} рублей.
                                        </p>

                                        <div className="white-line"></div>
                                        <a
                                            onClick={openPopup1}
                                            className={'button-animation-text-profile click-spin'}>
                                            <b>Крутить</b> </a>
                                        {isPopupOpen &&
                                            <PopupAddSpin isOpen={isPopupOpen} closeModal={closePopup}/>}
                                        <p className={'left-first-profile-p2-p2-p2'}>
                                            Вы прокрутили {profile && profile.countRoulette} раз
                                            <br></br>
                                            Осталось прокрутить {profile && profile.countRoulette} раз
                                        </p>
                                        {profile && profile.countRoulette > 0 ? (
                                                <>

                                                </>
                                            ) :
                                            <p className={'left-first-profile-p2-p2-p2 new'}>
                                                Хотите крутануть колесо? <br></br>Купите лотерейные билеты <br></br>на
                                                сумму
                                                от 300 рублей.
                                                <br></br>
                                                <br></br>
                                                За каждые 300 рублей вы <br></br>получите 1 (одну) попытку.
                                            </p>
                                        }
                                    </div>
                                </div>
                                <div className="right-column-profile profile">
                                    <div className={'right-first-profile'}>
                                    <div className={'right-first-profile'}>
                                            <NavLink
                                                to="/profile"
                                                activeclassname="active-subsection"
                                                isactive={() => location.pathname === '/profile'}
                                                className={`right-first-block first-block ${location.pathname === '/profile' ? 'active' : ''}`}
                                            >
                                                <div className={'p-main-profile-color'}>
                                                    Профиль
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className={'right-first-profile'}>
                                            <NavLink
                                                to="/tickets"
                                                activeclassname="active-subsection"
                                                isactive={() => location.pathname === '/tickets'}
                                                className={`right-first-block second-block ${location.pathname === '/tickets' ? 'active' : ''}`}
                                            >
                                                <div className={'p-main-profile-color'}>
                                                    Билеты
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className={'right-first-profile'}>
                                            <NavLink
                                                to="/gifts"
                                                activeclassname="active-subsection"
                                                isactive={() => location.pathname === '/gifts'}
                                                className={`right-first-block third-block ${location.pathname === '/gifts' ? 'active' : ''}`}
                                            >
                                                <div className={'p-main-profile-color'}>
                                                    Призы
                                                </div>
                                            </NavLink>
                                        </div>
                                        {/*<div className={'right-first-profile'}>*/}
                                        {/*    <NavLink*/}
                                        {/*        to="/videos"*/}
                                        {/*        activeclassname="active-subsection"*/}
                                        {/*        isactive={() => location.pathname === '/videos'}*/}
                                        {/*        className={`right-first-block ${location.pathname === '/videos' ? 'active' : ''}`}*/}
                                        {/*    >*/}
                                        {/*        /!*<div className={'p-main-profile-color'}>*!/*/}
                                        {/*        /!*    Розыгрыши*!/*/}
                                        {/*        /!*</div>*!/*/}
                                        {/*    </NavLink>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className={'right-second-profile'}>
                                        {/*<div className={'background'}></div>*/}
                                        <div className={'content-from-left'}>
                                            {/*<p className={'right-second-profile-p'}>Данные профиля</p>*/}
                                            <p className={'right-second-profile-p2'}>Номер телефона</p>
                                            <input
                                                className={'popupCode-input-profile'}
                                                type="tel"
                                                value={profile && profile.login}
                                                readOnly
                                                style={{backgroundColor: '#edf0fa'}}
                                            />
                                            {/*<p className={'right-second-profile-p3'}><a>Изменить пароль</a></p>*/}
                                        </div>
                                    </div>
                                    {/*<div className={'backdrop-profile2'}></div>*/}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <footer className={'footer'}>
                <div className="footer-left">

                    <div className={'footer-row'}>
                <div className={'footer-colm'}>
                    <Link to="">
                        <img className={'footer-logo'} src={ticketText} onClick={handleImageClickTest}/>
                    </Link>
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
        <PopupTicket6/>
                <PopupVideos/>
                <PopupEnd/>
                <PopupAddSpin/>
        <PopupTakeGifts/>
            </footer>
        </>

    );
}
