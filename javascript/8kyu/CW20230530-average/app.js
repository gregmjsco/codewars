function findAverage(array) {
  // your code here
  console.log(array);
  let total = 0;
  let values = array.length;
  
  for (let i = 0; i < array.length; i++){
    total += array[i];
    console.log(total);
  }
  console.log(total);
  console.log(values);
  
  if (total == 0){
    return 0;
  } else {
    return total/values;
  }
}