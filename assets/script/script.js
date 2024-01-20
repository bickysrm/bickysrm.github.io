const text = document.querySelector(".sec-text");

const Load = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Youtuber";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 8000); //1s = 1000 milliseconds
}

Load();
setInterval(Load, 12000);

