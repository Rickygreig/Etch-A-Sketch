let mainGrid = document.getElementById("container")
let btn = document.getElementById("btn")
let cols;
let rows= cols;

btn.addEventListener("click", reset)

function reset() {
    let cols= prompt("Enter squares per grid side", 16);
        if (cols>0 && cols<=100){
            let rows= cols;
            createGrid(cols, rows);
            for (let i=0; i<= (cols * rows); i++){
            let subGrid = document.querySelector("div.gridElement.painted");
               subGrid.classList.remove('painted');
            };
         }
        else alert("Please enter a number between 1-100");
        reset();
}

function createGrid(cols, rows){
    for (let i=0; i< (cols * rows); i++){
        let subGrid = document.createElement("div")
        subGrid.classList.add("gridElement")
        mainGrid.appendChild(subGrid)
        subGrid.addEventListener("mouseover", () =>{
           subGrid.classList.add("painted")
        })
       mainGrid.style.gridTemplateColumns= `repeat(${cols}, 1fr)`;
       mainGrid.style.gridTemplateRows= `repeat(${rows}, 1fr)`;
    }
}


createGrid(16, 16);