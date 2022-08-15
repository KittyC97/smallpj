/*var actuaul_answer = Math.floor(Math.random()*100);*/

function your_guess() {
    var guess = document.getElementById("guess").value;
    var guesses = document.getElementById("output");

    if (guess == actuaul_answer) {
        guesses.value = guesses.value + "\r" + "You have guessed correctly! ("+guess+")";
    } else if (guess > actuaul_answer) {
        guesses.value = guesses.value + "\r" + "You guessing too high!("+guess+")";
    } else {
        guesses.value = guesses.value + "\r" + "You guessing too low!("+guess+")";
    }
}
    
function show_answer() {

    if (document.getElementById('cheat').checked) {
        document.getElementById('actuaul_answer').value = actuaul_answer;
        document.getElementById('cheating').style.display = 'inline';
    } else {
        document.getElementById('actuaul_answer').value = '';
        document.getElementById('cheating').style.display = 'none';
    }
}

function gen_new_num(confirmIt) {
    var guesses = document.getElementById("output");

    if (confirmIt && !confirm('Restart game with new number?')) {
        return;
    }
    
    guesses.value = '';
    actuaul_answer = Math.floor(Math.random()*100 + 1);
    guesses.value = "New number generated.\n";

    document.getElementById('actuaul_answer').value = '';
    document.getElementById('cheating').style.display = 'none';
}

window.onload = function(){
    gen_new_num();
}
