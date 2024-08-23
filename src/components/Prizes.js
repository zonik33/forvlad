import prizesLeft from '../image/prizes-left.png'
import prizesCenter from '../image/prizes-center.png'
import prizesCenterCard from '../image/mv-card.png'
import prizesRight from '../image/redmond-prizes.png'
import bgImagese from '../image/bg-image.png'
import whiteRedmond from '../image/white-redmond-prizes.png'
import prizesRing from '../image/img_11.png'
import prizesFromLeft from '../image/prizes-from-left.png'
import prizesRightPluse from '../image/img_2.png'
import prizesRightHearth from '../image/img_10.png'
import prizesRightSnake from '../image/img_5.png'
import prizesRightPlusePluse from '../image/img_6.png'
import prizesRightHalfRing from '../image/img_7.png'
import prizesLeftHearth from '../image/img_8.png'
import prizesLeftFullHearth from '../image/img_9.png'
import prizesSnakeInBlock from '../image/img_1.png'
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {CSSTransition} from "react-transition-group";
import mini1 from "../image/img_113.png";
import mini2 from "../image/img_64.png";
import mini3 from "../image/img_65.png";
import mini4 from "../image/img_66.png";
import mini5 from "../image/img_87.png";
import mini6 from "../image/img_123.png";
import mini7 from "../image/img_89.png";
import howFull1 from "../image/img_112.png";
import howFull2 from "../image/img_91.png";
import howFull3 from "../image/img_94.png";
import howFull5 from "../image/img_124.png";
import howFull6 from "../image/img_114.png";

export default function Prizes (props) {

    function openPopup() {
        document.getElementById("popup").style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    function openPopup2() {
        document.getElementById("popup2").style.display = "block";
    }
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const activeSection = params.get("section"); // Получаем значение параметра "section" из URL

    const prizesRef = useRef(null);
    const winnersRef = useRef(null);

    useEffect(() => {
        if (activeSection === "prizes" && prizesRef.current) {
            setTimeout(() => {
                prizesRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        } else if (activeSection === "winners" && winnersRef.current) {
            setTimeout(() => {
                winnersRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        } else if (activeSection === "faq" && winnersRef.current) {
            setTimeout(() => {
                winnersRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        } else if (activeSection === "question-here" && winnersRef.current) {
            setTimeout(() => {
                winnersRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    }, [activeSection]);
    const [isComponentVisibled, setIsComponentVisibled] = useState(false);
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
            setIsComponentVisibled(true);
        }
    }, [inView]);
    // useEffect(() => {
    //     if (prizesTextInView) {
    //         setIsPrizesTextVisible(true);
    //     }
    // }, [prizesTextInView]);

        return (
            <div className={'prizes'}>
                <div className={'wrapper'}>
                    <div className={'prizes-items11'}>

                        <div className={'prizes-content-box-title-bot2-prizes'}>
                            <div className={'prizes-text11'} id={'prizes'} ref={prizesRef}>
                                Призы
                            </div>
                            <p className={'how-center-p-text bonus-prizes'}> За участие в розыгрышах рулетки с подарками
                                вы получите промокод** на лотерейный билет для участия в будущих тиражах от
                                «Национальная
                                Лотерея».
                            </p>
                            <p className={'how-center-p-text-first bonus-prizes'}>
                                <label className={'left-stap-2'}>**</label> Для применения промокода перейдите на сайт
                                nloto.ru из вашего личного кабинета
                                на сайте акции.
                                Пройдите авторизацию и/или регистрацию. При необходимости подтвердите e-mail
                                и в разделе «Мои билеты» вы увидите лотерейный билет, зарегистрированный на тираж.
                            </p>
                            {/*<p className={'how-center-p-text-prizes bonus-prizes'}>Для применения промокода перейдите на сайт*/}
                            {/*    nloto.ru из*/}
                            {/*    вашего личного кабинета на сайте акции. Пройдите авторизацию и/или регистрацию. При*/}
                            {/*    необходимости подтвердите Email <br></br>и в разделе «Мои билеты» вы увидите лотерейный*/}
                            {/*    билет,*/}
                            {/*    зарегистрированный на тираж</p>*/}
                            {/*<p className={'how-center-p-text-prizes-2'}>*Промокод на следующие лотерейные билеты:</p>*/}
                            <div className={'how-tickets-img'}>
                                <div className="how-full44-img for-test-img-test-mini-prizes">
                                    <a href="https://nloto.ru/lottery/mechtallion" className={"#"}
                                       target="_blank"><img
                                        src={mini5}/></a>
                                </div>
                                <div className="how-full4-img for-test-img-test-mini2-prizes">
                                    <a href="https://nloto.ru/lottery/bingo-4x4-2" target="_blank"><img
                                        src={mini6}/></a>
                                </div>
                                <div className="how-full444-img for-test-img-second-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-12x24" target="_blank"><img
                                        src={mini1}/></a>
                                </div>
                                <div className="how-full4444-img for-test-img-third-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-4x20-premier" target="_blank"><img
                                        src={howFull1}/></a>
                                </div>
                            </div>
                            <div className={'how-tickets-img'}>
                                <div className="how-full4444-img for-test-img-4-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-8x20" target="_blank"><img
                                        src={howFull2}/></a>
                                </div>
                                <div className="how-full4444-img for-test-img-5-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-8x20-big8" target="_blank"><img
                                        src={howFull6}/></a>
                                </div>
                                <div className="how-full4444-img for-test-img-6-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-5x37" target="_blank"><img
                                        src={howFull5}/></a>
                                </div>
                                <div className="how-full4444-img for-test-img-7-mini-prizes">
                                    <a href="https://nloto.ru/lottery/bingo-75" target="_blank"><img
                                        src={howFull3}/></a>
                                </div>
                            </div>


                            <div className={'how-tickets-img-mobile'}>
                                <div className="how-full44-img for-test-img-test-mini-prizes">
                                    <a href="https://nloto.ru/lottery/mechtallion" className={"#"}
                                       target="_blank"><img
                                        src={mini5}/></a>
                                </div>
                                <div className="how-full4-img for-test-img-test-mini2-prizes">
                                    <a href="https://nloto.ru/lottery/bingo-4x4-2" target="_blank"><img
                                        src={mini6}/></a>
                                </div>
                            </div>
                            <div className={'how-tickets-img-mobile'}>
                                <div className="how-full444-img for-test-img-second-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-12x24" target="_blank"><img
                                        src={mini1}/></a>
                                </div>
                                <div className="how-full4444-img for-test-img-third-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-4x20-premier" target="_blank"><img
                                        src={howFull1}/></a>
                                </div>
                            </div>
                            <div className={'how-tickets-img-mobile'}>
                                <div className="how-full4444-img for-test-img-4-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-8x20" target="_blank"><img
                                        src={howFull2}/></a>
                                </div>
                                <div className="how-full4444-img for-test-img-5-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-8x20-big8" target="_blank"><img
                                        src={howFull6}/></a>
                                </div>
                            </div>
                            <div className={'how-tickets-img-mobile'}>
                                <div className="how-full4444-img for-test-img-6-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-5x37" target="_blank"><img
                                        src={howFull5}/></a>
                                </div>
                                <div className="how-full4444-img for-test-img-7-mini-prizes">
                                    <a href="https://nloto.ru/lottery/bingo-75" target="_blank"><img
                                        src={howFull3}/></a>
                                </div>
                            </div>

                            <div className={'how-tickets-img-tablet'}>
                                <div className="how-full44-img for-test-img-test-mini-prizes">
                                    <a href="https://nloto.ru/lottery/mechtallion" className={"#"}
                                       target="_blank"><img
                                        src={mini5}/></a>
                                </div>
                                <div className="how-full4-img for-test-img-test-mini2-prizes">
                                    <a href="https://nloto.ru/lottery/bingo-4x4-2" target="_blank"><img
                                        src={mini6}/></a>
                                </div>
                                <div className="how-full444-img for-test-img-second-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-12x24" target="_blank"><img
                                        src={mini1}/></a>
                                </div>
                            </div>
                            <div className={'how-tickets-img-tablet'}>
                                <div className="how-full4444-img for-test-img-third-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-4x20-premier" target="_blank"><img
                                        src={howFull1}/></a>
                                </div>
                                    <div className="how-full4444-img for-test-img-4-mini-prizes">
                                        <a href="https://nloto.ru/lottery/digital-8x20" target="_blank"><img
                                            src={howFull2}/></a>
                                    </div>
                                        <div className="how-full4444-img for-test-img-5-mini-prizes">
                                            <a href="https://nloto.ru/lottery/digital-8x20-big8" target="_blank"><img
                                                src={howFull6}/></a>
                                        </div>
                            </div>
                            <div className={'how-tickets-img-tablet'}>
                                <div className="how-full4444-img for-test-img-6-mini-prizes">
                                    <a href="https://nloto.ru/lottery/digital-5x37" target="_blank"><img
                                        src={howFull5}/></a>
                                </div>
                                <div className="how-full4444-img for-test-img-7-mini-prizes">
                                    <a href="https://nloto.ru/lottery/bingo-75" target="_blank"><img
                                        src={howFull3}/></a>
                                </div>
                            </div>
                        </div>


                        {/*    <div className={'prizes-content-box11'}>*/}
                        {/*        <div className={'prizes-content-box-title-middle1'}><p>Получите гарантированный</p></div>*/}
                        {/*        <div className={'prizes-content-box-title-middle2'}><p>приз* за регистрацию билета!</p>*/}
                        {/*        </div>*/}
                        {/*        <img className={'prizes-content-box1-img11'} src={prizesLeft}/>*/}
                        {/*        <img className={'bg-image1'} src={bgImagese}/>*/}
                        {/*        <div className={'prizes-content-box-title-bot11'}><p>Гарантированный приз</p></div>*/}
                        {/*        <div className={'prizes-content-box-title-bot22'}><p>ПОДАРОК ОТ 585</p></div>*/}
                        {/*        <div className={'prizes-content-box-title-bot33'}><p>ЗОЛОТОЙ</p></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="backdrop11">*/}
                        {/*    </div>*/}

                        {/*    <div className={'prizes-content-box22'}>*/}
                        {/*        <div className={'prizes-content-box-title-middle1'}><p>Участвуйте в розыгрыше </p></div>*/}
                        {/*        <div className={'prizes-content-box-title-middle2'}><p> ценных призов </p></div>*/}
                        {/*        <img className={'prizes-content-box2-img22'} src={prizesCenter}/>*/}
                        {/*        <img className={'bg-image2'} src={bgImagese}/>*/}
                        {/*        <div className={'prizes-content-box-title-bot111'}><p>Ежедневный приз</p></div>*/}
                        {/*        <div className={'prizes-content-box-title-bot222'}><p>МЕДИЦИНСКАЯ</p></div>*/}
                        {/*        <div className={'prizes-content-box-title-bot333'}><p>СТРАХОВКА</p></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="backdrop22">*/}
                        {/*    </div>*/}
                        {/*    <div className={'prizes-content-box33'}>*/}
                        {/*        <div className={'prizes-content-box-title-middle1'}><p>Разыгрываем</p></div>*/}
                        {/*        <div className={'prizes-content-box-title-middle2'}><p>специальные призы** от</p>*/}
                        {/*            <img className={'white-redmond-prizes'} src={whiteRedmond}/>*/}
                        {/*        </div>*/}
                        {/*        <img className={'prizes-content-box3-img33'} src={prizesRight}/>*/}
                        {/*        <img className={'bg-image3'} src={bgImagese}/>*/}
                        {/*        <div className={'prizes-content-box-title-bot1111'}>Ежедневный приз</div>*/}
                        {/*        <div className={'prizes-content-box-title-bot2222'}>Промокод</div>*/}
                        {/*        <div className={'prizes-content-box-title-bot3333'}>на 3000 рублей</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="backdrop33">*/}
                        {/*    </div>*/}
                        {/*    <div className={'prizes-content-box44'}>*/}
                        {/*        <div className={'prizes-content-box-title-middle1'}><p>Специальный приз***</p></div>*/}
                        {/*        <div className={'prizes-content-box-title-middle2'}><p> от*/}
                        {/*            М.Видео </p></div>*/}
                        {/*        <img className={'prizes-content-box22222-img22222'} src={prizesCenterCard}/>*/}
                        {/*        <img className={'bg-image22222'} src={bgImagese}/>*/}
                        {/*        /!*<div className={'prizes-content-box-title-bot11111'}><p>Ежедневный приз</p></div>*!/*/}
                        {/*        <div className={'prizes-content-box-title-bot22222'}><p>ПОДАРОЧНЫЙ СЕРТИФИКАТ</p></div>*/}
                        {/*        <div className={'prizes-content-box-title-bot33333'}><p>НА 10000 РУБЛЕЙ</p></div>*/}
                        {/*    </div>*/}
                        {/*    <div className="backdrop44">*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={"text-under-block"}>*/}
                        {/*    <b>**только для билетов, купленных*/}
                        {/*        в отделениях Почты России</b>*/}
                        {/*</div>*/}
                        {/*<div className={"text-under-block1"}>*/}
                        {/*    <b>*внешний вид подарка может отличаться от изображения</b>*/}
                        {/*</div>*/}
                        {/*<div className={"text-under-block2"}>*/}
                        {/*    <b>*** только для участников реферальной программы</b>*/}
                        {/*</div>*/}

                        {/*<div className={'prizes-background-image'}>*/}
                        {/*    /!*<img className={'prizes-Ring'} src={prizesRing}/>*!/*/}
                        {/*    /!*<img className={'prizes-left-title'} src={prizesFromLeft}/>*!/*/}
                        {/*    /!*<img className={'prizes-right-pluse'} src={prizesRightPluse}/>*!/*/}
                        {/*    /!*<img className={'prizes-right-hearth'} src={prizesRightHearth}/>*!/*/}
                        {/*    /!*<img className={'prizes-right-snake'} src={prizesRightSnake}/>*!/*/}
                        {/*    /!*<img className={'prizes-right-plusepluse'} src={prizesRightPlusePluse}/>*!/*/}
                        {/*    /!*<img className={'prizes-right-half-ping'} src={prizesRightHalfRing}/>*!/*/}
                        {/*    /!*<img className={'prizes-left-hearth'} src={prizesLeftHearth}/>*!/*/}
                        {/*    /!*<img className={'prizes-left-full-hearth'} src={prizesLeftFullHearth}/>*!/*/}
                        {/*    /!*<img className={'prizes-snake-inblock'} src={prizesSnakeInBlock}/>*!/*/}
                    </div>
                </div>
            </div>
        )
}
