import howLeftIcon from '../image/img_85.png'
import howCenterIcon from '../image/img_111.png'
import wintohealth from "../image/wintohealth.png";
import Popup from "./PopupReg/Popup";
import React, {useEffect, useState} from "react";
import Test from "./test";
import {useInView} from 'react-intersection-observer';
import wavesblur from "../image/img_104.png";
import PopupE from "./PopupReg/PopupE";


export default function How (props) {


    const { ref: step1Ref, inView: step1InView
    } = useInView({ threshold: 0.3 });
    const { ref: step4Ref, inView: step4InView
    } = useInView({ threshold: 0 });
    const { ref: step2Ref, inView: step2InView
    } = useInView({ threshold: 0 });
    const { ref: step3Ref, inView: step3InView
    } = useInView({ threshold: 0 });


    const [isPrizesTextVisible, setIsPrizesTextVisible] = useState(false);
    const [isComponentVisible, setIsComponentVisible] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [prizesTextRef, prizesTextInView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        console.log("inView:", inView);
        console.log("Component visible:", isComponentVisible);
    }, [inView, isComponentVisible]);

    useEffect(() => {
        if (prizesTextInView) {
            setIsPrizesTextVisible(true);
        }
    }, [prizesTextInView]);
    function openPopup2() {
        document.getElementById("popup-ticket1").style.display = "block";
        document.body.classList.add("no-scroll");
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
    }
    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    const handleOnClick = () => {
        if (isAuthenticated) {
            openPopupTestSecond();
        } else {
            openPopup();
        }
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpen5, setIsPopupOpen5] = useState(false);
    const [showPopupE2, setShowPopupE2] = useState(false);

    const openPopupTestSecond = () => {
        setShowPopupE2(true);
    };


    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    };
    const openPopup5 = () => {
        setIsPopupOpen5(true);
    };

    const closePopup5 = () => {
        setIsPopupOpen5(false);
    };
        const [hovered, setHovered] = useState(false);

        const handleMouseEnter = () => {
            setHovered(true);
        };

        const handleMouseLeave = () => {
            setHovered(false);
        };
    const [hovered1, setHovered1] = useState(false);

    const handleMouseEnter1 = () => {
        setHovered1(true);
    };

    const handleMouseLeave1 = () => {
        setHovered1(false);
    };
    const [hovered2, setHovered2] = useState(false);

    const handleMouseEnter2 = () => {
        setHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setHovered2(false);
    };
    const [hovered3, setHovered3] = useState(false);

    const handleMouseEnter3 = () => {
        setHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setHovered3(false);
    };
    const [hovered4, setHovered4] = useState(false);

    const handleMouseEnter4 = () => {
        setHovered4(true);
    };

    const handleMouseLeave4 = () => {
        setHovered4(false);
    };
    const [step1Visible, setStep1Visible] = useState(false);
    const [step2Visible, setStep2Visible] = useState(false);
    const [step3Visible, setStep3Visible] = useState(false);
    const [step4Visible, setStep4Visible] = useState(false);

    useEffect(() => {
        if (step1InView) setStep1Visible(true);
    }, [step1InView]);

    useEffect(() => {
        if (step2InView) setStep2Visible(true);
    }, [step2InView]);
    useEffect(() => {
        if (step4InView) setStep4Visible(true);
    }, [step4InView]);

    useEffect(() => {
        if (step3InView) setStep3Visible(true);
    }, [step3InView]);
        return (
            <div className={'how'} id={'how'}>
                <img className={'man-tablet waves-blur'} src={wavesblur}/>
                <div className={'wrapper-how'}>
                    <div className={'items-block-how'}>
                        <div className={'how-bottle-left'}>
                            <img className={'how-bottle-float-left'} src={wintohealth}/>
                        </div>
                        <div className={'how-main-text-text'}>
                            <div className={'how-main-text'}>
                                <div className={'buy-block-1'}>
                                    <a className={'buy-block-a-1'}>КУПИТЕ</a>
                                    <p className={'buy-block-p-1'}>БИЛЕТ <br></br>C 1.02.2024 по 31.03.2024</p>
                                </div>
                                <div className={'take-block-1'}>
                                    <a className={'take-block-a-1'}>ПОЛУЧИТЕ</a>
                                    <p className={'take-block-p-1'}>Гарантированный подарок от 585 золотой*</p>
                                </div>
                                <div className={'win-block-1'}>
                                    <a className={'win-block-a-1'}>ВЫИГРАЙТЕ</a>
                                    <p className={'win-block-p-1'}>Медицинскую <br></br>страховку <br></br>каждый день
                                    </p>
                                </div>

                            </div>
                            <a className={'how-button-animation-text'} onClick={handleOnClick}> <b>Принять участие в
                                акции</b>
                            </a>
                            {isPopupOpen5 && (
                                <Popup isOpen={isPopupOpen5} closeModal={closePopup5}/>
                            )}
                        </div>

                        <div className={'prizes-text'}>
                            Как участвовать?
                        </div>


                        <div className={'prizes-items'}>
                            <div ref={step1Ref} className={`prizes-content-box1 ${step1Visible ? "fade-in" : ""}`}>
                                <img className={'how-left-icon'} src={howLeftIcon}/>
                                <div className={'prizes-content-box-title-bot1'}>
                                    <p className={'how-tickes-img-p'}> Шаг 1. <br></br> Купите лотерейный билет </p>
                                    <p className={'how-tickes-img-p-right-how'}>
                                        Покупайте тиражные лотерейные билеты и купоны на сумму от 300 ₽ в отделениях
                                        «Почты России»
                                    </p>


                                    <div className={'prizes-content-box-title-bot1-second'}>

                                        <div className={'how-tickets-img-second-2'}>

                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div ref={step2Ref} className={`prizes-content-box2 ${step2Visible ? "fade-in" : ""}`}>
                                <div className={'prizes-content-box-title-bot2'}>
                                    <p className={'how-center-p-text-stap2 bonus-steps12'}> Шаг 2.
                                        <br></br>
                                    </p>
                                    <p className={'how-center-p-text-stap2-second'}> Зарегистрируйтесь или авторизуйтесь
                                        на
                                        сайте nloto-promo.ru</p>
                                    <p className={'how-center-p-text-first'}>
                                        Добавьте* номер приобретённого лотерейного билета с 01.09.2024 до 31.10.2024г.,
                                        используя кнопку «Зарегистрировать билет»
                                    </p>

                                    <p className={'how-center-p-text'}><label className={'left-stap'}>*</label> В Акции
                                        участвуют лотерейные билеты, купленные
                                        в отделении Почты России. <br></br>
                                        Если при покупке Вы указали <b>номер мобильного телефона</b>, то регистрировать
                                        такой
                                        лотерейный билет не нужно. После регистрации и/или авторизации на промо-сайте
                                        акции при совпадении номера мобильного телефона лотерейный билет автоматически
                                        зарегистрируется в акции и будет отображен в Вашем личном кабинете</p>
                                </div>
                                <img className={'how-center-icon'} src={howCenterIcon}/>
                            </div>
                            <div ref={step3Ref}
                                 className={`prizes-content-box-title-bot3 ${step3Visible ? "fade-in" : ""}`}>
                                <p className={'how-center-p-text-stap2'}> Шаг 3.
                                    <br></br>
                                    <p className={'how-center-p-text-stap2-second bonus-how'}> Участвуйте в розыгрышах и
                                        получайте призы</p>
                                </p>
                                <p className={'how-center-p-text-first bonus-style'}>
                                    В личном кабинете нажмите кнопку «Крутить» и получите промокод
                                    на лотерейный билет от «Национальная Лотерея».
                                </p>
                            </div>
                        </div>
                        <div ref={step4Ref} className={`prizes-button ${step4Visible ? "fade-in" : ""}`}>
                        <a onClick={handleOnClick} className={`prizes-button-check`}>
                                <b>Зарегистрировать билет</b></a>
                            {showPopupE2 && <PopupE isOpen={showPopupE2} closeModal={() => setShowPopupE2(false)} />}
                            {isPopupOpen && (
                                <Popup isOpen={isPopupOpen} closeModal={closePopup}/>
                            )}
                            <div className="spin-block">
                                <Test/>
                            </div>

                        </div>
                        <div className={'steps-container'}>
                            <div className={'first-step'}>1.</div>
                            <div className="text-block-1">Покупайте тиражные лотерейные билеты и купоны на сумму от 300 ₽ в отделениях «Почты России» и участвуйте в розыгрыше гарантированных призов
                            </div>
                            <div className={'second-step'}>2.</div>
                            <div className="text-block-2">Зарегистрируйте приобретенные лотерейные билеты на сайте
                                промо-акции и испытайте удачу в рулетке с подарками в вашем личном кабинете
                            </div>
                            <div className={'third-step'}>3.</div>
                            <div className="text-block-3">Нажмите кнопку «Крутить» и получите промокод на лотерейный
                                билет от «Национальная Лотерея»
                            </div>
                        </div>

                    </div>

                    <div>
                    </div>
                </div>
            </div>

        )

}