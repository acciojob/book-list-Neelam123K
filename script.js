//your JS code here. If required.
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields.");
        return;
    }

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    document.getElementById("book-list").appendChild(row);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";

    // Add delete event to the clear button
    row.querySelector(".delete").addEventListener("click", function() {
        row.remove();
    });
});
