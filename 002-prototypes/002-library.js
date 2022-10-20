// Implement a library class that handles the following:
// - Adding new books
// - Borrowing books (by type)
// - Returning books
// - Listing all books

// Book types:
// - Fiction
// - History
// - Classic
// - Magazine

//
// TODO: ADD IMPLEMENTATION HERE
//

// ====================================================================
// DO NOT CHANGE CODE BELOW HERE
// unless there's a typo and you have to.
// ====================================================================
const library = new Library();
library.addBook(new FictionBook('The Hobbit', 'J.R.R. Tolkien'));
library.addBook(new FictionBook('The Lord of the Rings', 'J.R.R. Tolkien'));
library.addBook(new FictionBook('The Da Vinci Code', 'Dan Brown'));
library.addBook(new FictionBook('The Great Gatsby', 'F. Scott Fitzgerald'));
library.addBook(new HistoryBook('The Bible', 'Various'));
library.addBook(new HistoryBook('The History of the Decline and Fall of the Roman Empire', 'Edward Gibbon'));
library.addBook(new HistoryBook('The History of the Peloponnesian War', 'Thucydides'));
library.addBook(new ClassicBook('The Art of War', 'Sun Tzu'));
library.addBook(new ClassicBook('The Prince', 'Niccolo Machiavelli'));
library.addBook(new ClassicBook('The Republic', 'Plato'));
library.addBook(new Magazine('The Economist', 'Various'));
library.addBook(new Magazine('The New Yorker', 'Various'));
library.addBook(new Magazine('The New York Times', 'Various'));

// List all books
library.listBooks();

// Borrowing some books
let theEconomist = library.borrowBook(Magazine); // <-- borrowed The Economist
let theNewYorker = library.borrowBook(Magazine); // <-- borrowed The New Yorker
let theNewYorkTimes = library.borrowBook(Magazine); // <-- borrowed The New York Times
let nothing = library.borrowBook(Magazine); // <-- undefined

// List remaining books
library.listBooks();

// Return books
library.returnBook(theEconomist);
library.returnBook(theNewYorkTimes);

// List remaining books
library.listBooks();

// Return last book
library.returnBook(theNewYorker);

// List remaining books
library.listBooks();
