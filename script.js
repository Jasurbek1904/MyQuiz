function start() {
    let runTime = document.getElementById("time").value;
    let sec = runTime
    question()

    setInterval(function () {
        if (sec > 0) {
            sec--
        } else {
            document.getElementById("multnumber").innerHTML = "You finished and your score is " + document.getElementById("scores").innerHTML
            document.getElementById("multnumber").style.textAlign = "center"
            document.getElementById("multnumber").style.fontSize = "50px"
            document.getElementById("number1").innerHTML = "";
            document.getElementById("number2").innerHTML = "";
            document.getElementById("number3").innerHTML = "";
            document.getElementById("number4").innerHTML = "";
        }
        document.getElementById("time").value = sec
    }, 1000)
}

let result = 0
let score = 0
let sos = document.getElementById("scores").innerHTML
let num1 = Math.floor(Math.random() * 9);
let num2 = Math.floor(Math.random() * 9);
result = num1 * num2
document.getElementById("multnumber").innerHTML = num1 + "x" + num2
document.getElementById("multnumber").style.textAlign = "center"
document.getElementById("multnumber").style.fontSize = "100px"


let ans1 = Math.floor(Math.random() * 9) * Math.floor(Math.random() * 9);
let ans2 = Math.floor(Math.random() * 9) * Math.floor(Math.random() * 9);
let ans3 = Math.floor(Math.random() * 9) * Math.floor(Math.random() * 9);
let ans4 = Math.floor(Math.random() * 9) * Math.floor(Math.random() * 9);
document.getElementById("number1").innerHTML = ans1;
document.getElementById("number2").innerHTML = ans2;
document.getElementById("number3").innerHTML = ans3;
document.getElementById("number4").innerHTML = ans4;

function question() {
    let num1 = Math.floor(Math.random() * 9);
    let num2 = Math.floor(Math.random() * 9);
    result = num1 * num2
    document.getElementById("multnumber").innerHTML = num1 + "x" + num2
    document.getElementById("multnumber").style.textAlign = "center"
    document.getElementById("multnumber").style.fontSize = "100px"

    ans1 = Math.floor(Math.random() * 9) * Math.floor(Math.random() * 9);
    ans2 = Math.floor(Math.random() * 9) * Math.floor(Math.random() * 9);
    ans3 = Math.floor(Math.random() * 9) * Math.floor(Math.random() * 9);
    ans4 = Math.floor(Math.random() * 9) * Math.floor(Math.random() * 9);

    document.getElementById("number1").innerHTML = ans1;
    document.getElementById("number2").innerHTML = ans2;
    document.getElementById("number3").innerHTML = ans3;
    document.getElementById("number4").innerHTML = ans4;


    let correctAnswerIndex = Math.floor(Math.random() * 4) + 1
    let correctAnswerId = "number" + correctAnswerIndex;
    document.getElementById(correctAnswerId).innerHTML = result;

}

function checkAnswer(pIndex) {
    let answer = document.getElementById("number" + pIndex).innerHTML;
    if (answer == result) score++;
    document.getElementById("scores").innerHTML = sos + score

    question()
}
document.getElementById("reset").addEventListener("click", function () {
    location.reload()
})