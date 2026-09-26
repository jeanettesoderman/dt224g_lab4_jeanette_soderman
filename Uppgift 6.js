"use strict";
/* Beräknar och returnerar arean av en rektangel.
   Av Jeanette Söderman, 2026. */

// Tar emot rektangelns bredd och höjd som parametrar
function calculateArea(width, height) {
   // Returnerar arean genom att multiplicera bredden med höjden 
    return width * height;
}
// Anropar funktionen med tre olika mått och skriver ut returvärdena
console.log(calculateArea(5, 4));
console.log(calculateArea(7, 6));
console.log(calculateArea(10, 10));