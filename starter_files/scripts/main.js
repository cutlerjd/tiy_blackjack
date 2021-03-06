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

let handArray = [[ "8", "J" ]]
//Take in an array of hand values
function handCalculator(handArray){
  //Declaring the array to store values of the hands that come in
  let resultsArray=[]
  //Allow the card loop below to access the hand object to insert more hands
  //let self = this
  //Function will call itself later on and add in hand array. Need to loop
  handArray.forEach(function(hand){
    //First is to replace other face cards
    let handI = hand.map(function(card, x, y, z){
      if(card === "J" || card === "K" || card === "Q"){
        console.log(10)
        return 10
        //If there is a card with an A, it sends it to the original function to be processed
      } else if(card == "A"){
        card = 1
        handCalculator(self.push(z))
        card = 11
        handCalculator(self.push(z))
      }
      //This is to turn strings into numbers for reduce
      else {
        console.log(parseInt(card))
        return parseInt(card)
      }
    })
    //Console is to see if the map stuck to the hand
        console.log(handI)
    //Calculates the total value of the hand and pushes it to an array
    handI.reduce(function(total,num){
      resultsArray.push(total + num);
    })
  })
  //Calculate the optimal value from the hands
  resultsArray.reduce(function(x,y){
    if(y > x){
      if( y < 22){
        return y
      } else {
        return x
      }
    }
  },resultsArray[0])
  console.log(resultsArray)
}

handCalculator(handArray)
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
