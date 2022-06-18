//import { Years, Years1 } from "./CPITable";
//import { Years2 } from "./debug";
/*
aggregating modules - export { Years } from './CPITable.js';
*/
//export { Years, Years1 } from "./CPITable";
//export { Years2 } from "./debug";
//const arrCPIs = Object.entries(Years);

/*export function searchYear(year) {
    for (let i = 0; i < Years.length; i++) {
        if (Years[i] == year){
            return Years[i];
        }
    }
}*/ 

import {Years2} from './debug.js';

/*
Uncaught TypeError: Cannot convert undefined or null to object
    at Function.keys (<anonymous>)
    at searchYear2 (formulas.js:22:20)
    at app.js:15:1
*/

export function searchYear2(year) {
    for (let i = 0; i < Object.keys(Years2).length; i++) {
        if (Object.keys(Years2[i]) == year){
            console.log(Years2[i]);
            return Years2[i];
        }
    }
}

//searchYear(2022);
//searchYear1(2022);
//console.log(Years1);
//for (const [year, CPI, change, YOYpercentage of entries]) {
    // for loop to destructure the array into its keys and properties

    // call function to search by year and retrieve values 
//}