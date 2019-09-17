function max(numbers) {
  let i = 0;
  let maxNumber = numbers[i];
  while(i < numbers.length) {
    if(numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
    i++;
  }
  return maxNumber;
}

function min(numbers) {
  let i = 0;
  let minNumber = numbers[i];
  while(i < numbers.length) {
    if(numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
    i++;
  }
  return minNumber;
}




function average(numbers) {
  let sum = 0;

  numbers.forEach(function(value) {
    sum += value;
  });
  
  return(sum/numbers.length);
}

