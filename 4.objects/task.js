"use strict"
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks =[];
}

Student.prototype.setSubject = function (subjectName) {
   this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks != undefined){
        let startMarkArr = this.marks
        if(marks.length > 0){
        this.marks = [...startMarkArr, ...marks];
        } else{
            this.marks = [ ...marks];
            }
    }else {
        return undefined;
        }           
}

Student.prototype.getAverage = function () {
    if(this.marks != undefined){
        let result = this.marks.reduce((acc, item, index, arr) => {
            acc += item;
            if (index === arr.length - 1){
                return acc/arr.length;
            }
            return acc;
        }, 0);
        return result;
    } else {
        return 0;
    }    
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
