document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentsContainer = document.getElementById("comments");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input
        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

        // Create a new comment element
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;

        // Append the comment to the comments container
        commentsContainer.appendChild(newComment);

        // Clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("comment").value = "";
    });
});