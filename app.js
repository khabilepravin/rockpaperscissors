const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const computerChoiceDisplay = document.querySelector('#computerChoice')
const choices = [ { name:'rock', img:'fas fa-circle', color:'brown' }, { name:'paper', img:'fas fa-sticky-note', color:'green'},{name : 'scissors',img:'fas fa-cut', color:'red' }]

const handleClick = (e) => {
  const userChoice = e.target.nodeName == "I" ? e.target.parentElement.id : e.target.id;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceDisplay.innerHTML = `<i class="${computerChoice.img}" style="font-size:90px;color:${computerChoice.color};"></i>`;
  getResults(userChoice, computerChoice.name)
}

choices.forEach(choice => {  
  const button = document.createElement('button')  
  button.setAttribute('id', choice.name)  
  button.setAttribute('class', 'btn')
  button.innerHTML = `<i class="${choice.img}" style="font-size:90px;color:${choice.color};"></i>`
  button.addEventListener('click', handleClick)
  choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU WIN!'
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU LOSE!'
      break
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!'
      break
  }
}
