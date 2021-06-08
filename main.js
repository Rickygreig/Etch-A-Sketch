let mainGrid= document.getElementById("mainGrid");

 


function createGrid(){
    for (let i=0; i<256; i++){
        let subGrid = document.createElement("div");
        mainGrid.appendChild(subGrid).classList.add("cell");
    }        
    
}


function colorGrid(){
    let cells = document.querySelectorAll(".cell");
    
    cells.forEach(cell => cell.addEventListener('mouseover', () => {
        document.cell.style.backgroudColor= "red";
    }))
}


createGrid();
colorGrid();

