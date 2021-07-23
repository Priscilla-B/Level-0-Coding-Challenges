// converting numbers into hours and minutes //
 
function toHoursAndMinutes(num){
    var hours = ~~ (num/60);
    var minutes =  num % 60;

    if (hours == 1){
        var hoursString = ' hour ';
    }
    else {
        hoursString = ' hours ';
    };
    if (minutes == 1){
        var minutesString = ' minute.';
    }
    else {
        minutesString = ' minutes.';
    }
    return hours + hoursString + minutes + minutesString;
}

console.log(toHoursAndMinutes(238));
console.log(toHoursAndMinutes(23));
console.log(toHoursAndMinutes(75));
console.log(toHoursAndMinutes(1))