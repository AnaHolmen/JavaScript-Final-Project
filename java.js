class Deck {
  constructor() {
    this.suits = ["hearts", "Spades", "Diamonds", "clubs"];
    this.ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    this.cards = [];

    for (let i = 0; i < this.suits.length; i++) {
      for (let x = 0; x < this.ranks.length; x++) {
        let card = {
          suit: this.suits[i],
          rank: this.ranks[x],

          value: x + 2,
        };

        this.cards.push(card);
      }
    }
  }
  shuffle() {
    // Fisher-Yates algorithm for shuffling
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

const myDeck = new Deck();
myDeck.shuffle(); // Shuffle the cards within the deck
console.log(myDeck.cards);

let player1 = myDeck.cards.slice(26, 52); // split the deck bettween players//
let player2 = myDeck.cards.slice(0, 26);

let p1Score = 0; //players scores and handwinner//
let p2Score = 0;
let handWinners = [];

console.log(player2);
console.log(player1);

for (let i = 0; i < 26; i++) {
  //
  if (player1[i].value > player2[i].value) {
    p1Score += 1;
    handWinners.push("player 1");
    console.log("player 1");
  } else if (player1[i].value < player2[i].value) {
    p2Score += 1;
    handWinners.push("player 2");
    console.log("player 2");
  } else {
    handWinners.push("TIE");
    console.log("TIE. NO POINT AWARDED");
  }
}

let overallWinner = ""; // how to determine the overall winner//
if (p1Score > p2Score) {
  overallWinner = "Player 1";
  console.log("Overall Winner: Player 1");
} else if (p1Score < p2Score) {
  overallWinner = "Player 2";
  console.log("Overall Winner: Player 2");
} else {
  overallWinner = "TIE";
  console.log("Overall Result: TIE");
}

console.log("Player 1 Score:", p1Score); // making the score, handwinner and overall winner//
console.log("Player 2 Score:", p2Score);
console.log("Hand Winners:", handWinners);
console.log("Overall Winner:", overallWinner);
