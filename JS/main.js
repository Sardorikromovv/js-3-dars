/* MAth in JS */

/*let round = Math.round(8.4);*/                         /*Yaxlidlash-1*/
/*let pow = Math.pow(4,4);*/ /* 4*4*4*4 */             /*Darajasini hisoblash*/
/*let sqrt = Math.sqrt(16);*/                            /* Ildizini topish */
/*let abs = Math.abs(-12.8);*/                           /* Absalyut sonni topish */
/*let ceil = Math.ceil(49.1);*/                          /*Yaxlidlash-2*/
/*let floor = Math.floor(49.9);*/                        /*Yaxlidlash-3*/
/*let trunc = Math.trunc(49.9);*/                        /*Yaxlidlash-4*/
/*let min = Math.min(17,5,11,8,27,7,58,43);*/        /*Minimal sonni topish*/
/*let max = Math.max(17,5,11,8,27,7,58,43);*/        /*Maximal sonni topish*/
/*document.write()*/

/* DOM and styles in JS */

let byteg = document.getElementsByTagName("h1")
let byId = document.getElementById("idNomi")
let byClas = document.getElementsByClassName("classnomi")
let bySelector = document.querySelector("h1")
let bySelectorAll = document.querySelectorAll(".classnomi")
let byAll = document.getElementsByTagName("h1").namedItem("idNomi")

byAll.style.color = "yellow"
byAll.style.backgroundColor = "blue"
byAll.style.width = "300px"
byAll.style.height = "250px"
byAll.style.fontSize = "45px"
byAll.style.paddingTop = "90px"
byAll.style.boxSizing = "border-box"
byAll.style.textAlign = "center"
byAll.style.border = "10px solid green"

console.log(byAll);





