//Formula 
//First year price *(second year CPI / first year CPI) = second year price

// CPI by year
/*import { searchYear } from './formulas'
import { function/object name as (different name) } allows you to import a function 
or whatever and rename it to avoid duplicate names
 import & as (name) from './nameoffile.js' imports all from that file*/

import { Years, Years1, Years2 } from "./formulas.js";
import { searchYear } from "./formulas.js";

console.log(searchYear(2022));
console.log(Years, Years1, Years2);
/*let Years1 = [
    { "2023": [1, 2, 3,] },
    { "2024": [4, 5, 6] }
];
console.log(Years1);*/

