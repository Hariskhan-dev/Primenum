// Assigning value to x;
let x  = 12;
// Assigning value to count;
let count = 0;
// looping from 1 till x;

for(let i=1; i<=num; i++){
// checking if x is divisble by indexes;
  if(x%i==0){
    // incrementing the count if x is divisible by indexes
    count++;
  }
}

// checking if count is equal to 2 
if(count ==2){
  // if count is equal to 2 "Prime number will be the output"
  console.log('Prime number');
} else{
  // if count is not equal to 2 "Not a prime number will be the output"
  console.log('Not a prime number')
}