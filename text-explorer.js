const prompt = require("prompt-sync")({ sigint: true })

let x = 0
let y = 0

while(true) {


    const direction = prompt("Which direction would you like to go (Up, Down, Right, Left)? ")

    if(direction === "up") {
        y = y + 1
    }
    if(direction === "down") {
        y = y - 1
    }
    if(direction === "right") {
        x = x - 1
    }
    if(direction === "left") {
        x = x + 1
    }

    console.log([x, y])

}