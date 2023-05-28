function digitize(n) {
    //code here
    const nString = n.toString();
    const nArray = nString.split('').reverse();
    return nArray.map(nString => parseInt(nString));
  }