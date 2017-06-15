function startCampaign() {
    var cookieName = "campaign-" + currentUser.name; 
    setCookieDays(cookieName, "opened", 30);
    
    if (solvedExercises === 0) {
        if (currentUser.score !== 0)
            resetProgress();    
    }
    
    if (difficultyLevel === "Very Easy")
        selectedExercise = generateExerciseVeryEasy();

    else if (difficultyLevel === "Easy")
        selectedExercise = generateExerciseEasy();

    else if (difficultyLevel === "Medium")
        selectedExercise = generateExerciseMedium();

    else if (difficultyLevel === "Hard")
        selectedExercise = generateExerciseHard();

    else
        selectedExercise = generateExerciseChallenge();

    showExercise(selectedExercise);
}

function nextExercise() {
    for (var i = currentLine + 2; i >= 3; i--) 
        document.getElementById("line" + i).innerHTML = "";
    
    var errors = selectedExercise.errors;
    var requestedHints = selectedExercise.requestedHints;
    
    if (difficultyLevel === "Very Easy") {
        if (errors === 0 && requestedHints === 0) {
            selectedExercise = generateExerciseEasy();
            requirementsViolated = false;
        }
        
        else {
            selectedExercise = generateExerciseVeryEasy(); 
            requirementsViolated = true;
        }
    }
    
    else if (difficultyLevel === "Easy") {
        if (errors <= 1 && requestedHints <= 1) {
            selectedExercise = generateExerciseMedium();
            requirementsViolated = false;
        }
        
        else {
            if (requirementsViolated <= 1) {
                selectedExercise = generateExerciseEasy();
                requirementsViolated = true;
            }
            
            else {
                selectedExercise = generateExerciseVeryEasy();
                requirementsViolated = false;
            }         
        }
    }
    
    else if (difficultyLevel === "Medium") {
        if (errors <= 2 && requestedHints <= 3) {
            selectedExercise = generateExerciseHard();
            requirementsViolated = false;
        }
        
        else {
            if (requirementsViolated <= 1) {
                selectedExercise = generateExerciseMedium();
                requirementsViolated = true;
            }
            
            else {
                selectedExercise = generateExerciseEasy();
                requirementsViolated = false;
            }         
        }
    }
    
    else if (difficultyLevel === "Hard") {
        if (errors <= 4 && requestedHints <= 6) {
            selectedExercise = generateExerciseChallenge();
            requirementsViolated = false;
        }
        
        else {
            if (requirementsViolated <= 1) {
                selectedExercise = generateExerciseHard();
                requirementsViolated = true;
            }
            
            else {
                selectedExercise = generateExerciseMedium();
                requirementsViolated = false;
            }         
        }
    }
    
    else {
        if (errors === 0 && requestedHints === 0) {
            selectedExercise = generateExerciseChallenge();
            requirementsViolated = false;
        }
        
        else {
            selectedExercise = generateExerciseHard(); 
            requirementsViolated = false;
        }
    }
    var cookieName = "difficultyLevel-" + currentUser.name;
    setCookieDays(cookieName, difficultyLevel, 30);
    
    showExercise(selectedExercise);
}

