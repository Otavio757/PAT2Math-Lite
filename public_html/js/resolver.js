var stepsFraction = new Array();
var stepsMMC = new Array();

function addition(f1, f2) {
    
}

function subtraction(f1, f2) {
    
}

function multiplication(f1, f2) {
    
}

function division(f1, f2) {
    
}

function mmc(n1, n2) {
    
}

//Retorna um array com o passo-a-passo da simplificação (com objetos do tipo StepSimplification
//Se a fração for irredutível, retorna null
function simplify(numerator, denominator) {
    if (isIrreducible(numerator, denominator))
        return null;
    
    var result = new Array();
    var n = numerator;
    var d = denominator;
    var currentPrimeNumber = 2;
    var i = 1;
    
    do {
        if (n % currentPrimeNumber === 0 && d % currentPrimeNumber === 0) {
            var nPrev = n;
            var dPrev = d;
            n /= currentPrimeNumber;
            d /= currentPrimeNumber;
            result.push(new StepSimplification(nPrev, dPrev, n, d, currentPrimeNumber));
        }
        
        else {
            currentPrimeNumber = primeNumbers[i];
            i++;
        }
    } while (currentPrimeNumber <= n && currentPrimeNumber <= d);
    
    return result;
}

//Retorna somente o próximo passo da simplificação
function simplifyOneStep(numerator, denominator) {
    if (isIrreducible(numerator, denominator))
        return null;
    
    var n = numerator;
    var d = denominator;
    
    for (var i = 0; i < primeNumbers.length; i++) {
        if (n % primeNumbers[i] === 0 && d % primeNumbers[i] === 0) {
            var nPrev = n;
            var dPrev = d;
            n /= primeNumbers[i];
            d /= primeNumbers[i];
            return new StepSimplification(nPrev, dPrev, n, d, primeNumbers[i]);
        }
    }
}

function convertToMixedNumber() {
    
}

function convertToImproperFraction() {
    
}