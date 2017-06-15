var simpHints = new Array();
simpHints[0] = "Lembre-se dos critérios de divisibilidade para escolher o próximo número que pode dividir o numerador e o denominador ao mesmo tempo";
simpHints[1] = "Divida o numerador e o denominador pelo número (N)";
simpHints[2] = "O próximo passo da resolução é: <br>(P)";

function getHintSimplification(level, numerator, denominator) {
    var text = simpHints[level];
    
    if (level >= 1) {
        var step = simplifyOneStep(numerator, denominator);
        
        if (level === 1) {
            var n = "" + step.divisor;
            text = replaceAll(text, "(N)", n);
        }
        
        else {
            var p = convertFractionToUserInterface(step.newNumerator, step.newDenominator);
            text = replaceAll(text, "(P)", p);
        }
    }
    
    return new Hint(text, level);
}

//Aproveitar o banco de dicas doPAT2Math Lite Back-End do Eclipse para concluir este arquivo
