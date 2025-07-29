import CodeInput from "../CodeInput";
import PhoneInput from "../PhoneInput";
import PhoneInputForRecovery from "../PhoneInputForRecovery";

export default function PopupPassRecovery (props) {
    function openPopupPassRecovery() {
        closePopup2()
        document.getElementById("popup-recovery").style.display = "block";
    }
    function openPopupAuth() {
        closePopup2()
        document.getElementById("popup-auth").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    function openPopupCode() {
        closePopup2()
        document.getElementById("popup-complete").style.display = "block";
    }


    function closePopup2() {
        document.getElementById("popup-recovery").style.display = "none";
        document.body.classList.remove("no-scroll");
    }

// Функция обновления страницы
    function reloadPage() {
        window.location.href = window.location.href;
    }

    return (
        <div id="popup-recovery" className="popup">
            <div className={'blur-filter'}>
            <div className="popup-content-code" id={'popup-content'}>
                <span className="close" onClick={closePopup2}>&times;</span>
                <form action={''}  id={'form-pass-recovery'} className={'form-register'} >
                    <div className={'popup-h1-pass-recovery'}>
                    <h1 className={'popup-h1-pass-recovery'}>Восстановление пароля</h1>
                    </div>
                    <span id="phoneError" className="error"></span>
                    <br/>
                    <div className={'form-group-password'}>
                        <label className={'popupCode-form-label'}>Телефон</label>
                        <PhoneInputForRecovery/>
                        <div className={'error-block'} style={{color: 'red'}}></div>
                        <span id="nameError" className="error"></span>
                    </div>
                    <button type={'button'} id={'submit-recovery'} onClick={openPopupCode}
                             className={'button-animation-code'}>Получить код</button>
                    <div className={'form-under-button-code'}>
                        <p className={'popup-p-under'}>Если у вас уже есть логин и пароль <a href={'https://nloto.ru/'} className={'text-nloto'}>Nlotо.ru</a>,
                            вы можете использовать их на этом сайте</p>
                        <p className={'popup-p-under-acrom'}>
                            Уже есть личный кабинет? <a href={'#'} onClick={openPopupAuth} id={'authorizationButton'}>Войти</a></p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}