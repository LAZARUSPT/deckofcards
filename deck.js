//Variables

const suit = ["c","s","h","d"];
const value = [2,3,4,5,6,7,8,9,"T","J","Q","K","A"]
const deck = [];

//Functions

//Constructor Card
const Card = function (suit, name, index) {
    this.id = `${name}${suit}`
    this.suit = suit;
    this.name = name;
    this.rank = index + 1
    }


const newDeck = function (arrSuit, arrName) {
    arrSuit.forEach(function (currentSuit, index) {
        console.log(`Generating ${index+1}:${currentSuit}`);
        arrName.forEach(function (currentValue, i) {
            deck.push(new Card(currentSuit,currentValue, i));
        })
    });
    }

newDeck(suit,value);

deck.sort((a,b)=> (a.rank < b.rank) ? 1 : ((b.rank < a.rank) ? -1 : 0));

const test = deck.filter(card => card.name === "A")

console.log(test);

module.exports.deck = deck;

