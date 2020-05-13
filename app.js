document.addEventListener('DOMContentloaded', () => {

//create cards
const cardArray = [
 {
     name:'cartman',
     img: 'images/cartman.gif'
 },
 {
    name:'cartman',
    img: 'images/cartman.gif'
},
{
    name:'cat',
    img: 'images/cat.gif'
},
{
    name:'cat',
    img: 'images/cat.gif'
},
{
    name:'chat now',
    img: 'images/chat now.gif'
},
{
    name:'chat now',
    img: 'images/chat now.gif'
},
{
    name:'chick',
    img: 'images/chick.gif'
},
{
    name:'chick',
    img: 'images/chick.gif'
},
{
    name:'dragon',
    img: 'images/dragon.gif'
},
{
    name:'dragon',
    img: 'images/dragon.gif'
},
{
    name:'monkey',
    img: 'images/monkey.jpeg'
},
{
    name:'monkey',
    img: 'images/monkey.jpg'
},
{
    name:'heart',
    img: 'images/heart.png'
},
{
    name:'heart',
    img: 'images/heart.png'
},
]

const grid = document.querySelector.('grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen =[]
let cardsChosenId = []
let CardsWon = []


//create your board 

function createboard() {
    for (let i = 0; i < cardArray.length;i++) {
        var card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//check for matches
 function checkForMatch() {
     let cards = document.querySelectorAll('img')
     const optionOneId = cardsChosenId[0]
     const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('you found a match')
        card[optionOneId].setAttribute('src','images/yellow.jpg')
        card[optionTwoId].setAttribute('src','images/yellow.jpg')
        cardsWon.push(cardsChosen)
    } else {
       cards[optionOneId].setAttribute('src', 'images/yellow.jpg') 
       cards[optionTwoId].setAttribute('src', 'images/yellow.jpg') 
       alert('sorry!!!!! you didnt get that right!! maybe give up on life?')
    }
    cardsChosen = []
    cardsChosenId =[]
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.legth === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! not that dumb afterall!'
    }
 }


//flip your card

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if (cardsChosen.length ===2 ) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()