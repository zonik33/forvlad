import React from 'react';
import InputMask from 'react-input-mask';
class PhoneInputForRecovery extends React.Component {
    render() {
        return (
            <InputMask
                mask="+7 ( 9 9 9 ) 9 9 9 9 9 9 9"
                placeholder="+7 ( _ _ _ ) _ _ _ _ _ _ _"
                maskChar="_"
                className='popupCode-input'
                id='phoneRecovery'
                name='phoneRecovery'
            />

        );
    }
}
export default PhoneInputForRecovery;