import CodeInput from "../CodeInput";
import axios from "axios";
import Profile from "../lk-profile/Profile";
import {useState} from "react";
import Api from "../api/Api";
import setAuthToken from "../api/Api";

export default function PopupPassword (props) {
    /*global ym*/
    function openPopup2(props) {




    }
    function openPopupAuth() {
        closePopup2()
        document.getElementById("popup-auth").style.display = "block";
        document.body.classList.add("no-scroll");
    }

    function closePopup2() {
        document.getElementById("popup-password").style.display = "none";
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
    const [agree1Error, setAgree1Error] = useState('');
    const [agree3Error, setAgree3Error] = useState('');
    const [agree4Error, setAgree4Error] = useState('');
    const [agree5Error, setAgree5Error] = useState('');
    const [agree4Checked, setAgree4Checked] = useState(false);
    const [agree5Checked, setAgree5Checked] = useState(false);
    const [agree1Checked, setAgree1Checked] = useState(false);
    const [agree3Checked, setAgree3Checked] = useState(false);



    const handleAgree1Change = () => {
        setAgree1Checked(agree1Checked => {
            checkAllCheckboxes(!agree1Checked, agree3Checked, agree4Checked, agree5Checked);
            return !agree1Checked;
        });
    }
    const handleAgree3Change = () => {
        setAgree3Checked(agree3Checked => {
            checkAllCheckboxes(agree1Checked, !agree3Checked, agree4Checked, agree5Checked);
            return !agree3Checked;
        });
    }
    const handleAgree4Change = () => {
        setAgree4Checked(agree4Checked => {
            checkAllCheckboxes(agree1Checked, agree3Checked, !agree4Checked, agree5Checked);
            return !agree4Checked;
        });
    }

    const handleAgree5Change = () => {
        setAgree5Checked(agree5Checked => {
            checkAllCheckboxes(agree1Checked, agree3Checked, agree4Checked, !agree5Checked);
            return !agree5Checked;
        });
    }

    const checkAllCheckboxes = (agree1, agree3, agree4, agree5) => {
        if (agree1 && agree3 && agree4 && agree5) {
            setAllCheckboxesChecked(true);
        } else {
            setAllCheckboxesChecked(false);
        }
    };
    async function postRegisterPassword(event) {
        const form = document.getElementById('form-register-password');
        setTimeout(() => {
            window.location.href = '/profile';
        }, 1000);
        event.preventDefault();
        const hash = localStorage.getItem('hash');
        // const password = document.getElementById('password');
        // const password2 = document.getElementById('password2');
        const rules1Checkbox1 = document.getElementById('agree_1');
        const agree_1 = rules1Checkbox1.checked;
        const rules1Checkbox2 = document.getElementById('agree_2');
        const agree_2 = rules1Checkbox2.checked;
        const rules1Checkbox3 = document.getElementById('agree_3');
        const agree_3 = rules1Checkbox3.checked;
        const rules1Checkbox4 = document.getElementById('agree_4');
        const agree_4 = rules1Checkbox4.checked;
        const rules1Checkbox5 = document.getElementById('agree_5');
        const agree_5 = rules1Checkbox5.checked;
        if (isRequestPending) {
            return;
        }
        isRequestPending = true;
        const formData = new FormData(form);
        const promocodeValue = localStorage.getItem('promocodeValue');
        debugger;
        const isNew = localStorage.getItem('isNew');
        const domain = window.location.hostname
        formData.append('hash', hash);
        formData.append('agree_1', agree_1 ? '1' : '0');
        formData.append('agree_2', agree_2 ? '1' : '0');
        formData.append('agree_3', agree_3 ? '1' : '0');
        formData.append('agree_4', agree_4 ? '1' : '0');
        formData.append('agree_5', agree_5 ? '1' : '0');
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
                if (response.data.error.agree_1) {
                    setAgree1Error(response.data.error.agree_1[0]);
                } else {
                    setAgree1Error('');
                }
                if (response.data.error.agree_3) {
                    setAgree3Error(response.data.error.agree_3[0]);
                } else {
                    setAgree3Error('');
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
                    window.location.href = '/profile'
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
        <div id="popup-password" className="popup">
            <div className={'blur-filter'}>
                <div className="popup-content-password" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form action={'https://nloto-promo.ru/backend/api/signup'}
                          method={'POST'} onSubmit={postRegisterPassword}
                          id={'form-register-password'} className={'form-register'}>
                        {/*<h1 className={'popup-h1'}>Регистрация</h1>*/}
                        <span id="phoneError" className="error"></span>
                        <br/>
                        <a className={'a-last-first main-test-text-last'}>Завершение регистрации</a>
                        <a className={'a-last-first'}>Необходимо дать согласие:</a>
                        <div className={'form-group-fisrt-one'}>
                            <label className={'popup-p-center'}>
                                <input
                                    type="checkbox"
                                    id="agree_1"
                                    className={`input-checkbox ${!agree1Checked ? 'error' : ''}`}
                                    onChange={handleAgree1Change}
                                />
                                <span className={`custom-checkbox ${!agree1Checked ? 'error' : ''}`}></span>
                                <p>Мне есть 18 лет. Я согласен на обработку персональных данных ООО "Спортивные Лотереи"
                                    и
                                    ООО НКО "Мобильная карта" и с договорами-офертой ООО "Спортивные Лотереи" и ООО НКО
                                    "Мобильная карта"
                                </p>
                                <span id="phoneError" className="error"></span>
                            </label>
                        </div>
                        <div className={'form-group-letter'}>
                            <label className={'popup-p-center'}>
                                <input type={'checkbox'} id={'agree_2'} className={'input-checkbox'} name={'rules1'}/>
                                <span className={`custom-checkbox`}></span>
                                <p>Я соглашаюсь на получение сообщений или рекламы от ООО "Спортивные Лотереи" в формате
                                    СМС, push-уведомлений, e-mail рассылок (писем).
                                </p>
                                <span id="phoneError" className="error"></span>
                            </label>
                        </div>
                        <div className={'form-group'}>
                            <label className={'popup-p-center'}>
                                <input
                                    type="checkbox"
                                    id="agree_3"
                                    className={`input-checkbox ${!agree3Checked ? 'error' : ''}`}
                                    onChange={handleAgree3Change}
                                />
                                <span className={`custom-checkbox ${!agree3Checked ? 'error' : ''}`}></span>
                                <p>Я согласен с обработкой ООО «Спортивные Лотереи» моих персональных данных , собранных
                                    в
                                    рамках договора-оферты ООО «Спортивные Лотереи», в целях направления мне рекламы по
                                    сетям электросвязи.
                                </p>
                            </label>
                        </div>

                        <div className={'form-group-2'}>
                            <label className={'popup-p-center'}>
                                <input
                                    type="checkbox"
                                    id="agree_4"
                                    className={`input-checkbox ${!agree4Checked ? 'error' : ''}`}
                                    onChange={handleAgree4Change}
                                />
                                <span className={`custom-checkbox ${!agree4Checked ? 'error' : ''}`}></span>
                                <p> Я согласен с <a href={'https://nloto-promo.ru/rules.pdf'} target="_blank" className={"text-nloto"}>Правилами
                                    Акции "Ваш билетик"</a>
                                </p>
                                <span id="phoneError" className="error"></span>
                            </label>
                        </div>
                        <div className={'form-group-3'}>
                            <label className={'popup-p-center'}>
                                <input
                                    type="checkbox"
                                    id="agree_5"
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
                            {/*<label className={'popupPassword-form-label'}>Придумайте пароль</label>*/}
                            {/*<input className={`popupPassword-input ${passwordError || password2Error ? 'error' : ''}`} type={"password"} name={"password"} id={'password'}/>*/}
                            {/*{passwordError && <div className={'error-block-phone'} style={{color: '#FFFFFF'}}>{passwordError}</div>}*/}
                            {/*<label className={'popupPassword-form-label'}>Повторите пароль</label>*/}
                            {/*<input className={`popupPassword-input ${passwordError || password2Error ? 'error' : ''}`} type={"password"} name={"password"} id={'password2'}/>*/}
                            {/*{password2Error && <div className={'error-block-phone'} style={{color: '#FFFFFF'}}>{password2Error}</div>}*/}
                            {/*<div className={'error-block'} style={{color: 'red'}}></div>*/}
                            {/*<span id="nameError" className="error"></span>*/}
                        </div>
                        <button type="submit" id="submit-password" className={'button-animation-password'}
                                disabled={!allCheckboxesChecked}>Зарегистрироваться
                        </button>
                        {/*<div className={'form-under-button-password'}>*/}
                        {/*    <p className={'popup-p-under'}>Если у вас уже есть логин и пароль <a href={'https://nloto.ru/'} className={'text-nloto'}>Nloto.ru</a>,*/}
                        {/*        вы можете использовать их на этом сайте</p>*/}
                        {/*    <p className={'popup-p-under-acrom'}>*/}
                        {/*        Уже есть аккаунт? <a href={'#'} onClick={openPopupAuth} id={'authorizationButton'}>Войти</a></p>*/}
                        {/*</div>*/}
                    </form>
                </div>
            </div>
        </div>
    )
}