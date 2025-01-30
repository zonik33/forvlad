import CodeInput from "../CodeInput";
import PhoneInput from "../PhoneInput";
import React, {useEffect, useState} from 'react';

export default function PopupTakeGiftsError ({name, image, link, errorText}) {

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
        localStorage.removeItem('number');
        localStorage.removeItem('spinErrorMessage');
        localStorage.removeItem('link');
        localStorage.removeItem('name');
        localStorage.removeItem('image');
        localStorage.removeItem('prizeNumber');
        localStorage.removeItem('prizeName');
        localStorage.removeItem('prizeImage');
        document.getElementById("popup-take-gifts-error").style.display = "none";
        document.body.classList.remove("no-scroll");
        window.location.reload();
        window.location.href = window.location.href;
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
        localStorage.removeItem('name');
        localStorage.removeItem('image');
        localStorage.removeItem('link');
        localStorage.removeItem('spinErrorMessage');

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
        <div id="popup-take-gifts-error" className="popup">
            <div className={'blur-filter'}>
                <div className="popup-take-gifts-error its-2" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form action={''} id={'form-add-ticket2'} className={'form-register'}>
                        <h1 className={'popup-h1 take-gifts'}>Розыгрыш приза</h1>
                        <p className={'bilet-ticket-2-p4 take-gifts-error-style'} id='ticket-for-number2254error'>{errorText}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}