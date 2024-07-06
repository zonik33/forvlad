export default function scrollToPr(event, elementId) {
    event.preventDefault();
    const smoothScrollOptions = {
        behavior: 'smooth',
        block: 'start',
    };

    setTimeout(() => {
        if (elementId === 'prizes') {
            document.getElementById('prizes').scrollIntoView(smoothScrollOptions); // Прокрутка к элементу с id='prizes'
        } else {
            window.location.href = `/#${elementId}`; // Переход на главную страницу с хэш-фрагментом
        }
    }, 500); // Задержка перед выполнением перехода
}