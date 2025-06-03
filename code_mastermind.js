var x = [];
var ColorOption = false;
let displayEnd = document.getElementById("AllColoursAnswers");
var StepsOption = false;
var stepsDone = 0;
var SuccessGame = false;
var numberOfSeconds = 0;
var TimeOption = false;

function StartColour() {
    ColorOption = true;
    option_indicator = document.getElementById("optionIndicator");
    option_indicator.innerHTML = "You chose the colour option.";
    startGame();
}
function StartNumber() {
    option_indicator = document.getElementById("optionIndicator");
    option_indicator.innerHTML = "You chose the number option.";
    startGame();
}

function getNumberOnce() {
    for (let i=0; i<5; i++) {
        let number = Math.floor(Math.random() * 10);
        if (x.includes(number)) {
            i--
        }
        else {
            x.push(number)
        }
    }
}

function getNumberTwice() {
    for (let i=0; i<5; i++) {
        let number = Math.floor(Math.random() * 10);
        x.push(number)
    }
}

answer = ["X", "X", "X", "X", "X"]
function MasterMind() {
    var guessList;
    var element = document.getElementById('AllColoursAnswers');
    if (ColorOption) {
        document.getElementById("colorsID").hidden = false;
        let guessColor = [];
        var pElement = document.createElement("div");
        element.appendChild(pElement);
            if (guessColor.length != 5) {
                document.getElementById("circle0").addEventListener('click', 
                    function() {
                        guessColor.push(0);
                        let NumberInColour0 = document.createElement("span");
                        NumberInColour0.classList.add("number0", "circle");
                        let MakeCircle0 = document.createTextNode("00");
                        NumberInColour0.appendChild(MakeCircle0); 
                        pElement.appendChild(NumberInColour0);
                        ColorSequence();
                });
                document.getElementById("circle1").addEventListener('click', 
                    function() {
                        guessColor.push(1);
                        let NumberInColour1 = document.createElement("span");
                        NumberInColour1.classList.add("number1", "circle");
                        let MakeCircle1 = document.createTextNode("00");
                        NumberInColour1.appendChild(MakeCircle1); 
                        pElement.appendChild(NumberInColour1);
                        ColorSequence();
                });
                document.getElementById("circle2").addEventListener('click', 
                    function() {
                        guessColor.push(2);
                        let NumberInColour2 = document.createElement("span");
                        NumberInColour2.classList.add("number2", "circle");
                        let MakeCircle2 = document.createTextNode("00");
                        NumberInColour2.appendChild(MakeCircle2); 
                        pElement.appendChild(NumberInColour2);
                        ColorSequence();
                });
                document.getElementById("circle3").addEventListener('click', 
                    function() {
                        guessColor.push(3);
                        let NumberInColour3 = document.createElement("span");
                        NumberInColour3.classList.add("number3", "circle");
                        let MakeCircle3 = document.createTextNode("00");
                        NumberInColour3.appendChild(MakeCircle3); 
                        pElement.appendChild(NumberInColour3);
                        ColorSequence();
                });
                document.getElementById("circle4").addEventListener('click', 
                    function() {
                        guessColor.push(4);
                        let NumberInColour4 = document.createElement("span");
                        NumberInColour4.classList.add("number4", "circle");
                        let MakeCircle4 = document.createTextNode("00");
                        NumberInColour4.appendChild(MakeCircle4); 
                        pElement.appendChild(NumberInColour4);
                        ColorSequence();
                });
                document.getElementById("circle5").addEventListener('click', 
                    function() {
                        guessColor.push(5);
                        let NumberInColour5 = document.createElement("span");
                        NumberInColour5.classList.add("number5", "circle");
                        let MakeCircle5 = document.createTextNode("00");
                        NumberInColour5.appendChild(MakeCircle5); 
                        pElement.appendChild(NumberInColour5);
                        ColorSequence();
                });
                document.getElementById("circle6").addEventListener('click', 
                    function() {
                        guessColor.push(6);
                        let NumberInColour6 = document.createElement("span");
                        NumberInColour6.classList.add("number6", "circle");
                        let MakeCircle6 = document.createTextNode("00");
                        NumberInColour6.appendChild(MakeCircle6); 
                        pElement.appendChild(NumberInColour6);
                        ColorSequence();
                });
                document.getElementById("circle7").addEventListener('click', 
                    function() {
                        guessColor.push(7);
                        let NumberInColour7 = document.createElement("span");
                        NumberInColour7.classList.add("number7", "circle");
                        let MakeCircle7 = document.createTextNode("00");
                        NumberInColour7.appendChild(MakeCircle7); 
                        pElement.appendChild(NumberInColour7);
                        ColorSequence();
                });
                document.getElementById("circle8").addEventListener('click', 
                    function() {
                        guessColor.push(8);
                        let NumberInColour8 = document.createElement("span");
                        NumberInColour8.classList.add("number8", "circle");
                        let MakeCircle8 = document.createTextNode("00");
                        NumberInColour8.appendChild(MakeCircle8); 
                        pElement.appendChild(NumberInColour8);
                        ColorSequence();
                });
                document.getElementById("circle9").addEventListener('click', 
                    function() {
                        guessColor.push(9);
                        let NumberInColour9 = document.createElement("span");
                        NumberInColour9.classList.add("number9", "circle");
                        let MakeCircle9 = document.createTextNode("00");
                        NumberInColour9.appendChild(MakeCircle9); 
                        pElement.appendChild(NumberInColour9);
                        ColorSequence();
                });
            }
            function ColorSequence() {
                if (guessColor.length == 5) {
                    guessList = guessColor;
                    guessColor = [];
                    SequenceChecking();
                }
            }
    }
    else {
        var guess = document.getElementById("sequenceGame").value;
        if (guess.length != 0) {
            guessList = guess.split('');
            for (let nbrGuess = 0; nbrGuess < guessList.length; nbrGuess++) {
                guessList[nbrGuess] = parseInt(guessList[nbrGuess]);
            }
            SequenceChecking();
        }
    }


    function SequenceChecking() {
        let g = 0;
        guessList.forEach(Check);
        function Check() {
            let y_index = g;
            let y = guessList[y_index];
            if (y == x[y_index]) {
                answer[y_index] = y;
            }
            else if (y == x[0] || y == x[1] || y == x[2] || y == x[3] || y == x[4] && y !== x[y_index]) {
                answer[y_index] = "*";
            }
            else {
                answer[y_index] = "X";
            }
            g +=1;
            }
            if (ColorOption) {
            let answerBoxColour = document.createElement("span");
            pElement.appendChild(answerBoxColour);
            for (let checkColor = 0; checkColor < 5; checkColor++) {
                if (answer[checkColor] == '*') {
                    let CorrectButWrong = document.createElement("span");
                    CorrectButWrong.classList.add("almost", "circle");
                    let answerCircleAlmost = document.createTextNode("00");
                    CorrectButWrong.appendChild(answerCircleAlmost);
                    answerBoxColour.prepend(CorrectButWrong);
                }
                else if (answer[checkColor] == 0 || answer[checkColor] == 1 || answer[checkColor] == 2 || answer[checkColor] == 3 || answer[checkColor] == 4 || answer[checkColor] == 5 || answer[checkColor] == 6 || answer[checkColor] == 7 || answer[checkColor] == 8 || answer[checkColor] == 9) {
                    let CorrectButWrong = document.createElement("span");
                    CorrectButWrong.classList.add("correct", "circle");
                    let answerCircleAlmost = document.createTextNode("00");
                    CorrectButWrong.appendChild(answerCircleAlmost);
                    answerBoxColour.appendChild(CorrectButWrong);
                }
            }
            answerBoxColour.prepend(" : ");
            let SpaceInBetween = document.createElement("br");
            pElement.appendChild(SpaceInBetween);
            }
            else {
                let answerBox = document.createElement("p");
                answerBox.classList.add("text");
                element.appendChild(answerBox);
                for (let checkColor = 0; checkColor < 5; checkColor++) {
                    if (answer[checkColor] == '*') {
                        let CorrectButWrong = document.createElement("span");
                        CorrectButWrong.classList.add("almost", "circle");
                        let answerCircleAlmost = document.createTextNode("00");
                        CorrectButWrong.appendChild(answerCircleAlmost);
                        answerBox.prepend(CorrectButWrong);
                    }
                    else if (answer[checkColor] == 0 || answer[checkColor] == 1 || answer[checkColor] == 2 || answer[checkColor] == 3 || answer[checkColor] == 4 || answer[checkColor] == 5 || answer[checkColor] == 6 || answer[checkColor] == 7 || answer[checkColor] == 8 || answer[checkColor] == 9) {
                        let CorrectButWrong = document.createElement("span");
                        CorrectButWrong.classList.add("correct", "circle");
                        let answerCircleAlmost = document.createTextNode("00");
                        CorrectButWrong.appendChild(answerCircleAlmost);
                        answerBox.appendChild(CorrectButWrong);
                    }
                }
                answerBox.prepend(guess + " : ");
            }
            if (JSON.stringify(guessList) === JSON.stringify(x)) {
                    SuccessGame = true;
                    doneSuccess();
            }
            else if (StepsOption) {
                stepsDone += 1;
                var steps_request = document.getElementById("stepsNeeded").value;
                document.getElementById("inputSteps").hidden = true;
                let stepsLeft = steps_request - stepsDone;
                document.getElementById("timeLeft").innerHTML = stepsLeft;
                if (stepsLeft == 0) {
                    done();
                }
            }
        document.querySelector('#sequenceGame').value = '';

    }
}

function howLong() {
    document.getElementById("timer").hidden = false;
    let time_request = document.getElementById("timeNeeded").value;
    let distance = time_request * 1000;
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("timeLeft").innerHTML = minutes + "m " + seconds + "s ";
    document.getElementById("inputTime").hidden = true;
    if (ColorOption) {
            MasterMind();
        }
        else {
            document.getElementById("inputGame").hidden = false;
        }
    function countDown() {
        distance -= 1000;
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        numberOfSeconds += 1;
        document.getElementById("timeLeft").innerHTML = minutes + "m " + seconds + "s ";
        if (distance == 0) {
            clearInterval(CountDownInterval);
            done();
        }
        else if (SuccessGame) {
            clearInterval(CountDownInterval);
        };
    }
    CountDownInterval = window.setInterval(countDown, 1000);
}
function howManyTimes() {
    document.getElementById("timer").hidden = false;
    MessageStartGuess.innerHTML = "Start to guess!";
    document.getElementById("timerH3").innerHTML = "Number of steps left:";
    let startSteps = document.getElementById("stepsNeeded").value;
    document.getElementById("timeLeft").innerHTML = startSteps;
    if (ColorOption) {
            MasterMind();
        }
        else {
            document.getElementById("inputGame").hidden = false;
        }
}

function done() {
    document.getElementById("inputGame").hidden = true;
    document.getElementById("colorsID").hidden = true;
    let failMessage = document.createElement("p");
    failMessage.classList.add("failColour");
    let answerDisplay = document.createElement("span");
    let answerMessage = document.createElement("p");
    answerMessage.classList.add("smallerFont");
    answerMessage.innerHTML = ("The sequence was: ");
    if (!StepsOption) {
        clearInterval(CountDownInterval);
        failMessage.innerHTML = ("Time's up.");
    }
    else {
        failMessage.innerHTML = ("You used all your steps");
    }
    failMessage.appendChild(answerMessage);
    if (ColorOption) {
        for (let answerColor = 0; answerColor < 5; answerColor++) {
            if (x[answerColor] == 0) {
                let NumberInColour0 = document.createElement("span");
                NumberInColour0.classList.add("number0", "circle");
                let MakeCircle0 = document.createTextNode("00");
                NumberInColour0.appendChild(MakeCircle0); 
                answerDisplay.appendChild(NumberInColour0);
            }
            else if (x[answerColor] == 1) {
                let NumberInColour1 = document.createElement("span");
                NumberInColour1.classList.add("number1", "circle");
                let MakeCircle1 = document.createTextNode("00");
                NumberInColour1.appendChild(MakeCircle1); 
                answerDisplay.appendChild(NumberInColour1);
            }
            else if (x[answerColor] == 2) {
                let NumberInColour2 = document.createElement("span");
                NumberInColour2.classList.add("number2", "circle");
                let MakeCircle2 = document.createTextNode("00");
                NumberInColour2.appendChild(MakeCircle2); 
                answerDisplay.appendChild(NumberInColour2);
            }
            else if (x[answerColor] == 3) {
                let NumberInColour3 = document.createElement("span");
                NumberInColour3.classList.add("number3", "circle");
                let MakeCircle3 = document.createTextNode("00");
                NumberInColour3.appendChild(MakeCircle3); 
                answerDisplay.appendChild(NumberInColour3);
            }
            else if (x[answerColor] == 4) {
                let NumberInColour4 = document.createElement("span");
                NumberInColour4.classList.add("number4", "circle");
                let MakeCircle4 = document.createTextNode("00");
                NumberInColour4.appendChild(MakeCircle4); 
                answerDisplay.appendChild(NumberInColour4);
            }
            else if (x[answerColor] == 5) {
                let NumberInColour5 = document.createElement("span");
                NumberInColour5.classList.add("number5", "circle");
                let MakeCircle5 = document.createTextNode("00");
                NumberInColour5.appendChild(MakeCircle5); 
                answerDisplay.appendChild(NumberInColour5);
            }
            else if (x[answerColor] == 6) {
                let NumberInColour6 = document.createElement("span");
                NumberInColour6.classList.add("number6", "circle");
                let MakeCircle6 = document.createTextNode("00");
                NumberInColour6.appendChild(MakeCircle6); 
                answerDisplay.appendChild(NumberInColour6);
            }
            else if (x[answerColor] == 7) {
                let NumberInColour7 = document.createElement("span");
                NumberInColour7.classList.add("number7", "circle");
                let MakeCircle7 = document.createTextNode("00");
                NumberInColour7.appendChild(MakeCircle7); 
                answerDisplay.appendChild(NumberInColour7);
            }
            else if (x[answerColor] == 8) {
                let NumberInColour8 = document.createElement("span");
                NumberInColour8.classList.add("number8", "circle");
                let MakeCircle8 = document.createTextNode("00");
                NumberInColour8.appendChild(MakeCircle8); 
                answerDisplay.appendChild(NumberInColour8);
            }
            else if (x[answerColor] == 9) {
                let NumberInColour9 = document.createElement("span");
                NumberInColour9.classList.add("number9", "circle");
                let MakeCircle9 = document.createTextNode("00");
                NumberInColour9.appendChild(MakeCircle9); 
                answerDisplay.appendChild(NumberInColour9);
            }
    }
        failMessage.appendChild(answerDisplay);
    }
    else {
        let xDisplay = document.createElement("p");
        xDisplay.innerHTML = (x);
        xDisplay.classList.add("smallerFont");
        failMessage.appendChild(xDisplay);
    }
    let displayEnd = document.getElementById("AllColoursAnswers");
    displayEnd.appendChild(failMessage);
}

function doneSuccess() {
    document.getElementById("inputGame").hidden = true;
    document.getElementById("colorsID").hidden = true;
    let successMessage = document.createElement("p");
    let displayEnd = document.getElementById("AllColoursAnswers");
    successMessage.classList.add("sucessColour");
    if (StepsOption) {
        stepsDone += 1;
        successMessage.innerHTML = "You did it!";
        let specificDetail = document.createElement("p");
        specificDetail.classList.add("specific");
        specificDetail.innerHTML = ("You used " + stepsDone + " steps.");
        successMessage.innerHTML = "You did it!";
        displayEnd.appendChild(successMessage);
        displayEnd.appendChild(specificDetail);
    }
    else if (!StepsOption && TimeOption) {
        clearInterval(CountDownInterval);
        numberOfSeconds *= 1000;
        let Newminutes = Math.floor((numberOfSeconds % (1000 * 60 * 60)) / (1000 * 60));
        let Newseconds = Math.floor((numberOfSeconds % (1000 * 60)) / 1000);
        let specificDetail = document.createElement("p");
        specificDetail.classList.add("specific");
        specificDetail.innerHTML = ("You took " + Newminutes + "min " + Newseconds + "s.");
        successMessage.innerHTML = "You did it!";
        displayEnd.appendChild(successMessage);
        displayEnd.appendChild(specificDetail);
    }
    else {
        successMessage.innerHTML = "You did it!";
        displayEnd.appendChild(successMessage);
    }
}

function doneButton() {
    let restart_button = document.getElementById("restartButton");
    restart_button.addEventListener("click", clearHTML);
}
function clearHTML () {
    document.querySelector('#levelNeeded').value = '';
    document.querySelector('#timeNeeded').value = '';
    document.querySelector('#stepsNeeded').value = '';
    which_level = 0;
    window.location.reload();
}

function startGame() {
    document.getElementById("ColourButton").style.visibility = "hidden";
    document.getElementById("NumberButton").style.visibility = "hidden";
    document.getElementById("chooseLevel").hidden = false;
    var which_level = document.getElementById("levelNeeded").value;
    level_indicator = document.getElementById("levelIndicator");
    MessageStartGuess = document.getElementById("startGuessMessage");
    if (which_level == 1) {
        level_indicator.style.fontStyle = "normal";
        level_indicator.innerHTML = "You chose level 1";
        document.getElementById("chooseLevel").hidden = true;
        MessageStartGuess.innerHTML = "Start to guess!";
        getNumberOnce();
        if (ColorOption) {
            MasterMind();
        }
        else {
            document.getElementById("inputGame").hidden = false;
        }
    }
    else if (which_level == 2) {
        level_indicator.style.fontStyle = "normal";
        level_indicator.innerHTML = "You chose level 2";
        document.getElementById("chooseLevel").hidden = true;
        document.getElementById("inputTime").hidden = false;
        TimeOption = true;
        getNumberOnce();
    }
    else if (which_level == 3) {
        level_indicator.style.fontStyle = "normal";
        level_indicator.innerHTML = "You chose level 3";
        document.getElementById("chooseLevel").hidden = true;
        MessageStartGuess.innerHTML = "Start to guess!";
        getNumberTwice();
        if (ColorOption) {
            MasterMind();
        }
        else {
            document.getElementById("inputGame").hidden = false;
        }
    }
    else if (which_level == 4) {
        level_indicator.style.fontStyle = "normal";
        level_indicator.innerHTML = "You chose level 4";
        document.getElementById("chooseLevel").hidden = true;
        document.getElementById("inputTime").hidden = false;
        TimeOption = true;
        getNumberTwice();
    }
    else if (which_level == 5) {
        level_indicator.style.fontStyle = "normal";
        level_indicator.innerHTML = "You chose level 5";
        document.getElementById("chooseLevel").hidden = true;
        document.getElementById("inputSteps").hidden = false;
        StepsOption = true;
        getNumberOnce();
    }
    else if (which_level == 6) {
        level_indicator.style.fontStyle = "normal";
        level_indicator.innerHTML = "You chose level 5";
        document.getElementById("chooseLevel").hidden = true;
        document.getElementById("inputSteps").hidden = false;
        StepsOption = true;
        getNumberTwice();
    }
    else {
        level_indicator.style.fontStyle = "italic";
        level_indicator.innerHTML = "Your entry is not valid, please input another level or restart the game";
        doneButton();
    }
}
