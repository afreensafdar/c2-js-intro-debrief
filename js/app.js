//GenBuzz
const myNumber=25;
if (typeof(myNumber)==='number') {
   console.log('This is not a number');
}

else if(myNumber%3==0) {
    console.log('Gen');
}
  else if(myNumber%5==0) {
    console.log('Buzz');
}
 else if(myNumber%3==0 && myNumber%5==0) {
    console.log('GenBuzz');
}
else{
    console.log('This is a number');
}

 //E-Commerce Item List
 let storeItem='Hat';
 switch(storeItem){
     case 'Shoes':
         console.log('Shoes are $50');
         break;
     case 'Jeans':
        console.log('Jeans are $25');
        break;
     case 'Hat':
        console.log('Hat is $12');
        break;
     case 'Socks':
        console.log('Socks are $2');
        break;
    default:
        console.log('Invalid Item');

 }

 //Print a random integer
let min=50;
let max=100;
 min = Math.ceil(min);
  max = Math.floor(max);
 let randonNumber= Math.floor(Math.random() * (100 - min) + min);
console.log(randonNumber);