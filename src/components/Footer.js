import ticketText from '../image/img_99.png'
import ticketTextRight from '../image/img_100.png'
import React from "react";
import img55 from "../image/img_55.png";
import man from "../image/img_56.png";
import ticket from "../image/ticket.png";
import {Link} from "react-router-dom";


export default function Footer (props) {
    const handleImageClick = () => {
        window.open('https://nloto.ru/', '_blank');
    };
    const currentDomain = window.location.origin;
    return (
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
                        Общий срок проведения акции с «01» сентября 2024 года по «31» октября 2024. Подробную информацию об организаторе акции,
                        о правилах ее проведения, количестве призов по результатам акции, сроках, месте и порядке их вручения, уточняйте на сайте <a className={"text-nloto-footer"} href={'https://nloto-promo.ru'} target="_blank">https://nloto-promo.ru</a> или по телефону горячей линии 8 (800) 333-7-33.
                    </a>
                </div>
                <div className={'footer-row2'}>
                    <a className={'footer-color-size'}>«ВГЛ-1Т Спорт Союз», алгоритм определения выигрышей № 5 («Великолепная 8»),
                        «ВГЛ-1Т Спорт Союз», алгоритм определения выигрышей № 2 («Лавина призов»), «ВГЛ-2Т Спорт Союз»,
                        алгоритм определения выигрышей № 4 («Мечталлион»), «ВГЛ-1Т Спорт Союз», алгоритм определения выигрышей № 12 («12 добрых дел»),
                        «ВГЛ-4Т Спорт Союз», алгоритм определения выигрышей № 4 («Топ 12»), «ВГЛ-4Т Спорт Союз», алгоритм определения выигрышей № 13 («Премьер»),
                        «ВГЛ-3Т Спорт Союз», алгоритм определения выигрышей № 15 («Большая 8»), «ВГЛ-2Т Спорт Союз», алгоритм определения выигрышей № 5 («Форсаж 75»),
                        «ВГЛ-4Т Спорт Союз», алгоритм определения выигрышей № 1 («5 из 37»), «ВГЛ-5Т Спорт Союз» алгоритм определения выигрышей № 10 («4х4),
                        срок проведения лотереи – до 29.08.2034 г. <br></br><br></br>Информация об организаторе лотереи, правилах ее проведения, призовом фонде лотереи,
                        количестве призов или выигрышей, сроках, месте и порядке их получения - на сайте <a className={"text-nloto-footer"} href={'https://nloto.ru/'} target="_blank">www.nloto.ru</a> и по телефону 8 800 333-7-333.
                        Оператор лотерей ООО «Спортивные Лотереи». </a>

                </div>
                {/*<div className={'footer-row3'}>*/}
                {/*    <a className={'footer-color-size'}>Рекламная акция «Мечталлион. С нами миллионы!», срок проведения с 03.10.2022 по 30.11.2022 г.,*/}
                {/*        включая период вручения призов. Подробности на сайте www.promo-mechtalion.ru.</a>*/}
                {/*</div>*/}
                <div className={'footer-row4'}>
                    <a className={'footer-color-size'}>Реклама. Рекламодатель: ООО «Спортивные Лотереи», ОГРН 1195027010386, ИНН 5003133760</a>
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

    )
}