export default function ScrollWinners(event) {
    event.preventDefault();
    let block = document.getElementById("winners");
    block.scrollIntoView({ behavior: "smooth" });

}