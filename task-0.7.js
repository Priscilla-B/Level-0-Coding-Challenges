// converting from Celcius to Fahrenheit and vice versa //

function celciusToFahrenheit (celcius){
    var fahrenheit = celcius * 9/5 + 32;
    return fahrenheit;
}

function fahrenheitToCelcius (fahrenheit){
    var celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}

console.log(celciusToFahrenheit(24), 'Fahrenheit')
console.log(fahrenheitToCelcius(90), 'Celcius')
