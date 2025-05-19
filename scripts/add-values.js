function addValues() {
  const bookTitle = localStorage.getItem("book-title");
  const bookTitleElement = document.getElementById("book-title");
  if (bookTitleElement) {
    bookTitleElement.textContent = bookTitle;
  } else {
    console.error("Element with ID 'book-title' not found.");
  }
}
addValues();
