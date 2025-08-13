function totalFine( fare ) {
 // You have to write your code here

if (typeof fare !== "number" || fare <= 0){

   return 'invalid';

}

let surcharge = fare * 0.2;
let fine = fare + surcharge + 30;
return fine ;

}
let cost = totalFine("Gorib tai ticket katinai");
console.log(cost);


