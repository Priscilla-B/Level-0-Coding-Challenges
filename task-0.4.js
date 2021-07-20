function evenOrOdd(int){
    if (Number.isInteger(int) != true){
        console.log('This function accepts integers only')
    }
    else if (int % 2 == 0){
        console.log('even');
    }
    else {
        console.log('odd')
    };
};
    
    

evenOrOdd(3);