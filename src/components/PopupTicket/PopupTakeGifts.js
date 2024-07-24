import CodeInput from "../CodeInput";
import PhoneInput from "../PhoneInput";
import React, { useState } from 'react';

export default function PopupTakeGifts ({number, text}) {
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
        document.getElementById("popup-take-gifts").style.display = "none";
        localStorage.removeItem('number');
        document.body.classList.remove("no-scroll");
        // reloadPage1()
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
        <div id="popup-take-gifts" className="popup">
            <div className={'blur-filter'}>
                <div className="popup-take-gifts its-2" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form action={''} id={'form-add-ticket2'} className={'form-register'}>
                        <h1 className={'popup-h1 take-gifts'}>Поздравляем</h1>
                        <label className={'bilet-ticket-2-p take-gifts'}>Вы выиграли промокод на <br></br> получение
                            билета:</label>
                        <label className={'bilet-ticket-2-p2 take-gifts'}
                               id={'ticket-for-number2'}>{number} 2323850925307322305</label>
                        {/*<label className={'bilet-ticket-2-p3 take-gifts'}>не существует. </label>*/}
                        <p className={'bilet-ticket-2-p4 take-gifts'}>Для активации промокода перейдите на nloto.ru по
                            ссылке:</p>
                        <a className="button-animation-text-profile click-take-gifts"
                           href={'https://nloto.ru/'} target="_blank">
                            <b className={'gifts-b'}>Активировать промокод</b></a>
                    </form>

                </div>
            </div>

        </div>

    )
}