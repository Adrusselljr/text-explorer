const prompt = require("prompt-sync")({ sigint: true })

let x = -2
let y = -2

function reset() {
    x = -2
    y = -2
}

while(x !== 2 && y !== 2) {

    const direction = prompt("Which direction would you like to go (Up, Down, Right, Left)? ")

    if(direction === "up") {
        y += 1
    }
    else if(direction === "down") {
        y -= 1
    }
    else if(direction === "right") {
        x += 1
    }
    else if(direction === "left") {
        x -= 1
    }
    else {
        reset()
        console.log("INVALID CHOICE!, You Just reset your position!")
    }

    if(x === -2 && y === -2) {
        console.log("Start Here!")
    }
    else if(x === -2 && y === -1) {
        console.log("You walk in the front door")
    }
    else if(x === -1 && y === -2) {
        console.log("You sit on the front porch")
    }
    else if(x === -1 && y === -1) {
        console.log("You sit on the couch")
    }
    else if(x === -1 && y === 0) {
        console.log("You use the bathroom")
    }
    else if(x === 0 && y === -1) {
        console.log("You take a shower")
    }
    else if(x === 0 && y === 0) {
        console.log("You go to the kitchen")
    }
    else if(x === 1 && y === 0) {
        console.log("You grab some chips")
    }
    else if(x === 0 && y === 1) {
        console.log("You stub your toe on the dinning room table")
    }
    else if(x === 1 && y === 1) {
        console.log("You start playing Call Of Duty")
    }
    else if(x === 1 && y === 2) {
        console.log("You turn on Netflix")
    }
    else if(x === 2 && y === 1) {
        console.log("You are tired")
    }
    else if(x === 2 && y === 2) {
        console.log("You go to sleep")
    }
    else {
        console.log("ARE YOU LOST!?")
    }

    console.log([x, y])

}

console.log("Thanks For Playing!")