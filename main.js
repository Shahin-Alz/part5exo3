const lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", sayMyName);
}

function sayMyName() {
    alert(this.textContent);
}


/////////////////




for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("dblclick", function editLi() {
        let newText = prompt("Entrer le nouveau texte pour ce LI :");
        this.textContent = newText;
    });
}

///////////////////

const button = document.querySelector("input[value='inverser']");
const firstLi = document.querySelector("#li-one");
const secondLi = document.querySelector("#li-two");

button.addEventListener("click", function () {
    let firstLiValue = firstLi.value;
    firstLi.value = secondLi.value;
    secondLi.value = firstLiValue;
});