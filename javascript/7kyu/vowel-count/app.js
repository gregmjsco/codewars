function getCount(str) {
  array = str.split("");
  console.log(array);
  count = 0;
  console.log(count);
  for (let x in array){
    console.log(array[x]);
    if(array[x] == 'a' || array[x] == 'u' || array[x] == 'i' || array[x] == 'e' || array[x] == 'o') {
      count++;
    }
  }
  return count;
}