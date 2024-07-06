import {useEffect} from "react";

export default function ScrollMenu() {
    useEffect(() => {
        // Проверяем, содержит ли URL якорь #prizes или другие якорные ссылки
        if (window.location.href.includes("#prizes") || window.location.href.includes("#winners") || window.location.href.includes("#faq") || window.location.href.includes("#feedback")) {
            // Делаем плавную прокрутку к соответствующему якорному элементу
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({behavior: "smooth"});
            }
        }
    }, []);
}