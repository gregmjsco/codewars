function isPalindrome(x) {
  // your code here
  reverseX = x.split('').reverse().join('');
  console.log(reverseX);
  
  let result = (x.toLowerCase() == reverseX.toLowerCase()) ? true : false;
  return result;
}