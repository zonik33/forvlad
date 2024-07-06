import CodeInput from "../CodeInput";
import PhoneInput from "../PhoneInput";
import React, { useState } from 'react';

export default function PopupTicket2 ({number, text}) {
    function openPopupTicket2() {
        closePopup2()
        document.getElementById("popup-ticket-2").style.display = "block";
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

    return (
        <div id="popup-ticket-2" className="popup">
            <div className={'blur-filter'}>
                <div className="popup-ticket1 its-2" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form action={''}  id={'form-add-ticket2'} className={'form-register'} >
                        <h1 className={'popup-h1'}>Регистрация билета</h1>
                        <label className={'bilet-ticket-2-p'}>Билет с номером</label>
                        <label className={'bilet-ticket-2-p2'} id={'ticket-for-number2'}>{number}</label>
                        <label className={'bilet-ticket-2-p3'}>не существует. </label>
                        <p className={'bilet-ticket-2-p4' }>Проверьте корректность ввода номера. Если
                            он верный, ошибка повторяется, обратитесь
                            в поддержку support@nloto.ru</p>
                    </form>

                </div>
            </div>

        </div>

    )
}