"use strict";
const log = console.log;

function startGame() {

    /* Query selectors */
    const grid = document.querySelector("#grid");
    const holes = document.querySelectorAll(".holes");
    const scoreSpan = document.querySelector(".score");
    const activePlayerDisplay = document.querySelector(".player-turn");

    /* Variables */
    const ROW = 6;
    const COL = 7;

    let currentPlayer = "player-1";


    function generateHoles(col, row){
    
        for(let i = 0; i < row*col; i++){
            const newHole = document.createElement("div");
            newHole.classList.add("holes");
            grid.appendChild(newHole);
        };
    };

    generateHoles(COL, ROW);
};

window.addEventListener("load", startGame);