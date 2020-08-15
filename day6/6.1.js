//var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
    let userComment = document.querySelector("#inputId1").value;
    // create new element
    const newelement = document.createElement("div");
    newelement.textContent = userComment;

    //add styling to new element
    newelement.style.background = "skyblue";
    newelement.style.color = "white";
    newelement.style.margin = "4px";

    // comment box element
    const commentBox = document.querySelector("#commentBox");

    //append the new element to parent
    //commentBox.appendChild(newelement);
    commentBox.insertBefore(newelement, commentBox.firstChild);
    // clean the input box
    document.querySelector("#inputId1").value = "";
}
function likeHere() {
    likeCounter++;
    let btnelement = document.querySelector("#Likeid");
    btnelement.innerHTML = "Like " + likeCounter;

}