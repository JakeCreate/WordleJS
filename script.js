const displayGrid = document.querySelector(".grid-container");
const NUM_OF_COLUMNS = 5;
const NUM_OF_ROWS = 6;
let currRowNum = 1;
let currColNum = 0;
let currentRow = displayGrid.querySelectorAll(`#r${currRowNum} p`);

window.addEventListener("keydown", (event) => {
    if(event.code.startsWith("Key") && currColNum < NUM_OF_COLUMNS) {
        currentRow[currColNum].innerText = event.code[3];
        currColNum+=1;
    }
    if (event.code === "Enter") {
        if (currColNum == NUM_OF_COLUMNS) {
            if (currRowNum < NUM_OF_ROWS) {
                currRowNum+=1;
                currColNum = 0;
                currentRow = displayGrid.querySelectorAll(`#r${currRowNum} p`);
            } else {
                console.log("game has ended");
            }
        } else {
            console.log("invalid # number of characters");
        }
    } 
    if (event.code === "Backspace" && currColNum > 0) {
        currColNum-=1;
        currentRow[currColNum].innerText = "";   
    }
});











