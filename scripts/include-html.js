function includeHTML() {
  return new Promise(() => {
    var elements = document.querySelectorAll('[w3-include-html]');
    elements.forEach(function(el) {
      var file = el.getAttribute('w3-include-html');
      if (file) {
        fetch(file)
          .then(response => {
            if (response.ok) return response.text();
            throw new Error('File not found');
          })
          .then(data => {
            el.innerHTML = data;
            el.removeAttribute('w3-include-html');
            includeHTML();
          })
          .catch(error => {
            el.innerHTML = "Error loading file.";
          });
      }
    });
  });
}
includeHTML();
