class MemoryGame {
  constructor(cards, pickedCards=[], pairsClicked=0, pairGuessed=0) {
    this.cards = cards;
this.pickedCards = pickedCards;
this.pairsClicked = pairsClicked;
this.pairGuessed = pairGuessed
  }

  // To go back on
  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
 if (card1 === card2){
  this.pairsClicked ++
  this.pairGuessed ++
 }else{
  this.pairsClicked ++
 }
  }

  checkIfFinished() {
  if(this.pairGuessed ==24){
    console.log('game finished')
  }
  }
}
 console.log(MemoryGame)
