

function totalFine( fare ) {
 // You have to write your code here

if (typeof fare !== "number" || fare <= 0){

   return 'Invalid';

}

let surcharge = fare * 0.2;
let fine = fare + surcharge + 30;
return fine ;

}



function  onlyCharacter(str ) {
// You have to write your code here

if (typeof str !== "string"){
  return 'Invalid' ;
}
let result = str.toUpperCase();
let noSpaces = result.replace(/\s+/g , "");
return noSpaces;


}


function  bestTeam( player1, player2 ) {
 // You have to write your code here

if (typeof player1 !== 'object' || player1 === null || typeof player2 !== 'object' || player2 === null ){

  return 'Invalid';
}
          
let requerKeys = ['name', 'foul', 'cardY','cardR']
for(let key of requerKeys){
if ( !(key in player1) || !(key in player2) || typeof player1.name !== 'string' || typeof player2.name !== 'string' || typeof player1.foul !== 'number' || typeof player2.foul !== 'number' || typeof player1.cardY !== 'number' || typeof player2.cardY !== 'number' || typeof player1.cardR !== 'number' || typeof player2.cardR !== 'number' ){
  return 'Invalid';
  }
}


let totalp1 = player1.foul + player1.cardY + player1.cardR;
let totalp2 = player2.foul + player2.cardY + player2.cardR;

if(totalp1 < totalp2){
  return player1.name;
}
else if (totalp1 > totalp2){
  return player2.name;

}
else{
  return  "Tie" ;
 }

}



function  isSame(arr1 , arr2 ) {
// You have to write your code here

if(! Array.isArray(arr1) || !Array.isArray(arr2)){
  return 'Invalid' ;
}
else if (arr1.length !== arr2.length){
  return false ;
}
for (let i = 0; i< arr1.length; i++){
  if( arr1[i] !== arr2[i]){
  return false ;
  }
}
return true;
}




function  resultReport( marks ) {
  // You have to write your code here

if( !Array.isArray(marks)){
    return 'Invalid' ;

}
let total = 0;
let passCount = 0;
let failCount = 0;
for( let i = 0; i< marks.length; i++){
    let mark = marks[i];
    total = total + mark;
    if (mark >= 40){
        passCount++;
    }
    else{
        failCount++;
    }
}
let average = marks.length>0 ? Math.round(total / marks.length):0;

return{
    finalScore: average,
    pass:passCount,
    fail:failCount
}


}