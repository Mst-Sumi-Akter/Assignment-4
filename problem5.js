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
console.log(resultReport([]));