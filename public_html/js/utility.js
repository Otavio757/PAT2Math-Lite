var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 
			89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 
			229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 
			379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 
			541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 
			691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 
			863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]; 

function replaceAll(string, character, newCharacter) {
    while (string.indexOf(character) !== -1) {
        string = string.replace(character, newCharacter);
    }
    return string;
}

function convertFractionToUserInterface(numerator, denominator) {
    var beforeDenominator = '<span class="math-box"><span class="strut"></span><span class="vstack"><div class="denominator">';
    var afterDenominatorAndBeforeNumerator = '</div><div class="numerator">';
    var afterNumerator = '</div><div class="frac-line-aux"><span class="frac-line"></span></div><span class="baseline-fix"></span></span></span>';
    
    return beforeDenominator + denominator + afterDenominatorAndBeforeNumerator + numerator + afterNumerator;
}

function isIrreducible(numerator, denominator) {
    for (var i = 0; i < primeNumbers.length; i++) {
        if (numerator < primeNumbers[i] || denominator < primeNumbers[i])
            return true;
        
        else if (numerator % primeNumbers[i] === 0 && denominator % primeNumbers[i] === 0)
            return false;
    }
    
    //Retorno especial para o exercício do desafio 9999/99999
    return true;
}

function simplify(fraction, divisor) {
    fraction.numerator /= divisor;
    fraction.denominator /= divisor;
    fraction.isIrreducible = isIrreducible(fraction.numerator, fraction.denominator);
}

function setCookieDays(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function setCookieMinutes(cname,cvalue,exminutes) {
    var d = new Date();
    d.setTime(d.getTime() + (exminutes*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}