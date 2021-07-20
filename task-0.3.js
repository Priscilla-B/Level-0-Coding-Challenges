function hello(str){
    if (typeof str != 'string'){
        console.log('This function only accepts string as an input');
    }
    else {
        console.log('Hello ' + str + ' !');
        }   
}

hello('Priscilla');

