function Readvalue() {
    console.log("login");
    var newelement = document.querySelector("#usernameid").value;
    console.log(newelement);
    document.querySelector("#box").innerHTML = newelement;

}