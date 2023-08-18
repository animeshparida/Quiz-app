const questions = [
    {
        question: "Where was the mahabharat war fought?",
        answers:[
            { text: "HASTINAPUR", correct: false},
            { text: "KALINGA", correct: false},
            { text: "KURUKSHETRA", correct: true},
            { text: "PANCHAL", correct: false},
        ]
    
    },
    {
        question: "WHO IS RESPONSIBLE FOR THE DEATH OF ABHIMANYU IN THE CHAKRAVYUHA FORMATION?",
        answers:[
            { text: "DRONACHARYA", correct: false},
            { text: "KARNA", correct: false},
            { text: "DURYODHANA", correct: false},
            { text: "JAYADRATHA", correct: true},
        ]

    },
    {
        question: "WHO WAS THE MOTHER OF THE KAURAVAS IN THE MAHABHARATA?",
        answers:[
            { text: "KUNTI", correct: false},
            { text: "GANDHARI", correct: true},
            { text: "SATYAVATI", correct: false},
            { text: "DRAUPADI", correct: false},
        ]

    },
    {
        question: "HOW MANY DAYS DID THE KURUKSHETRA WAR LAST?",
        answers:[
            { text: "22 DAYS", correct: false},
            { text: "44 DAYS", correct: false},
            { text: "18 DAYS", correct: true},
            { text: "19 DAYS", correct: false},
        ]

    },
    {
        question: "WHO WAS THE FATHER OF KARNA?",
        answers:[
            { text: "VAYU DEV", correct: false},
            { text: "SURYA DEV", correct: true},
            { text: "AGANI DEV", correct: false},
            { text: "INDRA DEV", correct: false},
        ]

    },
    {
        question: "WHO WAS RESPONSIBLE FOR THE DEATH OF BHISHMA IN THE BATTLE FIELD?",
        answers:[
            { text: "DURYODHANA", correct: false},
            { text: "BHIMA", correct: false},
            { text: "ARJUNA", correct: true},
            { text: "SAHADEV", correct: false},
        ]
    },
    {
        question: "WHO WAS THE WRITER OF THE EPIC MAHABHARATA?",
        answers:[
            { text: "KALI DAS", correct: false},
            { text: "VEDAVYASA", correct: true},
            { text: "GANESH", correct: false},
            { text: "VALMIKI", correct: false},
        ]
    },
    {
        question: "WHO WAS THE SON OF ARJUNA AND SUBHADRA?",
        answers:[
            { text: "IRAVAN", correct: false},
            { text: "SHRUTAKIRTI", correct: false},
            { text: "ABHIMANYU", correct: true},
            { text: "GHATOTKACHA", correct: false},
        ]
    },
    {
        question: "WHO WAS THE COMMANDER-IN-CHIEF OF THE KAURAVA ARMY IN THE WAR?",
        answers:[
            { text: "BHISHMA", correct: false},
            { text: "DRONACHARYA", correct: true},
            { text: "KARNA", correct: false},
            { text: "SHAKUNI", correct: false},
        ]
    },
    {
        question: "HOW MANY CHAPTER DOES BHAGAVAD GITA HAS?",
        answers:[
            { text: "12", correct: false},
            { text: "18", correct: true},
            { text: "16", correct: false},
            { text: "21", correct: false},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = ' YOU PLAYED WELL!!! '
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();






