import CodeInput from "../CodeInput";
import axios from "axios";
import Profile from "../lk-profile/Profile";
import {useState} from "react";
import Api from "../api/Api";
import setAuthToken from "../api/Api";

export default function PopupPasswordCopy (props) {
    /*global ym*/
    function openPopup2(props) {




    }
    function openPopupAuth() {
        closePopup2()
        document.getElementById("popup-auth").style.display = "block";
        document.body.classList.add("no-scroll");
    }

    function closePopup2() {
        document.getElementById("popup-password-copy").style.display = "none";
        document.body.classList.remove("no-scroll");
    }

// Функция обновления страницы
    function reloadPage() {
        window.location.href = window.location.href;
    }
    const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [password2Error, setPassword2Error] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const [agree4Error, setAgree4Error] = useState(false);
    const [agree5Error, setAgree5Error] = useState(false);
    const [agree4Checked, setAgree4Checked] = useState(false);
    const [agree5Checked, setAgree5Checked] = useState(false);
    const handleAgree4Change = () => {
        setAgree4Checked(agree4Checked => {
            checkAllCheckboxes(!agree4Checked, agree5Checked);
            return !agree4Checked;
        });
    }

    const handleAgree5Change = () => {
        setAgree5Checked(agree5Checked => {
            checkAllCheckboxes(agree4Checked, !agree5Checked);
            return !agree5Checked;
        });
    }

    const checkAllCheckboxes = (agree4, agree5) => {
        if (agree4 && agree5) {
            setAllCheckboxesChecked(true);
        } else {
            setAllCheckboxesChecked(false);
        }
    };




    const isRegisterButtonDisabled = () => {
        return isRequestPending || !agree4Checked || !agree5Checked; // Пример логики для отключения кнопки
    }
    async function postRegisterPasswordCopy(event) {
        const form = document.getElementById('form-register-password-copy');
        event.preventDefault();
        const hash = localStorage.getItem('hash');

        const rules1Checkbox4 = document.getElementById('agree_6');
        const agree_6 = rules1Checkbox4.checked;
        const rules1Checkbox5 = document.getElementById('agree_7');
        const agree_7 = rules1Checkbox5.checked;
        if (isRequestPending) {
            return;
        }
        isRequestPending = true;
        const formData = new FormData(form);
        const domain = window.location.hostname
        const promocodeValue = localStorage.getItem('promocodeValue');
        debugger;
        formData.append('hash', hash);
        formData.append('agree_4', agree_6 ? '1' : '0');
        formData.append('agree_5', agree_7 ? '1' : '0');
        formData.append('domain', domain);
        if (promocodeValue) {
            formData.append('promocode', promocodeValue);
        }

        try {
            const response = await Api.post('https://nloto-promo.ru/backend/api/signup', formData);

            if (response.data.result === false) {
                // console.log(response.data.result);
                if (response.data.error.login) {
                    setRegistrationError(response.data.error.login[0]);
                } else {
                    setRegistrationError('');
                }
                if (response.data.error.agree_4) {
                    setAgree4Error(response.data.error.agree_4[0]);
                } else {
                    setAgree4Error('');
                }
                if (response.data.error.agree_5) {
                    setAgree5Error(response.data.error.agree_5[0]);
                } else {
                    setAgree5Error('');
                }


            } else {
                handleSuccess1();
                // console.log(response.data.result)
                const login = response.data.data.login;
                localStorage.setItem('login', login);
                const countTicketsTotal = response.data.data.countTicketsTotal;
                localStorage.setItem('countTicketsTotal', countTicketsTotal);
                const countTicketsApproved = response.data.data.countTicketsApproved;
                localStorage.setItem('countTicketsApproved', countTicketsApproved);
                const countTicketsRejected = response.data.data.countTicketsRejected;
                localStorage.setItem('countTicketsRejected', countTicketsRejected);
                const auth_key = response.data.data.auth_key;
                if (auth_key) {
                    localStorage.setItem('auth_key', auth_key);
                    window.location.href = window.location.href;
                }
            }


        } catch (error) {

            if (axios.isCancel(error)) {
            } else {

            }
        } finally {
            isRequestPending = false;
        }
    }

    function handleSuccess() {
        let rutarget = window._rutarget || [];
        rutarget.push({'event': 'thankYou', 'conv_id': 'registration'});
    }
    function handleSuccess1() {
        ym(95896213,'reachGoal','registration');
    }

    let isRequestPending = false;
    return (
        <div id="popup-password-copy" className="popup">
            <div className={'blur-filter'}>
                <div className="popup-content-password-copy" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form action={'https://nloto-promo.ru/backend/api/signup'}
                          method={'POST'} onSubmit={postRegisterPasswordCopy}
                          id={'form-register-password-copy'} className={'form-register'}>
                        {/*<h1 className={'popup-h1'}>Регистрация</h1>*/}
                        <span id="phoneError" className="error"></span>
                        <br/>
                        <a className={'a-last-first main-test-text-last'}>Завершение регистрации</a>
                        <a className={'a-last-first bonus-need-conf'}>Необходимо дать согласие:</a>
                        <div className={'form-group-2'}>
                        <label className={'popup-p-center'}>
                                <input
                                    type="checkbox"
                                    id="agree_6"
                                    className={`input-checkbox ${!agree4Checked ? 'error' : ''}`}
                                    onChange={handleAgree4Change}
                                />
                                <span className={`custom-checkbox ${!agree4Checked ? 'error' : ''}`}></span>
                                <p> Я согласен с <a href={'https://nloto-promo.ru/rules.pdf' } target="_blank" className={"text-nloto"}>Правилами
                                    Акции "Ваш билетик"</a>
                                </p>
                                <span id="phoneError" className="error"></span>
                            </label>
                        </div>
                        <div className={'form-group-3'}>
                            <label className={'popup-p-center'}>
                                <input
                                    type="checkbox"
                                    id="agree_7"
                                    className={`input-checkbox ${!agree5Checked ? 'error' : ''}`}
                                    onChange={handleAgree5Change}
                                />
                                <span className={`custom-checkbox ${!agree5Checked ? 'error' : ''}`}></span>
                                <p> Я согласен c поручением ООО «Спортивные Лотереи» обработки моих персональных данных
                                    ООО
                                    «Бэйкер промоушен» в целях его сбора и передачи лицам, которым я даю согласия и/или
                                    с
                                    которыми я вступаю в договорные отношения, в рамках оферт на сайте nloto.ru.
                                </p>
                                <span id="phoneError" className="error"></span>
                            </label>
                        </div>
                        <div className={'form-group-code'}>
                        </div>
                        <button type="submit" id="submit-password-copy" className={'button-animation-password'}
                                disabled={!allCheckboxesChecked}>Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}