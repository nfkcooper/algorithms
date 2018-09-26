function largestOfFour(arr) {
  // You can do this!
  console.log(arr[0]); 
  console.log(arr[1]);
      var largest = [-100, -100, -100, -100];

  for(let i = 0; i < 4; i ++){
    //array 1 [0]
    //return arr[1] == 1
  //console.log(arr[i][2]);
    for(let j = 0; j < 4; j++){
    if(arr[i][j] > largest[i]){
      largest[i] = arr[i][j];
    }
    //note that "i" represents the array and "j" represents the number
  }
}
console.log(largest);
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);