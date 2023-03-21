"use strict"
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i=0;i<arr.length;i++){
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
    sum += arr[i]
  }
  let avg =Number((sum/arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
    if(arr.length > 0){
      for (let i = 0; i < arr.length; i++){
        sum += arr[i]
      } 
    }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let result = 0;
    if (arr.length > 0){
      let max = Math.max.apply(null, arr);
      let min = Math.min.apply(null, arr);
      result = max - min;
    }
  return result;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let result = 0;
  if (arr.length > 0){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0){
        sumEvenElement += arr[i];
      }  else {
        sumOddElement += arr[i];
      }
    }
    result = sumEvenElement - sumOddElement;
  }
 return result;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result = 0;
  if(arr.length > 0){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0){
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
    result = sumEvenElement/countEvenElement;
  } 
  return result;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    const resultOfArr = func(...arrOfArr[i]);
    if (resultOfArr > maxWorkerResult){
      maxWorkerResult=resultOfArr;
    }
  }
  return maxWorkerResult;
}
