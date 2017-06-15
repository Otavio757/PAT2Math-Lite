function userName(width) {
    $.guider({
            name: "user-name",
            title : "Bem-vindo! Digite o seu nome:",
            description : '<input type="text" name="name-input" id="un-input" style="width: 200px;">',
            overlay : "dark",
            width : width,
            alignButtons : "center",
            buttons : {
            	Iniciar: {
                	click : function() {start(document.getElementById("un-input").value); $.guider({}).hideAll();},
			className : "primary"
       		    }
		      }
		}).show();
}

function status(width) {    
        $.guider({
            name: "status",
            title : "Resultados parciais",
            description : "Equações resolvidas: " + currentUser.solvedEquations +
                          "<br>Equações resolvidas perfeitamente: " + currentUser.solvedEquationsWithoutErrorsAndHints + 
                          "<br>Erros: " + currentUser.errors + 
                          "<br>Pontuação: " + currentUser.score + 
                          "<br>Pontos perdidos: " + currentUser.lostPoints + 
                          "<br>Solicitações de dicas:" +
                          "<br>Nível 1: " + currentUser.requestedHints[0] +
                          "<br>Nível 2: " + currentUser.requestedHints[1] +
                          "<br>Nível 3: " + currentUser.requestedHints[2],
            overlay : "dark",
            width : width,
            alignButtons : "center",
            buttons : {
            	OK: {
                	click : true,
			className : "primary"
       		    }
		      }
		}).show();
}

function theRoadSoFar(width) {    
        $.guider({
            name: "the-road-so-far",
            title : "A estrada até aqui",
            description : "Equações resolvidas: " + currentUser.solvedEquations +
                          "<br>Equações resolvidas perfeitamente: " + currentUser.solvedEquationsWithoutErrorsAndHints + 
                          "<br>Erros: " + currentUser.errors + 
                          "<br>Pontuação: " + currentUser.score + 
                          "<br>Pontos perdidos: " + currentUser.lostPoints + 
                          "<br>Solicitações de dicas:" +
                          "<br>Nível 1: " + currentUser.requestedHints[0] +
                          "<br>Nível 2: " + currentUser.requestedHints[1] +
                          "<br>Nível 3: " + currentUser.requestedHints[2],
            overlay : "dark",
            width : width,
            alignButtons : "center",
            buttons : {
            	Continuar: {
                	click : function() {nextExercise(); $.guider({}).hideAll();},
			className : "primary"
       		    }
		      }
		}).show();
}

function finalResults(width) {    
        $.guider({
            name: "final-results",
            title : "Resultados finais",
            onShow : function() {var cookieName = "campaign-" + currentUser.name; setCookieDays(cookieName, "completed", 30);},
            description : "Equações resolvidas: " + currentUser.solvedEquations +
                          "<br>Equações resolvidas perfeitamente: " + currentUser.solvedEquationWithoutErrorsAndHints + 
                          "<br>Erros: " + currentUser.errors + 
                          "<br>Pontuação: " + currentUser.score + 
                          "<br>Pontos perdidos: " + currentUser.lostPoints + 
                          "<br>Solicitações de dicas:" +
                          "<br>Nível 1: " + currentUser.requestedHints[0] +
                          "<br>Nível 2: " + currentUser.requestedHints[1] +
                          "<br>Nível 3: " + currentUser.requestedHints[2],
            overlay : "dark",
            width : width,
            alignButtons : "center",
            buttons : {
            	Finalizar: {
                	click : function() {window.location.reload();},
			className : "primary"
       		    }
		      }
		}).show();
}

function resetProgress(width) {
    $.guider({
            name: "score-question",
            title : "Verificamos que você já utilizou o PAT2Math Lite anteriormente",
            description : 'Você deseja redefinir o seu progresso antes de utilizar o aplicativo novamente?',
            overlay : "dark",
            width : width,
            alignButtons : "center",
            buttons : {
            	Sim: {
                    click : function() {currentUset = new User(currentUser.name); $.guider({}).hideAll();},
                    className : "primary"
       		    },
                Não: {
                    click : function() {$.guider({}).hideAll();}
                }
		      }
		}).show();
}