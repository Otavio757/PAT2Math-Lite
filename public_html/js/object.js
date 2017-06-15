function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
    this.stepsSimplification = new Array();
    this.isIrreducible = isIrreducible(numerator, denominator);
    this.toString = numerator + "/" + denominator;
}

function MixedNumber(integerPart, fractionalPart) {
    this.integerPart = integerPart;
    this.fractionalPart = fractionalPart;
    this.stepsOfConvertToImproperFraction = new Array();
    this.toString = integerPart + "(" + fractionalPart.toString + ")";
}

function Exercise(fraction, maxPoints) {
    this.fraction = fraction;
    this.currentFraction = fraction;
    this.maxPoints = maxPoints;
    this.availablePoints = maxPoints;
    this.errors = 0;
    this.requestedHints = 0;
    this.levelHint = 0;
    this.isSolved = false;
}

//function Exercise(fraction1, fraction2, maxPoints, type) {
//    this.fraction1 = fraction1;
//    this.fraction2 = fraction2;
//    this.currentFraction = null;
//    this.maxPoints = maxPoints;
//    this.lostPoints = 0;
//    this.levelHint = 0;
//    this.isSolved = false;
//    //Tipos disponíveis: addition, subtraction, multiplication, division, simplification, mixedNumberToImproperFraction e improperFractionToMixedNumber
//    this.type = type;
//}

function Hint(text, level) {
    this.text = text;
    this.level = level;
    this.points = (level + 1) * 2;
}

function User(name) {
    this.name = name;
    this.score = 0;
    this.solvedEquations = 0;
    this.solvedEquationsWithoutErrorsAndHints = 0;
    this.errors = 0;
    this.lostPoints = 0;
    this.requestedHintsTotal = 0;
    this.requestedHints = new Array();
    //Dicas de nível 1
    this.requestedHints[0] = 0;
    //Dicas de nível 2
    this.requestedHints[1] = 0;
    //Dicas de nível 3
    this.requestedHints[2] = 0;
    //Dicas de nível 4
    this.requestedHints[3] = 0;
}

function Hint(text, level) {
    this.text = text;
    this.level = level;
    this.points = (level + 1) * 2;
}

function Feedback(isCorrectAnswer, isFinalAnswer, hint, text) {
    this.isCorrectAnswer = isCorrectAnswer;
    this.isFinalAnswer = isFinalAnswer;
    this.hint = hint;
    this.text = text;
}

function StepSimplification(numerator, denominator, newNumerator, newDenominator, divisor) {
    this.numerator = numerator;
    this.denominator = denominator;
    this.newNumerator = newNumerator;
    this.newDenominator = newDenominator;
    this.divisor = divisor;
}

function stepMMC (number1, number2, divisor) {
    this.number1 = number1;
    this.number2 = number2;
    this.divisor = divisor;
}