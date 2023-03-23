window.onload = function () {
    var seconds = 00;
    var tens = 00;

    var appendTens = document.getElementById('tens');
    var appendSeconds = document.getElementById('seconds');

    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');

    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval); //método que limpa o temporizador que é definido no setInterval().
        Interval = setInterval(startTimer, 10) //Método que chama a função temporizador e intervalo especificado.
    };

    buttonStop.onclick = function () {
        clearInterval(Interval);
    };

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";

        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    } //a partir da linha 23 função botão reset.

    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log('seconds');

            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds) {
            appendSeconds.innerHTML = seconds
        }
    }
}