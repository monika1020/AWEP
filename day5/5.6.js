var Ccounter = 1;
var Lcounter = 1;
function Cnow() {
    let Nelement = document.createElement('div');
    Nelement.textContent = "UserComment" + Ccounter;
    //
    Nelement.style.background = "grey";
    Nelement.style.color = "white";
    Nelement.style.margin = "5px";

    const Cbox = document.querySelector("#Cbox");

    Cbox.appendChild(Nelement);


    Ccounter++;
}
function likeHere() {
    Lcounter++;
    var like = document.querySelector("#lid");
    like.innerHTML = "Like " + Lcounter;
}