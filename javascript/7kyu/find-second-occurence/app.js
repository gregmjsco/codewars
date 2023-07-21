function secondSymbol(s, symbol) {
  // your code
  array = s.split("");
  console.log(array);
  console.log(symbol);
  
  count = 0;
  
  for(x in array){
    console.log(array[x]);
    console.log(count);
    if (array[x] == symbol){
      count++;
      console.log(count);
      if (count == 2){
        return parseInt(x);
      }
    }
  }
  return -1;
}