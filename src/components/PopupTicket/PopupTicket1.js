import React, {useEffect, useState} from 'react';
import axios from "axios";
import TicketInput from "./TicketInput";

export default function PopupTicket1 (props) {
    function openPopupTicket1() {
        closePopup2()
        document.getElementById("popup-ticket1").style.display = "block";
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
    function openPopupNotFound() {
        closePopup2()
        document.getElementById('popup-ticket-2').style.display = 'block';
        const number = localStorage.getItem('number')
        const text = localStorage.getItem('text')
        const welcomeMessage = document.getElementById('ticket-for-number2');
        const welcomeMessage2 = document.getElementById('ticket-for-number22');
        welcomeMessage.textContent = number;
        welcomeMessage2.textContent = text;
        document.body.classList.add("no-scroll");
    }
    function openPopupImpossible() {
        closePopup2()
        document.getElementById('popup-ticket-3').style.display = 'block';
        const number = localStorage.getItem('number')
        const text = localStorage.getItem('text')
        const welcomeMessage = document.getElementById('ticket-for-number3');
        const welcomeMessage2 = document.getElementById('ticket-for-number33');
        welcomeMessage.textContent = number;
        welcomeMessage2.textContent = text;
        document.body.classList.add("no-scroll");

    }
    function openPopupNotSold() {
        closePopup2()
        document.getElementById("popup-ticket-4").style.display = "block";
        const number = localStorage.getItem('number')
        const text = localStorage.getItem('text')
        const welcomeMessage = document.getElementById('ticket-for-number4');
        const welcomeMessage2 = document.getElementById('ticket-for-number44');
        welcomeMessage.textContent = number;
        welcomeMessage2.textContent = text;
        document.body.classList.add("no-scroll");

    }
    function openPopupSuccess() {
        closePopup2();
        document.getElementById("popup-ticket-5").style.display = "block";
        const number = localStorage.getItem('number')
        const text = localStorage.getItem('text')
        const welcomeMessage = document.getElementById('ticket-for-number5');
        const welcomeMessage2 = document.getElementById('ticket-for-number55');
        welcomeMessage.textContent = `Билет № ${number}`;
        welcomeMessage2.textContent = text;
        document.body.classList.add("no-scroll");


    }


    function closePopup2() {
        document.getElementById("popup-ticket1").style.display = "none";
        document.body.classList.remove("no-scroll");
        document.body.style.overflow = ""; // Unblock page scrolling
        document.documentElement.style.overflow = ""; // Unblock page scrolling


        setValue(''); // Clear the ticket number value
        setRegistrationError(''); // Clear registration error messages

        // Reset tooltip visibility
        setShowTooltip(false);
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
    const [showTooltip, setShowTooltip] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const isMobileScreen = () => {
        return window.innerWidth < 768; // Adjust the threshold as needed
    };
    useEffect(() => {
        // Add event listener to detect screen width changes
        const handleResize = () => {
            setIsMobile(isMobileScreen());
        };
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const openTooltip = () => {
        setShowTooltip(true);
    };

    const closeTooltip = () => {
        setShowTooltip(false);
    };
    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };
    const [registrationError, setRegistrationError] = useState('');
    async function addTicket(event) {
        let _rutarget = window._rutarget || [];
        _rutarget.push({'event': 'thankYou', 'conv_id': 'register_tickets'});
        const form = document.getElementById('form-add-ticket1');

        event.preventDefault();

        const number = document.getElementById('number-add-ticket');
        if (isRequestPending) {
            return;
        }
        isRequestPending = true;

        const formData = new FormData(form);
        formData.append('number', number.value);
        debugger;

        try {
            const response = await axios.post('https://nloto-promo.ru/backend/api/ticket', formData, {
                headers: {
                    'X-Auth-Token': localStorage.getItem('auth_key')
                }
            });
            debugger;
            if (response.data.result === true) {
                const data = response.data.data;
                if (data.status === "success") {
                    const number = data.number;
                    localStorage.setItem('number', number);
                    openPopupSuccess()
                } else if (data.status === "fail") {
                    if (data.code === "not found") {
                        const number = data.number;
                        const text = data.text;
                        localStorage.setItem('number', number);
                        localStorage.setItem('text', text);
                        openPopupNotFound()
                        } else if (data.code === "impossible") {
                        console.log("Покупка билета не в период действия акции.");
                        const number = data.number;
                        const text = data.text;
                        localStorage.setItem('number', number);
                        localStorage.setItem('text', text);
                        openPopupImpossible()

                    } else if (data.code === "not sold") {
                        // Билет не продан
                        console.log("Билет не продан");
                        const number = data.number;
                        const text = data.text;
                        localStorage.setItem('number', number);
                        localStorage.setItem('text', text);
                        openPopupNotSold()
                    }
                }
                debugger;
            } else {
                if (response.data.error.number) {
                    setRegistrationError(response.data.error.number[0]);
                } else {
                    setRegistrationError('');
                }

            }
        } catch (error) {
            debugger;

            if (axios.isCancel(error)) {
                debugger;
            } else {

            }
        } finally {
            isRequestPending = false;
        }
    }

    let isRequestPending = false;


    return (
        <div id="popup-ticket1" className="popup" >
            <div className={'blur-filter'}>
                <div className="popup-ticket1 popup-start" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    {/*<form id={'form-add-ticket4'} className={'form-register'}>*/}
                    {/*    <label className={'bilet-ticket-5-p try-fix'}>Регистрация пользователей и билетов*/}
                    {/*        завершена.</label>*/}
                    {/*</form>*/}


                    <form action={'https://nloto-promo.ru/backend/api/ticket'}
                          id={'form-add-ticket1'} className={'form-register'}
                        onSubmit={addTicket}>
                        <h1 className={'popup-h1'}>Регистрация билета</h1>
                        <div className={'form-group-password'}>
                            <div>
                                <label className={'left-label'}>Введите номер билета</label>
                                <label className={'right-label'}>
                                    <a onClick={toggleTooltip}> Где найти номер?</a>
                                </label>

                            </div>

                            <TicketInput registrationError={registrationError}
                                         value={value}
                                         handleInputChange={handleInputChange}
                            />
                            {registrationError && <div className={'error-block-for-ticket'}
                                                       style={{color: '#FFFFFF'}}>{registrationError}</div>}
                            <span id="nameError" className="error"></span>
                            <button type={'submit'} id={'submit-add-ticket'}
                                    className={'button-animation-code'}>ЗАРЕГИСТРИРОВАТЬ БИЛЕТ
                            </button>
                        </div>

                    </form>


                </div>
                {showTooltip && (
                    <div id="container">
                        <div id="tooltip" className={showTooltip ? 'active' : ''}>
                        </div>

                    </div>
                )}
            </div>

        </div>

    )
}