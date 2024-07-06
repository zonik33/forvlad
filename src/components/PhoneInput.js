import React from 'react';
import InputMask from 'react-input-mask';
class PhoneInput extends React.Component {
    render() {
        const { registrationError } = this.props;
        return (
            <InputMask
                mask="+7 (999) 999-99-99"
                placeholder="+7 (___) ___-__-__"
                maskChar="_"
                className={`main-input main-input-for-popup ${registrationError ? 'error' : ''}`}
                id='login'
            />

        );
    }
}
export default PhoneInput;