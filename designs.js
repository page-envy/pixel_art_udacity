/*
 *  VARIABLES
 *******************/

// Select color input
const colorSelect = document.getElementById('colorPicker');

// Select size input
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');

// Select pixel canvas
const pixelCanvas = document.getElementById('pixelCanvas');

// Select delete button
const deleteButton = document.getElementById('deleteButton');

// Select clear button
const clearButton = document.getElementById('clearButton');

// Select size picker
const sizePicker = document.getElementById('sizePicker');

/*
 *  EVENT LISTENERS
 *******************/

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function getSizes(evt){
    // prevent submit button default action
    evt.preventDefault();

    // pass sizes into makeGrid function to create the grid
    makeGrid(gridWidth.value,gridHeight.value);
});

clearButton.addEventListener('click',function (){
    makeGrid(gridWidth.value,gridHeight.value);
});

// add reset functionality to reset button
deleteButton.addEventListener('click',resetCanvas);

// Add click-to-paint functionality to pixelCanvas
pixelCanvas.addEventListener('click',function (evt){
    evt.target.style.background = colorSelect.value;
});

/*
 *  FUNCTIONS
 *******************/

function makeGrid(width,height) {
    // Clear any existing table so we can have a fresh start
    resetCanvas();

    // Create cells using given height and width
    for(let x = 0; x < height; x++){
        let row = pixelCanvas.insertRow(0);
        for(let y = 0; y < width; y++){
            let cell = row.insertCell(0);
        }
    }
}

function resetCanvas(){
    // Check if there is a tbody object as a child of the pixelCanvas
    if(pixelCanvas.querySelector('tbody')){
        pixelCanvas.querySelector('tbody').remove();
    }
}


