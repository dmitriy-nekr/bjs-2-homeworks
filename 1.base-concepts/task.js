"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2) - 4*a*c;

  if (d > 0){
      arr.push((-b + Math.sqrt(d) )/(2*a));
      arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  
  if (d === 0){
       arr.push(-b/(2*a));
  }
   
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  parseInt(percent);
  parseInt(contribution);
  parseInt(amount);
  parseInt(countMonths);

  if (isNaN(percent)||isNaN(contribution)||isNaN(amount)||isNaN(countMonths)){
    return false;
  }

  let S = amount-contribution;
  let P = percent/12/100;
  let n = countMonths;
  let payMonth =  S * (P + (P / ((Math.pow((1 + P),n) - 1))));
  let allPay = Number((payMonth * n).toFixed(2));

  return allPay;

  
}