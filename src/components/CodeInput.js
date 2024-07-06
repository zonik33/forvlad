import React, { useState, useEffect, useRef } from 'react';

const CodeInput = ({ onSubmit }) => {
    const [codeValues, setCodeValues] = useState(['', '', '', '']);
    const inputRefs = useRef([]);
    const [isCodeComplete, setIsCodeComplete] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isCodeComplete && !isSubmitted) {
            onSubmit(codeValues.join(''));
            setIsSubmitted(true);
        }
    }, [isCodeComplete, codeValues, onSubmit, isSubmitted]);

    useEffect(() => {
        setIsSubmitted(false);
    }, [codeValues]);

    const handleChange = (index, e) => {
        const { value } = e.target;
        setCodeValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = value;

            if (value.length === 1 && index < 3) {
                inputRefs.current[index + 1].focus();
            }

            const isComplete = newValues.every((val) => val !== '');

            if (isComplete) {
                setIsCodeComplete(true);
            } else if (isCodeComplete) {
                setIsCodeComplete(false);
            }

            return newValues;
        });
    };

    const handleKeyPress = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && codeValues[index] === '') {
            inputRefs.current[index - 1].focus();
        }
    };

    const renderInputs = () => {
        const inputs = [];
        for (let i = 0; i < 4; i++) {
            const isLastInput = i === 3;
            inputs.push(
                <input
                    key={i}
                    type="text"
                    maxLength="1"
                    placeholder={'_'}
                    value={codeValues[i]}
                    className={`popupCode-input ${isLastInput ? 'last' : ''}`}
                    onChange={(e) => handleChange(i, e)}
                    onKeyPress={(e) => handleKeyPress(i, e)}
                    ref={(ref) => (inputRefs.current[i] = ref)}
                />
            );
        }
        return inputs;
    };

    return <div className="code-input-container">{renderInputs()}</div>;
};

export default CodeInput;