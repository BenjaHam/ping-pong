$(document).ready(function() {
  $(".numerical-input").submit(function(event){
    event.preventDefault();

    //back end

    var makeArray = function(inputtedNumber) {
      var arrayOfNumbers = [];
      var x = 0;
      for (i = 1; i <= number; i += 1) {
        x += 1;
        arrayOfNumbers.push(x);
      }
      return arrayOfNumbers;
    }


    var pingPong = function(numberInLoop) {
      if (x % 15 === 0) {
        return "ping pong";
      } else if (number % 3 === 0) {
        return "ping";
      } else if (number % 5 === 0) {
        return "pong";
      } else {
        return toString(number);
      }
    }

    var appendLoop = function(number) {
      var arrayInLoop = [];
      
    }


    var input = $("input#number").val();
    console.log(input);
    var numberArray = makeArray(input);
    console.log(numberArray);
    pingPong(numberArray);
    console.log(numberArray);


  });
});
