# REST API with Mongoose and Express

This is a simple REST API built with Node.js, Express, and Mongoose for managing a collection of users in a MongoDB database. This project was built as part of a guided instruction set.

## Project Structure

```
RESTAPI_mongoose/
├── config/
│   └── .env
├── models/
│   └── User.js
├── node_modules/
├── .gitignore
├── package-lock.json
├── package.json
└── server.js
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/David-Francis-Effiong/RESTAPI_mongoose.git
   cd RESTAPI_mongoose
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Make sure you have a `config/.env` file with the following variables:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/restapi_mongoose
   ```
   *(Note: You can replace the `MONGO_URI` with your own MongoDB Atlas connection string if you prefer hosting it on the cloud).*

4. **Start the Server:**
   Ensure your local MongoDB database is running, then start the server using:
   ```bash
   node server.js
   ```

## API Endpoints

Once the server is running (default is `http://localhost:3000`), you can test the following API endpoints using a tool like [Postman](https://www.postman.com/):

| HTTP Method | Endpoint        | Description                              | Request Body (JSON) |
|-------------|-----------------|------------------------------------------|---------------------|
| `GET`       | `/users`        | Retrieves a list of all users            | None                |
| `POST`      | `/users`        | Adds a new user to the database          | `{ "name": "...", "email": "...", "age": 25 }` |
| `PUT`       | `/users/:id`    | Edits an existing user by their ID       | `{ "name": "...", "age": 26 }` |
| `DELETE`    | `/users/:id`    | Removes a user from the database by ID   | None                |

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
