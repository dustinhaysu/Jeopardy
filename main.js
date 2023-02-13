// INITAILIZE THE GAME BOARD ON PAGE LOAD
// make this project my own possibly use GIF to flip boxes or other animations
initCategoryRow()//builds categories for Trebekardy boards 
initBoard() //builds game board

document.querySelector('button').addEventListener('click', buildCategories)

// CREATE CATEGORY ROW
function initCategoryRow() {
    let catRow = document.getElementById('category-row')

    for(let i=0; i<6; i++){
        let box = document.createElement('div')
        box.className = 'clue-box category-box'
        catRow.appendChild(box)
    }

}


//CREATE CLUE BOARD

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

    
}

function randInt () {
    return Math.floor(Math.random() * (18418) + 1)

}

let catArray = []

// get fetch categories

function buildCategories () {

    if(!(document.getElementById('category-row').firstChild.innerText == '')) {
        resetBoard()
    }

    const fetchReq1 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq2 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq3 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq4 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq5 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const fetchReq6 = fetch(
        `https://jservice.io/api/category?&id=${randInt()}`
    ).then((res) => res.json());

    const allData = Promise.all([fetchReq1,fetchReq2,fetchReq3,fetchReq4,fetchReq5,fetchReq6])

    allData.then((res) => {
        console.log(res)
        catArray = res
        setCategories(catArray)
    })

}

// LOAD CATEGORIES TO THE BOARD

function setCategories (catArray) {
    let element = document.getElementById('category-row')
    let children = element.children;//creates array of all children
    for(let i = 0; i<children.length; i++){
        children[i].innerHTML = catArray[i].title

    }


}


function getClue () {
    console.log('Have a nice day!')
}