import howLeftIcon from '../image/img_85.png'
import howCenterIcon from '../image/img_111.png'
import howRightIcon from '../image/how-right-icon.png'
import snakeHow from "../image/snake1.png";
import howAppstore from "../image/how-appstore_.png";
import howGooglePlay from "../image/how-googleplay_.png";
import howFull4 from "../image/how-full4-img.png";
import howFull6 from "../image/8_march.jpg";
import howFull1 from "../image/img_59.png";
import howFull2 from "../image/img_62.png";
import howFull3 from "../image/img_60.png";
import howFull5 from "../image/img_61.png";
import magnit from "../image/magnit_.png";
import magnitNew from "../image/magnit___.png";
import lenta from "../image/lenta_.png";
import lentaNew from "../image/lenta___.png";
import diksi from "../image/diksi_.png";
import diksiNew from "../image/diksi___.png";
import pochtaNew from "../image/russianpost___.png";
import perekrestok from "../image/perekrestok_.png";
import ka5 from "../image/5ka_.png";
import mini1 from "../image/img_63.png";
import mini2 from "../image/img_64.png";
import mini3 from "../image/img_65.png";
import mini4 from "../image/img_66.png";
import mini5 from "../image/img_67.png";
import mini6 from "../image/img_68.png";
import mini7 from "../image/img_69.png";
import ka5New from "../image/5ka___.png";
import pochta from "../image/russianpost.png";
import leftHow from "../image/pluse-how.png";
import rightHows from "../image/right-how.png";
import wintohealth from "../image/wintohealth.png";
import img22 from "../image/img_22.png"
import img23 from "../image/img_23.png"
import img24 from "../image/img_24.png"
import img25 from "../image/img_25.png"
import img26 from "../image/img_26.png"
import img27 from "../image/img_27.png"
import img28 from "../image/img_28.png"
import img29 from "../image/img_29.png"
import img30 from "../image/img_30.png"
import img31 from "../image/img_31.png"
import img32 from "../image/img_32.png"
import img33 from "../image/img_33.png"
import Popup from "./PopupReg/Popup";
import React, {useEffect, useState} from "react";
import Test from "./test";
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';
import Prizes from "./Prizes";
import Questions from "./Questions";
import Footer from "./Footer";
import wavesblur from "../image/img_104.png";


export default function How (props) {
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
        if (inView) {
            setIsComponentVisible(true);
        }
    }, [inView]);

    useEffect(() => {
        if (prizesTextInView) {
            setIsPrizesTextVisible(true);
        }
    }, [prizesTextInView]);
    function openPopup2() {
        document.getElementById("popup-ticket1").style.display = "block";
        document.body.classList.add("no-scroll");
        document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
        document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
    }
    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    const handleOnClick = () => {
        if (isAuthenticated) {
            openPopup2(); // Открываем попап для зарегистрированного пользователя
        } else {
            openPopup();
        }
    };
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpen5, setIsPopupOpen5] = useState(false);


    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        document.body.style.overflow = ""; // Разблокируйте прокрутку страницы
        document.documentElement.style.overflow = ""; // Разблокируйте прокрутку страницы
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
                            {/*<img className={'img-22'} src={img22}/>*/}
                            {/*<img className={'img-23'} src={img23}/>*/}
                            {/*<img className={'img-24'} src={img24}/>*/}
                            {/*<img className={'img-25'} src={img25}/>*/}
                            {/*<img className={'img-26'} src={img26}/>*/}
                            {/*<img className={'img-27'} src={img27}/>*/}
                            {/*<img className={'img-28'} src= {img28}/>*/}
                            {/*<img className={'img-29'} src= {img29}/>*/}
                            {/*<img className={'img-30'} src= {img30}/>*/}
                            {/*<img className={'img-31'} src= {img31}/>*/}
                            {/*<img className={'img-32'} src= {img32}/>*/}
                            {/*<img className={'img-33'} src= {img33}/>*/}
                            <div className={'prizes-content-box1'}>
                                <img className={'how-left-icon'} src={howLeftIcon}/>
                                {/*<p className={'how-left-icon-text'}>1</p>*/}
                                <div className={'prizes-content-box-title-bot1'}>
                                    <p className={'how-tickes-img-p'}> Шаг 1. <br></br> Купите лотерейный билет </p>
                                    <p className={'how-tickes-img-p-right-how'}>
                                        Покупайте лотерейные билеты на сумму от 300 ₽ в отделениях «Почты
                                        России».
                                    </p>
                                    {/*<div className={'how-tickets-img'}>*/}
                                    {/*    <div className="how-full44-img">*/}
                                    {/*        <a href="https://nloto.ru/lottery/mechtallion" className={"#"}*/}
                                    {/*           target="_blank"><img*/}
                                    {/*            src={howFull3}/></a>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="how-full4-img for-test-img-test">*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-12x24-2" target="_blank"><img*/}
                                    {/*            src={howFull5}/></a>*/}
                                    {/*    </div>*/}
                                    {/*    /!*<div className="how-full4-img for-test-img">*!/*/}
                                    {/*    /!*    <a href={"https://nloto.ru/lottery/bingo-4x4-womanDay2024"} className={"#"} target="_blank"><img src={howFull6}/></a>*!/*/}
                                    {/*    /!*</div>*!/*/}
                                    {/*    <div className="how-full444-img for-test-img-second">*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-5x50-f2" target="_blank"><img*/}
                                    {/*            src={howFull2}/></a>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="how-full4444-img for-test-img-third">*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-4x20" target="_blank"><img*/}
                                    {/*            src={howFull1}/></a>*/}
                                    {/*    </div>*/}
                                    {/*    <div className={'how-tickets-img-1'}>*/}
                                    {/*        <div className={'how-full3-img test-for-for-need'}>*/}
                                    {/*            <a href="https://nloto.ru/lottery/mechtallion" className={"#"}*/}
                                    {/*               target="_blank"><img*/}
                                    {/*                src={howFull3}/></a>*/}
                                    {/*        </div>*/}
                                    {/*        <div className={'how-full2-img'}>*/}
                                    {/*            <a href="https://nloto.ru/lottery/digital-5x50-f2" target="_blank"><img*/}
                                    {/*                src={howFull2}/></a>*/}
                                    {/*        </div>*/}
                                    {/*        /!*<div className={'how-full1-img how-full1-img-test'}>*!/*/}
                                    {/*        /!*    <a href={"https://nloto.ru/lottery/bingo-4x4-womanDay2024"} className={"#"} target="_blank"><img*!/*/}
                                    {/*        /!*        src={howFull6}/></a>*!/*/}
                                    {/*        /!*</div>*!/*/}

                                    {/*    </div>*/}

                                    {/*</div>*/}
                                    {/*<div className={'how-tickets-img-2'}>*/}
                                    {/*    /!*<div className={'how-full2-img'}>*!/*/}
                                    {/*    /!*    <a href="https://nloto.ru/lottery/digital-5x50-f2" target="_blank"><img*!/*/}
                                    {/*    /!*        src={howFull2}/></a>*!/*/}
                                    {/*    /!*</div>*!/*/}
                                    {/*    <div className={'how-full5-img'}>*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-12x24-2" target="_blank"><img*/}
                                    {/*            src={howFull5}/> </a>*/}
                                    {/*    </div>*/}
                                    {/*    <div className={'how-full1-img'}>*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-4x20" target="_blank"><img*/}
                                    {/*            src={howFull1}/></a>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className={'how-tickets-img-3'}>*/}
                                    {/*    /!*<div className={'how-full1-img'}>*!/*/}
                                    {/*    /!*    <a href="https://nloto.ru/lottery/digital-4x20" target="_blank"><img*!/*/}
                                    {/*    /!*        src={howFull1}/></a>*!/*/}
                                    {/*    /!*</div>*!/*/}
                                    {/*</div>*/}

                                    {/*<div className={'how-tickets-img'}>*/}
                                    {/*    <div className="how-full44-img for-test-img-test-mini">*/}
                                    {/*        <a href="https://nloto.ru/lottery/mechtallion" className={"#"}*/}
                                    {/*           target="_blank"><img*/}
                                    {/*            src={mini1}/></a>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="how-full4-img for-test-img-test-mini2">*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-12x24-2" target="_blank"><img*/}
                                    {/*            src={mini2}/></a>*/}
                                    {/*    </div>*/}
                                    {/*    /!*<div className="how-full4-img for-test-img">*!/*/}
                                    {/*    /!*    <a href={"https://nloto.ru/lottery/bingo-4x4-womanDay2024"} className={"#"} target="_blank"><img src={howFull6}/></a>*!/*/}
                                    {/*    /!*</div>*!/*/}
                                    {/*    <div className="how-full444-img for-test-img-second-mini">*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-5x50-f2" target="_blank"><img*/}
                                    {/*            src={mini3}/></a>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="how-full4444-img for-test-img-third-mini">*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-4x20" target="_blank"><img*/}
                                    {/*            src={mini4}/></a>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="how-full4444-img for-test-img-4-mini">*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-4x20" target="_blank"><img*/}
                                    {/*            src={mini5}/></a>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="how-full4444-img for-test-img-5-mini">*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-4x20" target="_blank"><img*/}
                                    {/*            src={mini6}/></a>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="how-full4444-img for-test-img-6-mini">*/}
                                    {/*        <a href="https://nloto.ru/lottery/digital-4x20" target="_blank"><img*/}
                                    {/*            src={mini7}/></a>*/}
                                    {/*    </div>*/}

                                    {/*</div>*/}


                                    <div className={'prizes-content-box-title-bot1-second'}>
                                        {/*<div className={'how-tickets-img-second'}>*/}
                                        {/*<div className="how-full44-img-second" onMouseEnter={handleMouseEnter3}*/}
                                        {/*         onMouseLeave={handleMouseLeave3}>*/}
                                        {/*        <a><img*/}
                                        {/*            src={hovered3 ? magnitNew : magnit}/></a>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="how-full4-img-second" onMouseEnter={handleMouseEnter1}*/}
                                        {/*         onMouseLeave={handleMouseLeave1}>*/}
                                        {/*        <a className={"#"}><img src={hovered1 ? ka5New : ka5}/></a>*/}
                                        {/*    </div>*/}
                                        {/*    /!*<div className="how-full412-img-second">*!/*/}
                                        {/*    /!*    <a className={"#"}><img src={perekrestok}/></a>*!/*/}
                                        {/*    /!*</div>*!/*/}

                                        {/*    <div className="how-full444-img-second" onMouseEnter={handleMouseEnter2}*/}
                                        {/*         onMouseLeave={handleMouseLeave2}>*/}
                                        {/*        <a><img*/}
                                        {/*            src={hovered2 ? lentaNew : lenta}/></a>*/}
                                        {/*    </div>*/}
                                        {/*    /!*<div className="how-full44445-img-second"  onMouseEnter={handleMouseEnter}*!/*/}
                                        {/*    /!*     onMouseLeave={handleMouseLeave}>*!/*/}
                                        {/*    /!*    <a><img src={hovered ? diksiNew : diksi}/></a>*!/*/}
                                        {/*    /!*</div>*!/*/}
                                        {/*    <div className="how-full4444-img-second" onMouseEnter={handleMouseEnter4}*/}
                                        {/*         onMouseLeave={handleMouseLeave4}>*/}
                                        {/*        <a><img*/}
                                        {/*            src={hovered4 ? pochtaNew : pochta}/></a>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div className={'how-tickets-img-second-1'}>*/}
                                        {/*    <div className={'how-tickets-img-1-test'}>*/}
                                        {/*        <div className={'how-full2-img bonus-magnit'}>*/}
                                        {/*            <a><img*/}
                                        {/*                src={magnit}/></a>*/}
                                        {/*        </div>*/}
                                        {/*        <div className={'how-full1-img bonus-ka5'}><img*/}
                                        {/*            src={ka5}/>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <div className={'how-tickets-img-second-2'}>
                                            {/*<div className={'how-full5-img bonus-perek'}>*/}
                                            {/*    <a><img*/}
                                            {/*        src={perekrestok}/> </a>*/}
                                            {/*</div>*/}
                                            {/*<div className="how-full1-img bonus-pochta">*/}
                                            {/*    <a><img*/}
                                            {/*        src={pochta}/></a>*/}
                                            {/*</div>*/}

                                            {/*<div className={'how-full3-img bonus-lenta'}>*/}
                                            {/*    <a className={"#"}><img*/}
                                            {/*        src={lenta}/></a>*/}
                                            {/*</div>*/}
                                        </div>
                                        {/*<div className={'how-tickets-img-second-3'}>*/}
                                        {/*    /!*<div className={'how-tickets-img-3'}>*!/*/}
                                        {/*    /!*    /!*<div className={'how-full1-img bonus-diksi'}>*!/*!/*/}
                                        {/*    /!*    /!*    <a className={"/#"}><img*!/*!/*/}
                                        {/*    /!*    /!*        src={diksi}/></a>*!/*!/*/}
                                        {/*    /!*    /!*</div>*!/*!/*/}
                                        {/*    /!*    <div className="how-full1-img bonus-pochta">*!/*/}
                                        {/*    /!*        <a><img*!/*/}
                                        {/*    /!*            src={pochta}/></a>*!/*/}
                                        {/*    /!*    </div>*!/*/}
                                        {/*    /!*</div>*!/*/}
                                        {/*</div>*/}
                                    </div>
                                    {/*<p className={'how-first-li-2'}>В фирменных точках продаж «Национальная лотерея», на*/}
                                    {/*    сайте <a href={"https://nloto.ru/"} className={'text-nloto'}*/}
                                    {/*             target="_blank">nloto.ru</a> или через мобильное приложение. Скачать:</p>*/}
                                    {/*<div className={'how-download-img'}>*/}
                                    {/*    <a href={'https://nloto.ru/download-app?utm_source=main&utm_medium=bottom&utm_campaign=button'}*/}
                                    {/*       target="_blank" className={"/#"}><img className={'how-appstore'} src={howAppstore}/></a>*/}
                                    {/*    <a href={'https://nloto.ru/download-app?utm_source=main&utm_medium=bottom&utm_campaign=button'}*/}
                                    {/*       target="_blank" className={"/#"}><img className={'how-googleplay'}*/}
                                    {/*                                             src={howGooglePlay}/></a>*/}
                                    {/*</div>*/}
                                </div>

                            </div>
                            <div className={'prizes-content-box2'}>
                                {/*<p className={'how-left-icon-text second'}>2</p>*/}

                                <div className={'prizes-content-box-title-bot2'}>
                                    <p className={'how-center-p-text-stap2 bonus-steps12'}> Шаг 2.
                                        <br></br>
                                    </p>
                                    <p className={'how-center-p-text-stap2-second'}> Зарегистрируйтесь или авторизуйтесь
                                        на
                                        сайте nloto-promo.ru</p>
                                    <p className={'how-center-p-text-first'}>
                                        Добавьте* номер приобретенного лотерейного билета с 01.08.2024 начала
                                        и до 30.09.25, используя кнопку "Зарегистрировать билет"
                                    </p>

                                    <p className={'how-center-p-text'}> В Акции участвуют лотерейные билеты, купленные
                                        в отделении Почты России. <br></br>
                                        Если при покупке Вы указали <b>номер мобильного телефона</b>, то регистрировать
                                        такой
                                        лотерейный билет не нужно. После регистрации и/или авторизации на промо-сайте
                                        акции при совпадении номера мобильного телефона лотерейный билет автоматически
                                        зарегистрируется в акции и будет отображен в Вашем личном кабинете</p>
                                </div>
                                <img className={'how-center-icon'} src={howCenterIcon}/>
                            </div>
                            <div className={'prizes-content-box-title-bot3'}>
                                <p className={'how-center-p-text-stap2'}> Шаг 3.
                                    <br></br>
                                    <p className={'how-center-p-text-stap2-second bonus-how'}> Участвуйте в розыгрышах и
                                        получайте призы</p>
                                </p>
                                <p className={'how-center-p-text-first bonus-style'}>
                                    Нажмите кнопку «Крутить» и получите промокод
                                    на лотерейный билет от «Национальная Лотерея».
                                </p>
                            </div>
                        </div>
                        <div className={'prizes-button'}>
                            <a onClick={handleOnClick} className={'prizes-button-check'}>
                                <b>Зарегистрировать билет</b></a>
                            {isPopupOpen && (
                                <Popup isOpen={isPopupOpen} closeModal={closePopup}/>
                            )}
                            <div className="spin-block">
                                <Test/>
                            </div>

                        </div>
                        <div className={'steps-container'}>
                            <div className={'first-step'}>1.</div>
                            <div className="text-block-1">Покупайте лотерейные билеты на сумму не менее 300 рублей и
                                становитесь участником розыгрышей ценных призов
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