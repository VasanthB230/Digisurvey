const questions=[
    {
        question:"How do you secure your phone that you use?",
        answers: [
            
                {text:"I use a simple screen lock (like pattern or simple PIN).",correct:false},
                {text:"I don't use any special security",correct:true},
                {text:"I use a strong password or PIN.",correct:false},
                {text:"I use biometric lock (fingerprint/face recognition).",correct:false},
        ]
    },
    {
        question:"How often do you find yourself mindlessly scrolling through social media?",
        answers: [
            
                {text:"A few times a week",correct:false},
                {text:"Once or twice a day (highlighted option)",correct:false},
                {text:"A few times each day",correct:false},
                {text:"Multiple times every hour",correct:true},
        ]
    },
    
    {
        question:"How do you secure your phone that you use?",
        answers: [
            
                {text:"I use a simple screen lock (like pattern or simple PIN).",correct:false},
                {text:"I don't use any special security",correct:true},
                {text:"I use a strong password or PIN.",correct:false},
                {text:"I use biometric lock (fingerprint/face recognition).",correct:false},
        ]
    }
];
const questionElement=document.getElementById("question");
const answerbuttons=document.getElementById("answer-buttons");
const nextbutton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();

    let currentQuestion= questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct

        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct=="true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";

}
function showscore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <questions.length){
        showQuestion();

    }else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();




