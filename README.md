# MyReads Project

This is a react application called 'My Reads' it allows you to determine the status  of each book shown whether you are 'currently reading' this book or 'want to read' it or already 'have read' it and also allows you to search through books and to add them to your shelves

# Installation
In order to install and use this project you must run two commands in the console.

npm install
npm start
These two commands will install all of the dependencies needed for this project and will start the server

# Backend Server
To simplify your development process, we've provided a backend server for you to develop against. The provided file BooksAPI.js contains the methods you will need to perform necessary operations on the backend:

getAll
update
search
getAll
Method Signature:

getAll()
Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.
update
Method Signature:

update(book, shelf)
book: <Object> containing at minimum an id attribute
shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
Returns a Promise which resolves to a JSON object containing the response data of the POST request
search
Method Signature:

search(query, maxResults)
query: <String>
maxResults: <Integer> Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
Returns a Promise which resolves to a JSON object containing a collection of book objects.
These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

# Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.