import { onSnake, expandSnake, snakeBody } from './snake.js'
import { randomGridPosition } from './grid.js'
export let score;
let food = getRandomFoodPosition()
const expansionRate = 3

export function update() {
    if (onSnake(food)) {
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }

    score = snakeBody.length
    document.getElementById('score-counter').innerHTML = score
}

export function draw(gameBoard) {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}