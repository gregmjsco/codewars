function getMiddle(s)
{
  //Code goes here!
  array = s.split("");
  console.log(array);
  
  length = array.length;
  console.log(length);
  
  if (length % 2 == 0) {
    x = array[(length / 2) - 1];
    y = array[(length / 2)];
    console.log(x);
    console.log(y);
    console.log(x+y);
    return x+y;
  } else {
    a = length / 2;
    b = Math.floor(a);
    z = array[b];
    
    console.log(z);
    return z;
  }
}