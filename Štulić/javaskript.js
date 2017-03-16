/**
 * Created by Ucenik on 9.3.2017..
 */
function _while() {
    var text = '';
    var i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("gumb2").innerHTML = text;
};