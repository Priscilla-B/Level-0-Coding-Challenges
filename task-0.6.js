function maxNumber(){

    var i = 0;
    const greaterThanList = [];

    while (i < arguments.length){

        var greaterThan = 0;
        for (var j=0; j < arguments.length; j++){
            if (arguments[i] >= arguments[j]){ 
                greaterThan += 1;
            }
        }

        greaterThanList.push(greaterThan);
        i++;
    }
    
    i = 0;
    while(i < arguments.length){
    
        if (greaterThanList[i] == arguments.length) {
            return arguments[i];
        };
        i++;
        
    }
}

console.log(maxNumber(7, 10, 39, 20, 15, 100, 100))
