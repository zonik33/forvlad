import {useRef} from "react";

const CodeInput = ({ onSubmit, value = ['', '', '', ''], onChange }) => {
    const inputRefs = useRef([]);

    const handleChange = (index, e) => {
        const newValue = e.target.value;

        if (newValue.match(/^[0-9]$/) || newValue === '') {
            // обновляем массив
            const newCodeValues = [...value];
            newCodeValues[index] = newValue;

            // если текущее заполнено
            if (newValue && index < 3) {
                inputRefs.current[index + 1].focus();
            }

            if (newCodeValues.every((val) => val !== '')) {
                onSubmit(newCodeValues.join(''));
            }

            onChange(newCodeValues);

            return;
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            const newCodeValues = [...value];

            if (newCodeValues[index]) {
                // очищаем
                newCodeValues[index] = '';
                onChange(newCodeValues);
            } else if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const renderInputs = () => {
        return value.map((codeValue, index) => (
            <input
                key={index}
                type="text"
                maxLength="1"
                placeholder={'_'}
                value={codeValue}
                className={`popupCode-input`}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(ref) => (inputRefs.current[index] = ref)}
            />
        ));
    };

    return <div className="code-input-container">{renderInputs()}</div>;
};

export default CodeInput;