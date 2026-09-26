"use strict"
/* Uppgift 3, skriver ut om en person är barn, vuxen eller pensionär utifrån åldern.
   Av Jeanette Söderman, 2026. */
const age = 64;
// Kontrollerar om personen är under 18 år och skriver i så fall ut Barn
if (age < 18) {

    console.log(`Barn`);
}
// Kontrollerar om personen är minst 18 och mindre än 65
else if (age < 65) {
    console.log(`Vuxen`);
}
else {
    console.log(`Pensionär`)
}