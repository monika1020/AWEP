// content layout of DELETE options

var likeCounter = 1;

function commentHere() {
    let userComment = document.querySelector("#inputId1").value; //we are not using innerHTML why bcz this is form element
    // Logic here to create new  dynamic element
    const newelement = document.createElement("div");
    newelement.style.display = "flex";
    newelement.style.justifyContent = "space-between";
    newelement.style.marginBottom = "8px";

    const child1 = document.createElement("div");
    child1.textContent = "Demo Comment ";

    const child2 = document.createElement("button");
    child2.textContent = " DELETE";

    newelement.appendChild(child1);
    newelement.appendChild(child2);

    //add styling to new element
    //newelement.style.background = "skyblue";
    // newelement.style.color = "white";
    //newelement.style.margin = "4px";

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