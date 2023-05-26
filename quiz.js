const questions = [
    {
        question: "What is Nichole's favorite number problem?",
        optionA: "12^(2)",
        optionB: "sqrt(256)",
        optionC: "3^(3)",
        optionD: "9^(9)",
        correctOption: "optionB"
    },

    {
        question: "How many cities has Nichole lived in?",
        optionA: "4",
        optionB: "10",
        optionC: "5",
        optionD: "7",
        correctOption: "optionD"
    },

    {
        question: "Who is Nichole's favorite author?",
        optionA: "Khaled Hosseini",
        optionB: "Chaim Potok",
        optionC: "V. E. Schwab",
        optionD: "Fyodor Dostoyevsky",
        correctOption: "optionA"
    },

    {
        question: "What color are Nichole's headphones?",
        optionA: "Black",
        optionB: "Grey",
        optionC: "Blue",
        optionD: "Green",
        correctOption: "optionD"
    },

    {
        question: "What will Nichole study at UW?",
        optionA: "Biology and Computer Engineering",
        optionB: "Statistics and Data Science",
        optionC: "Computer Science",
        optionD: "Applied Mathematics",
        correctOption: "optionB"
    },

    {
        question: "Where did Nichole attend the majority of elementary school?",
        optionA: "Irvine, CA",
        optionB: "New York, NY",
        optionC: "Calabasas, CA",
        optionD: "Gig Harbor, WA",
        correctOption: "optionC"
    },

    {
        question: "Nichole's favorite Icee flavor is...",
        optionA: "Coke",
        optionB: "Cherry",
        optionC: "Blue Raspberry",
        optionD: "Lime",
        correctOption: "optionA"
    },

    {
        question: "How many siblings does Nichole have?",
        optionA: "1",
        optionB: "3",
        optionC: "5",
        optionD: "4",
        correctOption: "optionC"
    },

    {
        question: "What is Nichole's favorite set of numbers?",
        optionA: "2, 3, 8, 16",
        optionB: "3, 6, 9, 19",
        optionC: "7, 11, 13, 17",
        optionD: "3, 5, 15, 125",
        correctOption: "optionB"
    },

    {
        question: "Nichole has regularly played which game since she was a kid?",
        optionA: "Sudoku",
        optionB: "Scrabble",
        optionC: "Colorku",
        optionD: "Uno",
        correctOption: "optionC"
    },

    {
        question: "Nichole's computer has one sticker on it. What is that sticker?",
        optionA: "3 sitting cats",
        optionB: "Person wearing headphones",
        optionC: "Spotify logo",
        optionD: "Cat and person napping together",
        correctOption: "optionD"
    },

    {
        question: "What is the first programming language Nichole learned?",
        optionA: "Go",
        optionB: "Java",
        optionC: "R",
        optionD: "Python",
        correctOption: "optionA"
    },


    {
        question: "What did Nichole study at Harvard?",
        optionA: "Genetics, Epidemiology, Biostatistics",
        optionB: "Python, Biostatistics",
        optionC: "Calculus, Genetics, Econometrics",
        optionD: "Data Science, Epidemiology",
        correctOption: "optionA"
    },

    {
        question: "Nichole was nominated as a Student of Distinction in which category?",
        optionA: "Academics",
        optionB: "Community Service",
        optionC: "Science and Technology",
        optionD: "Career and Technical",
        correctOption: "optionB"
    },

    {
        question: "Nichole took one class at the high school during her junior year. What class did she take?",
        optionA: "AP Computer Science Principles",
        optionB: "AP Biology",
        optionC: "AP Statistics",
        optionD: "AP Calculus AB",
        correctOption: "optionC"
    },

    {
        question: "Which Chrome extension is downloaded on all of Nichole's devices?",
        optionA: "ProtonVPN",
        optionB: "Securly",
        optionC: "DuckDuckGo",
        optionD: "Ecosia",
        correctOption: "optionD"
    },

    {
        question: "How many times has Nichole listened to her most listened to track?",
        optionA: "1,375",
        optionB: "715",
        optionC: "2,429",
        optionD: "943",
        correctOption: "optionA"
    },

    {
        question: "How many times has Nichole listened to her top artist?",
        optionA: "5,844",
        optionB: "8,137",
        optionC: "2,685",
        optionD: "3,911",
        correctOption: "optionB"
    },

    {
        question: "Which of these places has Nichole NOT volunteered at?",
        optionA: "Cementary",
        optionB: "Golf Course",
        optionC: "Hospital",
        optionD: "Soup Kitchen",
        correctOption: "optionC"
    },

    {
        question: "Nichole can recite how many digits of pi?",
        optionA: "47",
        optionB: "14",
        optionC: "5",
        optionD: "30",
        correctOption: "optionD"
    },

    {
        question: "Nichole's pencil pounch was a birthday gift from her friend Nicole. How old was Nichole turning?",
        optionA: "11",
        optionB: "15",
        optionC: "13",
        optionD: "12",
        correctOption: "optionA"
    },

    {
        question: "Which song did Nichole play on the Piano at the Harvard Talent Show?",
        optionA: "Moonlight Sonata: 3rd Movement",
        optionB: "The Winner Takes It All",
        optionC: "Clair de Lune",
        optionD: "Where Angels Fear To Tread",
        correctOption: "optionB"
    },

    {
        question: "What was Nichole's childhood dream job?",
        optionA: "Computer Programmer",
        optionB: "Racecar Driver",
        optionC: "Math Professor",
        optionD: "Band Director",
        correctOption: "optionC"
    },

    {
        question: "Nichole created her first website with a team of friends for a hackathon. What was the hackathon theme?",
        optionA: "Cyber Security",
        optionB: "Black History Month",
        optionC: "AAPI Month",
        optionD: "Women's History Month",
        correctOption: "optionD"
    },

    {
        question: "What is Nichole's favorite pen?",
        optionA: "Muji Polycarbonate 0.7",
        optionB: "Micron Sakura 01 0.25",
        optionC: "Pilot G2 0.7",
        optionD: "Sharpie S-Gel 0.7",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "rgba(205, 251, 214, 0.824)"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "rgba(252, 195, 195, 0.824)"
            document.getElementById(correctOption).style.backgroundColor = "rgba(205, 251, 214, 0.824)"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    remark = "Thank you for playing!"
    remarkColor = "black"

    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}