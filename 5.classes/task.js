"use strict"
class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        this.state = this.state * 1.5;
    }
    set state(newState){
        if(newState < 0){
            this._state = 0;
        } else if(newState > 100){
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super();
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        let result = null;
        for(let book of this.books){
            for(type in book){
                if (book[type] === value){
                    result = book;
                }
            }
        }
        return result;
    }
    giveBookByName(bookName){
        let result = null;
        for (let book of this.books){
            if (book.name === bookName){
                delete this.books[book];
                result = book;
                let i = this.books.indexOf(book);
                this.books.splice(i,1);   
            }
        }
        return result;
    }
}