import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useLocation} from "react-router-dom";

function Form() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [text1Error, setText1Error] = useState('');

    async function postFeedback(event) {
        const form = document.getElementById('form-register-code');
        event.preventDefault();
        const name = document.getElementById('name-feedback');
        const email = document.getElementById('email-feedback');
        const text = document.getElementById('message-feedback');

        if (isRequestPending) {
            return;
        }
        isRequestPending = true;

        const formData = new FormData(form);
        formData.append('name', name.value);
        formData.append('email', email.value);
        formData.append('text', text.value);

        try {
            const response = await axios.post('https://nloto-promo.ru/backend/api/feedback', formData);

            if (response.data.result === false) {
                    if (response.data.error.text) {
                        setText1Error(response.data.error.text);
                    }else {
                        setText1Error('');
                    }
                        if (response.data.error.email) {
                            setEmailError(response.data.error.email);
                        } else {
                            setEmailError('');
                        }
                        if (response.data.error.name) {
                            setNameError(response.data.error.name);
                        } else {
                            setNameError('');
                    }
            } else {

                setSubmitted(true);
            }


        } catch (error) {

            if (axios.isCancel(error)) {
            } else {

            }
        } finally {
            isRequestPending = false;
        }
    }

    let isRequestPending = false;

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const activeSection = params.get("section"); // Получаем значение параметра "section" из URL

    const prizesRef = useRef(null);
    const winnersRef = useRef(null);
    const questionRef = useRef(null);

    useEffect(() => {
        if (activeSection === "question-here" && questionRef.current) {
            setTimeout(() => {
                questionRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        } else if (activeSection === "winners" && winnersRef.current) {
            setTimeout(() => {
                winnersRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    }, [activeSection]);
    return (
        <form method="POST" autoComplete="off"
              action={'https://nloto-promo.ru/backend/api/feedback'}
              onSubmit={postFeedback}>
                <div className="form-row" id={'question-here'} ref={questionRef}>
                    {!submitted && (
                        <>
                <div className={"faq-text-right"}>
                    Не нашли ответ на свой вопрос? Напишите нам!
                </div>
                 <div className="faq-text-right"></div>

                        <div className="form-name">
                            <div className="form-field">
                                <label className="form-label-name">Ваше имя</label>
                                <input className={`form-input-name ${nameError ? 'error' : ''}`} type="text" id={'name-feedback'} />
                                {nameError && <span id="nameError" className="errore">{nameError}</span>}
                            </div>
                        </div>
                        <div className="form-email">
                            <div className="form-field">
                                <label className="form-label-email">Ваш e-mail</label>
                                <input className={`form-input-email ${emailError ? 'error' : ''}`} type="text" id={'email-feedback'} />
                                {emailError && <span id="nameError" className="errore">{emailError}</span>}
                            </div>

                        </div>
                        <div className="form-message">
                            <div className="form-field">
                                <label className="form-label-message">Ваш вопрос</label>
                                <textarea className={`form-textarea-message ${text1Error ? 'error' : ''}`} name="message"
                                          autoComplete="off" id={'message-feedback'} />
                                {text1Error && <span id="nameError" className="errore">{text1Error}</span>}
                            </div>

                        </div>
                        <div className="question-button">
                            <button type="submit" className="question-button-check">
                                Задать вопрос
                            </button>
                        </div>
                    </>
                )}
                {submitted && (
                    <div className="message-container">
                        <div className="submitted-message">Ваше сообщение отправлено</div>
                    </div>
                )}

            </div>
        </form>
    );
}

export default Form;