var nr1 = 10;
var nr2 = 4;

function calculer(nr1,nr2) {
    var résultat = nr1 * nr2;
    return résultat + '<br>';
}

document.write(calculer(5,6));

var voiture = 
{
    'intérieur'   : 
    {
        'siège'   : 'cuir',
        'couleur' : 'noir'
    },
    'extérieur'   :
    {
        'jante'   : 'alu',
        'couleur' : 'grise'
    }
}

document.write(voiture.intérieur.couleur + '<br>');

var véhicule = ['vélo','voiture','train','métro'];

document.write(véhicule[0] + '<br>');

véhicule.push('tramway');

document.write(véhicule[4] + '<br>');