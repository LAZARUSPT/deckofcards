const finalhand =[]
const cards = require('./deck.js')

let myHand = [cards.deck[0], cards.deck[4], cards.deck[8], cards.deck[12], cards.deck[16], cards.deck[20], cards.deck[24]];

//Checks the ammount of times a certain cards repeats in a hand
const  pairsTriosQuadscheck = myHand.reduce((val, cur) => {
    val[cur.name] = val[cur.name] ? val[cur.name] + 1 : 1;
    return val;
  }, {});

  const arrayToCheckPTQ = Object.keys(pairsTriosQuadscheck).map((key) => ({
    face: key,
    count: pairsTriosQuadscheck[key]
  }));

//checks the amount of times a suit repeats itself

const  flushcheck = myHand.reduce((val, cur) => {
    val[cur.suit] = val[cur.suit] ? val[cur.suit] + 1 : 1;
    return val;
  }, {});

  const arrayToCheckFlush = Object.keys(flushcheck).map((key) => ({
    suit: key,
    count: flushcheck[key]
  }));

console.log(myHand);

const  straightcheck = myHand.reduce((val, cur) => {
    val[cur.suit] = val[cur.suit] ? val[cur.suit] + 1 : 1;
    return val;
  }, {});


const areNuts = myHand.filter(card => card.name === "A");
const kickers = myHand.filter(card => card.name !="A");

myHandCalculatorPTQ =  (face) => {
    //Facecard index in array
    faceCardPosition = myHand.findIndex(card => card.name === face)
    //order cards by value
    myHand.sort((a,b)=> (a.rank < b.rank) ? 1 : ((b.rank < a.rank) ? -1 : 0))
    //Extracts the face of the nuts
    const nutSearch = myHand.filter(card => card.name === face);
    //Pushes it to the final hand
    finalhand.push(...nutSearch);
    myHand = myHand.filter(card => card.name != face);
    console.log(myHand);
}

myHandCalculatorFlush =  (suit) => {
    //Suit index in array
    faceCardPosition = myHand.findIndex(card => card.suit === suit)
    //order cards by value
    myHand.sort((a,b)=> (a.rank < b.rank) ? 1 : ((b.rank < a.rank) ? -1 : 0))
    //Extracts the face of the nuts
    const nutSearch = myHand.filter(card => card.suit === suit);
    //Pushes it to the final hand
    for (let index = 0; index < 5; index++) {
        finalhand.push(nutSearch[index]);
    }
    myHand = myHand.filter(card => card.suit != suit);
    console.log(myHand);
    console.log('Final hand is:', finalhand);
}

checkStraight = () => {
    //order cards by value
    myHand.sort((a,b)=> (a.rank < b.rank) ? 1 : ((b.rank < a.rank) ? -1 : 0))
    //create an array to save the indexes
    let positionStraight = [];
    // run trought array to check if there is a card that has 1 value bellow 
    myHand.forEach(function (card, i, arr) {
    let toSearch = card.rank -1
       let index = myHand.findIndex(card => card.rank === toSearch );
       
       if (index !=-1) {
        if (positionStraight.length === 0) {
            positionStraight.push(index - 1)
           }
        positionStraight.push(index);
       }

    })
    console.log(positionStraight);
    // checks if there are 5 cards in sequence if there are it pushes them to finalhand 
    if (positionStraight.length >= 5) {
        for (let index = 0; index < 5; index++) {
            finalhand.push(myHand[positionStraight[index]]);  
        }
    }
    console.log(finalhand);
} 



const checkQuads = () => arrayToCheckPTQ.forEach((card) => card.count === 4 ? myHandCalculatorPTQ(card.face): console.log(`No quads of ${card.face}`));
const checkFlush = () => arrayToCheckFlush.forEach((card) => card.count >=5 ? myHandCalculatorFlush(card.suit): console.log(`No flush of ${card.suit}`));
const checkTrio = () => arrayToCheckPTQ.forEach((card) => card.count === 3 ? myHandCalculatorPTQ(card.face): console.log(`No trio of ${card.face}`));
const checkPair = () => arrayToCheckPTQ.forEach((card) => card.count === 2 ? myHandCalculatorPTQ(card.face): console.log(`No pair of ${card.face}`));
const checkStraightFlush = () => {checkStraight() 
checkFlush()
}


