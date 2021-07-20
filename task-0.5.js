function areaOfTriagle(side1, side2, side3){
    if (typeof side1 != 'number' || typeof side2 != 'number' || typeof side3 != 'number'){
        return ('All inputs should be numbers');
    }
    else {
        var s = 1/2*(side1 + side2 + side3); // semiperimeter of triangle //
        var triangleArea = (s * (s - side1) * (s - side2) * (s-side3))**(1/2); // Heron's formula //
        return triangleArea;
    };
}

console.log(areaOfTriagle(6, 6, 6) + ' square units');
console.log(areaOfTriagle('9', 3, 4));
