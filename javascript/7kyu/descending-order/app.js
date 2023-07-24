function descendingOrder(n){
  //...
  let array = n.toString().split("");
  console.log(array);
  
  let sortedArray = array.sort(function(a, b){return b-a}).join("");
  console.log(sortedArray);
  
  let result = parseInt(sortedArray);
  console.log({result});
  
  return result;
  
}