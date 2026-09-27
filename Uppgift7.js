"use strict";
/* Uppgift 7: Summerar talen i en array med en funktion och en loop.
   Av Jeanette Söderman, 2026. */

   const numbers = [2, 4, 6, 7, 1, 8];
   console.log(numbers);
   // Tar emot en array med tal som ska summeras
   function sumNumbers(values) {
    // summan börjar på noll vid varje anrop
    let sum = 0;
      // loopen anpassas efter listans längd
    for (let i = 0; i < values.length; i++) {
      // hämtar tal som finns i listan och sum börjar på 0 vid nytt anrop
      sum = sum + values[i];

    }
    // Returnerar summan när loopen har gått igenom alla tal
    return sum;
   }
   console.log(`Summan är ${sumNumbers(numbers)}`);
   // Testar funktionen med andra tal och olika långa arrayer
   console.log(sumNumbers([10, 20, 30])); //60
   console.log(sumNumbers([-5, 2, 10, 3])); //10