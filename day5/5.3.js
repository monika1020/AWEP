
var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
    // create new element
    const newelement = document.createElement("div");
    newelement.textContent = "User Comment....." + commentCounter;

    //add styling to new element
    newelement.style.background = "skyblue";
    newelement.style.color = "white";
    newelement.style.margin = "4px";

    // comment box element
    const commentbox = document.querySelector("#commentBox");

    //append the new element to parent
    commentbox.appendChild(newelement);
    commentCounter++;
}
function likeHere() {
    likeCounter++;
    let btnelement = document.querySelector("#Likeid");
    btnelement.innerHTML = "Like " + likeCounter;

}