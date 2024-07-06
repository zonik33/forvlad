import CodeInput from "../CodeInput";
import PhoneInput from "../PhoneInput";
import React, { useState } from 'react';
import TicketInput from "./TicketInput";
import howLeftIcon from "../../image/how-left-icon.png";
import bannerMC from "../../image/img_45.png"
import leftBorder from "../../image/img_42.png"
import backg from "../../image/img_41.png"
import rightBorder from "../../image/img_40.png"
import underTextMC from "../../image/img_43.png"
import snow1 from "../../image/img_46.png"
import snow2 from "../../image/img_47.png"
import snow3 from "../../image/img_48.png"
import snow4 from "../../image/img_49.png"
import snow5 from "../../image/img_50.png"
import snow6 from "../../image/img_51.png"
import march8 from "../../image/8_march.jpg"
import feb23 from "../../image/23_feb.jpg"

export default function PopupBanner ({number}) {
    function openPopupTicket2() {
        closePopup2()
        document.getElementById("popup-end").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    function openPopupAuth() {
        closePopup2()
        document.getElementById("popup-auth").style.display = "block";
    }
    function openPopup() {
        closePopup2()
        document.getElementById("popup").style.display = "block";
    }


    function closePopup2() {
        document.getElementById("popup-ticket-2").style.display = "none";
        localStorage.removeItem('number');
        document.body.classList.remove("no-scroll");
        reloadPage1()
    }

// Функция обновления страницы
    function reloadPage1() {
        window.location.href = window.location.href;
    }
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^\d]/g, '');
        setValue(sanitizedValue);
    }
    window.addEventListener('beforeunload', function(event) {
        // Удаляем элемент 'number' из localStorage перед обновлением страницы
        localStorage.removeItem('number');
    });
    const [showTooltip, setShowTooltip] = useState(false);

    const openTooltip = () => {
        setShowTooltip(true);
    };
    function reloadPage() {
        window.location.reload();
    }

    const closeTooltip = () => {
        setShowTooltip(false);
    };
    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    }
    const handleClick = () => {
        window.location.href = '/profile'
    };

    return (
        <div id="popup-banner" className="popup">
            <div className={'blur-filter for-mc'}>
                <div className="popup-banner" id={'popup-content-banner'}>
                    {/*<span className="close" onClick={closePopup2}>&times;</span>*/}
                    <form action={'https://nloto-promo.ru/backend/api/ticket'}
                          id={'popup-end'} className={'form-register banner-for-mc'}>
                        <div className={'img-mc-block'}>
                            {/*<img className={'img-mc'} src={bannerMC}/>*/}
                        </div>
                        <div className={'text-mc-center'}>
                            {/*<a className={'banner-mc-p'}>Тираж Новогоднего «Мечталлиона» состоялся и мы спешим начислить выигрыши миллионам счастливчиков.</a>*/}
                            {/*<a className={'banner-mc-p'}>Это может занять больше времени, чем обычно, но мы уверены, что под звон бокалов в кругу семьи и друзей ожидание пройдёт незаметно.</a>*/}
                            <a className={'banner-mc-p marg-top'}>Регистрация билетов для участия в акции «Отмечайте на
                                здоровье» начнётся 1.02.2024.
                            </a>
                            <a className={'banner-mc-p marg-top-top'}>Вас ждут ежедневные подарки и призы!</a>

                        </div>

                        <img className={'left-border'} src={leftBorder}/>
                        <img className={'back-g'} src={backg}/>
                        {/*<img className={'right-border'} src={rightBorder}/>*/}
                        <img className={'banner-billets'} src={march8}/>
                        <img className={'banner-billets-2'} src={feb23}/>
                        {/*<img className={'under-text-mc'} src={underTextMC}/>*/}
                        <img className={'snow1'} src={snow1}/>
                        <img className={'snow2'} src={snow2}/>
                        <img className={'snow3'} src={snow3}/>
                        <img className={'snow4'} src={snow4}/>
                        <img className={'snow5'} src={snow5}/>
                        <img className={'snow6'} src={snow6}/>
                        <img className={'snow7'} src={snow1}/>
                    </form>
                </div>
            </div>
        </div>

    )
}