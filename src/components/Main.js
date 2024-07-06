import wintohealth from '../image/wintohealth.png'
import snake from '../image/snake.png'
import man from '../image/main-man.png'
import rings from '../image/ring.png'
import snakefulls from '../image/full-snake.png'
import fullhearth from '../image/full-hearth.png'
import plusemain from '../image/pluse.png'
import pluse1 from '../image/pluse1.png'
import leftring from '../image/half-ring.png'
import centerhearth from '../image/center-hearth.png'
import rightRing from '../image/right-ring.png'
import rightHearth from '../image/right-hearth.png'
import scrollDown from '../image/scroll-down.png'
import starsMan from '../image/stars-man.png'
import ticketDown from '../image/ticket-down.png'
import mainTextRedmond from '../image/main-text-redmond.png'
import mainRedmond from '../image/main-redmond.png'
import How from "./How";
import Prizes from "./Prizes";
import Winners from "./Winners";
import Questions from "./Questions";
import Footer from "./Footer";
import PopupTicket1 from "./PopupTicket/PopupTicket1";
import PopupTicket2 from "./PopupTicket/PopupTicket2";
import PopupTicket3 from "./PopupTicket/PopupTicket3";
import PopupTicket4 from "./PopupTicket/PopupTicket4";
import PopupTicket5 from "./PopupTicket/PopupTicket5";
import Popup from "./PopupReg/Popup";
import {useState} from "react";
import PopupPasswordCopy from "./PopupReg/PopupPasswordCopy";


function openPopup2() {
    document.getElementById("popup-ticket1").style.display = "block";
}


export default function Main (props) {
    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    const handleOnClick = () => {
        if (isAuthenticated) {
            openPopup2(); // Открываем попап для зарегистрированного пользователя
            document.body.classList.add("no-scroll");
            document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
            document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
        } else {
            openPopup();

        }
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    function openPopupEnd() {
        document.getElementById("popup-end").style.display = "block";
        document.body.classList.add("no-scroll");
        document.body.style.overflow = "hidden"; // Заблокируйте прокрутку страницы
        document.documentElement.style.overflow = "hidden"; // Заблокируйте прокрутку страницы
    }
    function openPopupPasswordCopy() {
        document.getElementById("popup-password-copy").style.display = "block";
    }

    return (
        <main>
            <div className={'main'} id={'main'}>
                    <div className={'main-items'}>
                        <div className={'bottle-left'}>
                            <img className={'bottle-float-left'} src= {wintohealth}/>
                        </div>
                        <div className={'main-text-text'}>
                            {/*<div className={'main-text'}> Купите билет и получите гарантированный приз от 585 ЗОЛОТОЙ! Выиграйте медицинскую страховку!</div>*/}
                            <div className={'main-text'}>
                                <div className={'buy-block'}>
                                    <a className={'buy-block-a'}>КУПИТЕ</a>
                                    <p className={'buy-block-p'}>БИЛЕТ<br></br> с 1.02.2024 <br></br>по 31.03.2024</p>
                                </div>
                                <div className={'take-block'}>
                                    <a className={'take-block-a'}>ПОЛУЧИТЕ</a>
                                    <p className={'take-block-p'}>Гарантированный подарок от 585 золотой*</p>
                                </div>
                                <div className={'win-block'}>
                                    <a className={'win-block-a'}>ВЫИГРАЙТЕ</a>
                                    <p className={'win-block-p'}>Медицинскую <br></br>страховку <br></br>каждый день</p>
                                </div>
                            </div>
                            <a onClick={handleOnClick} className={'button-animation-text'}> <b>Принять участие в
                                акции</b> </a>
                            {isPopupOpen && (
                                <Popup isOpen={isPopupOpen} closeModal={closePopup} />
                            )}
                        </div>
                        <div className={'right-float-img'}>
                            <img className={'snake-left'} src= {snake}/>
                            <img className={'man'} src= {man}/>
                            <img className={'rings'} src= {rings}/>
                            <img className={'full-snake'} src= {snakefulls}/>
                            <img className={'full-hearth'} src= {fullhearth}/>
                            <img className={'pluse1'} src= {pluse1}/>
                            <img className={'pluse2'} src= {plusemain}/>
                            <img className={'left-half-ring'} src= {leftring}/>
                            <img className={'center-hearth'} src= {centerhearth}/>
                            <img className={'right-ring'} src= {rightRing}/>
                            <img className={'right-hearth'} src= {rightHearth}/>
                            <img className={'scroll-down'}  src= {scrollDown}/>
                            <img className={'stars-man'}  src= {starsMan}/>
                        </div>
                </div>
            </div>
            <How/>
            <Prizes/>
            <Winners/>
            <Questions/>
        <Footer/>
            <PopupPasswordCopy/>
            <PopupTicket1/>
            <PopupTicket2/>
            <PopupTicket3/>
            <PopupTicket4/>
            <PopupTicket5/>
        </main>

    )
}