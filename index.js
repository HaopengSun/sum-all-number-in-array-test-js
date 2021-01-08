function sumItems(array) {
  let sum = 0;
  for (const number of array){
    if (Array.isArray(number)){
      sum += sumItems(number);
    } else {
      sum += Number(number);
    }
  }
  return sum;
}

module.exports = sumItems;