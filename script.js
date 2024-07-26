function start(){
    var username = prompt("Register your name for the quiz");

document.getElementById("navCont").style.backgroundImage='URL("stock-vector-quiz-and-question-marks-trivia-night-quiz-symbol-neon-sign-night-online-game-with-questions-2052894734.jpg")'
document.getElementById("navCont").style.backgroundSize = "cover";

var welcome = document.getElementById("welcome_txt").innerHTML = "hello "+ username+", welcome to Tech Learner.your name is now registered";
if(username == ""){
    document.getElementById("welcome_txt").innerHTML="hello stranger, welcome to Tech Learner. your name is now registered";
}
}