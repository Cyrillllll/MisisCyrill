alert("Загадка от Фреско Жака");


function gameGuess() {
    var guessNum = 5;
    var ourNum = prompt("Введите число:");
    if (ourNum > guessNum) {
        alert("Число должно быть меньше!");
        return gameGuess();
    } else if (ourNum < guessNum) {
        alert("Число должно быть больше!");
        return gameGuess();
    } else {
        return alert("Вы угадали!");
    }
}
//gameGuess()

function reminder() {
    alert("ДОЛГААААА");
    //window.close();
}







//setTimeout(reminder,5000);

function valide() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var red_name = /^[a-zа-я]+$/i;
    var pass_name = /^[a-z0-9]{5,100}/i;
}

document.querySelector(".button").addEventListener("click", valide);


