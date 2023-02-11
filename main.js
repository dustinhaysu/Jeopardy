// INITAILIZE THE GAME BOARD ON PAGE LOAD
// make this project my own possibly use GIF to flip boxes or other animations
initCategoryRow()//builds categories for Trebekardy boards 
initBoard() //builds game board

function initCategoryRow() {
    let catRow = document.getElementById('category-row')

    for(let i=0; i<6; i++){
        let box = document.createElement('div')
        box.className = 'clue-box category-box'
        catRow.appendChild(box)
    }

}

function initBoard(){
    let board = document.getElementById('clue-board')

    //GENERATE 5 ROWS, THEN PLACE 6 BOXES IN EACH ROW
    for(let i=0; i < 5; i++){
        let row = document.createElement('div')
        let boxValue = 200 * (i + 1)
        row.className = 'clue-row'

        for (let j = 0; j<6; j++){
            let box = document.createElement('div')
            box.className = "clue-box"
            box.textContent = '$' + boxValue
            // box.appendChild(document.createTextNode(boxValue) ) // old school backwards compatible same as box.textContent
            box.addEventListener('click', getClue, false)
            row.appendChild(box)
        }

        board.appendChild(row)
    }

    function getClue () {
        console.log('Have a nice day!')
    }
}