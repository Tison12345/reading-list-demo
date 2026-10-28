var books = [];

function showBooks() {
  var list = document.getElementById("book-list");
  list.innerHTML = "";
  for (var i = 0; i < books.length; i++) {
    var li = document.createElement("li");
    li.textContent = books[i].title + " - " + books[i].author + " (rating: " + books[i].rating + ")";
    if (books[i].read) {
      li.style.color = "gray";
    }

    var button = document.createElement("button");
    button.textContent = books[i].read ? "Mark unread" : "Mark read";
    button.setAttribute("data-index", i);
    button.addEventListener("click", function () {
      var index = this.getAttribute("data-index");
      books[index].read = !books[index].read;
      showBooks();
    });

    li.appendChild(button);
    list.appendChild(li);
  }
}

document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var rating = document.getElementById("rating").value;
  books.push({ title: title, author: author, rating: rating, read: false });
  showBooks();
});
