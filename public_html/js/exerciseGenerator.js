var veryEasy = new Array();
var easy = new Array();
var medium = new Array();
var hard = new Array();
var challenge = new Array();

function generateVeryEasyExercises() {
    veryEasy[0] = new Fraction(5, 10);
    veryEasy[1] = new Fraction(2, 8);
    veryEasy[2] = new Fraction(4, 6);
    veryEasy[3] = new Fraction(6, 14);
    veryEasy[4] = new Fraction(15, 20);
    veryEasy[5] = new Fraction(10, 30);
    veryEasy[6] = new Fraction(4, 16);
}

function generateEasyExercises() {
    easy[0] = new Fraction(12, 48);
    easy[1] = new Fraction(9, 36);
    easy[2] = new Fraction(50, 100);
    easy[3] = new Fraction(22, 88);
    easy[4] = new Fraction(4, 10);
    easy[5] = new Fraction(4, 50);
    easy[6] = new Fraction(60, 90);
}

function generateMediumExercises() {
    medium[0] = new Fraction(25, 75);
    medium[1] = new Fraction(77, 88);
    medium[2] = new Fraction(55, 245);
    medium[3] = new Fraction(21, 36);
    medium[4] = new Fraction(64, 56);
    medium[5] = new Fraction(98, 116);
    medium[6] = new Fraction(222, 828);
}

function generateHardExercises() {
    hard[0] = new Fraction(144, 156);
    hard[1] = new Fraction(121, 55);
    hard[2] = new Fraction(2448, 204);
    hard[3] = new Fraction(250, 75);
    hard[4] = new Fraction(63, 119);
    hard[5] = new Fraction(483, 1932);
    hard[6] = new Fraction(187, 1870);
}

function generateChallengeExercises() {
    challenge[0] = new Fraction(832, 117);
    challenge[1] = new Fraction(756, 81);
    challenge[2] = new Fraction(216, 72);
    challenge[3] = new Fraction(954, 1260);
    challenge[4] = new Fraction(9999, 99999);
    challenge[5] = new Fraction(2310, 16170);
    challenge[6] = new Fraction(3315, 62985);
}

function generateExerciseVeryEasy() {
    difficultyLevel = "Very Easy";
    var maxPoints = 20;
    
    if (veryEasy.length === 0) 
        generateVeryEasyExercises();
    
    var fraction = removeRandomElement(veryEasy);
    
    solvedExercises++;
    
    return new Exercise(fraction, maxPoints);
}

function generateExerciseEasy() {
    difficultyLevel = "Easy";
    var maxPoints = 40;
    
    if (easy.length === 0)
        generateEasyExercises();
    
    var fraction = removeRandomElement(easy);
    
    solvedExercises++;
    
    return new Exercise(fraction, maxPoints);
}

function generateExerciseMedium() {
    difficultyLevel = "Medium";
    var maxPoints = 70;
    
    if (medium.length === 0)
        generateMediumExercises();
    
    var fraction = removeRandomElement(medium);
    
    solvedExercises++;
    
    return new Exercise(fraction, maxPoints);
}

function generateExerciseHard() {
    difficultyLevel = "Hard";
    var maxPoints = 100;
    
    if (hard.length === 0)
        generateHardExercises();
    
    var fraction = removeRandomElement(hard);
    
    solvedExercises++;
    
    return new Exercise(fraction, maxPoints);
}

function generateExerciseChallenge() {
    difficultyLevel = "Challenge";
    var maxPoints = 200;
    
    if (challenge.length === 0)
        generateChallengeExercises();
    
    var fraction = removeRandomElement(challenge);
    
    solvedExercises++;
    
    return new Exercise(fraction, maxPoints);
}

function removeRandomElement(array) {
    var pos = Math.floor(Math.random() * array.length);
    var element = array[pos];
    
    for (var i = pos; i < array.length; i++) 
        array[i] = array[i+1];
    
    return element;
}