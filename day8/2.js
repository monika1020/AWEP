function submithere() {
    console.log("welcome");
    var submitelement = document.querySelector("#nameid").value;
    console.log(submitelement);
    document.querySelector("#box").innerHTML = submitelement;
}