import React from 'react';
import InputMask from 'react-input-mask';
class TicketInput extends React.Component {
    render() {
        const { registrationError } = this.props;
        const { value } = this.props;
        const {handleInputChange} = this.props

        return (
            <InputMask
                mask="9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9"
                placeholder="Введите номер билета"
                maskChar="_"
                className={`only-numbers-input ${registrationError ? 'error' : ''}`}
                id={'number-add-ticket'}
                type="text"
                value={value}
                onChange={handleInputChange}
            />

        );
    }
}
export default TicketInput;