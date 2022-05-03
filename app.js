const textArea = document.querySelector(".text");
const choiceBoxs = document.querySelector(".choice-boxs");

textArea.addEventListener("keyup", (e) => {
    createChoiceElement(e.target.value);

    if (e.key === "Enter") {
        setTimeout(() => {
            e.target.value = "";
        }, 10);

        randomSelect();
    }
});

function createChoiceElement(input) {
    let text = input
        .split(",")
        .filter((item) => item.trim() !== "")
        .map((item) => item.trim());

    choiceBoxs.innerHTML = "";

    text.forEach((element) => {
        const textEl = document.createElement("span");
        textEl.classList.add("item");
        textEl.innerText = element;
        choiceBoxs.appendChild(textEl);
    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        activeTag(randomTag);

        setTimeout(() => {
            unActiveTag(randomTag);
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            activeTag(randomTag);
        }, 100);
        
    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll(".item");
    return tags[Math.floor(Math.random() * tags.length)];
}

function activeTag(tag) {
    tag.classList.add("active");
}

function unActiveTag(tag) {
    tag.classList.remove("active");
}
