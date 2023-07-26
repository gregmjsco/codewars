function stray(numbers) {
    sortedArray = numbers.sort();
    console.log([sortedArray]);
    let result = sortedArray[0] == sortedArray[1] ? sortedArray[sortedArray.length - 1] : sortedArray[0];
    
    return result;
  }