function removeExclamationMarks(s) {
  let array = s.split("")
  console.log({array})
  
  for (let i = 0; i <= array.length; i++) {
    if (array[i] == '!') {
      array.splice(i, 1)
    }
  }
  
  if (array[array.length - 1] == '!') {
    array.pop()
  }
  
  console.log({array})
  
  let result = array.join('')
  console.log({result})
  return result;
}