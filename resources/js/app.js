const words = [    
    'adult',
    'alarm',
    'album',
    'baker',
    'beach',
    'bench',
    'cable',
    'chart',
    'chair',
    'dance',
    'death',
    'drama'
]

let word

const startButton = document.getElementById('startButton')
const ground = document.getElementById('ground')

startButton.addEventListener('click', () => {
    startButton.classList.remove("visible")
    ground.classList.add("visible")
    
    let wordIndex = Math.floor(Math.random() * words.length)
    word = words[wordIndex].toUpperCase()
})

let numberContainer = document.getElementById('numberContainer')
let numbers = numberContainer.querySelectorAll(":scope > .number")
let numberIndex = 0;
document.querySelectorAll('[data-key]').forEach(x => {    
    x.addEventListener('click', () => {
        if (x.dataset['key'] === "_DELETE" && numberIndex % 5 !== 0) {
            numbers[--numberIndex].innerText=""
            return
        }

        if (x.dataset['key'].indexOf("_") > -1) {
            return;
        }

        numbers[numberIndex++].innerText = x.dataset['key']
        let isWin = 0
        if (numberIndex % 5 === 0) {            
            let userAnswer = ""  
            for (let i = numberIndex - 5; i < numberIndex; i++) {
                userAnswer += numbers[i].innerText                
            }         
            for (let i = 0; i < userAnswer.length; i++) {               
                if (word.indexOf(userAnswer[i]) > -1) {
                    numbers[numberIndex - 5 + i].dataset['status'] = "contain"
                } if (word.indexOf(userAnswer[i]) == -1) {
                    numbers[numberIndex - 5 + i].dataset['status'] = "incorrect"
                } if(word[i] == userAnswer[i]) {                    
                    numbers[numberIndex - 5 + i].dataset['status'] = "correct"
                    isWin++
                    console.log(isWin)
                    if (isWin >= 5) {
                        alert("good")
                        break
                    }
                }                
                if (numberIndex >= 29 && isWin <= 5) {
                    alert("you Lose")
                    break
                }
            }
        }
    })   
})