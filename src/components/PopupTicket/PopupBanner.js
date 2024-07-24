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
        document.getElementById("popup-banner").style.display = "none";
        localStorage.removeItem('number');
        document.body.classList.remove("no-scroll");
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
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form action={'https://nlotoasd-promo.ru/backend/api/ticket'}
                          id={'popup-end'} className={'form-register'}>
                        <h1 className={'popup-h1 take-banner'}>Регистрация билета</h1>
                        <label className={'bilet-ticket-2-p take-banner'}>У вас недостаточно билетов, <br></br> готовых для розыгрыша</label>
                        <p className={'bilet-ticket-2-p2 take-banner'}>Хотите получить попытки и испытать удачу
                            в<br></br> розыгрыше рулетки?
                            Купите лотерейные билеты<br></br> на сумму от 300 рублей.</p>
                        {/*<label className={'bilet-ticket-2-p3 take-gifts'}>не существует. </label>*/}
                        <p className={'bilet-ticket-2-p4 take-banner'}> За каждые 300 рублей вы получите
                            1 (одну) попытку</p>
                        {/*<a className="button-animation-text-profile click-take-gifts"*/}
                        {/*   href={'https://nloto.ru/'} target="_blank">*/}
                        {/*    <b className={'gifts-b'}>Активировать промокод</b></a>*/}

                    </form>
                </div>
            </div>
        </div>

    )
}