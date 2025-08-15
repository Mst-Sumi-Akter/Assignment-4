function  onlyCharacter(str ) {
          // You have to write your code here
          if (typeof str !== "string"){
            return "invalid" ;
          }
        //   let noSpace = str.replace(/^\s+|\s+$/gm,'');
          let result = str.toUpperCase();
          let noSpaces = result.replace(/\s+/g , "");
          return noSpaces;


}

let charecter = onlyCharacter(true);
console.log(charecter);