function nbYear(p0, percent, aug, p) {
    // your code
  console.log({p});
  let per = percent / 100;
  console.log(per);
  let yearCount = 0;
  let newPop = p0;
  console.log({newPop});
  
  while(newPop < p){
    console.log({newPop}, {p0}, {per}, {aug});
    newPop = Math.floor(newPop + (newPop * per) + aug)
    console.log(newPop);
    yearCount++;
    console.log({yearCount});
    
    if (newPop >= p)
      return yearCount;
  }
}