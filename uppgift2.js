"use strict";
/* Uppgift 2, beräknar totalpris utan och med 25 % moms.
   Av Jeanette Söderman, 2026. */

   // Produktens pris i kronor och antal produkter
   const price = 100;
   const quantity = 3;
   // beräknar totalpriset
   const totalPrice = price * quantity;

   console.log(`Totalt pris: ${totalPrice} kr`);

   //beräkna momsen 25% = 25 / 100 = 0,25
   const vat = totalPrice * 0.25;

   // Lägger till momsen för att få totalpriset inklusive moms 300 x 0,25 = 75 kr i moms
   const totalPriceVat = totalPrice + vat;
   console.log(`Totalt pris inklusive moms: ${totalPriceVat} kr`);