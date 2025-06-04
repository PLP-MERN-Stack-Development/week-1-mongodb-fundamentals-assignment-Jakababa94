/* Task 2*/
/* Find all books in the "Fantasy" genre */
db.books.find({ genre: "Fantasy" });

/* Find all books published after the year 1980 */
db.books.find({ published_year: { $gt: 1980 } });

/* Find books published by J.R.R. Tolkien */
db.books.find({ author: "J.R.R. Tolkien" });

/* Update price of "The Hobbit" to 12.99 */
db.books.updateOne( { title: "The Hobbit" },
  { $set: { price: 12.99 } });

/* Delete a book with the title "The Alchemist" */
db.books.deleteOne({ title: "The Alchemist" });

/* Task 3 */

/* Find all books both in stock and published after 2010 */
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

/* Projection to return only the title, author, and price fields  */
db.books.find({},
  { title: 1, author: 1, price: 1, _id: 0 }
);

/* Sorting to display books by price (both ascending and descending) */
db.books.find().sort({ price: 1 }); // Ascending
db.books.find().sort({ price: -1 }); // Descending

/* Use the `limit` and `skip` methods to implement pagination (5 books per page) */
db.books.find().skip(0).limit(5); 

/* Task 4 */
/* Aggregation pipeline to calculate the average price of books by genre */
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

/* Aggregation pipeline to find the author with the most books in the collection */
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
    {
        $sort: { bookCount: -1 }
    },
    {
        $limit: 1
    }
]);

/* Pipeline that groups books by publication decade and counts them */
db.books.aggregate([
  {
    $group: {
      _id: { $floor: { $divide: ["$published_year", 10] } },
      bookCount: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: { $multiply: ["$_id", 10] },
      bookCount: 1,
      _id: 0
    }
  },
  {
    $sort: { decade: 1 }
  }
]);

/* Task 5 */
/* Index on the `title` field */
db.books.createIndex({ title: 1 });

/* Compound index on `author` and `published_year`*/
db.books.createIndex({ author: 1, published_year: 1 });

/* Use of the `explain()` method to demonstrate the performance improvement with your indexes */
db.books.find({ title: "The Hobbit" }).explain("executionStats");