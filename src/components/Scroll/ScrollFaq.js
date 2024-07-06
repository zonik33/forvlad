export default function ScrollFaq (event) {
    event.preventDefault();
    let block = document.getElementById("faq");
    block.scrollIntoView({ behavior: "smooth" });

}