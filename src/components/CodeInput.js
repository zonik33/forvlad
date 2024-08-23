import {useRef} from "react";

const CodeInput = ({ onSubmit, value = ['', '', '', ''], onChange }) => {
    const inputRefs = useRef([]);

    const handleChange = (index, e) => {
        const newValue = e.target.value;

        // Убедитесь, что пользователь вводит только цифры
        if (newValue.match(/^[0-9]$/) || newValue === '') {
            // Обновляем массив значений кода
            const newCodeValues = [...value];
            newCodeValues[index] = newValue;

            // Перейти к следующему полю, если текущее заполнено
            if (newValue && index < 3) {
                inputRefs.current[index + 1].focus();
            }

            // Проверьте, заполнены ли все поля
            if (newCodeValues.every((val) => val !== '')) {
                onSubmit(newCodeValues.join(''));
            }

            // Вызываем onChange из пропсов
            onChange(newCodeValues);

            return;
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            const newCodeValues = [...value];

            if (newCodeValues[index]) {
                // Если текущее поле не пустое, очищаем его
                newCodeValues[index] = '';
                onChange(newCodeValues);
            } else if (index > 0) {
                // Перейти на предыдущее поле, если текущее пустое
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