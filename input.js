import { snakeBody } from './snake.js'

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
        case 'w':
           if (snakeBody.length === 1) {
                inputDirection = { x: 0, y: -1 }
                break
            } else if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
        case 's':
            if (snakeBody.length === 1) {
                inputDirection = { x: 0, y: 1 }
                break
            } else if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
        case 'a':
            if (snakeBody.length === 1) {
                inputDirection = { x: -1, y: 0 }
                break
            } else if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
        case 'd':
            if (snakeBody.length === 1) {
                inputDirection = { x: 1, y: 0 }
                break
            } else if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}