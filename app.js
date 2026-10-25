const form = document.getElementById("book-form");
const list = document.getElementById("book-list");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");

let books = loadBooks();

// Read the saved books. Anything unreadable is ignored instead of breaking the page.
function loadBooks() {
  try {
    const saved = JSON.parse(localStorage.getItem("books"));
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function save() {
  localStorage.setItem("books", JSON.stringify(books));
}

function render() {
  list.innerHTML = "";

  if (books.length === 0) {
    const empty = document.createElement("li");
    empty.textContent = "No books yet. Add one above.";
    list.appendChild(empty);
    return;
  }

  books.forEach((book, index) => {
    const item = document.createElement("li");
    const label = document.createElement("label");

    const box = document.createElement("input");
    box.type = "checkbox";
    box.checked = book.read;
    box.addEventListener("change", () => {
      books[index].read = box.checked;
      save();
      render();
    });

    // textContent keeps whatever the user typed as plain text.
    const text = document.createElement("span");
    text.textContent = book.title + " by " + book.author;
    if (book.read) {
      text.style.textDecoration = "line-through";
    }

    label.append(box, text);
    item.appendChild(label);
    list.appendChild(item);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  // Spaces alone do not count as a title or an author.
  if (title === "" || author === "") {
    titleInput.focus();
    return;
  }

  books.push({ title: title, author: author, read: false });
  save();
  render();
  form.reset();
  titleInput.focus();
});

render();
