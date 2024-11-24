const promiseButton = document.querySelector(".promise .left");
promiseButton.addEventListener("click", promiseFunc);
function promiseFunc() {
    const fade = document.querySelector(".promise");
    const count = fade.children.length;
    
    for (let x = 1; x <= count; x++) {
        const eachElement = document.querySelector(`.promise div:nth-child(${x})`);
        setTimeout(() => {
            eachElement.classList.add("fade");
        }, x * 500)
    }

    const container = document.getElementById("container");
    container.style.transform = "translateY(-25%)";
    removeEventListener("click", promiseFunc);
}