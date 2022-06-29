import { search } from "./formulas.js";
document.addEventListener('DOMContentLoaded', () => {
    function calcCPI() {
        let btn = document.getElementById('btn');
        btn.addEventListener('click', calcCPI)

        let year1 = parseInt(document.getElementById("year1").value);
        let amount = parseFloat(document.getElementById("dollars").value);
        let year2 = parseInt(document.getElementById("year2").value);
        let CPI1 = search(year1);
        let CPI2 = search(year2);
        console.log(CPI1, CPI2);
        let result = amount * (CPI2 / CPI1);
        console.log(result);
        let value = document.getElementById("value1");
        value.innerHTML = "$" + result.toFixed(2);
        let rate = (CPI2 / CPI1) * 100;
        value2.innerHTML = rate.toFixed(2).concat("%");
    }
    /*  console.log(year1, year2, amount); */
    /*   year1 = parseInt(year1);
      amount = parseFloat(amount);
      year2 = parseInt(year2); */
    /* console.log(typeof (year1, year2, amount), year1, year2, amount); */
    let btn = document.getElementById('btn');
    btn.addEventListener('click', calcCPI)


});
/* import { search/* , values *//* , calcCPI  */ /* } from "./formulas.js"; */

/* search(2000); * / */
/* calcCPI(); */
/* values(); */



//Formula
//First year price *(second year CPI / first year CPI) = second year price

// CPI by year
/*import { searchYear } from './formulas'
import { function/object name as (different name) } allows you to import a function
or whatever and rename it to avoid duplicate names
 import & as (name) from './nameoffile.js' imports all from that file*/

//import { Years, Years1, Years2 } from "./formulas.js";
//import { searchYear } from "./formulas.js";

/* import { searchYear2 } from './formulas.js';

searchYear2(2000);
 */
/*
Uncaught TypeError: Cannot convert undefined or null to object
    at Function.keys (<anonymous>)
    at searchYear2 (formulas.js:22:20)
    at app.js:15:1
*/





//console.log(searchYear2(2022)); // undefined

//console.log(Years, Years1, Years2);
/*let Years1 = [
    { "2023": [1, 2, 3,] },
    { "2024": [4, 5, 6] }
];
console.log(Years1);*/

