let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let guess = parseInt(document.getElementById("guess").value);
    attempts++;

    if (guess === secretNumber) {
        document.getElementById("message").innerHTML = `🎉 Selamat! Anda menebak benar dalam ${attempts} kali!`;
        document.getElementById("message").style.color = "green";
    } else if (guess > secretNumber) {
        document.getElementById("message").innerHTML = "🔻 Terlalu besar! Coba lagi.";
        document.getElementById("message").style.color = "red";
    } else {
        document.getElementById("message").innerHTML = "🔺 Terlalu kecil! Coba lagi.";
        document.getElementById("message").style.color = "red";
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").innerHTML = "";
    document.getElementById("guess").value = "";
}
