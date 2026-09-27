"use strict";
/* Uppgift 8: Lagrar bokinformation i ett objekt och skriver ut den med en funktion.
   Av Jeanette Söderman, 2026. */

// bokens titel, författare och utgivningsår i ett objekt
const book = {
    title: "The Dragons",
    author: "Jeanette Söderman", 
    year: 2026
};
// Tar emot ett bokobjekt och skriver ut egenskaperna
function showBook(bookInfo) {
    console.log(`Titel: ${bookInfo.title}`);
    console.log(`Författare: ${bookInfo.author}`);
    console.log(`Utgivningsår: ${bookInfo.year}`);
}
// Anropar funktionen med objektet book
showBook(book);
