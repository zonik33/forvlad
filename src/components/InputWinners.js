import React from 'react';
import InputMask from 'react-input-mask';

class InputWinners extends React.Component {
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {

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
                onKeyPress={this.handleKeyPress}
            />
        );
    }
}

export default InputWinners;