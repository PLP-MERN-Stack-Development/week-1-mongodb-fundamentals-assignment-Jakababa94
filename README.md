# MongoDB Fundamentals Assignment

This project demonstrates basic and advanced MongoDB operations using Node.js. It includes scripts to populate a sample bookstore database and perform a variety of queries, aggregations, and indexing operations.

## Table of Contents

- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
- [Scripts Overview](#scripts-overview)
  - [insert_books.js](#insert_booksjs)
  - [queries.js](#queriesjs)
- [Sample Data](#sample-data)
- [Example Queries](#example-queries)
- [Aggregation Pipelines](#aggregation-pipelines)
- [Indexing](#indexing)
- [Screenshots](#screenshots)
- [License](#license)

---

## Project Structure

```
insert_books.js         # Script to insert sample book data into MongoDB
queries.js              # MongoDB queries, aggregations, and indexing examples
README.md               # Project documentation
Week1-Assignment.md     # Assignment instructions
.github/                # GitHub classroom and workflow configs
screenshot/             # Screenshots for the assignment
```

## Requirements

- [Node.js](https://nodejs.org/) (v12+ recommended)
- [MongoDB](https://www.mongodb.com/) (local instance or Atlas cluster)
- npm (Node package manager)

## Setup Instructions

1. **Clone the repository**  
   Download or clone this repository to your local machine.

2. **Install dependencies**  
   Only the `mongodb` package is required:
   ```sh
   npm install mongodb
   ```

3. **Start MongoDB**  
   Ensure your MongoDB server is running locally on `mongodb://localhost:27017` or update the URI in [`insert_books.js`](insert_books.js).

4. **Insert Sample Data**  
   Run the following command to populate the database:
   ```sh
   node insert_books.js
   ```
   You should see output confirming the insertion of books.

5. **Run Queries**  
   Open queries.js and execute the queries in the MongoDB shell or use them as examples in your application.

## Scripts Overview

### insert_books.js

- Connects to MongoDB.
- Drops the existing `books` collection if it exists.
- Inserts a set of sample book documents into the `plp_bookstore.books` collection.
- Prints the inserted books.

### queries.js

Contains a variety of MongoDB operations, including:

- Basic find queries (by genre, author, year, etc.)
- Updates and deletes
- Advanced queries using projections, sorting, pagination
- Aggregation pipelines (grouping, averaging, counting)
- Index creation and usage with `explain()`

## Sample Data

The sample data includes classic books with fields such as:
- `title`
- `author`
- `genre`
- `published_year`
- `price`
- `in_stock`
- `pages`
- `publisher`

See insert_books.js for the full dataset.

## Screenshots

Screenshots related to the assignment can be found in the screenshot directory.

## License

This project is for educational purposes as part of the MongoDB Fundamentals assignment.
```
