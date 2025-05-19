function addValues() {
  const bookTitle = localStorage.getItem("book-title");
  const bookAuthor = localStorage.getItem("book-author");
  const bookPublishDate = localStorage.getItem("book-publish-date");
  const bookIsbn = localStorage.getItem("book-isbn");
  const bookIsbn13 = localStorage.getItem("book-isbn13");

  const bookTitleElement = document.getElementById("book-title");
  const bookAuthorElement = document.getElementById("book-author");
  const bookPublishDateElement = document.getElementById("book-publish-date");
  const bookIsbnElement = document.getElementById("book-isbn");
  const bookIsbn13Element = document.getElementById("book-isbn13");

  if (bookTitleElement) {
    bookTitleElement.textContent = bookTitle;
  } else {
    console.error("Element with ID 'book-title' not found.");
  }

  if (bookAuthorElement) {
    bookAuthorElement.textContent = bookAuthor;
  } else {
    console.error("Element with ID 'book-author' not found.");
  }

  if (bookPublishDateElement) {
    bookPublishDateElement.textContent = bookPublishDate;
  } else {
    console.error("Element with ID 'book-publish-date' not found.");
  }

  if (bookIsbnElement) {
    bookIsbnElement.textContent = bookIsbn;
  } else {
    console.error("Element with ID 'book-isbn' not found.");
  }

  if (bookIsbn13Element) {
    bookIsbn13Element.textContent = bookIsbn13;
  } else {
    console.error("Element with ID 'book-isbn13' not found.");
  }
}
addValues();
