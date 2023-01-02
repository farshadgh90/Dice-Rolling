const diceBtn = document.querySelector(".btn-dice")
const editBtn = document.querySelector(".btn-edit")
const winner = document.querySelector(".header")
const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")


diceBtn.addEventListener('click', ()=>{
    let firstRandomNum = Math.floor(Math.random() * 6) + 1
    let firstDiceImage = 'img/dice' + firstRandomNum + '.png'

    let secondRandomNum = Math.floor(Math.random() * 6) + 1
    let secondDiceImage = 'img/dice' + secondRandomNum + '.png'

    document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage)
    document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage)

    if(firstRandomNum > secondRandomNum){
        winner.innerHTML = player1.innerHTML + " wins!"
    }
    else if(firstRandomNum < secondRandomNum){
        winner.innerHTML = player2.innerHTML + " wins!"
    }
    else{
        winner.innerHTML = "Its's a draw!"
    }
})

editBtn.addEventListener('click', ()=>{
    const person1 = prompt("Change player1 name");
    if(person1 === null || person1 === ""){
        player1.innerHTML = "Player 1"
    }
    else{
        player1.innerHTML = person1
    }

    const person2 = prompt("Change player2 name");
    if(person2 === null || person2 === ""){
        player2.innerHTML = "Player 2"
    }
    else{
        player2.innerHTML = person2
    }
})