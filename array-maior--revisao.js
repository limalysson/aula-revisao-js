var arr = [1, 2, 3,20,4];
function getMaxOfArray(numArray) {
    console.log( Math.max.apply(null, numArray));
  }

getMaxOfArray(arr)