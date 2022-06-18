import { Years, Years1 } from "./CPITable";

const arrCPIs = Object.entries(Years);

function searchYear(year) {
    for (let i = 0; i < Years.length; i++) {
        if (Years[i] == year){
            return year[i];
        }
    }
}
searchYear(2022);

console.log(Years1);
//for (const [year, CPI, change, YOYpercentage of entries]) {
    // for loop to destructure the array into its keys and properties

    // call function to search by year and retrieve values 
//}