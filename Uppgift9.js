"use strict";
/* Uppgift 9: Går igenom en lista med personer och skriver ut
   namn, stad och om personen är myndig.
   Av Jeanette Söderman, 2026. */

   const people = [
    {
        name: "Sara", 
        age: 26,
        city: "Borås"
    },
    {
        name: "Björn",
        age: 16,
        city: "Björndalen"
    },
    {
        name: "Linda", 
        age: 42,
        city: "Lysekil"
    },
    {
        name:"Annika",
        age: 19,
        city: "Stockholm"
    }
   ];
   // funktion som tar emot ett personobjekt
   function showPerson(person) {
    console.log(`Namn: ${person.name}`);
    console.log(`Ålder: ${person.age}`);
    console.log(`Stad: ${person.city}`);

    //kontrollerar pm personen är minst 18
    if (person.age >= 18) {
        console.log(`Är myndig`);
    }
    //om personen inte är myndig
    else {
        console.log(`Är inte myndig`);
    }
   }
   //loopar igenom alla personer och anropar funktionen för varje person
   for (let i = 0; i < people.length; i++) {
    showPerson(people[i]);
    console.log(); //tom rad mellan personerna
   }