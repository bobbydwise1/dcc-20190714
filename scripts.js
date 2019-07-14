/*
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

const makeRandomNumOne2Ten = () => {
  return Math.ceil(Math.random()*10);
}

const randomArray = (yourArrayLength) => {
  var outputArray = [];
  for (i=0; i<yourArrayLength; i++) {
    outputArray.push(makeRandomNumOne2Ten());
  }
  return outputArray;
}

startArray = randomArray(makeRandomNumOne2Ten());
console.log('startArray = ';startArray);

const productOfNonIndex = (yourArray) => {
  var outputArray = [];
  for (i=0; i<yourArray.length; i++) {
    var tempIndexProduct = 1;
    for (j=0; j<yourArray.length; j++) {
      if ( j === i ) {
        continue;
      }
      tempIndexProduct = tempIndexProduct*yourArray[i];
    }
    outputArray.push(tempIndexProduct);
    }
  return outputArray;
}

answerArray = productOfNonIndex(startArray);
console.log('answerArray =', answerArray;);

$(document).ready(function() {
  $('#output-section-1').text(startArray);
  $('#output-section-2').text(answerArray);
  //$('#output-section-3').text(tops[0]+tops[1]);
  });
