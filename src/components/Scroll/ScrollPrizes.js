export default function ScrollPrizes (event) {
    event.preventDefault();
    document.getElementById('prizes').scrollIntoView({ behavior: 'smooth' });

}