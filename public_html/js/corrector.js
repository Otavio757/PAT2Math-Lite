//Aproveitar o código do PAT2Math Lite Simplification para o método que corrige a simplificação de frações, que não exige o divisor utilizado
function correctsSimplification(numerator, denominator, numeratorAnswer, denominatorAnswer, levelHint) {
    var hint = getHintSimplification(levelHint, numerator, denominator);
    
    var divisorNumerator = numerator / numeratorAnswer;		
    var divisorDenominator = denominator / denominatorAnswer;
		
    if (divisorNumerator % 1 === 0 && divisorDenominator % 1 === 0) {
	if (divisorNumerator === divisorDenominator) {
            if (isIrreducible(numeratorAnswer, denominatorAnswer))
                return new Feedback(true, true, null, "Resposta correta");
            
            else
                return new Feedback(true, false, null, "Resposta correta");
        }
        
        else
            return new Feedback(false, false, hint, "Você utilizou divisores diferentes para o numerador e o denominador. Lembre-se que o número divisor deve ser o mesmo para ambos");
				
    }
		
    else if (divisorNumerator % 1 !== 0 && divisorDenominator % 1 !== 0) 
        return new Feedback(false, false, hint, "Você errou o cálculo da divisão no numerador e no denominador");
    
    else if (divisorNumerator % 1 !== 0) 
        return new Feedback(false, false, hint, "Você errou o cálculo da divisão no numerador");
     
    else
        return new Feedback(false, false, hint, "Você errou o cálculo da divisão no denominador");
}