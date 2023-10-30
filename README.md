Sample list of API endpoints and their functionalities:
1. /books (POST) - Insert details a new book .
2. /books (GET) - Get a details of all books.
3. /books/:id (GET) - Get details of a specific book by ID.
4. /api/courses (POST) - Create a new course.
5. /books/:id (PUT) - Update an existing details of a book by ID.
6. /books/:id (DELETE) - Delete a book by ID.

Sample API requests and responses:

1. GET /books: Get details of all books
    Response: Details of all books in the database
2. GET /books/:id: Get details of a book by ID
    Response: Details of book with the specified ID
3. POST /books: Insert a new book
    Request: Book details in the request body
    Response: Details of newly created Book
4. PUT /books/:id: Update details of existing book by ID
    Request: The updated book details in the request body
    Response: The updated book details
5. DELETE /api/courses/:id: Delete a book by ID
    Response: A success message indicating that the book has been deleted.

// Instructions to set up and run the application locally
1. Download the project.
2. Open it in an IDE.
3. Open terminal and run "npm install". This will install all required packages.
4. Create an .env file containing two constants i.e; PORT and MONGODB_URL.
5. Set PORT = 3000 or any other Port in which you want to run the app.
6. Set MONGODB_URL =  connection string provided by mongoDb Atlas, make sure to replace <password> by password.
7. Now run the server using "npm start".
8. You can use Postman to test APIs.
