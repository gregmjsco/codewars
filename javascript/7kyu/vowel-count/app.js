function getCount(str) {
    array = str.split("");
    console.log(array)
    count = 0;
    console.log(count)
    const myFunc = letter => {
      if (letter == 'a' || 'i' || 'u' || 'e' || 'o') 
        count++
      console.log()
    }
    array.forEach(myFunc(item))
    
    return count;
  }