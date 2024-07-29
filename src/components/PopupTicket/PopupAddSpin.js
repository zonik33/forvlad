import lcexit from "../../image/img_30.png";
import Modal from "react-modal";
import React, {useRef, useState} from "react";
import axios from "axios";
import howCenterIcon from "../../image/img_58.png";
import TestForSpin from "../TestSpinProfile";
import SpinForPopup from "../SpinForPopup";

export default function PopupAddSpin(props) {
    const { isOpen, closeModal } = props;
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [registrationError, setRegistrationError] = useState('');
    const [registrationErrorEm, setRegistrationErrorEm] = useState('');
    const popupRef = useRef(null);
    function openPopup3() {
        closeModal();
        document.getElementById("popup-take-gifts").style.display = "block";
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
        document.body.classList.add("no-scroll");
    }
    let onlyTest = 5

    function openPopup2() {
        closeModal();
        document.getElementById("popup-complete").style.display = "block";
        document.body.classList.add("no-scroll");
        // Добавить следующую строку для удаления фокуса с любого активного элемента при открытии
        document.activeElement.blur();
    }
    let isRequestPending = false;

    async function postAddSpin(event) {
        const form = document.getElementById('form-add-spin');
        event.preventDefault();
        const code = document.getElementById('addCode');
        debugger;
        if (isRequestPending) {
            return;
        }
        isRequestPending = true;
        const formData = new FormData(form);
        // if (promocodeValue) {
        //     formData.append('promocode', promocodeValue);
        // }
        formData.append('code', code.value);


        try {
            const response = await axios.post('https://sadas/backend/api/registerCode', formData, {
                headers: {
                    'X-Auth-Token': localStorage.getItem('auth_key')
                }
            });
            if (response.data.result === false) {
                if (response.data.error.code) {
                    setRegistrationErrorEm(response.data.error.code[0]);
                } else {
                    setRegistrationErrorEm('');
                }
            } else {
                openPopup2()
            }
        } catch (error) {

            if (axios.isCancel(error)) {
            } else {

            }
        } finally {
            isRequestPending = false;
        }
    }
    return (
        <Modal closeTimeoutMS={300}
               ref={popupRef}
               className={{
                   base: 'Modal-add',
                   afterOpen: isOpen ? 'ReactModal__Overlay--after-open' : '',
                   beforeClose: isOpen ? 'ReactModal__Overlay--before-close' : '',
               }}
               overlayClassName="Overlay"
               isOpen={isOpen}
               onRequestClose={closeModal}
               style={{
                   overlay: {
                       backgroundColor: 'rgba(0, 0, 0, 0.5)',
                       zIndex: 111,
                   },
                   content: {
                       zIndex: 5,
                       position: 'absolute',
                       top: '53%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                       backgroundColor: '#00438280',
                       backgroundImage: 'linear-gradient(#E1E5F2, #E1E5F2, #E1E5F2)',
                       padding: '1.60vw',
                       borderRadius: '2.08vw',
                       boxShadow: '0vw 1vw 3.5vw 1.7vw #C5CDE4',
                       width: 'auto', // Ширина модального окна
                       height: 'auto', // Высота модального окна

                   },
               }}
               contentLabel="Оставить заявку"
        >
            <form action={'https://promoasd.lasdaimasdesh.ch/backend/api/registerCode'}
                  ref={popupRef}
                  method={'POST'} onSubmit={postAddSpin}
                  id={'form-add-spin'}
                  className={'form-register popup-spin'}>

                <div className={'container-register-modal popup-spin'}>
                    <div>
                        <p className={'left-first-profile-p3-count spin-p-test'}>
                            Розыгрыш приза
                        </p>
                        <span className="close close-for-popup-first" onClick={closeModal}>&times;</span>
                    </div>
                    <div className={'left-second-profile add-spin'}>
                        <p className={'left-first-profile-p spin-p'}>Вы зарегистрировали
                            <br></br>{/*{profile && profile.countTicketsTotal}*/} 6 лотерейных билетов
                            <br></br>на сумму
                            {/*{profile && profile.countTicketsTotal}*/} 2300 рублей.

                        </p>

                        <div className="white-line"></div>
                        <p className={'left-first-profile-p3-count spin-p'}>
                            За каждые 300 рублей вы можете 1 (один) раз прокрутить колесо.
                        </p>
                        {/*{profile && profile.countReferrals > 0 ? (*/}

                        {/*<p className={'left-first-profile-p3'}>*/}

                        {/*    приняли участие <br></br>в*/}
                        {/*    розыгрыше*/}
                        {/*</p>*/}
                        {/*<p className={'left-first-profile-p3-count'}>*/}
                        {/*    {profile && profile.countTicketsRejected}*/}
                        {/*    3*/}
                        {/*</p>*/}
                        {/*<p className={'left-first-profile-p3'}>*/}
                        {/*    могут принять <br></br>участие в*/}
                        {/*    розыгрыше*/}
                        {/*</p>*/}
                        {onlyTest > 0 ? (
                            <>
                                <p className={'left-first-profile-p2-p2-p2 p-popup'}>
                                    Осталось прокрутить {onlyTest} раз
                                </p>

                            </>
                        ) : <p className={'left-first-profile-p2-p2-p2 p-popup'}>
                            Хотите крутануть колесо? Купите лотерейные билеты на сумму от 300 рублей.
                            <br></br>
                            <br></br>
                        </p>
                        }
                        <div className="spin-block">
                            <SpinForPopup onSpinComplete={openPopup3} />
                        </div>
                        {/*<a*/}
                        {/*    className={'button-animation-text-profile click-spin'}>*/}
                        {/*    <b>Крутануть</b> </a>*/}
                    </div>
                    {/*<p className={'register-inputs-text code-left'}>:</p>*/}
                    {/*<input type="text" id={'addCode'}*/}
                    {/*       required*/}
                    {/*       className={`register-inputs code-bottom ${registrationErrorEm ? 'error' : ''}`}*/}
                    {/*       maxLength={11}*/}
                    {/*       placeholder="Ваш код"/>*/}
                    {/*{registrationErrorEm && <div className={'error-block-phone test-code-add'}*/}
                    {/*                             style={{color: '#FFFFFF'}}>{registrationErrorEm}</div>}*/}
                    {/*<span id="phoneError" className="error"></span>*/}
                    {/*<div className="register-button-container">*/}
                        {/*<button type={'submit'} id={'submit-add'} className={'register-button code-down'}>Отправить*/}
                        {/*</button>*/}
                    {/*</div>*/}
                </div>
            </form>
            {/*<button onClick={togglePopup}>Закрыть</button>*/}
        </Modal>
    )
}
