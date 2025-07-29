import React, {useState} from 'react';

export default function PopupVideos({ title, prize, video }) {
    function openPopupTicket3() {
        closePopup2()
        document.getElementById("popup-ticket-3").style.display = "block";
    }
    function openPopupAuth() {
        closePopup2()
        document.getElementById("popup-auth").style.display = "block";
    }
    function openPopup() {
        closePopup2()
        document.getElementById("popup").style.display = "block";
    }


    function closePopup2() {
        let video = document.getElementById("test-id-for3");
        video.src = video.src;
        document.getElementById("popup-videos").style.display = "none";
        document.body.classList.remove("no-scroll");
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    }

// Функция обновления страницы
    function reloadPage1() {
        window.location.href = window.location.href;
    }
    function reloadPage() {
        window.location.reload();
    }
    window.addEventListener('beforeunload', function(event) {
        localStorage.removeItem('number');
    });

    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^\d]/g, '');
        setValue(sanitizedValue);
    }
    const [showTooltip, setShowTooltip] = useState(false);

    const openTooltip = () => {
        setShowTooltip(true);
    };

    const closeTooltip = () => {
        setShowTooltip(false);
    };
    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    }



    return (
        <div id="popup-videos" className="popup">
            <div className={'blur-filter'}>
                <div className="popup-winners-videos" id={'popup-content'}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <form action={''} id={'form-add-ticket3'} className={'form-register'}>
                        <div className={"popupVideos-div-block"}>
                        <h1 className={'popup-h1'} id={'test-id-for'}>{title}</h1>
                        <h1 className={'popup-h2'} id={'test-id-for2'}>{prize}</h1>
                </div>
                        <div className="video-container">
                            <iframe id={"test-id-for3"} width="560" height="315" src={`https://www.youtube.com/embed/${video}`} frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}