/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  hand.map(function(item){
    if(item == "J" || item == "Q" || item == "K"){
      item = 10
    } else {
      item = int(item)
    }
  })
  hand.reduce(function(item){
    a = a + b
  })

  return;
}

//Take in an object of hand values
function handCalculator(handObject){
  let resultsArray=[]
  handObject.hand.forEach(function(hand){
    let self = this
    hand.map(function(card){
      if(card == "J" || card == "K" || card == "Q"){
        card = 10
      } else if(card == "A"){
        card = 1
        handCalculator(self)
        card = 11
        handCalculator(self)
      } else {
        card = Number(card)
      }
    })
    hand.reduce(function(total,num){
      resultsArray(total + num);
    })
  })
  resultsArray.reduce()
}
//For each hand, check for A's
//If A's, return the object to the same function with the two variables

//Repeat for new object

//If No A's exist, perform reduce on each array, push results to final array

//Find optimal number in array of results

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
