const container = document.getElementById("container");
const promiseButton = document.querySelector(".promise .left");
promiseButton.addEventListener("click", promiseFunc);

function promiseFunc() {
    const fade = document.querySelector(".promise");
    const count = fade.children.length;
    
    for (let x = 1; x <= count; x++) {
        const eachElement = document.querySelector(`.promise div:nth-child(${x})`);
        setTimeout(() => {
            eachElement.classList.add("fade");
        }, x * 500);
    }

    container.style.transform = "translateY(-25%)";
    removeEventListener("click", promiseFunc);
};

document.addEventListener("keypress", nextFunc);

let currentIndex = 1;
let pressCount = 1;

function nextFunc(e) {
    const fade = document.querySelector(".forgive .hint .text");
    const count = fade.children.length;

    if (e.key === "N" || e.key === "n") {
        if (currentIndex < count) {
            const currentChild = fade.children[currentIndex];
            currentChild.classList.add("fade");
            currentIndex++;
        }

        pressCount++;

        if (pressCount === 4) {
            container.style.transform = "translateY(-50%)";
        }
    }
}

const show = document.getElementById("final");
const yes = document.querySelector(".reconcile .left");
const hugCharacter = document.querySelectorAll(".reconcile .description img");
console.log(hugCharacter.length)
yes.addEventListener("click", () => {
    for (let x = 1; x <= hugCharacter.length; x++) {
        const hug = document.querySelector(`.reconcile .description img:nth-child(${x})`);
        hug.classList.add("hug");
        show.style.opacity = "1";
    }
});

const hams = document.getElementById("hams");
const no = document.querySelector(".reconcile .right");
no.addEventListener("click", () => {
    hams.style.opacity = "0";
})
