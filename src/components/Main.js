import wintohealth from '../image/wintohealth.png'
import img55 from '../image/img_55.png'
import man from '../image/img_56.png'
import manisok from '../image/img_105.png'
import manisokes from '../image/img_110.png'
import waves from '../image/img_101.png'
import wavesblur from '../image/img_104.png'
import logopochta from '../image/img_57.png'
import How from "./How";
import Prizes from "./Prizes";
import Questions from "./Questions";
import Footer from "./Footer";
import PopupTicket1 from "./PopupTicket/PopupTicket1";
import PopupTicket2 from "./PopupTicket/PopupTicket2";
import PopupTicket3 from "./PopupTicket/PopupTicket3";
import PopupTicket4 from "./PopupTicket/PopupTicket4";
import PopupTicket5 from "./PopupTicket/PopupTicket5";
import Popup from "./PopupReg/Popup";
import React, {useEffect, useRef, useState} from "react";
import PopupPasswordCopy from "./PopupReg/PopupPasswordCopy";
import {useLocation} from "react-router-dom";
import PopupTicket6 from "./PopupTicket/PopupTickets6";
import PopupE from "./PopupReg/PopupE";
import {useInView} from "react-intersection-observer";


function openPopup2() {
    document.getElementById("popup-ticket1").style.display = "block";
}


export default function Main (props) {
    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;

    const [showPopupE2, setShowPopupE2] = useState(false);

    const openPopupTestSecond = () => {
        setShowPopupE2(true);
    };
    const handleOnClick = () => {
        if (isAuthenticated) {
            openPopupTestSecond(); // Открываем попап для зарегистрированного пользователя
            // document.body.classList.add("no-scroll");
            // document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
            // document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
        } else {
            openPopup();

        }
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [showPopupE, setShowPopupE] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const openPopupTest = () => {
        setShowPopupE(true);
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

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const activeSection = params.get("section"); // Получаем значение параметра "section" из URL
    const faqqRef = useRef(null);

    useEffect(() => {
        if (activeSection === "faq" && faqqRef.current) {
            setTimeout(() => {
                faqqRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);

        }
    }, [activeSection]);
    const { ref: manRef, inView: manInView }
        = useInView({ threshold: 0.3 });

    return (
        <main>
            <div className={'main'} id={'main'}>
                <div className={'main-items'}>
                    {/*<div className={'bottle-left'}>*/}
                    {/*    <img className={'bottle-float-left'} src={wintohealth}/>*/}
                    {/*</div>*/}
                    {/*<div className="myElement">*/}
                    {/*    <img className={'bottle-float-left main-test-55'} src={img55}/>*/}
                    {/*</div>*/}
                    <div className={'myELementSecond'}>
                        <img className={`man ${manInView ? "fade-in" : ""}`} src={man} ref={manRef}/>
                        <img className={'man-mobile'} src={manisok}/>
                        <img className={'man-tablet'} src={manisokes}/>
                        {/*<div className={'overlay'}></div>*/}
                        {/*<div className={'overlay-low'}></div>*/}
                    </div>
                    <div className={'main-text-text'}>
                        <img className={'man logo-pochta'} src={logopochta}/>
                        <img className={'man waves'} src={waves}/>
                        <img className={'man waves-blur'} src={wavesblur}/>
                        <img className={'man-tablet logo-pochta'} src={logopochta}/>
                        <img className={'man-tablet waves'} src={waves}/>
                        <div className={'main-text-act'}> Акция «ваш билетик»
                        </div>
                        <div className={'main-text'}> Покупайте лотерейные билеты в отделениях «Почты России»*
                            и участвуйте в розыгрыше призов от Национальной Лотереи
                            <p className={'how-tickes-img-p-right'}>* Города-участники: Москва, Санкт-Петербург,
                                Краснодар, Екатеринбург</p>
                        </div>

                        {/*<div className={'main-text'}>*/}
                        {/*    <div className={'buy-block'}>*/}
                        {/*        <a className={'buy-block-a'}>КУПИТЕ</a>*/}
                        {/*        <p className={'buy-block-p'}>БИЛЕТ<br></br> с 1.02.2024 <br></br>по 31.03.2024</p>*/}
                        {/*    </div>*/}
                        {/*    <div className={'take-block'}>*/}
                        {/*        <a className={'take-block-a'}>ПОЛУЧИТЕ</a>*/}
                        {/*        <p className={'take-block-p'}>Гарантированный подарок от 585 золотой*</p>*/}
                        {/*    </div>*/}
                        {/*    <div className={'win-block'}>*/}
                        {/*        <a className={'win-block-a'}>ВЫИГРАЙТЕ</a>*/}
                        {/*        <p className={'win-block-p'}>Медицинскую <br></br>страховку <br></br>каждый день</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <a onClick={handleOnClick} className={'button-animation-text'}> <b>Участвовать в
                            акции</b> </a>
                        {showPopupE2 && <PopupE isOpen={showPopupE2} closeModal={() => setShowPopupE2(false)} />}
                        {isPopupOpen && (
                            <Popup isOpen={isPopupOpen} closeModal={closePopup}/>
                        )}
                    </div>
                    <div className={'right-float-img'}>
                        {/*<img className={'snake-left'} src={snake}/>*/}
                        {/*<img className={'man'} src={man}/>*/}
                        {/*<img className={'rings'} src={rings}/>*/}
                        {/*<img className={'full-snake'} src={snakefulls}/>*/}
                        {/*<img className={'full-hearth'} src={fullhearth}/>*/}
                        {/*<img className={'pluse1'} src={pluse1}/>*/}
                        {/*<img className={'pluse2'} src={plusemain}/>*/}
                        {/*<img className={'left-half-ring'} src={leftring}/>*/}
                        {/*<img className={'center-hearth'} src={centerhearth}/>*/}
                        {/*<img className={'right-ring'} src={rightRing}/>*/}
                        {/*<img className={'right-hearth'} src={rightHearth}/>*/}
                        {/*<img className={'scroll-down'} src={scrollDown}/>*/}
                        {/*<img className={'stars-man'} src={starsMan}/>*/}
                    </div>
                </div>
            </div>
                <How/>
                <Prizes/>
                {/*<Winners/>*/}
            <div className={'items-block-how qouest'}>
                <div className={'question-block'} id={'faq'} ref={faqqRef}>Вопросы и ответы</div>
                <Questions/>
            </div>
                <Footer/>
                <PopupPasswordCopy/>
                <PopupTicket1/>
                <PopupTicket2/>
                <PopupTicket3/>
                <PopupTicket4/>
                <PopupTicket5/>
            <PopupTicket6/>
        </main>


)
}