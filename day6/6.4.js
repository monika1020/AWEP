
//var commentCounter = 1;
var likeCounter = 1;

function commentHere() {
    let userComment = document.querySelector("#inputId1").value;
    // Now will not user create  element; will use cloneNode
    const newelement = document.
        querySelector("#referenceId").cloneNode(true);//deep cloning
    //the comment is stored in first child of the new element



    newelement.removeAttribute("id");// good practice
    newelement.style.visibility = "visible";
    newelement.children[0].innerHTML = userComment;

    const commentBox = document.querySelector("#commentBox");

    // now we want to add the element add the top
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
function deleteComment(btnelement) {
    btnelement.parentElement.remove();
}