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
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useLocation} from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {CSSTransition} from "react-transition-group";

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
            <div className={'prizes'} id={'prizes'} ref={prizesRef}>
                <div className={'wrapper'}>
                    <div ref={ref}>
                        <CSSTransition
                            in={isComponentVisibled}
                            timeout={1000} // Продолжительность анимации в миллисекундах
                            classNames="fade" // CSS классы для анимации
                            unmountOnExit
                        >
                            <div className={'prizes-text11'}>
                                Призы розыгрышей
                            </div>
                        </CSSTransition>
                    </div>
                    <div className={'prizes-items11'}>

                        <div className={'prizes-content-box11'}>
                            <div className={'prizes-content-box-title-middle1'}><p>Получите гарантированный</p></div>
                            <div className={'prizes-content-box-title-middle2'}><p>приз* за регистрацию билета!</p>
                            </div>
                            <img className={'prizes-content-box1-img11'} src={prizesLeft}/>
                            <img className={'bg-image1'} src={bgImagese}/>
                            <div className={'prizes-content-box-title-bot11'}><p>Гарантированный приз</p></div>
                            <div className={'prizes-content-box-title-bot22'}><p>ПОДАРОК ОТ 585</p></div>
                            <div className={'prizes-content-box-title-bot33'}><p>ЗОЛОТОЙ</p></div>
                        </div>
                        <div className="backdrop11">
                        </div>

                        <div className={'prizes-content-box22'}>
                            <div className={'prizes-content-box-title-middle1'}><p>Участвуйте в розыгрыше </p></div>
                            <div className={'prizes-content-box-title-middle2'}><p> ценных призов </p></div>
                            <img className={'prizes-content-box2-img22'} src={prizesCenter}/>
                            <img className={'bg-image2'} src={bgImagese}/>
                            <div className={'prizes-content-box-title-bot111'}><p>Ежедневный приз</p></div>
                            <div className={'prizes-content-box-title-bot222'}><p>МЕДИЦИНСКАЯ</p></div>
                            <div className={'prizes-content-box-title-bot333'}><p>СТРАХОВКА</p></div>
                        </div>
                        <div className="backdrop22">
                        </div>
                        <div className={'prizes-content-box33'}>
                            <div className={'prizes-content-box-title-middle1'}><p>Разыгрываем</p></div>
                            <div className={'prizes-content-box-title-middle2'}><p>специальные призы** от</p>
                                <img className={'white-redmond-prizes'} src={whiteRedmond}/>
                            </div>
                            <img className={'prizes-content-box3-img33'} src={prizesRight}/>
                            <img className={'bg-image3'} src={bgImagese}/>
                            <div className={'prizes-content-box-title-bot1111'}>Ежедневный приз</div>
                            <div className={'prizes-content-box-title-bot2222'}>Промокод</div>
                            <div className={'prizes-content-box-title-bot3333'}>на 3000 рублей</div>
                        </div>
                        <div className="backdrop33">
                        </div>
                        <div className={'prizes-content-box44'}>
                            <div className={'prizes-content-box-title-middle1'}><p>Специальный приз***</p></div>
                            <div className={'prizes-content-box-title-middle2'}><p> от
                                М.Видео </p></div>
                            <img className={'prizes-content-box22222-img22222'} src={prizesCenterCard}/>
                            <img className={'bg-image22222'} src={bgImagese}/>
                            {/*<div className={'prizes-content-box-title-bot11111'}><p>Ежедневный приз</p></div>*/}
                            <div className={'prizes-content-box-title-bot22222'}><p>ПОДАРОЧНЫЙ СЕРТИФИКАТ</p></div>
                            <div className={'prizes-content-box-title-bot33333'}><p>НА 10000 РУБЛЕЙ</p></div>
                        </div>
                        <div className="backdrop44">
                        </div>
                    </div>
                    <div className={"text-under-block"}>
                        <b>**только для билетов, купленных
                            в отделениях Почты России</b>
                    </div>
                    <div className={"text-under-block1"}>
                        <b>*внешний вид подарка может отличаться от изображения</b>
                    </div>
                    <div className={"text-under-block2"}>
                        <b>*** только для участников реферальной программы</b>
                    </div>

                    <div className={'prizes-background-image'}>
                        {/*<img className={'prizes-Ring'} src={prizesRing}/>*/}
                        {/*<img className={'prizes-left-title'} src={prizesFromLeft}/>*/}
                        {/*<img className={'prizes-right-pluse'} src={prizesRightPluse}/>*/}
                        {/*<img className={'prizes-right-hearth'} src={prizesRightHearth}/>*/}
                        {/*<img className={'prizes-right-snake'} src={prizesRightSnake}/>*/}
                        {/*<img className={'prizes-right-plusepluse'} src={prizesRightPlusePluse}/>*/}
                        {/*<img className={'prizes-right-half-ping'} src={prizesRightHalfRing}/>*/}
                        {/*<img className={'prizes-left-hearth'} src={prizesLeftHearth}/>*/}
                        {/*<img className={'prizes-left-full-hearth'} src={prizesLeftFullHearth}/>*/}
                        {/*<img className={'prizes-snake-inblock'} src={prizesSnakeInBlock}/>*/}
                    </div>
                </div>
            </div>
        )
}
