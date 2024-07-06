import React from 'react';
import InputMask from 'react-input-mask';
import phoneInput from "./PhoneInput";

class InputWinners extends React.Component {
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // Выполните обработку формы, например, вызовите функцию `handleSearch`
            this.props.handleSearch();
        }
    };

    render() {
        const { setPhoneInput, registrationError } = this.props;
        return (
            <InputMask
                mask="+7 (999) 999-99-99"
                placeholder="Найти себя по телефону"
                maskChar="_"
                className={`main-input main-input-for-popup ${registrationError ? 'error' : ''}`}
                type="text"
                id="phoneInput"
                value={this.props.phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                onKeyPress={this.handleKeyPress} // Добавлен обработчик события onKeyPress
            />
        );
    }
}

export default InputWinners;