/**
 * Created by Ucenik on 9.3.2017..
 */
function _funkcija2() {
    var xq = prompt("Upišite prvi broj: ",0);
    var xk = prompt("Upišite zadnji broj: ",0);
    var text1 = '';
    while (xq <= xk) {
        text1 += "<br><strong>Trenutni broj: " + xq;
        xq ++;
    }
    document.getElementById("text").innerHTML = text1;
};

