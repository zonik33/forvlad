export default function ScrollSupport (event) {
    event.preventDefault();
    let block = document.getElementById("support");
    block.scrollIntoView({ behavior: "smooth" });

}