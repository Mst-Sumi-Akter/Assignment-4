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

console.log (bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
{ name: "France", foul: 10, cardY: 2, cardR: 1 }));


