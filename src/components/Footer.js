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
                        <a href={`${currentDomain}/rules.pdf`} target="_blank">Полные правила</a>
                    </div>
                    <div className={'footer-row-left'}>
                        <a href={`${currentDomain}/1_1_Политика_в_отношении_обработки_ПДн_1.pdf`} target="_blank">Политика
                            обработки персональных данных</a>
                    </div>
                    <div className={'footer-row-left'}>
                        <a href={`${currentDomain}/Обработка_персональных_данных_третьими_лицами_3.pdf`}
                           target="_blank">Обработка персональных данных третьими лицами</a>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className={'footer-row1'}>
                    <a>Общий срок проведения акции с «01» февраля 2024 года по «30» апреля 2024. Подробную информацию об
                        организаторе акции,
                        о правилах ее проведения, количестве призов по результатам акции, сроках, месте и порядке их
                        вручения, уточняйте на сайте <a className={"text-nloto"}
                                                        href={'https://nloto-promo.ru/'}>https://nloto-promo.ru</a> или
                        по телефону
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
                        количестве призов или выигрышей, сроках, месте и порядке их получения - на сайте <a
                            className={"text-nloto"} href={'https://nloto.ru/'} target="_blank">www.nloto.ru</a> и по
                        телефону 8 (800) 333-7-333. </a>
                </div>
                <div className={'footer-row4'}>
                    <a>Реклама. Рекламодатель: ООО «Спортивные Лотереи», ОГРН 1195027010386, ИНН 5003133760</a>
                </div>
            </div>
        </footer>

    )
}