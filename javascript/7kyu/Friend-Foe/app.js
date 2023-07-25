function friend(friends){
    //your code here
    console.log(friends);
    let result = [];
    
    for(let name of friends){
      if (name.length == 4)
        result.push(name);
    }
    return result
  }