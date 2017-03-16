/**
 * Created by Ucenik on 9.3.2017..
 */
function _funkcija() {
    var text1 = '';
    var text2 = '';
    for (var x = 0; x <= 15; x++) {
        if (x === 0) {
            text1 += "<br><strong> Broj:" + 0;
        } else if(x % 2 === 0){
            text1 += "<br><strong>Paran broj: " + x;
        } else {
            text2 += "<br><strong>Neparan broj: " + x;
        };
    };
    document.getElementById("text1").innerHTML = text1;
    document.getElementById("text2").innerHTML = text2;
};