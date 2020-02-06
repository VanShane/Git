// Les pourcentages: 
var percentage = 3;
var percentageOf = 19;

function calculatePercentage(){
    var result = percentage / 100 * percentageOf;
    var phrase = percentage + '% de ' + percentageOf + " = " + result;
    return phrase;
}

document.write(calculatePercentage() + '<br>');


// fractions:
function division(num1,num2) {
    var résultat = num1/num2;
    var phrase2 = num1 + ' / ' + num2 + ' = ' + résultat + '<br>';
    return phrase2;
}

document.write(division(1,25));


// multiplications:
function multiplication(num3,num4) {
    var résultat2 = num3*num4;
    var phrase3 = num3 + ' * ' + num4 + ' = ' + résultat2 + '<br>';
    return phrase3;
}

document.write(multiplication(0.04,25));