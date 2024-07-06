import React, {useEffect, useState} from 'react';

export default function PopupStart (props) {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
    const formatNumber = (number) => {
        return number.toString().padStart(2, '0');
    };
    useEffect(() => {
        const startDate = new Date('January 1, 2024 00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = startDate - now;

            const days = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
            const hours = formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const minutes = formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));

            setCountdown({ days, hours, minutes });
        };

        const timer = setInterval(updateCountdown, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    function openPopupTicket5() {
        closePopup2()
        document.getElementById("popup-ticket-5").style.display = "block";
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
        document.getElementById("popup-start").style.display = "none";
        const popup = document.getElementById('blur-filter');
        popup.classList.add('hidden');
        localStorage.removeItem('number');
        document.body.classList.remove("no-scroll");
        document.body.style.overflow = ""; // Разблокируйте прокрутку страницы
        document.documentElement.style.overflow = ""; // Разблокируйте прокрутку страницы
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
        <div id="popup-start" className="popup">
            <div className={'blur-filter'} id={'blur-filter'}>
                <div className="popup-ticket1 popup-start" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form id={'form-add-ticket4'} className={'form-register'} >
                        <label className={'bilet-ticket-5-p try-fix'}>Регистрация пользователей и билетов завершена.</label>
                    </form>
                </div>
            </div>

        </div>

    )
}