'use stdict'

const pocketHands = [];
const face = [...value].reverse();

const PocketHand = function(Card1, Card2, Value1, Value2){
    this.card1 = Card1;
    this.value1 = 13 - Value1;
    this.card2 = Card2;
    this.value2 = 13 - Value2;
    if (this.value1 > this.value2) {
        this.type = "s"
        this.id = `${Card1}${Card2}s`
    } else if (this.value1 === this.value2){
        this.type = "pp"
        this.id = `${Card1}${Card2}`
    } else {
        this.type = "o"
        this.id = `${Card2}${Card1}o`
    }
}

const  newCharts = function (card1, card2){
    card1.forEach(function(card1,i) {
        card2.forEach(function(card2,j){
            pocketHands.push(new PocketHand(card1, card2, i, j));
        })
    });
}

newCharts(face,face);

const holecards = document.querySelector(".preflop");

for (let index = 0; index < 13; index++) {
    holecards.innerHTML +=`<tr><td>${pocketHands[0+index*13].id}</td><td>${pocketHands[1+index*13].id}</td><td>${pocketHands[2+index*13].id}</td><td>${pocketHands[3+index*13].id}</td><td>${pocketHands[4+index*13].id}</td><td>${pocketHands[5+index*13].id}</td><td>${pocketHands[6+index*13].id}</td><td>${pocketHands[7+index*13].id}</td><td>${pocketHands[8+index*13].id}</td><td>${pocketHands[9+index*13].id}</td><td>${pocketHands[10+index*13].id}</td><td>${pocketHands[11+index*13].id}</td><td>${pocketHands[12+index*13].id}</td></tr>`
    
}