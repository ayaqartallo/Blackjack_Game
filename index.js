let cardElement = document.getElementById("cards-element")
let sumElement = document.getElementById("sum-element")
let message = ""
let messageElement = document.getElementById("message-element")
let sum = 0
let cards = []
let hasBlack = false
let isAlive = false

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber;
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardElement.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardElement.textContent += cards[i] + " "
    }
    sumElement.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageElement.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlack === false) {
        let newcard = getRandomCard();
        sum += newcard
        cards.push(newcard)
        renderGame()
    }
}
