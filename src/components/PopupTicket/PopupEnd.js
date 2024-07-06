import CodeInput from "../CodeInput";
import PhoneInput from "../PhoneInput";
import React, {useEffect, useState} from 'react';
import TicketInput from "./TicketInput";
import prizesCenterCard from "../../image/mv-card.png";
import bgImagese from "../../image/bg-image.png";
import {useLocation} from "react-router-dom";

export default function PopupEnd ({number}) {
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
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('profile'));
        setProfile(storedProfile);

    }, []);
    const currentDomain = window.location.origin;
    const location = useLocation();


    const handleImageClick = () => {
        window.location.href = '/'
    };
    useEffect(() => {
        const copyLinkButton = document.querySelector('.copy-link-second');
        const notification = document.querySelector('.notification-second');
        if (copyLinkButton) { // Проверка, что кнопка существует
            copyLinkButton.addEventListener('click', () => {
                const linkToCopy = `${currentDomain}/?ref=${profile?.referralCode || ''}`;
                const tempInput = document.createElement('input');
                tempInput.value = linkToCopy;
                document.body.appendChild(tempInput);

                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);

                showNotification();
            });
        }

        function showNotification() {
            notification.classList.add('showCopy');
            setTimeout(() => {
                notification.classList.remove('showCopy');
            }, 1000); // Через 2 секунды уведомление исчезнет
        }
    }, [profile]);

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
        // const auth_key = "rOwTaBzoREXygNHwZHMfRm7qae-HGd9g";
        // const login = "+7 (916) 402-44-13"
        // if (auth_key){
        //     localStorage.setItem('auth_key', auth_key);
        //     localStorage.setItem('login', login);
            window.location.href = '/profile'
        }
    return (
        <div id="popup-end" className="popup">
            <div className={'blur-filter'}>
                <div className="popup-end" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form action={'https://nloto-promo.ru/backend/api/ticket'}
                          id={'popup-end'} className={'form-register'}>
                        <h1 className={'popup-h1 win4healht'}>Отмечайте на здоровье</h1>
                        <a className={'decl-text decl-bonus-text'}> Если при покупке лотерейного билета Вы <br></br>указали
                            свой номер
                            мобильного телефона,
                            <br></br>то такой билет участвует в акции <br></br>«Отмечайте на здоровье»
                            <br></br>автоматически и уже отображается
                            <br></br>в личном кабинете. <br></br>Проверьте личный кабинет - если билет не найден,
                            зарегистрируйте его.
                        </a>
                        <button
                            type={'button'}
                            id='submit-4life'
                            className='button-animation-code'
                            onClick={handleClick}
                        >
                            ПЕРЕЙТИ В ЛИЧНЫЙ КАБИНЕТ
                        </button>
                        <div>
                            <img className={'for-he4lth'} src={prizesCenterCard}/>
                        </div>
                        <img className={'for-he4lth-bg'} src={bgImagese}/>
                        <p className={'p-bonus-profile-for-he4lth'}>Отправляйте ссылку друзьям и выигрывайте специальный приз от Мвидео в дополнительных розыгрышах!</p>
                        <a className={'a-bonus-profile copy-link-second copy-link-for-he4lth'}>Скопировать ссылку</a>
                        <div className="notification-second">Ссылка скопирована!</div>


                    </form>


                </div>
            </div>
        </div>

    )
}