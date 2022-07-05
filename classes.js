class pawn {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    show(){
        var row = document.getElementsByClassName(this.x);
        if (this.x == 'a' && this.y == '2'){
            row[7 - this.y].style.backgroundColor = '#b0f7a8';
            row[6 - this.y].style.backgroundColor = '#b0f7a8';
        }
        else {
            row[7 - this.y].style.backgroundColor = '#b0f7a8';
        }  
    }
}

class tower {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    show(){
        var column = document.getElementsByClassName(this.x);
        var row = document.getElementsByClassName(this.y);
        var pieceBefore = false;

        for (var i = column.length - 2; i > 0; i--) {
            if (column[i].children.length > 0 && !pieceBefore) {
                column[i].style.backgroundColor = 'red';
                pieceBefore = true;
            }
            else if (!pieceBefore){
                column[i].style.backgroundColor = '#b0f7a8';
            }
        }

        pieceBefore = false;

        for (var i = 1; i < row.length; i++) {
            if (row[i].children.length > 0 && !pieceBefore) {
                row[i].style.backgroundColor = 'red';
                pieceBefore = true;
            }
            else if (!pieceBefore){
                row[i].style.backgroundColor = '#b0f7a8';
            }
        }
    }
}

class horse {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    getSquare(n,m){
        var row = document.getElementsByClassName(this.y + m);
        console.log(row);
        if (this.x.charCodeAt() - n >= 0){
            if (row[this.x.charCodeAt() - n].children.length > 0){
                row[this.x.charCodeAt() - n].style.backgroundColor = 'red';
            }

            else{
                row[this.x.charCodeAt() - n].style.backgroundColor = '#b0f7a8';
            }
        }
    }
    show(){
        this.getSquare(95,1);
        this.getSquare(99,1);
        this.getSquare(96,2);
        this.getSquare(98,2);
        this.getSquare(95,-1);
        this.getSquare(99,-1);
        this.getSquare(96,-2);
        this.getSquare(98,-2);
    }
}

class bishop {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    getColumsRigth(){
        let columnsRigth = [];
        var row = document.getElementsByClassName(this.y);
        for (var i = 0; i < row.length; i++) {
            if (row[i].classList[0] > this.x){
                columnsRigth.push(row[i].id); 
            }
        }
        return columnsRigth;
    }

    getColumsLeft(){
        let columnsLeft = [];
        var row = document.getElementsByClassName(this.y);
        for (var i = 0; i < row.length; i++) {
            if (row[i].classList[0] < this.x){
                columnsLeft.push(row[i].id); 
            }
        }
        return columnsLeft;
    }

    positionUpRigth(table,i){
        return table[this.x.charCodeAt() - 96+i + (7 - this.y-i) * 8]
    }
    
    positionDownRigth(table,i){
        return table[this.x.charCodeAt() - 96+i + (9 - this.y+i) * 8]
    }

    positionUpLeft(table,i){
        return table[this.x.charCodeAt() - 98-i + (7 - this.y - i) * 8];
    }

    positionDownLeft(table,i){
        return table[this.x.charCodeAt() - 98 - i + (9 - this.y + i) * 8];
    }

    paintSquares(position, pieceBefore){
        console.log(position);
        if (position.children.length > 0 && !pieceBefore){
            position.style.backgroundColor = 'red';
            pieceBefore = true;
        }
        else if (!pieceBefore){
            position.style.backgroundColor = '#b0f7a8';
        }
        return pieceBefore;
    }

    show(){
        var columnsRigth = this.getColumsRigth();
        var columnsLeft = this.getColumsLeft();
        var table = document.querySelectorAll('.parent div');
        var pieceBefore = false;
        var pieceBefore2 = false;

        for (let i = 0; i < columnsRigth.length && (!pieceBefore || !pieceBefore2); i++){
            pieceBefore = this.paintSquares(this.positionUpRigth(table,i), pieceBefore);
            pieceBefore2 = this.paintSquares(this.positionDownRigth(table,i), pieceBefore2);
        }

        pieceBefore = false;
        pieceBefore2 = false;

        for (let i = 0; i < columnsLeft.length && (!pieceBefore || !pieceBefore2); i++){
            pieceBefore = this.paintSquares(this.positionUpLeft(table,i), pieceBefore);
            pieceBefore2 = this.paintSquares(this.positionDownLeft(table,i), pieceBefore2);
        }
        
    }
}

class queen {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getColumsRigth() {
        let columnsRigth = [];
        var row = document.getElementsByClassName(this.y);
        for (var i = 0; i < row.length; i++) {
            if (row[i].classList[0] > this.x) {
                columnsRigth.push(row[i].id);
            }
        }
        return columnsRigth;
    }

    getColumsLeft() {
        let columnsLeft = [];
        var row = document.getElementsByClassName(this.y);
        for (var i = 0; i < row.length; i++) {
            if (row[i].classList[0] < this.x) {
                columnsLeft.push(row[i].id);
            }
        }
        return columnsLeft;
    }

    show() {
        var column = document.getElementsByClassName(this.x);
        var row = document.getElementsByClassName(this.y);
        for (var i = 0; i < column.length; i++) {
            column[i].style.backgroundColor = '#b0f7a8';
        }
        for (var i = 0; i < row.length; i++) {
            row[i].style.backgroundColor = '#b0f7a8';
        }

        var columnsRigth = this.getColumsRigth();
        var columnsLeft = this.getColumsLeft();
        var table = document.querySelectorAll('.parent div');
        var pieceBefore = false;

        for (let i = 0; i < columnsRigth.length; i++) {
            if (table[this.x.charCodeAt() - 96 + i + (7 - this.y - i) * 8].children.length > 0 && !pieceBefore) {
                table[this.x.charCodeAt() - 96 + i + (7 - this.y - i) * 8].style.backgroundColor = 'red';
                pieceBefore = true;
            }
            else if (!pieceBefore) {
                table[this.x.charCodeAt() - 96 + i + (7 - this.y - i) * 8].style.backgroundColor = '#b0f7a8';
            }
        }

        pieceBefore = false;

        for (let i = 0; i < columnsLeft.length; i++) {

            if (table[this.x.charCodeAt() - 98 - i + (7 - this.y - i) * 8].children.length > 0 && !pieceBefore) {
                table[this.x.charCodeAt() - 98 - i + (7 - this.y - i) * 8].style.backgroundColor = 'red';
                pieceBefore = true;
            }
            else if (!pieceBefore) {
                table[this.x.charCodeAt() - 98 - i + (7 - this.y - i) * 8].style.backgroundColor = '#b0f7a8';
                table[this.x.charCodeAt() - 95 - i + (10 - this.y - i) * 8].style.backgroundColor = 'blue';
            }
        }

    }

}

export const pawnA2 = new pawn('a',2);
export const towerA1 = new tower('a',1);
export const horseB1 = new horse('f',2);
export const bishopC1 = new bishop('a',4);
export const queenD1 = new queen('e',4);