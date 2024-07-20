// import tickettext from "../../image/tickettext.png";
// import ticketText from "../../image/tickettext.png";
// import users from "../../image/users-logo.png";
// import {Link, useNavigate} from "react-router-dom";
// import React, {useEffect, useRef, useState} from "react";
// import snake from "../../image/snake.png";
// import rings from "../../image/ring.png";
// import fullhearth from "../../image/full-hearth.png";
// import pluse1 from "../../image/pluse1.png";
// import leftring from "../../image/half-ring.png";
// import centerhearth from "../../image/center-hearth.png";
// import rightRing from "../../image/right-ring.png";
// import snakefulls from "../../image/full-snake.png";
// import Popup from "../PopupReg/Popup";
// import preview1 from "../../image/img_39.png";
// import PopupTicket1 from "../PopupTicket/PopupTicket1";
// import PopupTicket2 from "../PopupTicket/PopupTicket2";
// import PopupTicket3 from "../PopupTicket/PopupTicket3";
// import PopupTicket4 from "../PopupTicket/PopupTicket4";
// import PopupTicket5 from "../PopupTicket/PopupTicket5";
// import PopupVideos from "./PopupVideos";
// import axios from "axios";
// import ticket from "../../image/ticket.png";
//
// export default function WinnersVideos(props){
//     const currentDomain = window.location.origin;
//     const [videos, setVideos] = useState([]);
//     const [selectedVideo, setSelectedVideo] = useState(null);
//
//
//
//     function openPopup1(props) {
//         const title = props.title;
//         const prize = props.prize;
//         const video = props.video.split('/').pop();
//         console.log(video)
//         document.getElementById("popup-videos").style.display = "block";
//         document.body.classList.add("no-scroll");
//         document.body.style.overflow = "hidden"; // Заблокируйте прокрутку страницы
//         document.documentElement.style.overflow = "hidden"; // Заблокируйте прокрутку страницы
//         const welcomeMessage = document.getElementById('test-id-for');
//         const welcomeMessage2 = document.getElementById('test-id-for2');
//         const iframe = document.getElementById("test-id-for3");
//         iframe.src = `https://www.youtube.com/embed/${video}`;
//         welcomeMessage.textContent = title;
//         welcomeMessage2.textContent = prize;
//         document.body.classList.add("no-scroll");
//     }
//     function openPopup2() {
//         document.getElementById("popup-ticket1").style.display = "block";
//         document.body.classList.add("no-scroll");
//     }
//     function closeMenu() {
//         const navLists = document.querySelector('.header-burger');
//         navLists.classList.remove('active');
//         const navList = document.querySelector('header .menu');
//         navList.classList.remove('show');
//         document.documentElement.classList.remove('menu-open'); // Удаление класса 'menu-open' у элемента <html>
//         document.body.classList.remove('menu-open');
//     }
//
//     function toggleMenu() {
//         const navLists = document.querySelector('.header-error .header-burger');
//         navLists.classList.toggle('active');
//         const navList = document.querySelector('.header-error .menu');
//         navList.classList.toggle('show');
//         document.documentElement.classList.toggle('menu-open');
//         document.body.classList.toggle('menu-open');
//     }
//
//     const auth_key = localStorage.getItem('auth_key');
//     const isAuthenticated = !!auth_key;
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const openPopup = () => {
//         setIsPopupOpen(true);
//     };
//
//     const closePopup = () => {
//         setIsPopupOpen(false);
//     };
//     const redirectToProfile = () => {
//         window.location.href = '/profile';
//     };
//     const handleImageClick = () => {
//         window.location.href = '/'
//     };
//     const navigate = useNavigate();
//
//     const handleGoToPrizes = (event) => {
//         event.preventDefault();
//         navigate("/?section=prizes"); // Передаем параметр "section" в URL
//     };
//
//     const handleGoToWinners = (event) => {
//         event.preventDefault();
//         navigate("/?section=winners"); // Передаем параметр "section" в URL
//     };
//     const handleGoToFaq = (event) => {
//         event.preventDefault();
//         navigate("/?section=faq"); // Передаем параметр "section" в URL
//     };
//     const handleGoToSupport = (event) => {
//         event.preventDefault();
//         navigate("/?section=support"); // Передаем параметр "section" в URL
//     };
//     const [activeSection, setActiveSection] = useState(null);
//     const prizesRef = useRef(null);
//     const winnersRef = useRef(null);
//     const faqRef = useRef(null);
//     const supportRef = useRef(null);
//
//     useEffect(() => {
//         if (activeSection === 'prizes' && prizesRef.current) {
//             setTimeout(() => {
//                 prizesRef.current.scrollIntoView({ behavior: 'smooth' });
//             }, 0);
//         } else if (activeSection === 'winners' && winnersRef.current) {
//             setTimeout(() => {
//                 winnersRef.current.scrollIntoView({ behavior: 'smooth' });
//             }, 0);
//         } else if (activeSection === 'faq' && faqRef.current) {
//             setTimeout(() => {
//                 faqRef.current.scrollIntoView({ behavior: 'smooth' });
//             }, 0);
//         } else if (activeSection === 'support' && supportRef.current) {
//             setTimeout(() => {
//                 supportRef.current.scrollIntoView({ behavior: 'smooth' });
//             }, 0);
//         }
//     }, [activeSection]);
//     const handleOnClick = () => {
//         if (isAuthenticated) {
//             openPopup2(); // Открываем попап для зарегистрированного пользователя
//             document.body.classList.add("no-scroll");
//         } else {
//             openPopup();
//
//         }
//     };
//     const fetchVideos = async () => {
//         try {
//             const response = await axios.get('https://nloto-promo.ru/backend/api/videos');
//             const data = response.data.data;
//             setVideos(data);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//
//     useEffect(() => {
//         fetchVideos().catch((error) => {
//             console.log(error);
//         });
//     }, []);
//     return (
//         <header className={'header-error header-winners-videos'}>
//             <div className={'container'}>
//                 <div className={'content'}>
//                         <div className={'logo-content'}>
//                             <Link to="/path-to-target-page">
//                                 <img className={'logo'} src={ticket}
//                                      alt="Logo"
//                                      onMouseOver={() => { /* Обработчик наведения на картинку */
//                                      }}
//                                      onClick={handleImageClick}/>
//                             </Link>
//                             <Link to="/path-to-target-page">
//                                 <img className={'logo-text'} src={tickettext}
//                                      alt="Logo"
//                                      onMouseOver={() => { /* Обработчик наведения на картинку */
//                                      }}
//                                      onClick={handleImageClick}/>
//                             </Link>
//                         <div className={'header-burger'} onClick={toggleMenu}>
//                             <span className={'span-burger'}></span>
//                         </div>
//                     </div>
//                     <div className={'menu'}>
//                         <div className={'menu-content-profile error-menu-profile'}>
//                             <a href={`${currentDomain}/rules.pdf`} target="_blank"> Правила </a>
//                             <a className="smooth" href={'#'} onClick={(event) => {closeMenu(); handleGoToPrizes(event)}}> Призы </a>
//                             <a className="smooth" href={'#'} onClick={(event) => {closeMenu();handleGoToWinners(event)}}>Победители</a>
//                             <a className="smooth" href={'#'} onClick={(event) => {closeMenu();handleGoToFaq(event)}}> Faq </a>
//                             <a className="smooth backFaq" href={'#'} onClick={(event) => {closeMenu();handleGoToSupport(event)}}> Обратная связь </a>
//                             <div className={'random-block for-winners-videos'}>
//                                 {isAuthenticated ? (
//                                     <button id="profile-button"  onClick={redirectToProfile} className="button-animation">
//                                         Личный кабинет
//                                     </button>
//                                 ) : (
//                                     <div className={'random-block-2'}>
//                                         <button id="registration-button" onClick={openPopup} className="button-animation">
//                                             Вход / Регистрация
//                                         </button>
//                                         {isPopupOpen && (
//                                             <Popup isOpen={isPopupOpen} closeModal={closePopup} />
//                                         )}
//                                     </div>
//                                 )}
//                             </div>
//
//                             <img className={'users-logo user-logo-for-error'} src={users}/>
//                             <a onClick={handleOnClick} className={'shadow-button-animation-text haha-nfp'}> <b>Принять участие в акции</b> </a>
//                         </div>
//                         <div className={'back-ground-with-img'}>
//                             <img className={'profile-snake-left NFP-snake-left'} src= {snake}/>
//                             <img className={'profile-rings NFP-rings'} src= {rings}/>
//                             <img className={'profile-full-hearth NFP-full-hearth winners-videos-img-style'} src= {fullhearth}/>
//                             <img className={'profile-pluse1 NFP-pluse1'} src= {pluse1}/>
//                             <img className={'profile-left-half-ring NFP-left-half-ring img-style-half-winners-videos'} src= {leftring}/>
//                             <img className={'profile-center-hearth NFP-center-hearth display-yes-winners-videos'} src= {centerhearth}/>
//                             <img className={'profile-right-ring NFP-right-ring'} src= {rightRing}/>
//                             <img className={'full-snake NFP-full-snake display-none-winners-videos'} src= {snakefulls}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <main>
//                 <div className={'main-videos'} id={'main-videos'}>
//                     <div className={'main-items-winners-videos'}>
//                         <div className={'global-name-name-winners-videos'}>
//                             <p className={'global-name-biggest-winners-videos'}>Записи розыгрышей</p>
//                             {/* Render videos */}
//                             {Object.entries(videos).map(([date, videoList]) => (
//                                 <div key={date} className={'videos-winners-block-left'}>
//                                     <div className={'asd-winners'}>
//                                     <p className={'right-second-videos-winners-p'}>{date}</p>
//                                     </div>
//                                     <div className={'videos-row'}>
//                                         {videoList.map((video, index) => (
//                                             <div key={index} className={'prizes-items11-gifts-videos-winners'}>
//                                                 <div className={'gifts-content-videos-winners-box11'}>
//                                                     <div className={'full-videos-winners'}>
//                                                         <a href="#" onClick={() => openPopup1(video)} className="video-link">
//                                                             <img className="video-preview-winners" src={preview1} alt="Video Preview"/>
//                                                         </a>
//                                                     </div>
//                                                     <div className={'text-under-videos-winners'}>
//                                                         <a onClick={() => openPopup1(video)} className={'text-under-videos-a-winners'}>
//                                                             {video.title}
//                                                             <br/>
//                                                             {video.prize}
//                                                         </a>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//
//
//             </main>
//             <footer className={'footer'}>
//                 <div className="footer-left">
//                     <div className={'footer-row'}>
//                         <div className={'footer-colm'}>
//                             <img className={'footer-logo'} src={ticketText}/>
//                         </div>
//                     </div>
//                     <div className={'footer-medium'}>
//                         <div className={'footer-row-left'}>
//                             <a href={`${currentDomain}/rules.pdf`} target="_blank">Полные правила</a>
//                         </div>
//                         <div className={'footer-row-left'}>
//                             <a href={`${currentDomain}/1_1_Политика_в_отношении_обработки_ПДн_1.pdf`} target="_blank">Политика
//                                 обработки персональных данных</a>
//                         </div>
//                         <div className={'footer-row-left'}>
//                             <a href={`${currentDomain}/Обработка_персональных_данных_третьими_лицами_3.pdf`}
//                                target="_blank">Обработка персональных данных третьими лицами</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="footer-right">
//                     <div className={'footer-row1'}>
//                         <a>Общий срок проведения акции с «01» февраля 2024 года по «30» апреля 2024. Подробную
//                             информацию об организаторе акции,
//                             о правилах ее проведения, количестве призов по результатам акции, сроках, месте и порядке их
//                             вручения, уточняйте на сайте <a className={"text-nloto"}
//                                                             href={'https://nloto-promo.ru/'}>https://nloto-promo.ru</a> или
//                             по телефону
//                             горячей линии 8 (800) 333-7-333.
//                         </a>
//                     </div>
//                     {/*<div className={'footer-row2'}>*/}
//                     {/*    <a>Лотереи, которые проводятся в соответствии с распоряжением Правительства Российской Федерации от*/}
//                     {/*        29 августа 2019 г. № 1921-р. Срок проведения лотерей – до 29.08.2034 г. Информация об */}
//                     {/*        организаторе лотерей, правилах их проведения, призовом фонде лотерей, количестве призов */}
//                     {/*        или выигрышей, сроках, месте и порядке их получения - на сайте www.nloto.ru и по телефону */}
//                     {/*        8 800 333-7-333. </a>*/}
//                     {/*</div>*/}
//                     <div className={'footer-row3'}>
//                         <a>*Внешний вид подарка может отличаться от изображений, представленных в рекламных материалах.
//                             Лотереи, которые проводятся в соответствии с распоряжением Правительства Российской
//                             Федерации
//                             от 29 августа 2019 г. № 1921-р. Срок проведения лотерей – до 29.08.2034 г.
//                             Информация об организаторе лотерей, правилах их проведения, призовом фонде лотерей,
//                             количестве призов или выигрышей, сроках, месте и порядке их получения - на сайте <a
//                                 className={"text-nloto"} href={'https://nloto.ru/'} target="_blank">www.nloto.ru</a> и
//                             по телефону 8 (800) 333-7-333. </a>
//                     </div>
//                     <div className={'footer-row4'}>
//                         <a>Реклама. Рекламодатель: ООО «Спортивные Лотереи», ОГРН 1195027010386, ИНН 5003133760</a>
//                     </div>
//                 </div>
//
//                 <PopupTicket1/>
//                 <PopupTicket2/>
//                 <PopupTicket3/>
//                 <PopupTicket4/>
//                 <PopupTicket5/>
//                 <PopupVideos/>
//             </footer>
//         </header>
//
//
//     );
// }
