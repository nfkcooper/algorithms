function encrypt(firstinitial, lastinitial, message){
    var alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var letterkey =[];
    var encmessage =[];
    for(let i = 0; i < 27; i++){
        letterkey[alphabet[i]] = i;
   // letterkey["a"] = 1;
   // letterkey["b"] = 2;
    }
    for(let j = 0; j < message.length; j++){
        //fi + li (character)
        
        let sum = letterkey[firstinitial] + letterkey[lastinitial];
        let total = letterkey[message[j]] * sum;
        //letterkey[t]
            console.log(total);

    }
   }
   
   
encrypt("r", "f", "this is not my dog");