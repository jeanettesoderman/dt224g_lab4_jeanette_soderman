"use strict";
/* Uppgift 7: Summerar talen i en array med en funktion och en loop.
   Av Jeanette Söderman, 2026. */

   const numbers = [2, 4, 6, 7, 1, 8];
   console.log(numbers);
   // Tar emot en array med tal som ska summeras
   function sumNumbers(values) {
    // summan börjar på noll vid varje anrop
    let sum = 0;

    for (let i = 0; i < values.length; i++) {
      sum = sum + values[i];

    }
    return sum;
   }
   console.log(`Summan är ${sumNumbers(numbers)}`);