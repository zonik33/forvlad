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
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import SelectProfile from "./SelectProfile";
import PopupTicket1 from "../PopupTicket/PopupTicket1";
import PopupTicket2 from "../PopupTicket/PopupTicket2";
import PopupTicket3 from "../PopupTicket/PopupTicket3";
import PopupTicket4 from "../PopupTicket/PopupTicket4";
import PopupTicket5 from "../PopupTicket/PopupTicket5";
import ticket from "../../image/ticket.png";
import PopupVideos from "../Winners-videos/PopupVideos";
import prizesCenterCard from "../../image/mv-card.png";
import bgImagese from "../../image/bg-image.png";
import PopupEnd from "../PopupTicket/PopupEnd";
import howCenterIcon from "../../image/img_58.png";
import TestForSpin from "../TestSpinProfile";
import PopupAddSpin from "../PopupTicket/PopupAddSpin";
import ticketTextRight from "../../image/img_100.png";
import tickets from "../../image/img_106.png";
import tickettextblue from '../../image/img_109.png'
import ticketsmb from "../../image/img_108.png";
import PopupTakeGifts from "../PopupTicket/PopupTakeGifts";
import PopupTicket6 from "../PopupTicket/PopupTickets6";
import exitlogo from "../../image/img_129.png";
import PopupTakeGiftsError from "../PopupTicket/PopupTickets6";
import PopupE from "../PopupReg/PopupE";


export default function Tickets(){
    function openPopup() {
        document.getElementById("popup-ticket1").style.display = "block";
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
    const currentDomain = window.location.origin;
    const location = useLocation();


const test= 2

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
            return 'билетов';
        }
        if (lastDigit === 1) {
            return 'билет';
        }
        if (lastDigit >= 2 && lastDigit <= 4 && lastDigit === 4) {
            return 'билета';
        }
        return 'билетов';
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
    const handleImageClick = () => {
        window.location.href = '/'
    };
    const handleImageClickTest = () => {
        window.open('https://nloto.ru/', '_blank');
    };
    function profileExit () {
        // Удалить токен из localStorage
        localStorage.removeItem('auth_key');

        // Перенаправить на главную страницу
        window.location.href = '/';
    };
    const navigate = useNavigate();

    const handleGoToPrizes = (event) => {
        event.preventDefault();
        navigate("/?section=prizes"); // Передаем параметр "section" в URL
    };

    const handleGoToWinners = (event) => {
        event.preventDefault();
        navigate("/?section=winners"); // Передаем параметр "section" в URL
    };
    const handleGoToSupport = (event) => {
        event.preventDefault();
        navigate("/?section=support"); // Передаем параметр "section" в URL
    };
    const handleGoToFaq = (event) => {
        event.preventDefault();
        navigate("/?section=faq"); // Передаем параметр "section" в URL
    };
    const handleGoToQuestion = (event) => {
        event.preventDefault();
        navigate("/?section=question-here"); // Передаем параметр "section" в URL
    };
    const [activeSection, setActiveSection] = useState(null);
    const prizesRef = useRef(null);
    const winnersRef = useRef(null);
    const faqRef = useRef(null);
    const questionRef = useRef(null);

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
        } else if (activeSection === 'question-here' && questionRef.current) {
            setTimeout(() => {
                questionRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        }
    }, [activeSection]);
    function closeMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.remove('active');
        const navList = document.querySelector('header .menu');
        navList.classList.remove('show');
        document.documentElement.classList.remove('menu-open'); // Удаление класса 'menu-open' у элемента <html>
        document.body.classList.remove('menu-open');
    }
    const [isPopupOpen, setIsPopupOpen] = useState(null);
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
    function toggleDropdown() {
        const dropdown = document.querySelector('.dropdown-menu');
        dropdown.classList.toggle('show');
    }
    // if (loading) {
    //     return <div>Loading...</div>; // You can replace this with a spinner or loading skeleton
    // }
    const [showPopupE, setShowPopupE] = useState(false);
    const [showPopupE2, setShowPopupE2] = useState(false);

    const openPopupTest = () => {
        setShowPopupE(true);
    };
    const openPopupTestSecond = () => {
        setShowPopupE2(true);
    };
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
                            <div className="random-block">
                                <img className={'exit-logo'} src={exitlogo} onClick={toggleDropdown} alt="Логотип"/>
                                <button id="profile-button"  onClick={toggleDropdown} className="button-animation">
                                    Личный кабинет
                                </button>

                                <div className="dropdown-menu">
                                    <div className="triangle"></div>

                                    <p onClick={profileExit} className={'exit-pro'}>Выход</p>
                                </div>
                            </div>
                            <img className={'users-logo top-side'} src={users}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <main className={'main-tickets'}>
                <div className={'main-tickets main-items-profile'} id={'main-profile'}>
                    <div className={'main-items main-items-profile'}>
                        <img className={'tsxt'} src={tickets}/>
                        <img className={'tsxt-mobile'} src={ticketsmb}/>
                        {/*<p className={'global-name-move-mobile shadow-exit'}><a className={'exit-pro'}*/}
                        {/*                                                        onClick={profileExit}>Выйти*/}
                        {/*    из профиля*/}
                        {/*</a></p>*/}
                        <div className={'items-block-profile tickets-items-block'}>
                            <div className={'background-container'}></div>
                            <div className={'global-name'}>
                                <p className={'global-name-move'}>Личный кабинет</p>
                                {/*<p className={'global-name-move shadow-exit'}><a className={'exit-pro'}*/}
                                {/*                                                 onClick={profileExit}>Выйти из профиля*/}
                                {/*</a></p>*/}
                            </div>
                            <a onClick={openPopupTest} className={'button-animation-text-profile first-one'}>
                                <b>Зарегистрировать билет</b> </a>
                            {showPopupE && <PopupE isOpen={showPopupE} closeModal={() => setShowPopupE(false)} />}
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
                                            onClick={openPopupTestSecond}
                                            className={'button-animation-text-profile click-spin'}>
                                            <b>Крутить</b> </a>
                                        {showPopupE2 && <PopupE isOpen={showPopupE2} closeModal={() => setShowPopupE2(false)} />}
                                        {/*{isPopupOpen &&*/}
                                        {/*    <PopupAddSpin isOpen={isPopupOpen} closeModal={closePopup}/>}*/}

                                        <p className={'left-first-profile-p2-p2-p2'}>
                                            Вы прокрутили {profile && profile.countRouletteUsed} раз
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
                                <div className="right-column-profile">
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
                                    <div className={'right-second-profile-tickets'}>
                                        {/*<div className={'background'}></div>*/}
                                        <div className={'content-from-left'}>
                                            {/*<p className={'right-second-tickets-p'}>Ваши билеты</p>*/}
                                            <div className={'winners-tabs-content-ticket'}>
                                                <div className={'tab'}>
                                                    <div className={'tab-inner'}>
                                                        <div className={'table-ticket'}>
                                                            <div className={'table-head-ticket'}>
                                                                <div className={'head-colm-prize-ticket'}>
                                                                    <div className={'colm-text-ticket'}> Номер
                                                                        лотерейного
                                                                        билета
                                                                    </div>
                                                                </div>
                                                                <div className={'head-colm-phone-ticket'}>
                                                                    <div className={'colm-text-ticket'}> Дата
                                                                        регистрации <br></br>
                                                                        в акции
                                                                    </div>
                                                                </div>
                                                                <div className={'head-colm-date-ticket'}>
                                                                    <div className={'colm-text-ticket'}>Статус
                                                                        участия <br></br>
                                                                        в рулетке
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {profile && profile.tickets && Array.isArray(profile.tickets) ? (
                                                                <div className={'table-body-ticket'}>
                                                                    {profile.tickets.map((ticket, index) => (
                                                                        <div className={'centered-ticket-wrapper'}
                                                                             key={index}>
                                                                            <div className="table-row">
                                                                                <div
                                                                                    className="colm-data-ticket-none">Номер
                                                                                    лотерейного билета
                                                                                </div>
                                                                                <div
                                                                                    className="table-cell number">{ticket.number}</div>
                                                                                <div
                                                                                    className="table-cell price">{ticket.amount} рублей
                                                                                </div>
                                                                                <div
                                                                                    className="colm-data-ticket-none">Дата
                                                                                    регистрации в акции
                                                                                </div>
                                                                                <div
                                                                                    className="table-cell data">{ticket.date}</div>
                                                                                <div
                                                                                    className="colm-data-ticket-none">Статус
                                                                                    участия в рулетке
                                                                                </div>
                                                                                <div className="table-cell status">
                                                                                    {ticket.status.id === 0 &&
                                                                                        <div
                                                                                            className={'centered-ticket-wrapper'}>
                                                                                            <div
                                                                                                className={'centered-ticket'}>
                                                                                                <div
                                                                                                    className={'custom-status-pending'}>
                                                                                                </div>
                                                                                                <div
                                                                                                    className={'colm-text1-status-ticket1-check'}>
                                                                                                    <div
                                                                                                        dangerouslySetInnerHTML=
                                                                                                            {{__html: ticket.status.name}}>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                        </div>}
                                                                                    {ticket.status.id === 1 &&
                                                                                        <div
                                                                                            className={'centered-ticket-wrapper'}>
                                                                                            <div
                                                                                                className={'centered-ticket'}>
                                                                                                {/*<div className={'custom-status-ok'}>*/}
                                                                                                {/*</div>*/}
                                                                                                <div
                                                                                                    className={'colm-text1-status-ticket1-complete'}>
                                                                                                    <div
                                                                                                        className={'massive-text-agree'}
                                                                                                        dangerouslySetInnerHTML=
                                                                                                            {{__html: ticket.status.text}}>

                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>}
                                                                                    {ticket.status.id === 2 &&
                                                                                        <div
                                                                                            className={'centered-ticket-wrapper'}>
                                                                                            <div
                                                                                                className={'centered-ticket'}>
                                                                                                {/*<div*/}
                                                                                                {/*    className={'custom-status-neok'}>*/}
                                                                                                {/*</div>*/}
                                                                                                <div
                                                                                                    className={'colm-text1-status-ticket1-fail'}>
                                                                                                    <div
                                                                                                        className={'massive-text-not-agree'}
                                                                                                        dangerouslySetInnerHTML=
                                                                                                            {{__html: ticket.status.text}}>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                        </div>
                                                                                    }
                                                                                    <div
                                                                                        className={'line-true-tickets'}></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <></>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                <img className={'footer-logo'} src={ticketText} onClick={handleImageClick}/>
                            </Link>
                            <img className={'footer-logo right'} src={ticketTextRight}/>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className={'footer-row1'}>
                        <a className={'footer-color-size'}>Акция «Ваш билетик».
                            Общий срок проведения акции с «01» сентября 2024 года по «31» октября 2024. Подробную
                            информацию об организаторе акции,
                            о правилах ее проведения, количестве призов по результатам акции, сроках, месте и порядке их
                            вручения, уточняйте на сайте <a className={"text-nloto-footer"}
                                                            href={'https://nloto-promo.ru'}
                                                            target="_blank">https://nloto-promo.ru</a> или по телефону
                            горячей линии 8 (800) 333-7-33.
                        </a>
                    </div>
                    <div className={'footer-row2'}>
                        <a className={'footer-color-size'}>«ВГЛ-1Т Спорт Союз», алгоритм определения выигрышей № 5
                            («Великолепная 8»),
                            «ВГЛ-1Т Спорт Союз», алгоритм определения выигрышей № 2 («Лавина призов»), «ВГЛ-2Т Спорт
                            Союз»,
                            алгоритм определения выигрышей № 4 («Мечталлион»), «ВГЛ-1Т Спорт Союз», алгоритм определения
                            выигрышей № 12 («12 добрых дел»),
                            «ВГЛ-4Т Спорт Союз», алгоритм определения выигрышей № 4 («Топ 12»), «ВГЛ-4Т Спорт Союз»,
                            алгоритм определения выигрышей № 13 («Премьер»),
                            «ВГЛ-3Т Спорт Союз», алгоритм определения выигрышей № 15 («Большая 8»), «ВГЛ-2Т Спорт Союз»,
                            алгоритм определения выигрышей № 5 («Форсаж 75»),
                            «ВГЛ-4Т Спорт Союз», алгоритм определения выигрышей № 1 («5 из 37»), «ВГЛ-5Т Спорт Союз»
                            алгоритм определения выигрышей № 10 («4х4),
                            срок проведения лотереи – до 29.08.2034 г. <br></br><br></br>Информация об организаторе
                            лотереи, правилах ее проведения, призовом фонде лотереи,
                            количестве призов или выигрышей, сроках, месте и порядке их получения - на сайте <a
                                className={"text-nloto-footer"} href={'https://nloto.ru/'}
                                target="_blank">www.nloto.ru</a> и по телефону 8 800 333-7-333.
                            Оператор лотерей ООО «Спортивные Лотереи». </a>

                    </div>
                    {/*<div className={'footer-row3'}>*/}
                    {/*    <a className={'footer-color-size'}>Рекламная акция «Мечталлион. С нами миллионы!», срок проведения с 03.10.2022 по 30.11.2022 г.,*/}
                    {/*        включая период вручения призов. Подробности на сайте www.promo-mechtalion.ru.</a>*/}
                    {/*</div>*/}
                    <div className={'footer-row4'}>
                        <a className={'footer-color-size'}>Реклама. Рекламодатель: ООО «Спортивные Лотереи», ОГРН
                            1195027010386, ИНН 5003133760</a>
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


            </footer>
            <PopupTicket1/>
            <PopupTicket2/>
            <PopupTicket3/>
            <PopupTicket4/>
            <PopupTicket5/>
            <PopupTicket6/>
            <PopupVideos/>
            <PopupTakeGifts/>
            <PopupEnd/>
            <PopupTakeGiftsError/>
        </>


    );
}
