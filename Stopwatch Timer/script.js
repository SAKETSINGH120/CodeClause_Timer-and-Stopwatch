hr = 0;
sec = 0;
min = 0;
var count = 0;

var timer = false;



function Start() {
    timer = true;
    Stopwatch();
};

function Stop() {
    timer = false;

};

function Reset() {
    timer = false;
    hr = 0;
    sec = 0;
    min = 0;
    var count = 0;
    document.getElementById("Hr").innerHTML = "00";
    document.getElementById("Min").innerHTML = "00";
    document.getElementById("Sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";


};

function Stopwatch() {

    if (timer == true) {
        count = count + 1;
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;

        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if (hr < 10) {
            hrString = "0" + hrString;
        }

        if (min < 10) {
            minString = "0" + minString;
        }

        if (sec < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }


        document.getElementById("Hr").innerHTML = hrString;
        document.getElementById("Min").innerHTML = minString;
        document.getElementById("Sec").innerHTML = secString;
        document.getElementById("count").innerHTML = countString;

        setTimeout("Stopwatch()", 10);

    }

}