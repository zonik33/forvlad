import CodeInput from "../CodeInput";
import PhoneInput from "../PhoneInput";
import React, { useState } from 'react';

export default function PopupTicket3 ({number, text}) {


    function openPopupTicket3() {
        closePopup2()
        document.getElementById("popup-ticket-3").style.display = "block";
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
        document.getElementById("popup-ticket-3").style.display = "none";
        localStorage.removeItem('number');
        document.body.classList.remove("no-scroll");
        reloadPage1()
    }

// Функция обновления страницы
    function reloadPage1() {
        window.location.href = window.location.href;
    }
    function reloadPage() {
        window.location.reload();
    }
    window.addEventListener('beforeunload', function(event) {
        // Удаляем элемент 'number' из localStorage перед обновлением страницы
        localStorage.removeItem('number');
    });

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
    }

    return (
        <div id="popup-ticket-3" className="popup">
            <div className={'blur-filter'}>
                <div className="popup-ticket1 its-3" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form action={''}  id={'form-add-ticket3'} className={'form-register'} >
                        <h1 className={'popup-h1 for-its-3'}>Регистрация билета</h1>
                        <label className={'bilet-ticket-2-p '}>Регистрация билета</label>
                        <label className={'bilet-ticket-2-p2'} id='ticket-for-number3'>{number}</label>
                        <label className={'bilet-ticket-2-p3'}>невозможна.</label>
                        <p className={'bilet-ticket-2-p4'} id='ticket-for-number33'>{text}</p>
                    </form>

                </div>
            </div>
        </div>

    )
}