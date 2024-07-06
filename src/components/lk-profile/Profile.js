import tickettext from "../../image/tickettext.png";
import ticketText from "../../image/tickettext.png";
import users from "../../image/users-logo.png";
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
import PopupVideos from "../Winners-videos/PopupVideos";
import PopupEnd from "../PopupTicket/PopupEnd";
import prizesCenterCard from "../../image/mv-card.png";
import bgImagese from "../../image/bg-image.png";



export default function Profile(props){

    function openPopup() {
        document.getElementById("popup-ticket1").style.display = "block";
        document.body.classList.add("no-scroll"); // Добавить класс "no-scroll" к <body>
    }
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

    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('profile'));
        setProfile(storedProfile);

    }, []);
    const currentDomain = window.location.origin;
    const location = useLocation();


    const handleImageClick = () => {
        window.location.href = '/'
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
    return (
        <header className={'header-profile'}>
            <div className={'container'}>
                <div className={'content'}>
                    <div className={'logo-content'}>
                        <Link to="/path-to-target-page">
                        <img className={'logo'} src={ticket}
                             alt="Logo"
                             onMouseOver={() => { /* Обработчик наведения на картинку */
                             }}
                             onClick={handleImageClick}/>
                        </Link>
                        <Link to="/path-to-target-page">
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
                    <div className={'logo-content'}>
                        <div className={'header-burger'} onClick={toggleMenu}>
                            <span className={'span-burger'}></span>
                        </div>
                    </div>
                    <div className={'menu'}>
                        <div className={'menu-content-profile'}>
                            <a href={`${currentDomain}/rules.pdf`} target="_blank"> Правила </a>
                            <a className="smooth" href={'#'} onClick={(event) => {
                                closeMenu();
                                handleGoToPrizes(event)
                            }}> Призы </a>
                            <a className="smooth" href={'#'} onClick={(event) => {
                                closeMenu();
                                handleGoToWinners(event)
                            }}>Победители</a>
                            <a className="smooth" href={'#'} onClick={(event) => {
                                closeMenu();
                                handleGoToFaq(event)
                            }}> Faq </a>
                            <a className="smooth backFaq" href={'#'} onClick={(event) => {
                                closeMenu();
                                handleGoToSupport(event)
                            }}> Обратная связь </a>
                            <SelectProfile/>
                            <img className={'users-logo'} src={users}/>
                            <a onClick={openPopup} className={'shadow-button-animation-text'}> <b>Зарегистрировать
                                билет</b> </a>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <div className={'main-profile'} id={'main-profile'}>
                    <div className={'main-items main-items-profile'}>
                        <div className={'global-name'}>
                            <p>Личный кабинет</p>
                        </div>
                        <div className="container-profile">
                            <div className="left-column-profile">
                                <div className={'left-first-profile'}>
                                    <div>
                                        <img className={'for-he4lth-profile'} src={prizesCenterCard}/>
                                        <img className={'for-he4lth-bg-profile'} src={bgImagese}/>
                                    </div>
                                    <p className={'p-bonus-profile'}>Приглашайте друзей и выигрывайте специальный приз
                                        от Мвидео!</p>
                                    <a className={'a-bonus-profile copy-link'}>Скопировать ссылку</a>
                                    <div className="notification">Ссылка скопирована!</div>
                                    <p className={'left-first-profile-p2-p2'}>
                                        {profile && profile.countReferrals}
                                        <a className={'left-first-profile-a2-a2'}>Количество друзей, воспользовавшихся
                                            реферальной ссылкой</a>
                                    </p>
                                    {profile && profile.countReferrals > 0 ? (
                                        <>
                                            <p className={'left-first-profile-p2-p2-p2'}>
                                                Поздравляем! Вы привлекли новых пользователей на сайт. Благодаря этому вы сможете принять участие в дополнительном розыгрыше призов в конце акции.
                                            </p>

                                        </>
                                    ) : null}

                                </div>
                                <div className={'backdrop-profile1'}></div>
                                <div className={'profile-right-float-img'}>
                                    <img className={'profile-snake-left'} src={snake}/>
                                    <img className={'profile-rings'} src= {rings}/>
                                    <img className={'profile-full-hearth'} src= {fullhearth}/>
                                    <img className={'profile-pluse1'} src= {pluse1}/>
                                    <img className={'profile-left-half-ring'} src= {leftring}/>
                                    <img className={'profile-center-hearth'} src= {centerhearth}/>
                                    <img className={'profile-right-ring'} src= {rightRing}/>
                                </div>
                                <div className={'left-second-profile'}>
                                    <p className={'left-first-profile-p'}>Вы зарегистрировали</p>
                                    <p className={'left-first-profile-p2'}>
                                        {profile && profile.countTicketsTotal}
                                        <a className={'left-first-profile-a2'}>{getTicketForm(profile && profile.countTicketsTotal)}</a>
                                    </p>
                                    <div className="white-line"></div>
                                    <p className={'left-first-profile-p3'}>
                                        {profile && profile.countTicketsApproved} {getTicketForm(profile && profile.countTicketsApproved)} {getStatusForm(profile && profile.countTicketsApproved)}
                                    </p>
                                    <p className={'left-first-profile-p3'}>
                                        {profile && profile.countTicketsRejected} {getTicketForm(profile && profile.countTicketsRejected)} {getStatusFormOtc(profile && profile.countTicketsRejected)}
                                    </p>
                                    <a onClick={openPopup} className={'button-animation-text-profile'}>
                                        <b>Зарегистрировать билет</b> </a>
                                </div>
                            </div>
                            <div className="right-column-profile">
                                <div className={'right-first-profile'}>
                                    <div className={`right-first-block ${location.pathname === '/profile' ? 'active' : ''}`}>
                                        <NavLink
                                            to="/profile"
                                            activeclassname="active-subsection"
                                            isactive={() => location.pathname === '/profile'}>
                                            <p className={'p-main-profile-color'}>Профиль</p>
                                        </NavLink>
                                    </div>
                                    <div className={'right-first-profile'}>
                                        <NavLink
                                            to="/gifts"
                                            activeclassname="active-subsection"
                                            isactive={() => location.pathname === '/gifts'}
                                            className={`right-first-block ${location.pathname === '/gifts' ? 'active' : ''}`}
                                        >
                                            <div className={'p-main-profile-color'}>
                                                Подарки
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className={'right-first-profile'}>
                                        <NavLink
                                            to="/tickets"
                                            activeclassname="active-subsection"
                                            isactive={() => location.pathname === '/tickets'}
                                            className={`right-first-block ${location.pathname === '/tickets' ? 'active' : ''}`}
                                        >
                                            <div className={'p-main-profile-color'}>
                                                Билеты
                                            </div>
                                        </NavLink>
                                    </div>
                                    <div className={'right-first-profile'}>
                                        <NavLink
                                            to="/videos"
                                            activeclassname="active-subsection"
                                            isactive={() => location.pathname === '/videos'}
                                            className={`right-first-block ${location.pathname === '/videos' ? 'active' : ''}`}
                                        >
                                            <div className={'p-main-profile-color'}>
                                                Розыгрыши
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className={'right-second-profile'}>
                                    <div className={'content-from-left'}>
                                    <p className={'right-second-profile-p'}>Данные профиля</p>
                                    <p className={'right-second-profile-p2'}>Номер телефона</p>
                                        <input className={'popupCode-input-profile'} type="tel" value={profile && profile.login} readOnly />
                                    {/*<p className={'right-second-profile-p3'}><a>Изменить пароль</a></p>*/}
                                    </div>
                                </div>
                                <div className={'backdrop-profile2'}></div>
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
                        </div>
                    </div>
                    <div className={'footer-medium'}>
                        <div className={'footer-row-left'}>
                            <a href={`${currentDomain}/rules.pdf`} target="_blank">Полные правила</a>
                        </div>
                        <div className={'footer-row-left'}>
                            <a href={`${currentDomain}/1_1_Политика_в_отношении_обработки_ПДн_1.pdf`} target="_blank">Политика обработки персональных данных</a>
                        </div>
                        <div className={'footer-row-left'}>
                            <a href={`${currentDomain}/Обработка_персональных_данных_третьими_лицами_3.pdf`} target="_blank">Обработка персональных данных третьими лицами</a>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <div className={'footer-row1'}>
                        <a>Общий срок проведения акции с «01» февраля 2024 года по «30» апреля 2024. Подробную информацию об организаторе акции,
                            о правилах ее проведения, количестве призов по результатам акции, сроках, месте и порядке их
                            вручения, уточняйте на сайте <a className={"text-nloto"} href={'https://nloto-promo.ru/'}>https://nloto-promo.ru</a> или по телефону
                            горячей линии 8 (800) 333-7-333.
                        </a>
                    </div>
                    {/*<div className={'footer-row2'}>*/}
                    {/*    <a>Лотереи, которые проводятся в соответствии с распоряжением Правительства Российской Федерации от*/}
                    {/*        29 августа 2019 г. № 1921-р. Срок проведения лотерей – до 29.08.2034 г. Информация об */}
                    {/*        организаторе лотерей, правилах их проведения, призовом фонде лотерей, количестве призов */}
                    {/*        или выигрышей, сроках, месте и порядке их получения - на сайте www.nloto.ru и по телефону */}
                    {/*        8 800 333-7-333. </a>*/}
                    {/*</div>*/}
                    <div className={'footer-row3'}>
                        <a>*Внешний вид подарка может отличаться от изображений, представленных в рекламных материалах.
                            Лотереи, которые проводятся в соответствии с распоряжением Правительства Российской Федерации
                            от 29 августа 2019 г. № 1921-р. Срок проведения лотерей – до 29.08.2034 г.
                            Информация об организаторе лотерей, правилах их проведения, призовом фонде лотерей,
                            количестве призов или выигрышей, сроках, месте и порядке их получения - на сайте <a className={"text-nloto"} href={'https://nloto.ru/'} target="_blank">www.nloto.ru</a> и по телефону 8 (800) 333-7-333. </a>
                    </div>
                    <div className={'footer-row4'}>
                        <a>Реклама. Рекламодатель: ООО «Спортивные Лотереи», ОГРН 1195027010386, ИНН 5003133760</a>
                    </div>
                </div>

                <PopupTicket1/>
                <PopupTicket2/>
                <PopupTicket3/>
                <PopupTicket4/>
                <PopupTicket5/>
                <PopupVideos/>
                <PopupEnd/>
            </footer>
        </header>


    );
}
