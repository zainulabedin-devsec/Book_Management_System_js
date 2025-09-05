let books = [];

    function addBook() {
      const bookName = document.getElementById('bookName').value;
      const authorName = document.getElementById('authorName').value;
      const bookDescription = document.getElementById('bookDescription').value;
      const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

      if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
          name: bookName,
          authorName: authorName,
          bookDescription: bookDescription,
          pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
      } else {
        alert('Please fill in all fields correctly.');
      }
    }

    function showbooks() {
      const booksDiv = books.map((book, index) => `
        <h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name:</strong> ${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>
      `);
      document.getElementById('books').innerHTML = booksDiv.join('');
    }

    function editbook(index) {
      const book = books[index];
      document.getElementById('bookName').value = book.name;
      document.getElementById('authorName').value = book.authorName;
      document.getElementById('bookDescription').value = book.bookDescription;
      document.getElementById('pagesNumber').value = book.pagesNumber;
      books.splice(index, 1); // Remove old entry for updating
      showbooks();
    }

    function deletebook(index) {
      books.splice(index, 1);
      showbooks();
    }

    function clearInputs() {
      document.getElementById('bookName').value = '';
      document.getElementById('authorName').value = '';
      document.getElementById('bookDescription').value = '';
      document.getElementById('pagesNumber').value = '';
    }