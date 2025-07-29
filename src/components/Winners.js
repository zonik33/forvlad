import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import paginatorLeft from '../image/paginator-left.png';
import paginatorRight from '../image/paginator-right.png';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import axios from "axios";
import InputWinners from "./InputWinners";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";
import {useLocation} from "react-router-dom";


export default function Winners(props) {
    const [phoneInput, setPhoneInput] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const [winners, setWinners] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
    let [currentPage, setCurrentPage] = useState(1);
    const [selectedPage, setSelectedPage] = useState(currentPage);
    const pageNumbersRef = useRef(null);
    const listRef = useRef(null);

    const handleSearch = () => {
        const apiUrl = `https://nloto-promo.ru/backend/api/winners?phone=${phoneInput}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setCurrentPage(data.page);
                setTotalPages(data.pages);

                const winnersWithMatchingPhone = data.data.items;
                setWinners(winnersWithMatchingPhone);
                const totalPages = data.data.pages;
                setTotalPages(totalPages || 1);
                setCurrentPage(1);
                console.log("Запустил победителей");
            })
            .catch((error) => {
                console.log(error);
            });
    };



    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Дата розыгрыша');

    const selectToggle = () => {
        setIsActive(!isActive);
    };

    const selectChoose = (text) => {
        const apiUrl = `https://nloto-promo.ru/backend/api/winners?date=${text}`;

        const previousSelectedItem = selectedItem;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setSelectedItem(previousSelectedItem);
                setIsActive(false);
                setWinners(data.data.items);

                const totalPages = data.data.pages;
                setTotalPages(totalPages || 1);
                setCurrentPage(1);
                console.log("Выбрали дату");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const fetchWinners = async (page = 1, text) => {
        try {
            const response = await axios.get(
                `https://nloto-promo.ru/backend/api/winners?page=${page}`
            );

            const totalPages = response.data.data.pages;
            setTotalPages(totalPages || 1);
            const data = response.data.data.items;

            setWinners(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchWinners().catch((error) => {
            console.log(error);
        });
    }, []);




    function toggleDropdown() {
        const dropdown = document.getElementById("monthPicker");
        dropdown.classList.toggle("open");
    }

    const dropdownItems = document.querySelectorAll('.select-custom-dropdown-item');

    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const selectedItem = event.target.textContent;
            const selectedSpan = document.querySelector('.selected-item');
            selectedSpan.textContent = selectedItem;
            const dropdown = document.getElementById('monthPicker');
            dropdown.classList.remove('open');
        });
    });


    useEffect(() => {
        const pageNumbers = pageNumbersRef.current;
        const listElement = listRef.current;

        const prevPage = document.getElementById('prevPage');
        const nextPage = document.getElementById('nextPage');
        const pageNumbersContainer = document.getElementById('pageNumbersContainer');

        if (prevPage) {
            prevPage.addEventListener('click', handlePreviousClick);

        }

        if (nextPage) {
            nextPage.addEventListener('click', handleNextClick);

        }
        if (pageNumbersContainer) {
            pageNumbersContainer.addEventListener('click', handlePageNumberClick);

        }


        function handlePageNumberClick(event) {
            const pageNumber = event.target.dataset.pageNumber;

            if (pageNumber) {
                const updatedPageNumber = parseInt(pageNumber);
                setCurrentPage(updatedPageNumber);
                renderPageNumbers();
                updateButtonStates();
                moveList();
                fetchWinners(updatedPageNumber, selectedItem);

            }
        }

        function handlePreviousClick() {
            if (currentPage > 1) {
                currentPage--;
                renderPageNumbers();
                updateButtonStates();
                moveList();
                fetchWinners(currentPage);

            }
        }

        function handleNextClick() {
            if (currentPage < totalPages) {
                currentPage++;
                renderPageNumbers();
                updateButtonStates();
                moveList();
                fetchWinners(currentPage);


            }
        }


        function updateButtonStates() {
            const maxPageElement = document.getElementById('maxPage');
            if (maxPageElement) {
                maxPageElement.innerText = totalPages;
            }
            const prevPageButton = document.getElementById('prevPage');
            const nextPageButton = document.getElementById('nextPage');

            if (prevPageButton) {
                prevPageButton.disabled = currentPage === 1;
            }

            if (nextPageButton) {
                nextPageButton.disabled = currentPage === totalPages;
            }
        }

        function renderPageNumbers() {
            if (pageNumbersRef.current && totalPages > 0) {
                pageNumbersRef.current.innerHTML = '';
            }
            const showFirstEllipsis = currentPage > 2;
            const showLastEllipsis = currentPage < totalPages - 2;
            let startPage;
            let endPage;

            if (showFirstEllipsis && showLastEllipsis) {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            } else if (showFirstEllipsis && !showLastEllipsis) {
                startPage = totalPages - 2;
                endPage = totalPages;
            } else if (!showFirstEllipsis && showLastEllipsis) {
                startPage = 1;
                endPage = Math.min(3, totalPages);
            } else {
                startPage = 1;
                endPage = totalPages;
            }

            if (showFirstEllipsis) {
                const ellipsisStart = document.createElement('span');
                ellipsisStart.innerText = '...';
                ellipsisStart.classList.add('page-number');
                pageNumbers.appendChild(ellipsisStart);
            }

            for (let i = startPage; i <= endPage; i++) {
                if (i === totalPages && currentPage !== totalPages) {
                    continue;
                }
                const span = document.createElement('span');
                span.innerText = i;
                span.id = `page-${i}`;
                span.classList.add('page-number');
                span.setAttribute('data-page-number', i);
                if (i === currentPage) {
                    span.classList.add('active');
                }
                span.addEventListener('click', function () {
                    currentPage = i;
                    updateButtonStates();
                    renderPageNumbers();
                    moveList();
                });
                span.addEventListener('mouseover', function () {
                    if (!span.classList.contains('active')) {
                        span.classList.add('hover');
                    }
                });
                span.addEventListener('mouseout', function () {
                    span.classList.remove('hover');
                });

                pageNumbers.appendChild(span);
            }

            if (showLastEllipsis) {
                const ellipsisEnd = document.createElement('span');
                ellipsisEnd.innerText = '...';
                ellipsisEnd.classList.add('page-number');
                pageNumbers.appendChild(ellipsisEnd);
            }
                const lastPageElement = document.createElement('span');
                lastPageElement.innerText = totalPages;
                lastPageElement.classList.add('page-number');
                lastPageElement.addEventListener('click', function () {
                setCurrentPage(totalPages);
                updateButtonStates();
                renderPageNumbers();
                fetchWinners(totalPages, selectedItem);
                moveList();
            });

            if (currentPage !== totalPages) {
                pageNumbers.appendChild(lastPageElement);
            }

        }


        function moveList() {
            const activeElement = listElement.querySelector(`#page-${currentPage}`);
            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                });
            } else if (currentPage > 3) {
                const firstPageElement = listElement.querySelector(`#page-1`);
                if (firstPageElement) {
                    const ellipsisElement = document.createElement('span');
                    ellipsisElement.textContent = '...';

                    listElement.insertBefore(ellipsisElement, firstPageElement);

                    ellipsisElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center',
                    });
                }
            }
        }
        renderPageNumbers();
    }, [totalPages, currentPage]); /* currentPage буду убирать*/






let select = function () {
    let selectHeader = document.querySelectorAll('.select-header');
    let selectItem = document.querySelectorAll('.select-item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    })

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }
    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select-current');
            currentText.innerText = text;
            select.classList.remove('is-active');
    }
};
select();

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const activeSection = params.get("section");

    const prizesRef = useRef(null);
    const winnersRef = useRef(null);

    useEffect(() => {
        if (activeSection === "prizes" && prizesRef.current) {
            setTimeout(() => {
                prizesRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        } else if (activeSection === "winners" && winnersRef.current) {
            setTimeout(() => {
                winnersRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    }, [activeSection]);

    return (
        <div className={'winners'} id={'winners'} ref={winnersRef}>
            <div className={'wrapper'}>
                <div className={'winners-text'}>Победители
                </div>
                <div className={'winners-tabs'}>
                    <div className={'winners-top-input'}>
                        <div className={'winners-left-input'}>
                            <div className={`select ${isActive ? 'is-active' : ''}`}>
                                <div className="select-header" onClick={selectToggle}>
                                    <span className="select-current">{selectedItem}</span>
                                    <div className={`select-icon icon-right ${isActive ? 'open' : 'closed'}`}>
                                        {isActive ? <FaChevronUp /> : <FaChevronDown />}
                                    </div>
                                </div>
                                <div className="select-body">
                                    <div className={"custom-simple-bar1"}>
                                        <SimpleBar forceVisible="y" autoHide={false} style={{
                                            maxHeight: 450,
                                            left: 0, top: 0, bottom: 0, width: '100%', position: 'absolute'
                                        }}>
                                            <div className="select-item" onClick={() => selectChoose('02.02.2024')}>2
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('03.02.2024')}>3
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('04.02.2024')}>4
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('05.02.2024')}>5
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('06.02.2024')}>6
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('07.02.2024')}>7
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('08.02.2024')}>8
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('09.02.2024')}>9
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('10.02.2024')}>10
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('11.02.2024')}>11
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('12.02.2024')}>12
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('13.02.2024')}>13
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('14.02.2024')}>14
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('15.02.2024')}>15
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('16.02.2024')}>16
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('17.02.2024')}>17
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('18.02.2024')}>18
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('19.02.2024')}>19
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('20.02.2024')}>20
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('21.02.2024')}>21
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('22.02.2024')}>22
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('23.02.2024')}>23
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('24.02.2024')}>24
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('25.02.2024')}>25
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('26.02.2024')}>26
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('27.02.2024')}>27
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('28.02.2024')}>28
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('29.02.2024')}>29
                                                февраля
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('1.03.2024')}>1
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('2.03.2024')}>2
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('3.03.2024')}>3
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('4.03.2024')}>4
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('5.03.2024')}>5
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('6.03.2024')}>6
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('7.03.2024')}>7
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('8.03.2024')}>8
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('9.03.2024')}>9
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('10.03.2024')}>10
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('11.03.2024')}>11
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('12.03.2024')}>12
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('13.03.2024')}>13
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('14.03.2024')}>14
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('15.03.2024')}>15
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('16.03.2024')}>16
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('17.03.2024')}>17
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('18.03.2024')}>18
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('19.03.2024')}>19
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('20.03.2024')}>20
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('21.03.2024')}>21
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('22.03.2024')}>22
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('23.03.2024')}>23
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('24.03.2024')}>24
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('25.03.2024')}>25
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('26.03.2024')}>26
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('27.03.2024')}>27
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('28.03.2024')}>28
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('29.03.2024')}>29
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('30.03.2024')}>30
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('31.03.2024')}>31
                                                марта
                                            </div>
                                            <div className="select-item" onClick={() => selectChoose('1.04.2024')}>1
                                                апреля
                                            </div>
                                        </SimpleBar>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="winners-right-input">
                            <InputWinners
                                phoneInput={phoneInput}
                                setPhoneInput={setPhoneInput}
                                registrationError={registrationError}
                                handleSearch={handleSearch}
                            />
                            <button className="search-btn" onClick={handleSearch}></button>
                        </div>
                    </div>
                    <div className={'winners-tabs-content'}>
                        <div className={'tab'}>
                            <div className={'tab-inner'}>
                                <div className={'table'}>
                                    <div className={'table-head'}>
                                        <div className={'head-colm-prize'}>
                                            <div className={'colm-text'}> Телефон </div>
                                        </div>
                                        <div className={'head-colm-phone'}>
                                            <div className={'colm-text'}> Дата </div>
                                        </div>
                                        <div className={'head-colm-date'}>
                                            <div className={'colm-text'}> Приз </div>
                                        </div>
                                    </div>
                                    <div className={'table-body'}>
                                        <div className={'table-body'}>
                                            {winners.map((winner, index) => (
                                                <div className={'table-body-winners'} key={index}>
                                                    <div className={'head-colm-prize1'}>
                                                        <div className={'colm-tel-none'}> Телефон: </div>
                                                        <div className={'colm-tel'}> {winner.phone} </div>
                                                    </div>
                                                    <div className={'head-colm-phone1'}>
                                                        <div className={'colm-data-none'}> Дата: </div>
                                                        <div className={'colm-data'}> {winner.date} </div>
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <div className={'colm-prize-none'}> Приз: </div>
                                                        <div className={'colm-prize'}> {winner.prize} </div>
                                                    </div>
                                                </div>
                                            ))}

                                            <p id={'pageCount'}></p>
                                            <div id="paginator">

                                                <img src={paginatorLeft} alt="Button" id="prevPage"
                                                     className={'paginatorLeft'}/>
                                                <>


                                                        <div ref={listRef} >
                                                        {/* Список элементов страниц */}
                                                    </div>

                                                    <div ref={pageNumbersRef} id="pageNumbersContainer" className="page-numbers-wrapper">
                                                        {/* Кнопки для навигации по страницам */}
                                                    </div>


                                                </>

                                                <img src={paginatorRight} alt="Button" id="nextPage"
                                                     className={'paginatorRight'}/>

                                            </div>

                                        </div>

                                    </div>
                                    <div className={'winners-videos'}>
                                        <a href={'winners-videos/'}>Видео-записи розыгрышей</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )

    }