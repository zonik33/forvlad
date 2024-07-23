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
import qrCode from "../../image/qr-code.png"
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import prizesLeft from "../../image/prizes-left.png";
import bgImagese from "../../image/bg-image.png";
import prizesCenter from "../../image/prizes-center.png";
import prizesNvidia from "../../image/mv-card.png";
import prizesRight from "../../image/redmond-prizes.png";
import React, {useEffect, useRef, useState} from "react";
import SelectProfile from "./SelectProfile";
import PopupTicket1 from "../PopupTicket/PopupTicket1";
import PopupTicket2 from "../PopupTicket/PopupTicket2";
import PopupTicket3 from "../PopupTicket/PopupTicket3";
import PopupTicket4 from "../PopupTicket/PopupTicket4";
import PopupTicket5 from "../PopupTicket/PopupTicket5";
import Barcode from 'react-barcode';
import html2canvas from 'html2canvas';
import ticket from "../../image/ticket.png";
import PopupVideos from "../Winners-videos/PopupVideos";
import prizesCenterCard from "../../image/mv-card.png";
import PopupEnd from "../PopupTicket/PopupEnd";
import howCenterIcon from "../../image/img_58.png";
import TestForSpin from "../TestSpinProfile";
import PopupAddSpin from "../PopupTicket/PopupAddSpin";
import PopupTakeGifts from "../PopupTicket/PopupTakeGifts";
import ticketTextRight from "../../image/img_100.png";
import tickets from "../../image/img_106.png";
import tickettextblue from "../../image/img_99.png";
import ticketsmb from "../../image/img_108.png";

export default function Gifts() {

    function openPopup() {
        document.getElementById("popup-ticket1").style.display = "block";
        document.body.classList.add("no-scroll");
    }

    function openPopupTakeGifts() {
        document.getElementById("popup-take-gifts").style.display = "block";
        document.body.classList.add("no-scroll");
    }

    function toggleMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.toggle('active');
        const navList = document.querySelector('header .menu');
        navList.classList.toggle('show');
    }

    function closeMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.remove('active');
        const navList = document.querySelector('header .menu');
        navList.classList.remove('show');
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
    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('profile'));
        setProfile(storedProfile);
    }, []);
    const currentDomain = window.location.origin;
    const location = useLocation();


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
    const barcodeRef = useRef(null);
    const barcodeRefs = useRef([]);

    const handleBarcodeDownload = (index) => { // Добавляем параметр `index`
        const barcodeRef = barcodeRefs.current[index]; // Получаем ссылку на нужный блок штрих-кода

        if (barcodeRef) {
            html2canvas(barcodeRef, {useCORS: true})
                .then((canvas) => {
                    const url = canvas.toDataURL('image/png');
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `barcode_${index}.png`; // Используем индекс для определения имени файла
                    link.click();
                })
                .catch((error) => {
                    console.error('Ошибка при генерации изображения: ', error);
                });
        } else {
            console.error('Ссылка на блок штрих-кода не существует.');
        }
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
                prizesRef.current.scrollIntoView({behavior: 'smooth'});
            }, 0);
        } else if (activeSection === 'winners' && winnersRef.current) {
            setTimeout(() => {
                winnersRef.current.scrollIntoView({behavior: 'smooth'});
            }, 0);
        } else if (activeSection === 'faq' && faqRef.current) {
            setTimeout(() => {
                faqRef.current.scrollIntoView({behavior: 'smooth'});
            }, 0);
        } else if (activeSection === 'question-here' && questionRef.current) {
            setTimeout(() => {
                questionRef.current.scrollIntoView({behavior: 'smooth'});
            }, 0);
        }
    }, [activeSection]);
    const [isPopupOpen, setIsPopupOpen] = useState(null);
    function openPopup1() {
        setIsPopupOpen(true);
    }
    const closePopup = () => {
        setIsPopupOpen(false);
        document.body.classList.remove("no-scroll");
    };
    let onlyTest = 5

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
            <main className={'main-gifts'}>
                <div className={''} id={'main-gifts'}>
                    <div className={'main-items main-items-profile'}>
                        <img className={'tsxt'} src={tickets}/>
                        <img className={'tsxt-mobile'} src={ticketsmb}/>
                        <div className={'items-block-profile gifts-items-block'}>
                            <div className={'background-container'}></div>
                            <div className={'global-name'}>
                                <p className={'global-name-move'}>Личный кабинет</p>
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
                                            <br></br>{/*{profile && profile.countTicketsTotal}*/} 6 лотерейных билетов
                                            <br></br>на сумму
                                            {/*{profile && profile.countTicketsTotal}*/} 2300 рублей.

                                        </p>

                                        <div className="white-line"></div>
                                        {/*<p className={'left-first-profile-p3-count'}>*/}
                                        {/*    За каждые 300 рублей вы можете 1 (один) раз <br></br> прокрутить колесо.*/}
                                        {/*</p>*/}
                                        {/*{profile && profile.countReferrals > 0 ? (*/}

                                        {/*<p className={'left-first-profile-p3'}>*/}

                                        {/*    приняли участие <br></br>в*/}
                                        {/*    розыгрыше*/}
                                        {/*</p>*/}
                                        {/*<p className={'left-first-profile-p3-count'}>*/}
                                        {/*    {profile && profile.countTicketsRejected}*/}
                                        {/*    3*/}
                                        {/*</p>*/}
                                        {/*<p className={'left-first-profile-p3'}>*/}
                                        {/*    могут принять <br></br>участие в*/}
                                        {/*    розыгрыше*/}
                                        {/*</p>*/}
                                        <a
                                            onClick={openPopup1}
                                            className={'button-animation-text-profile click-spin'}>
                                            <b>Крутить</b> </a>
                                        {isPopupOpen &&
                                            <PopupAddSpin isOpen={isPopupOpen} closeModal={closePopup}/>}

                                        {onlyTest > 0 ? (
                                            <>
                                                <p className={'left-first-profile-p2-p2-p2'}>
                                                    Осталось прокрутить {onlyTest} раз
                                                </p>

                                            </>
                                        ) : <p className={'left-first-profile-p2-p2-p2'}>
                                            Хотите крутануть колесо? <br></br>Купите лотерейные билеты <br></br>на сумму
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
                                    <div className={'right-second-profile-gifts'}>
                                        {/*<div className={'background'}></div>*/}
                                        <span className={'gifts-prizes-name'}>Приз</span>
                                        <span className={'gifts-prizes-data'}>Итоги розыгрыша рулетки</span>
                                        <span className={'gifts-prizes-data-add'}>Срок <br></br>действия до</span>
                                        <div className="prizes-container">
                                            <div className="prize-column">
                                                <div className="prize-item">
                                                    <span className={'gifts-prizes-name-none'}>Приз</span>
                                                    <span className="prize-name">Мечталион</span>
                                                    <span className="prize-code">221234567890</span>
                                                    <a className="button-animation-text-profile click-ticket-prizes"
                                                       onClick={openPopupTakeGifts}>
                                                        <b className={'gifts-b'}>Получить билет</b></a>
                                                </div>
                                            </div>
                                            <div className="draw-date-column">
                                                <span
                                                    className={'gifts-prizes-data-none'}>Итоги розыгрыша рулетки</span>
                                                <div className="draw-date">10.06.2024</div>
                                            </div>
                                            <div className="draw-date-prizes-column">
                                                <span
                                                    className={'gifts-prizes-data-add-none'}>Срок <br></br>действия до</span>
                                                <div className="draw-date margin-new">10.08.2024</div>
                                            </div>
                                            <div className={'line-true gifts'}></div>
                                        </div>

                                        <div className="prizes-container">
                                            <div className="prize-column">
                                                <div className="prize-item">
                                                    <span className={'gifts-prizes-name-none'}>Приз</span>
                                                    <span className="prize-name">Мечталион</span>
                                                    <span className="prize-code">221234567890</span>
                                                    <a className="button-animation-text-profile click-ticket-prizes"
                                                       onClick={openPopupTakeGifts}>
                                                        <b className={'gifts-b'}>Получить билет</b></a>
                                                </div>
                                            </div>
                                            <div className="draw-date-column">
                                                <span
                                                    className={'gifts-prizes-data-none'}>Итоги розыгрыша рулетки</span>
                                                <div className="draw-date">10.06.2024</div>
                                            </div>
                                            <div className="draw-date-prizes-column">
                                                <span
                                                    className={'gifts-prizes-data-add-none'}>Срок <br></br>действия до</span>
                                                <div className="draw-date margin-new">10.08.2024</div>
                                            </div>
                                            <div className={'line-true gifts'}></div>
                                        </div>

                                        <div className="prizes-container">
                                            <div className="prize-column">
                                                <div className="prize-item">
                                                    <span className={'gifts-prizes-name-none'}>Приз</span>
                                                    <span className="prize-name">Мечталион</span>
                                                    <span className="prize-code">221234567890</span>
                                                    <a className="button-animation-text-profile click-ticket-prizes"
                                                       onClick={openPopupTakeGifts}>
                                                        <b className={'gifts-b'}>Получить билет</b></a>
                                                </div>
                                            </div>
                                            <div className="draw-date-column">
                                                <span
                                                    className={'gifts-prizes-data-none'}>Итоги розыгрыша рулетки</span>
                                                <div className="draw-date">10.06.2024</div>
                                            </div>
                                            <div className="draw-date-prizes-column">
                                                <span
                                                    className={'gifts-prizes-data-add-none'}>Срок <br></br>действия до</span>
                                                <div className="draw-date margin-new">10.08.2024</div>
                                            </div>
                                            <div className={'line-true gifts'}></div>
                                        </div>
                                        <div className="prizes-container">
                                            <div className="prize-column">
                                                <div className="prize-item">
                                                    <span className={'gifts-prizes-name-none'}>Приз</span>
                                                    <span className="prize-name">Мечталион</span>
                                                    <span className="prize-code">221234567890</span>
                                                    <a className="button-animation-text-profile click-ticket-prizes"
                                                       onClick={openPopupTakeGifts}>
                                                        <b className={'gifts-b'}>Получить билет</b></a>
                                                </div>
                                            </div>
                                            <div className="draw-date-column">
                                                <span
                                                    className={'gifts-prizes-data-none'}>Итоги розыгрыша рулетки</span>
                                                <div className="draw-date">10.06.2024</div>
                                            </div>
                                            <div className="draw-date-prizes-column">
                                                <span
                                                    className={'gifts-prizes-data-add-none'}>Срок <br></br>действия до</span>
                                                <div className="draw-date margin-new">10.08.2024</div>
                                            </div>
                                            <div className={'line-true gifts'}></div>
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
                               target="_blank" className={'footer-color-size left'}>Конфиденциальность</a>
                        </div>

                    </div>
                </div>


                <PopupTicket1/>
                <PopupTicket2/>
                <PopupTicket3/>
                <PopupTicket4/>
                <PopupTicket5/>
                <PopupVideos/>
                <PopupEnd/>
                <PopupTakeGifts/>
            </footer>
            </>

    );
}
