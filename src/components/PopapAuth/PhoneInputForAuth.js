import React from 'react';
import InputMask from 'react-input-mask';
class PhoneInputForAuth extends React.Component {
    render() {
        const { authLoginError } = this.props;

        return (
            <InputMask
                mask="+7 (999) 999-99-99"
                placeholder="+7 (___) ___-__-__"
                maskChar="_"
                className={`popupAuth-input ${authLoginError ? 'error' : ''}`}
                id={'loginAuth'}
            />

        );
    }
}
export default PhoneInputForAuth;