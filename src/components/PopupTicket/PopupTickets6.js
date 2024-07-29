import CodeInput from "../CodeInput";
import PhoneInput from "../PhoneInput";
import React, { useState } from 'react';
import PopupTicket2 from "./PopupTicket2";
import PopupTicket1 from "./PopupTicket1";

export default function PopupTicket6 ({number,text}) {

    function openPopupTicket6() {
        closePopup2()
        document.getElementById("popup-ticket-6").style.display = "block";
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
        document.getElementById("popup-ticket-5").style.display = "none";
        localStorage.removeItem('number');
        document.body.classList.remove("no-scroll");
        reloadPage1()
    }
    function reloadPage() {
        window.location.reload();
    }
    window.addEventListener('beforeunload', function(event) {
        // Удаляем элемент 'number' из localStorage перед обновлением страницы
        localStorage.removeItem('number');
    });
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
    const [showTooltip, setShowTooltip] = useState(false);

    const openTooltip = () => {
        setShowTooltip(true);
    };

    const closeTooltip = () => {
        setShowTooltip(false);
    };
    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };
    return (
        <div id="popup-ticket-6" className="popup">
            <div className={'blur-filter'}>
                <div className="popup-ticket1 its-6" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form action={''} id={'form-add-ticket4'} className={'form-register'}>
                        <h1 className={'popup-h1 for-its-4'}>Регистрация билета</h1>
                        <label className={'bilet-ticket-2-p '}>Регистрация билета</label>
                        <label className={'bilet-ticket-2-p2'} id='ticket-for-number3'>{number}</label>
                        <label className={'bilet-ticket-2-p3'}>невозможна.</label>
                        <p className={'bilet-ticket-2-p5'}>Акция действует для лотерейных билетов, купленных в отделениях Почты России
                            в городах: Москва, Санкт-Петербург,
                            Краснодар, Екатеринбург</p>
                    </form>

                </div>
            </div>

        </div>

    )
}