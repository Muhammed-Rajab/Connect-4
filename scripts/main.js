"use strict";
const log = console.log;

function startGame() {

    /* Query selectors */
    const grid = document.querySelector("#grid");
    const scoreSpan = document.querySelector(".score");
    const activePlayerDisplay = document.querySelector(".player-turn");

    /* Variables */
    const ROW = 6;
    const COL = 7;

    let currentPlayer = 1;

    /* Check for winner */
    function checkWinner(holes){

    };

    /* Toggle player */
    function togglePlayer(index, holes){
        holes[index].classList.add("taken");
        holes[index].classList.add("player-"+currentPlayer);

        activePlayerDisplay.classList.remove("player-"+currentPlayer);

        currentPlayer = currentPlayer === 1 ? 2 : 1;
        activePlayerDisplay.classList.add("player-"+currentPlayer);
    };

    /* Callback function on click a hole */
    function onHoleClick(index, holes){

        const holeHasBeadBelowOrIndexInLastRow =  holes[index].classList.contains("base") || holes[index+7].classList.contains("taken");

        const holeIsNotTaken = !holes[index].classList.contains("taken");

        if (holeHasBeadBelowOrIndexInLastRow && holeIsNotTaken){
            
            togglePlayer(index, holes);
            checkWinner(holes);
        }
    };

    /* Function to generate holes */
    function generateHoles(col, row){
    
        for(let i = 0; i < row*col; i++){
            
            /* Creates new div element */
            const newHole = document.createElement("div");
            
            /* Adds base class to new div element */
            newHole.classList.add("holes");

            /* If the divs are at the bottom of the box, 
                adds a taken class to it 
            */
            if (i >= row*col-col) newHole.classList.add("base");

            /* Appends new div element to grid */
            grid.appendChild(newHole);
        };
    };

    generateHoles(COL, ROW);

    /* Block to add eventlistener to holes */
    {
        const holes = grid.querySelectorAll(".holes");

        holes.forEach((hole, index)=>{
            hole.addEventListener("click", () => onHoleClick(index, holes));
        });
    };
};

window.addEventListener("load", startGame);