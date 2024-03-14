//questions od the quize app with the answers

const questions = [
    {
        question : "What JS means ?",
        options : [
            {text: "Jammaica script", correct:false},
            {text: "Jordan Snipper", correct:false},
            {text: "Java script", correct:true},
            {text: "None of the above", correct:false},
        ]
    },
    {
        question : "To convert from base 10 to base 2 We ?",
        options : [
            {text: "muliply by 10", correct:false},
            {text: "Dived by 10", correct:false},
            {text: "add zeros to the number", correct:false},
            {text: "continously dived by 2 ", correct:true},
        ]
    },
    {
        question : "What is Xss",
        options : [
            {text: "cross site scripting vulnerability", correct:true},
            {text: "Programming language", correct:false},
            {text: "Text editor", correct:false},
            {text: "Web Attack", correct:false},
        ]
    },
    {
        question : "Select an Xss payload : ",
        options : [
            {text: "'>&lt;script&gt;'\xE2\x80\xA8javascript:alert(1)&lt;/script&gt;'", correct:true},
            {text: "http://[0:0:0:0:0:ffff:127.0.0.1]", correct:false},
            {text: '" OR 1 = 1 -- -', correct:false},
            {text: '&lt;!--#exec%20cmd=&quot;/usr/bin/id;--&gt;', correct:false},
        ]
    },
    {
        question : "what SSRF stand for ?",
        options : [
            {text: "Server Side Referance Fault", correct:false},
            {text: "Server Side Request Forgery", correct:true},
            {text: "Server Side Request Failure", correct:false},
            {text: "None of the above", correct:false},
        ]
    },
]; 








const question = document.getElementById('quest'); 
const answer = document.getElementById('answerButtons'); 

const next = document.getElementById('next')

let  currentQuestionIndex = 0 ; 
let score = 0 ; 





function startQuize(){
    currentQuestionIndex = 0; 
    score = 0; 
    next.innerHTML = "Next"; 
    showQuestions() ;  
}



// function to show all questions with there options in the question section 

function showQuestions(){

    resetStat(); // to rest all question before start playing 

    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex + 1 ; 
    question.innerHTML = questionNo + ". " + currentQuestion.question; 



    currentQuestion.options.forEach(ans =>{
        const button = document.createElement('button'); 
        button.innerHTML = ans.text; 

        button.classList.add("btn"); 
        answer.appendChild(button); 

        if(ans.correct){
            button.dataset.correct = ans.correct ; 
        } 
        button.addEventListener("click",selectAnswer);
    });
}






function resetStat(){

    next.style.display = "none"; 
    while(answer.firstChild){
        answer.removeChild(answer.firstChild); 
    }

}









function selectAnswer(e){
    const selectedBtn = e.target ;
    const isCorrect = selectedBtn.dataset.correct === "true"; 



    if(isCorrect){
        selectedBtn.classList.add("correct"); 
        score++ ; 
    }
    else{
        selectedBtn.classList.add("incorrect"); 
    }



//to check the other question and make sure the user chosed the right answer and disable other buttons after selecting 
    Array.from(answer.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct'); 
        }
        button.disabled = true ; 
    })




    next.style.display = "block" ; 
}








next.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handelNextButton();
    }
    else {
        startQuize(); 
    }
} )








function handelNextButton(){
    currentQuestionIndex++ ; 
    if(currentQuestionIndex < questions.length){
        showQuestions(); 
    }
    else{
        showScore(); 
    }
}









function showScore(){
    resetStat(); 
    question.innerHTML = `You scored ${score} out of ${questions.length} !`
    next.innerHTML = "Play Again";
    next.style.display = "block";  
}







startQuize(); 

