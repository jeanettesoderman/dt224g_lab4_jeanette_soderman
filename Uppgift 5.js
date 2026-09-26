"use strict";
/* Uppgift 5 Arrayer av Jeanette Söderman 2026 */
const minaMaträtter = ["Köttbullar", "Gulash", "Pannkakor", "Torsk i ugn", "Hemmagjord Pizza","Kycklingfajitas"];
console.log(minaMaträtter) // skriver ut hela listan
console.log(minaMaträtter[0]); //Skriver ut första maträtten
console.log(minaMaträtter[minaMaträtter.length-1]); //Skriver ut sista maträtten
minaMaträtter.push("Lax med osttäcke"); // lägger till en ny maträtt i slutet
minaMaträtter.shift(); // Tar bort den första maträtten i arrayen
console.log(minaMaträtter);
