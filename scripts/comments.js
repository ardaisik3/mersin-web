document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");
    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    function displayComments() {
        commentList.innerHTML = "";
        comments.forEach(comment => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${comment.user}:</strong> ${comment.text}`;
            commentList.appendChild(listItem);
        });
    }

    if (commentForm) {
        commentForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const user = document.getElementById("comment-user").value;
            const text = document.getElementById("comment-text").value;

            if (user && text) {
                comments.push({ user, text });
                localStorage.setItem("comments", JSON.stringify(comments));
                displayComments();
                commentForm.reset();
            }
        });
    }

    if (commentList) {
        displayComments();
    }
});
