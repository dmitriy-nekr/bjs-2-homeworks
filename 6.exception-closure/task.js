"use strict"
function parseCount(value){
    let parseValue = Number.parseFloat(value);
    if(isNaN(parseValue)){
        throw new Error ("Невалидное значение");
    }
    return parseValue;
}

function validateCount(value){
    let parseValue;
    try{
       parseValue = parseCount(value);
    } catch(error){
        return error;
    }
    return parseValue;
}

class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
        this.perimeter;
        this.area;
        if ((a + b) < c || (b + c) < a || (a + c) < b ) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }   
    }
    
    get perimeter(){
        let p = this.a + this.b + this.c;
        return p;  
    }
 
     get area(){
        let polPeriMeter = this.perimeter/2;
        let s = Number(Math.pow((polPeriMeter * (polPeriMeter - this.a) * (polPeriMeter - this.b) * (polPeriMeter - this.c)), 0.5).toFixed(3));
        return s;
    }  
}

function getTriangle (a, b, c){
    try{
        let triangle = new Triangle(a, b, c);
        return triangle;
    } 
    catch(error){
        return {perimeter: "Ошибка! Треугольник не существует", area: "Ошибка! Треугольник не существует"};
    }
}