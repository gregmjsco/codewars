function nbYear(p0, percent, aug, p) {
    // your code
  let per = percent / 100;
  console.log(per)
  let yearCount = 0;
  let newPop = 0;
  
  while(newPop < p){
    newPop += p0 + (p0 * per) + aug;
    console.log(newPop);
    yearCount++;
    console.log(yearCount)
    if (newPop > p)
      return yearCount
  }
  
}