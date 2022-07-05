({
    plugins: ['jsdom-quokka-plugin'],
    jsdom: {html: `<div id="testDiv">Hello</div>`}
  })

var sqrs = document.querySelectorAll('.parent div');
var row = 9;

function nameSquare(sqr,nSqr,row){
    while (nSqr >= 8){
        nSqr -= 8;
    }
    switch(nSqr){
        case 0:
            sqr.id = "a" + row;
            sqr.classList.add('a');
            sqr.classList.add(row);
            break;
        case 1:
            sqr.id = "b" + row;
            sqr.classList.add('b');
            sqr.classList.add(row);
            break;
        case 2:
            sqr.id = "c" + row;
            sqr.classList.add('c');
            sqr.classList.add(row);
            break;
        case 3:
            sqr.id = "d" + row;
            sqr.classList.add('d');
            sqr.classList.add(row);
            break;
        case 4:
            sqr.id = "e" + row;
            sqr.classList.add('e');
            sqr.classList.add(row);
            break;
        case 5:
            sqr.id = "f" + row;
            sqr.classList.add('f');
            sqr.classList.add(row);
            break;
        case 6:
            sqr.id = "g" + row;
            sqr.classList.add('g');
            sqr.classList.add(row);
            break;
        case 7:
            sqr.id = "h" + row;
            sqr.classList.add('h');
            sqr.classList.add(row);
            break;
    }
}

for (var i = 0; i < sqrs.length; i++) {
    if (i % 8 === 0) {
        row--;
    }
    if (row % 2 === 0) {
        if (i % 2 === 0) {
            sqrs[i].style.backgroundColor = '#FFF8DC';
        }
        else {
            sqrs[i].style.backgroundColor = '#8B4513';
        }
    }
    else {
        if (i % 2 === 0) {
            sqrs[i].style.backgroundColor = '#8B4513';
        }
        else {
            sqrs[i].style.backgroundColor = '#FFF8DC';
        }
    }
    nameSquare(sqrs[i], i, row);
}

import { pawnA2,towerA1, horseB1, bishopC1, queenD1 } from './classes.js';

towerA1.show();

var pawns = document.querySelectorAll('.pawn');

for (var i = 0; i < pawns.length; i++) {
    pawns[i].addEventListener('click', clicked);
}

function clicked(){
    pawn.show();
}