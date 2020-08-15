var counter = 1;
//var dcount = 1;
function like() {
    console.log("start");
    let likeCount = document.querySelector("#like");
    counter++;
    likeCount.innerHTML = "Like " + counter;
}
function dislike() {
    console.log("stop");
    let newelement = document.querySelector("#like");
    counter--;
    newelement.innerHTML = "Like" + counter;

}
function comment() {
    let inpvalue = document.querySelector("#inp").value;
    let cloneValue = document.querySelector("#placecomment").cloneNode(true);
    cloneValue.innerHTML = inpvalue;
    let commentsDiv = document.querySelector("#commentDiv");
    commentsDiv.insertBefore(cloneValue, commentsDiv.firstChild)
}