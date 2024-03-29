// Inspired by: https://www.in2013dollars.com/us-cpi
const DATA = [
    { year: 2022, CPI: 290.32, Change: 19.35, YOYpercentage: 7.14 },
    { year: 2022, CPI: 270.97, Change: 12.16, YOYpercentage: 4.70 },
    { year: 2020, CPI: 258.81, Change: 3.15, YOYpercentage: 1.23 },
    { year: 2010, CPI: 255.66, Change: 4.55, YOYpercentage: 1.81 },
    { year: 2018, CPI: 251.11, Change: 5.99, YOYpercentage: 2.44 },
    { year: 2017, CPI: 245.12, Change: 5.11, YOYpercentage: 2.13 },
    { year: 2016, CPI: 240.01, Change: 2.99, YOYpercentage: 1.26 },
    { year: 2015, CPI: 237.02, Change: 0.28, YOYpercentage: 0.12 },
    { year: 2014, CPI: 236.74, Change: 3.78, YOYpercentage: 1.62 },
    { year: 2013, CPI: 232.96, Change: 3.36, YOYpercentage: 1.46 },
    { year: 2012, CPI: 229.59, Change: 4.65, YOYpercentage: 2.07 },
    { year: 2011, CPI: 224.94, Change: 6.88, YOYpercentage: 3.16 },
    { year: 2010, CPI: 218.06, Change: 3.52, YOYpercentage: 1.64 },
    { year: 2009, CPI: 214.54, Change: -0.77, YOYpercentage: -0.36 },
    { year: 2008, CPI: 215.30, Change: 7.96, YOYpercentage: 3.84 },
    { year: 2007, CPI: 207.34, Change: 5.75, YOYpercentage: 2.85 },
    { year: 2006, CPI: 201.59, Change: 6.30, YOYpercentage: 3.23 },
    { year: 2005, CPI: 195.29, Change: 6.41, YOYpercentage: 3.39 },
    { year: 2004, CPI: 188.88, Change: 4.92, YOYpercentage: 2.68 },
    { year: 2003, CPI: 183.96, Change: 4.08, YOYpercentage: 2.27 },
    { year: 2002, CPI: 179.88, Change: 2.81, YOYpercentage: 1.59 },
    { year: 2001, CPI: 177.07, Change: 4.87, YOYpercentage: 2.83 },
    { year: 2000, CPI: 172.20, Change: 5.62, YOYpercentage: 3.38 },
    { year: 1999, CPI: 166.58, Change: 3.57, YOYpercentage: 2.19 },
    { year: 1998, CPI: 163.01, Change: 2.49, YOYpercentage: 1.55 },
    { year: 1997, CPI: 160.52, Change: 3.66, YOYpercentage: 2.33 },
    { year: 1996, CPI: 156.85, Change: 4.47, YOYpercentage: 2.93 },
    { year: 1995, CPI: 152.38, Change: 4.16, YOYpercentage: 2.81 },
    { year: 1994, CPI: 148.22, Change: 3.76, YOYpercentage: 2.60 },
    { year: 1993, CPI: 144.46, Change: 4.15, YOYpercentage: 2.95 },
    { year: 1992, CPI: 140.32, Change: 4.12, YOYpercentage: 3.03 },
    { year: 1991, CPI: 136.19, Change: 5.53, YOYpercentage: 4.23 },
    { year: 1990, CPI: 130.66, Change: 6.69, YOYpercentage: 5.40 },
    { year: 1989, CPI: 123.97, Change: 5.71, YOYpercentage: 4.83 },
    { year: 1988, CPI: 118.26, Change: 4.64, YOYpercentage: 4.08 },
    { year: 1987, CPI: 113.62, Change: 4.02, YOYpercentage: 3.66 },
    { year: 1986, CPI: 109.61, Change: 2.04, YOYpercentage: 1.90 },
    { year: 1985, CPI: 107.57, Change: 3.68, YOYpercentage: 3.55 },
    { year: 1984, CPI: 103.88, Change: 4.28, YOYpercentage: 4.30 },
    { year: 1983, CPI: 99.60, Change: 3.10, YOYpercentage: 3.21 },
    { year: 1982, CPI: 96.50, Change: 5.58, YOYpercentage: 6.13 },
    { year: 1981, CPI: 90.92, Change: 8.52, YOYpercentage: 10.33 },
    { year: 1980, CPI: 82.41, Change: 9.83, YOYpercentage: 13.55 },
    { year: 1979, CPI: 72.58, Change: 7.35, YOYpercentage: 11.26 },
    { year: 1978, CPI: 65.23, Change: 4.62, YOYpercentage: 7.63 },
    { year: 1977, CPI: 60.61, Change: 3.70, YOYpercentage: 6.50 },
    { year: 1976, CPI: 56.91, Change: 3.09, YOYpercentage: 5.75 },
    { year: 1975, CPI: 53.82, Change: 4.51, YOYpercentage: 9.14 },
    { year: 1974, CPI: 49.31, Change: 4.91, YOYpercentage: 11.05 },
    { year: 1973, CPI: 44.40, Change: 2.58, YOYpercentage: 6.18 },
    { year: 1972, CPI: 41.82, Change: 1.32, YOYpercentage: 3.27 },
    { year: 1971, CPI: 40.49, Change: 1.67, YOYpercentage: 4.30 },
    { year: 1970, CPI: 38.82, Change: 2.14, YOYpercentage: 5.83 },
    { year: 1969, CPI: 36.68, Change: 1.90, YOYpercentage: 5.46 },
    { year: 1968, CPI: 34.78, Change: 1.42, YOYpercentage: 4.27 },
    { year: 1967, CPI: 33.36, Change: 0.91, YOYpercentage: 2.80 },
    { year: 1966, CPI: 32.45, Change: 0.95, YOYpercentage: 3 },
    { year: 1965, CPI: 31.51, Change: 0.49, YOYpercentage: 1.59 },
    { year: 1964, CPI: 31.02, Change: 0.39, YOYpercentage: 1.28 },
    { year: 1963, CPI: 30.62, Change: 0.38, YOYpercentage: 1.25 },
    { year: 1962, CPI: 30.25, Change: 0.35, YOYpercentage: 1.18 },
    { year: 1961, CPI: 29.89, Change: 0.32, YOYpercentage: 1.07 },
    { year: 1960, CPI: 29.58, Change: 0.43, YOYpercentage: 1.48 },
    { year: 1959, CPI: 29.15, Change: 0.28, YOYpercentage: 0.99 },
    { year: 1958, CPI: 28.86, Change: 0.77, YOYpercentage: 2.74 },
    { year: 1957, CPI: 28.09, Change: 0.91, YOYpercentage: 3.34 },
    { year: 1956, CPI: 27.18, Change: 0.41, YOYpercentage: 1.52 },
    { year: 1955, CPI: 26.78, Change: -0.08, YOYpercentage: -0.29 },
    { year: 1954, CPI: 26.85, Change: 0.09, YOYpercentage: 0.34 },
    { year: 1953, CPI: 26.76, Change: 0.22, YOYpercentage: 0.81 },
    { year: 1952, CPI: 26.55, Change: 0.58, YOYpercentage: 2.25 },
    { year: 1951, CPI: 25.96, Change: 1.89, YOYpercentage: 7.86 },
    { year: 1950, CPI: 24.07, Change: 0.26, YOYpercentage: 1.10 },
    { year: 1949, CPI: 3.81, Change: -0.24, YOYpercentage: -0.99 },
    { year: 1948, CPI: 24.05, Change: 1.72, YOYpercentage: 7.72 },
    { year: 1947, CPI: 22.32, Change: 2.81, YOYpercentage: 14.39 },
    { year: 1946, CPI: 19.52, Change: 1.52, YOYpercentage: 8.47 },
    { year: 1945, CPI: 17.99, Change: 0.40, YOYpercentage: 2.27 },
    { year: 1944, CPI: 17.59, Change: 0.28, YOYpercentage: 1.64 },
    { year: 1943, CPI: 17.31, Change: 0.98, YOYpercentage: 5.98 },
    { year: 1942, CPI: 16.33, Change: 1.61, YOYpercentage: 10.92 },
    { year: 1941, CPI: 14.72, Change: 0.72, YOYpercentage: 5.11 },
    { year: 1940, CPI: 14.01, Change: 0.10, YOYpercentage: 0.72 },
    { year: 1939, CPI: 3.91, Change: -0.18, YOYpercentage: -1.31 },
    { year: 1938, CPI: 4.09, Change: -0.29, YOYpercentage: -2.03 },
    { year: 1937, CPI: 14.38, Change: 0.52, YOYpercentage: 3.72 },
    { year: 1936, CPI: 13.87, Change: 0.15, YOYpercentage: 1.07 },
    { year: 1935, CPI: 13.72, Change: 0.34, YOYpercentage: 2.53 },
    { year: 1934, CPI: 13.38, Change: 0.45, YOYpercentage: 3.45 },
    { year: 1933, CPI: 2.94, Change: -0.71, YOYpercentage: -5.19 },
    { year: 1932, CPI: 13.65, Change: -1.56, YOYpercentage: -10.27 },
    { year: 1931, CPI: 5.21, Change: -1.49, YOYpercentage: -8.94 },
    { year: 1930, CPI: 6.70, Change: -0.45, YOYpercentage: -2.65 },
    { year: 1929, CPI: 17.15, Change: NaN, YOYpercentage: NaN },
    { year: 1928, CPI: 7.15, Change: -0.21, YOYpercentage: -1.20 },
    { year: 1927, CPI: 7.36, Change: -0.34, YOYpercentage: -1.91 },
    { year: 1926, CPI: 17.70, Change: 0.16, YOYpercentage: 0.92 },
    { year: 1925, CPI: 17.54, Change: 0.42, YOYpercentage: 2.43 },
    { year: 1924, CPI: 17.12, Change: 0.07, YOYpercentage: 0.41 },
    { year: 1923, CPI: 17.05, Change: 0.30, YOYpercentage: 1.79 },
    { year: 1922, CPI: 6.75, Change: -1.10, YOYpercentage: -6.16 },
    { year: 1921, CPI: 17.85, Change: -2.18, YOYpercentage: -10.90 },
    { year: 1920, CPI: 20.04, Change: 2.71, YOYpercentage: 15.62 },
    { year: 1919, CPI: 17.33, Change: 2.28, YOYpercentage: 15.18 },
    { year: 1918, CPI: 15.05, Change: 2.22, YOYpercentage: 17.34 },
    { year: 1917, CPI: 12.82, Change: 1.94, YOYpercentage: 17.81 },
    { year: 1916, CPI: 10.88, Change: 0.78, YOYpercentage: 7.69 },
    { year: 1915, CPI: 10.11, Change: 0.09, YOYpercentage: 0.92 },
    { year: 1914, CPI: 10.02, Change: 0.13, YOYpercentage: 1.32 },
    { year: 1913, CPI: 9.88, Change: 0, YOYpercentage: 0 }

];
export function search(year) {
    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i].year === year) {
            console.log(DATA[i]);
            let C = DATA[i].CPI;
            console.log(C);
            return C;
        }
    }

    /*  const obj = DATA.filter(year => year.year == year)
     let cpi = obj.CPI; */
    /*     let obj = DATA.find(y => y.year === year); */
    /*     return cpi; */
    /*     let CPI1 = obj.CPI; */
    /*     console.log(obj);
        let yCPI = obj.CPI;
        console.log(yCPI); */
}

/*
amount * (y2/y1) = y2 amount
*/
// Const variables
/* let result = 0;
let year1 = Number(document.getElementById("year1").value);
let year2 = Number(document.getElementById("year2").value);
let amount = Number(document.getElementById("dollars").value);

const btn = document.querySelector("btnCalculate");
const value1 = document.querySelector("#value1");
const value2 = document.querySelector("#value2"); */
/* const amount = 100;
export function search(year){
    let obj = DATA.find(y => y.year === year);
    console.log(obj.CPI);
/*     let CPI1 = obj.CPI; */
/*     console.log(obj);
    let yCPI = obj.CPI;
    console.log(yCPI); */
/* }
export function values(){
    let CPIs = DATA.map(function(years){
        return years.CPI;
    }) */
/*     for(let i=0;i<CPIs.length;i++){

    }
    let obj1 = Object.values(CPIs);
    console.log(obj1); 
    console.log(CPIs);
}

/* export function calcCPI(/* year1, amount, year2 ){

    let CPI1 = search(year1);
    CPI1 = CPI1.CPI;
    let CPI2 = search(year2);
    CPI2 = CPI2.CPI;
    result = amount*(CPI2/CPI1);
    console.log(result);
    }
/* 
btn.addEventListener("click", calcCPI()); */











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
/* 
import {Years2} from './debug.js';
 */
/*
Uncaught TypeError: Cannot convert undefined or null to object
    at Function.keys (<anonymous>)
    at searchYear2 (formulas.js:22:20)
    at app.js:15:1
*/
/* 
export function searchYear2(year) {
    for (let i = 0; i < Object.keys(Years2).length; i++) {
        if (Object.keys(Years2[i]) == year){
            console.log(Years2[i]);
            return Years2[i];
        }
    }
} */

//searchYear(2022);
//searchYear1(2022);
//console.log(Years1);
//for (const [year, CPI, change, YOYpercentage of entries]) {
    // for loop to destructure the array into its keys and properties

    // call function to search by year and retrieve values 
//}