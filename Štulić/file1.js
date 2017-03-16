/**
 * Created by Ucenik on 9.3.2017..
 */
function _for() {
    var text = '';
    for (var x = 7; x <= 14; x++) {
        text += "<b>Trenutni broj: " + x ;
    };
    document.getElementById("pow").innerHTML = text;
}