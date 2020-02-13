// Les pourcentages: 
let percentage = 4;
let percentageOf = 19;

function calculatePercentage(){
    let result = percentage / 100 * percentageOf;
    let phrase = `${percentage} % de ${percentageOf} = ${result}`;
    return phrase;
}

document.write(calculatePercentage() + '<br>');


// fractions:
function division(num1,num2) {
    let résultat = num1/num2;
    let phrase2 = `${num1} / ${num2} = ${résultat} <br>`;
    return phrase2;
}

document.write(division(1,25));


// multiplications:
function multiplication(num3,num4) {
    let résultat2 = num3*num4;
    let phrase3 = `${num3} * ${num4} = ${résultat2} <br>`;
    return phrase3;
}

document.write(multiplication(0.04,25));