console.log('Main loaded');
let userName;
const playerButton = document.querySelector(".player-button");
const playerName = document.querySelector('.player-name');
const hoverTextOk = document.querySelector('.hover-text-ok');
//Functie om een naam te kiezen
playerButton.addEventListener("click", function () {
  userName = prompt("Wat is jouw naam?", '');
  highScoreChange.textContent = localStorage.getItem(userName);
  playerName.textContent = userName;
  youLostDiv.style.display = "none";
  youWonDiv.style.display = "none";
  rules.style.top = "0px"
})

let previousScore = 6; // Alsof je de eerste keer altijd een 6 hebt gegooid.
//Besluit het getal dat gekozen wordt voor beide dobbelstenen
let diceOne = Math.round(Math.random() * (5));
let diceTwo = Math.round(Math.random() * (5));
console.log(diceOneRes = diceOne + 1);
console.log(diceTwoRes = diceTwo + 1)
let diceTotal = (diceOneRes + diceTwoRes)
console.log(diceTotal + 0);
//if (diceTotal >= 6){
//alert("You win!") Als het getal hoger of gelijk is aan 6 dan heb je gewonnen.

const higherButton = document.querySelector('.higher-button');
higherButton.addEventListener("click", higherButtonPress);
const scoreChange = document.querySelector(".score")
const highScoreChange = document.querySelector(".highscore")
let score = 0
let highScore = 0
//Functie voor de knop hoger met win/loss en confetti.
function higherButtonPress() {
  youWonDiv.style.display = "none"
  youLostDiv.style.display = "none"
  rollDice()
  diceImg()
  if (diceTotal > previousScore) {
    youWonDiv.style.display = "block"
    rules.style.top = "115px"
    hoverTextOk.style.top = "255px"
    if (highScore === score) {
      highScore = (highScore + 1);
      let previousScore = localStorage.getItem(userName);
      if (highScore > previousScore) {
        highScoreChange.innerText = highScore;
        window.localStorage.setItem(userName, highScore)
      }
    }
    score = (score + 1)
    scoreChange.innerText = score
        setTimeout(()=>{
          shoot("👍", "🤓")
        }, 0);
        setTimeout(()=>{
          shoot("👍", "🤓")
        }, 100);
        setTimeout(()=>{
          shoot("👍", "🤓")
        }, 200);
  } else {
    youLostDiv.style.display = "block"
    hoverTextOk.style.top = "255px"
    rules.style.top = "115px"
    score = (score = 0)
    scoreChange.innerText = score
    
    setTimeout(()=>{
      shoot("🖕", "💀")
    }, 0);
    setTimeout(()=>{
      shoot("🖕", "💀")
    }, 100);
    setTimeout(()=>{
      shoot("🖕", "💀")
    }, 200);
  }
}
//Functie voor de confetti
function shoot(emojiOne, emojiTwo) {
  const defaults = {
    spread: 360,
    ticks: 500,
    gravity: 0,
    decay: 0.94,
    startVelocity: 45,
  };

  confetti({
    ...defaults,
    particleCount: 200,
    scalar: 2,
    shapes: ["emoji"],
    shapeOptions: {
      emoji: {
        value: [emojiOne, emojiTwo],
      },
    },
  });
}

const lowerButton = document.querySelector('.lower-button');
lowerButton.addEventListener("click", lowerButtonPress);

//Functie voor de knop lager met win/loss en confetti.
function lowerButtonPress() {
  youWonDiv.style.display = "none"
  youLostDiv.style.display = "none"
  rollDice()
  diceImg()
  if (diceTotal < previousScore) {
    youWonDiv.style.display = "block"
    hoverTextOk.style.top = "255px"
    rules.style.top = "115px"
    if (highScore === score) {
      highScore = (highScore + 1);
      let previousScore = localStorage.getItem(userName);
      if (highScore > previousScore) {
        highScoreChange.innerText = highScore;
        window.localStorage.setItem(userName, highScore)
      }

    }
    score = (score + 1)
    scoreChange.innerText = score
 

    setTimeout(()=>{
      shoot("👍", "🤓")
    }, 0);
    setTimeout(()=>{
      shoot("👍", "🤓")
    }, 100);
    setTimeout(()=>{
      shoot("👍", "🤓")
    }, 200);
  } else {
    youLostDiv.style.display = "block"
    rules.style.top = "115px"
    hoverTextOk.style.top = "255px"
    score = (score = 0)
    scoreChange.innerText = score
  

    setTimeout(()=>{
      shoot("🖕", "💀")
    }, 0);
    setTimeout(()=>{
      shoot("🖕", "💀")
    }, 100);
    setTimeout(()=>{
      shoot("🖕", "💀")
    }, 200);
  }
}
//Functie om de dobbelstenen te gooien
function rollDice() {
  previousScore = diceTotal;
  diceOne = Math.round(Math.random() * (5));
  diceTwo = Math.round(Math.random() * (5));
  console.log(diceOneRes = diceOne + 1);
  console.log(diceTwoRes = diceTwo + 1)
  diceTotal = (diceOneRes + diceTwoRes)
  console.log(diceTotal)
}
const diceOneImg = document.querySelector(".player-dice-one")
const diceTwoImg = document.querySelector(".player-dice-two")

//Functie om de dobbelstenen tot afbeeldingen te zetten met HTML elementen
function diceImg() {
  if (diceOneRes == 1) {
    diceOneImg.innerHTML = "&#" + (9855 + 1) + ";";
  } else if (diceOneRes == 2) {
    diceOneImg.innerHTML = "&#" + (9855 + 2) + ";"
  } else if (diceOneRes == 3) {
    diceOneImg.innerHTML = "&#" + (9855 + 3) + ";"
  } else if (diceOneRes == 4) {
    diceOneImg.innerHTML = "&#" + (9855 + 4) + ";"
  } else if (diceOneRes == 5) {
    diceOneImg.innerHTML = "&#" + (9855 + 5) + ";"
  } else if (diceOneRes == 6) {
    diceOneImg.innerHTML = "&#" + (9855 + 6) + ";"
  }

  if (diceTwoRes == 1) {
    diceTwoImg.innerHTML = "&#" + (9855 + 1) + ";";
  } else if (diceTwoRes == 2) {
    diceTwoImg.innerHTML = "&#" + (9855 + 2) + ";"
  } else if (diceTwoRes == 3) {
    diceTwoImg.innerHTML = "&#" + (9855 + 3) + ";"
  } else if (diceTwoRes == 4) {
    diceTwoImg.innerHTML = "&#" + (9855 + 4) + ";"
  } else if (diceTwoRes == 5) {
    diceTwoImg.innerHTML = "&#" + (9855 + 5) + ";"
  } else if (diceTwoRes == 6) {
    diceTwoImg.innerHTML = "&#" + (9855 + 6) + ";"
  }
}

//function diceImg voor bij het opstarten
if (diceOneRes == 1) {
  diceOneImg.innerHTML = "&#" + (9855 +
    1) + ";";
} else if (diceOneRes == 2) {
  diceOneImg.innerHTML = "&#" + (9855 +
    2) + ";"
} else if (diceOneRes == 3) {
  diceOneImg.innerHTML = "&#" + (9855 +
    3) + ";"
} else if (diceOneRes == 4) {
  diceOneImg.innerHTML = "&#" + (9855 +
    4) + ";"
} else if (diceOneRes == 5) {
  diceOneImg.innerHTML = "&#" + (9855 + 5) + ";"
} else if (diceOneRes == 6) {
  diceOneImg.innerHTML = "&#" + (9855 + 6) + ";"
}

if (diceTwoRes == 1) {
  diceTwoImg.innerHTML = "&#" + (9855 + 1) + ";";
} else if (diceTwoRes == 2) {
  diceTwoImg.innerHTML = "&#" + (9855 + 2) + ";"
} else if (diceTwoRes == 3) {
  diceTwoImg.innerHTML = "&#" + (9855 + 3) + ";"
} else if (diceTwoRes == 4) {
  diceTwoImg.innerHTML = "&#" + (9855 + 4) + ";"
} else if (diceTwoRes == 5) {
  diceTwoImg.innerHTML = "&#" + (9855 + 5) + ";"
} else if (diceTwoRes == 6) {
  diceTwoImg.innerHTML = "&#" + (9855 + 6) + ";"
}

//win pop-up
const youWonDiv = document.querySelector('#youWonDiv');
const youLostDiv = document.querySelector('#youLostDiv');
//youWonDiv.style.display = "block";
//youWonDiv.style.display = "none";

//regel knop
const rulesDiv = document.querySelector('#rulesDiv')
const rules = document.querySelector('.rule-button')
rules.addEventListener('click', function () {
  rulesDiv.style.display = "block";
  rules.style.display = "none";
})

//knop om regels weg te halen
const okButton = document.querySelector('.Ok-button')
okButton.addEventListener('click', function () {
  rulesDiv.style.display = "none";
  rules.style.display = "block";
})
//hover om aan te tonen wat de ok knop doet
okButton.addEventListener('mousemove', function () {
  const hoverText = document.getElementById('hoverText');
  hoverTextOk.style.display = 'block';

});
//muis weghalen haalt weg wat er getoont wordt voor de ok knop
okButton.addEventListener('mouseout', function () {
  const hoverText = document.getElementById('hoverText');
  hoverTextOk.style.display = 'none';
});

