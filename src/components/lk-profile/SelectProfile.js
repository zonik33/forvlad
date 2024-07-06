import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
const Select = () => {
    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Личный кабинет');

    const selectToggle = () => {
        setIsActive(!isActive);
    };

    const selectChoose = (text) => {
        // Удалить токен из localStorage
        localStorage.removeItem('auth_key');

        // Перенаправить на главную страницу
        window.location.href = '/';
    };

    return (
        <div className={`select-profile ${isActive ? 'is-active' : ''}`}>
            <div className="select-header-profile" onClick={selectToggle}>
                <span className="select-current-profile">Личный кабинет</span>
                <div className={`select-icon-profile icon-right-profile ${isActive ? 'open' : 'closed'}`}>
                    {isActive ? <FaChevronUp /> : <FaChevronDown />}
                </div>
            </div>
            <div className="select-body-profile">
                <div className={'icon-left-item-profile'}></div>
                <div className="select-item-profile" onClick={() => selectChoose('Личный кабинет')}>Выйти из профиля</div>
            </div>
        </div>
    );
};

export default Select;