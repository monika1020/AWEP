let likeCount = 1;
function likeme() {
    console.log("start");
    likeCount++;
    let likeElement = document.querySelector("#likeid");

    likeElement.innerHTML = likeCount;

}
function commetHere() {
    console.log("comment");
    const var1 = document.querySelector("#input").value;

    const var2 = document.createElement("div");
    var2.textContent = var1;

    var2.style.marginBottom = "2px";
    var2.style.background = "whitesmoke";
    var2.style.roundedpill = "2";



    const CBOX = document.querySelector("#box");
    CBOX.insertBefore(var2, CBOX.firstChild);
    document.querySelector("#input").value = "";


}