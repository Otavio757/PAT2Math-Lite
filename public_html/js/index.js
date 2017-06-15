//document.getElementById("line2").innerHTML = '<ul style="padding-left: 321px;" class="ui-sortable"><li><span class="math-box"><span class="strut"></span><span class="vstack"><div class="denominator"><input type="text" name="fname"></div><div class="numerator-input"><input type="text" name="fname"></div><div class="frac-line-aux-input"><span class="frac-line"></span></div><span class="baseline-fix"></span></span></span>&nbsp&nbsp+&nbsp&nbsp<span class="math-box"><span class="strut"></span><span class="vstack"><div class="denominator">5</div><div class="numerator">2</div><div class="frac-line-aux-input"><span class="frac-line"></span></div><span class="baseline-fix"></span></span></span></li></ul>';
var selectedExercise;
var currentUser;
var currentLine = 3;
var difficultyLevel = "Very Easy";
var solvedExercises = 0;
var requirementsViolated = false;

function createLines() {
	var lines = '<div class="hLineAux" id="line1">.</div>';
	
	for (var i = 2; i <= 15; i++) 
		lines += '<div class="hLine" id="line' + i + '"></div>';
	
	document.getElementById("lines").innerHTML = lines;
}

function showExercise(exercise) {   
    currentLine = 3;
    var cookieName = "user-" + currentUser.name;
    var content = currentUser.score + "," + currentUser.solvedEquations + "," +
                  currentUser.solvedEquationsWithoutErrorsAndHints + "," + currentUser.errors + "," +
                  currentUser.lostPoints + "," + currentUser.requestedHintsTotal + "," +
                  currentUser.requestedHints[0] + "," + currentUser.requestedHints[1] + "," +
                  currentUser.requestedHints[2] + "," + currentUser.requestedHints[3];
    setCookieDays(cookieName, content, 30);
    
    cookieName = "difficultyLevel-" + currentUser.name;
    content = difficultyLevel;
    setCookieDays(cookieName, content, 30);
    
    var html = '<ul style="padding-left: 10%; margin-top: 17px;" class="ui-sortable"><li>';
    var f = exercise.fraction;
    html += convertFractionToUserInterface(f.numerator, f.denominator) + "&nbsp&nbsp=</li></ul>";
    document.getElementById("line2").innerHTML = html;
    showStepInput();    
//    var type = exercise.type;
//    var html = '<ul style="padding-left: 10%; margin-top: 17px;" class="ui-sortable"><li>';
//    
//    if (type === "simplification") {
//        var f = exercise.fraction1;
//        html += convertFractionToUserInterface(f.numerator, f.denominator) + "&nbsp&nbsp=</li></ul>";
//    }
//    
//    else if (type === "mixedNumberToImproperFraction") {
//        var mn = exercise.fraction1;
//    }
//    
//    else if (type === "improperFractionToMixedNumber") {
//        var f = exercise.fraction1;
//    }
//    
//    else {
//        var f1 = exercise.fraction1;
//        var f2 = exercise.fraction2;
//    }
//    
//    document.getElementById("line2").innerHTML = html;
}

function showStep(numerator, denominator, isFinalStep) {
    var html = '<ul style="padding-left: 10%; margin-top: 17px;" class="ui-sortable"><li>';
    
    if (!isFinalStep)
        html += convertFractionToUserInterface(numerator, denominator) + "&nbsp&nbsp=</li></ul>";
    
    else 
        html += convertFractionToUserInterface(numerator, denominator) + "&nbsp&nbsp</li></ul>";
    
    document.getElementById("line" + currentLine).innerHTML = html;
}

function showStepInput() {
    var numerator = '<input type="text" name="fraction-input" id="n-input">';
    var denominator = '<input type="text" name="fraction-input" id="d-input">';
    
    var beforeDenominator = '<span class="math-box" style="padding-left: 10%;"><span class="strut"></span><span class="vstack"><div class="denominator-input">';
    var afterDenominatorAndBeforeNumerator = '</div><div class="numerator-input">';
    var afterNumerator = '</div><div class="frac-line-aux-input"><span class="frac-line"></span></div><span class="baseline-fix"></span></span></span>';
    
    var html = beforeDenominator + denominator + afterDenominatorAndBeforeNumerator + numerator + afterNumerator;
    html += "<div id='checkAnswer' onclick='checkAnswer()'><img src='images/check-answer.png'></div>";
    document.getElementById("line" + currentLine).style.height = "93px";
    document.getElementById("line" + currentLine).innerHTML = html;
    
    if (!selectedExercise.isSolved)
        document.getElementById("line" + (currentLine + 1)).innerHTML = '<button id="hint" class="btn" onclick="showHint()">D i c a</button>';
}

function showMessage(text) {
    document.getElementById("hintText").innerHTML = text;
    document.getElementById("hintText").style.display = "block";
}
function showHint() {
    var hint = getHintSimplification(selectedExercise.levelHint, selectedExercise.currentFraction.numerator, selectedExercise.currentFraction.denominator);
    var text = hint.text;
    var points = hint.points;
    
    currentUser.score -= points;
    currentUser.lostPoints += points;
    currentUser.requestedHintsTotal++;
    currentUser.requestedHints[hint.level]++;
    
    selectedExercise.availablePoints -= points;
    selectedExercise.requestedHints++;
    
    if (selectedExercise.levelHint < 2)
        selectedExercise.levelHint++;
    
    document.getElementById("amountPoints").innerHTML = currentUser.score + " pontos";
   
    showMessage(text);
}

function showErrorFeedback(feedback) {
    var text = feedback.text;
    
    if (text.indexOf("numerador e no denominador") !== -1) {
        document.getElementById("n-input").style.border = "1px solid red";
        document.getElementById("d-input").style.border = "1px solid red";
    }
    
    else if(text.indexOf("numerador") !== -1) 
        document.getElementById("n-input").style.border = "1px solid red";
   
    else 
        document.getElementById("d-input").style.border = "1px solid red";
    
    text += "<br>*Dica: " + feedback.hint.text;
    
    if (selectedExercise.levelHint < 2)
        selectedExercise.levelHint++;
    
    document.getElementById("amountPoints").innerHTML = 

    showMessage(text);
}

function checkAnswer() {
    document.getElementById("hintText").style.display = "none";
    var numerator = document.getElementById("n-input").value;
    var denominator = document.getElementById("d-input").value;
    var feedback = correctsSimplification(selectedExercise.currentFraction.numerator, selectedExercise.currentFraction.denominator, numerator, denominator, selectedExercise.levelHint);
    
    if (feedback.isCorrectAnswer) {
        selectedExercise.currentFraction = new Fraction(numerator, denominator);
           
        if (feedback.isFinalAnswer) {
            selectedExercise.isSolved = true;
            currentUser.score += selectedExercise.availablePoints;
            currentUser.solvedEquations++;
            showStep(numerator, denominator, true);
            document.getElementById("line" + currentLine).style.height = "86px";
            document.getElementById("line" + currentLine).innerHTML += "<div class='correct'><img src='images/correct.png'></div>";
            document.getElementById("line" + (currentLine + 1)).innerHTML = "<div class='completed-exercise'><img src='images/completed-exercise.png' height='112px' width='112px'></div>";
            
            if (selectedExercise.errors === 0 && selectedExercise.requestedHints === 0)
                currentUser.solvedEquationsWithoutErrorsAndHints++;
            
            if (solvedExercises < 10) {
                if (solvedExercises === 5) {
                    if (screen.width < 610)
                        theRoadSoFar(screen.width - 10);

                    else
                        theRoadSoFar(600);
                }
                
                else {
                    setTimeout(function(){document.getElementById("line" + (currentLine + 2)).innerHTML = "<div class='next-exercise' onclick='nextExercise();'><img src='images/next-exercise.png' width='200px' height='200px'></div>"}, 1000);
                }
            } 
            
            else {
                if (screen.width < 610)
                    finalResults(screen.width - 10);

                else
                    finalResults(600);
            }
            
            var cookieName = "user-" + currentUser.name;
            var content = currentUser.score + "," + currentUser.solvedEquations + "," +
                          currentUser.solvedEquationsWithoutErrorsAndHints + "," + currentUser.errors + ","
                          currentUser.lostPoints + "," + currentUser.requestedHintsTotal + "," +
                          currentUser.requestedHints[0] + "," + currentUser.requestedHints[1] + "," +
                          currentUser.requestedHints[2] + "," + currentUser.requestedHints[3];
            setCookieDays(cookieName, content, 30);        

        }
        
        else {
            if (selectedExercise.availablePoints > 10) {
                currentUser.score += 10;
                selectedExercise.availablePoints -= 10;            
            }
            
            showStep(numerator, denominator, false);
            selectedExercise.levelHint = 0;        
            document.getElementById("line" + currentLine).style.height = "86px";
            document.getElementById("line" + currentLine).innerHTML += "<div class='correct'><img src='images/correct.png'></div>";
            currentLine++;
            showStepInput();
//            document.getElementById("n-input").style.border = "";         
        }
        
        
    }
    
    else {
        currentUser.score -= 5;
        currentUser.lostPoints += 5;
        currentUser.errors++;
        selectedExercise.availablePoints -= 5;
        selectedExercise.errors++;
        showErrorFeedback(feedback);  
    }
    
    document.getElementById("amountPoints").innerHTML = currentUser.score + " pontos";
}


function start(name) {
    //Verificação que ajusta o post-it e o botão da lupa para telas menores
if (screen.width < 742) {
    if (screen.width <= 410) {
        document.getElementById("checkAnswer").style.marginLeft = (screen.width - 125) + "px";
        document.getElementById("note").style.marginLeft = (screen.width - 155) + "px";
    }
    
    else {
        document.getElementById("checkAnswer").style.marginLeft = (screen.width - 140 - (screen.width - 410) / 100) + "px";
        document.getElementById("note").style.marginLeft = (screen.width - 155 - (screen.width - 410) / 100) + "px";
    }
}

else if (screen.width > 1142) {
    if (screen.width < 1530)
        document.getElementById("note").style.marginLeft = "74%";
    
    else
        document.getElementById("note").style.marginLeft = "66%";
}

    currentUser = new User(name);
    
    var cookieName = "user-" + name;
    var user = getCookie(cookieName);
    
    if (user !== "") {
        var data = user.split(",");
        currentUser.score = parseInt(data[0]);
        currentUser.solvedEquations = parseInt(data[1]);
        currentUser.solvedEquationsWithoutErrorsAndHints = parseInt(data[2]);
        currentUser.errors = parseInt(data[3]);
        currentUser.lostPoints = parseInt(data[4]);
        currentUser.requestedHintsTotal = parseInt(data[5]);
        currentUser.requestedHints[0] = parseInt(data[6]);
        currentUser.requestedHints[1] = parseInt(data[7]);
        currentUser.requestedHints[2] = parseInt(data[8]);
        currentUser.requestedHints[3] = parseInt(data[9]);
        
        cookieName = "campaign-" + name;
        var statusCampaign = getCookie(cookieName);
        
        cookieName = "difficultyLevel-" + name;
        difficultyLevel = getCookie(cookieName);
        
        if (statusCampaign === "opened") {
            cookieName = "solvedExercises-" + name;
            solvedExercises = parseInt(getCookie(cookieName));
        }
    }
    
    startCampaign();
    
}

createLines();

document.onkeypress = function(event) {
    var input = document.getElementById("n-input");
    var key = event.keyCode;
    
    if (input === document.activeElement) {
        var contentInput = input.value;
        var length = contentInput.length;
        
        if (length >= 3) {          
            if (key !== 8 && key !== 46)
                input.style.width = (50 + (length - 2) * 15) + "px";
            
            else
                input.style.width = (50 + (length - 3) * 15) + "px";
        }
    }
   
    else {
        input = document.getElementById("d-input");      
        
        if (input === document.activeElement) {
            var contentInput = input.value;
            var length = contentInput.length;
        
            if (key !== 8 && key !== 46)
                input.style.width = (50 + (length - 2) * 15) + "px";
            
            else
                input.style.width = (50 + (length - 3) * 15) + "px";
        }
    }
};


if (screen.width < 610)
    userName(screen.width - 10);

else
    userName(600);


