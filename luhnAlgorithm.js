function check (number){
  var digits = number.toString().split("").map(Number)

  var summedDigits = 0;

  for(var i = digits.length -2 ; i >= 0; i-=2){
    var doubleDigits = 0;
    doubledDigits = digits[i] * 2;

    if(doubledDigits > 9){
      var eachDigit = doubledDigits.toString().split("").map(Number);
      var newDigit = 0;
      for(x in eachDigit){
        newDigit = newDigit + eachDigit[x]

      }
      digits[i] = newDigit;
    }
    else{
      digits[i] = doubledDigits
    }
  }

  digits.forEach(function(element){
    summedDigits += element;
  })
  if(summedDigits % 10 === 0){
    console.log(number)
    console.log("This is a valid number according to the Luhn algorithm")
  }
  else{
    console.log(number)
    console.log("Your number is invalid according to the Luhn algorithm")
  }

}

check(79927398713)