import ticketText from '../image/tickettext.png'
import React from "react";
import img55 from "../image/img_55.png";
import man from "../image/img_56.png";


export default function Footer (props) {
    const currentDomain = window.location.origin;
    return (
        <footer className={'footer'}>
            <div className="myElementFooter">
            </div>
            <div className="footer-left">

                <div className={'footer-row'}>
                    <div className={'footer-colm'}>
                        <img className={'footer-logo'} src={ticketText}/>
                    </div>
                </div>
                <div className={'footer-medium'}>
                    <div className={'footer-row-left'}>
                        {/*<a href={`${currentDomain}/rules.pdf`} target="_blank">Полные правила</a>*/}
                    </div>
                    <div className={'footer-row-left'}>
                        <a href={`${currentDomain}/1_1_Политика_в_отношении_обработки_ПДн_1.pdf`} target="_blank">Конфиденциальность</a>
                    </div>
                    <div className={'footer-row-left'}>
                        <a href={`${currentDomain}/Обработка_персональных_данных_третьими_лицами_3.pdf`}
                           target="_blank">Пользовательское соглашение</a>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className={'footer-row1'}>
                    <a>Лотерея «Мечталлион», ВГЛ-2Т Спорт Союз, алгоритм определения выигрышей № 4 («Мечталлион»),
                        срок проведения лотереи – до 29.08.2034 г. Подробности на сайте www.nloto.ru и по
                        телефону 8 800 333-7-333.
                    </a>
                </div>
                <div className={'footer-row2'}>
                    <a>Специальные призы от Redmond разыгрываются только среди билетов, купленных в «Почте России». </a>

                </div>
                <div className={'footer-row3'}>
                    <a>Рекламная акция «Мечталлион. С нами миллионы!», срок проведения с 03.10.2022 по 30.11.2022 г.,
                        включая период вручения призов. Подробности на сайте www.promo-mechtalion.ru.</a>
                </div>
                <div className={'footer-row4'}>
                    <a>Реклама. Рекламодатель ООО «Спортивные Лотереи» (ОГРН: 1195027010386, ИНН: 5003133760).</a>
                </div>
            </div>
        </footer>

    )
}