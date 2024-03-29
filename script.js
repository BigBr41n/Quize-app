//questions od the quize app with the answers

/*const questions = [
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
]; */



const  questions= [
    {
        question: "What is HTML?",
        options: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hypertext Model Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        options: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false }
        ]
    },
    {
        question: "What is JavaScript?",
        options: [
            { text: "A scripting language that enables interactive web pages", correct: true },
            { text: "A markup language for styling web pages", correct: false },
            { text: "A programming language for backend development", correct: false },
            { text: "A database management language", correct: false }
        ]
    },
    {
        question: "What does DOM stand for?",
        options: [
            { text: "Document Object Model", correct: true },
            { text: "Data Object Model", correct: false },
            { text: "Desktop Oriented Model", correct: false },
            { text: "Domain Object Model", correct: false }
        ]
    },
    {
        question: "What is the purpose of a CSS framework?",
        options: [
            { text: "To provide pre-defined styles and layouts for web development", correct: true },
            { text: "To manage server-side logic", correct: false },
            { text: "To facilitate database interactions", correct: false },
            { text: "To create interactive web pages", correct: false }
        ]
    },
    {
        question: "What does HTTP stand for?",
        options: [
            { text: "Hypertext Transfer Protocol", correct: true },
            { text: "Hypertext Transmission Protocol", correct: false },
            { text: "Hypertext Transport Protocol", correct: false },
            { text: "Hypertext Terminal Protocol", correct: false }
        ]
    },
    {
        question: "What is Git?",
        options: [
            { text: "A version control system", correct: true },
            { text: "A web hosting service", correct: false },
            { text: "A programming language", correct: false },
            { text: "A database management system", correct: false }
        ]
    },
    {
        question: "What is the purpose of responsive web design?",
        options: [
            { text: "To ensure optimal viewing experience across various devices and screen sizes", correct: true },
            { text: "To improve website performance", correct: false },
            { text: "To manage server-side requests", correct: false },
            { text: "To enhance website security", correct: false }
        ]
    },
    {
        question: "What is a frontend developer?",
        options: [
            { text: "A developer who focuses on client-side development", correct: true },
            { text: "A developer who focuses on server-side development", correct: false },
            { text: "A developer who manages databases", correct: false },
            { text: "A developer who designs user interfaces", correct: false }
        ]
    },
    {
        question: "What is a backend developer?",
        options: [
            { text: "A developer who focuses on server-side development", correct: true },
            { text: "A developer who focuses on client-side development", correct: false },
            { text: "A developer who designs user interfaces", correct: false },
            { text: "A developer who manages databases", correct: false }
        ]
    },
    {
        question: "What does API stand for?",
        options: [
            { text: "Application Programming Interface", correct: true },
            { text: "Application Program Interface", correct: false },
            { text: "Automated Programming Interface", correct: false },
            { text: "Application Process Interface", correct: false }
        ]
    },
    {
        question: "What is the purpose of a frontend framework like React?",
        options: [
            { text: "To build interactive user interfaces", correct: true },
            { text: "To manage server-side requests", correct: false },
            { text: "To create database schemas", correct: false },
            { text: "To track changes in files", correct: false }
        ]
    },
    {
        question: "What is the purpose of a backend framework like Express?",
        options: [
            { text: "To build server-side applications", correct: true },
            { text: "To style web pages", correct: false },
            { text: "To create interactive animations", correct: false },
            { text: "To manage client-side logic", correct: false }
        ]
    },
    {
        question: "What is the purpose of SQL?",
        options: [
            { text: "To manage relational databases", correct: true },
            { text: "To style web pages", correct: false },
            { text: "To create interactive user interfaces", correct: false },
            { text: "To track changes in files", correct: false }
        ]
    },
    {
        question: "What is a CDN?",
        options: [
            { text: "Content Delivery Network", correct: true },
            { text: "Content Distribution Network", correct: false },
            { text: "Centralized Data Network", correct: false },
            { text: "Centralized Distribution Network", correct: false }
        ]
    },
    {
        question: "What is the purpose of AJAX?",
        options: [
            { text: "To update parts of a web page without reloading the entire page", correct: true },
            { text: "To create database schemas", correct: false },
            { text: "To manage server-side requests", correct: false },
            { text: "To track changes in files", correct: false }
        ]
    },
    {
        question: "What is the purpose of cookies in web development?",
        options: [
            { text: "To store user data on the client's browser", correct: true },
            { text: "To manage server-side requests", correct: false },
            { text: "To create database schemas", correct: false },
            { text: "To track changes in files", correct: false }
        ]
    },
    {
        question: "What is the purpose of a CMS?",
        options: [
            { text: "Content Management System", correct: true },
            { text: "Client Management System", correct: false },
            { text: "Code Management System", correct: false },
            { text: "Computer Management System", correct: false }
        ]
    },
    {
        question: "What does SSL stand for?",
        options: [
            { text: "Secure Sockets Layer", correct: true },
            { text: "Safe Sockets Layer", correct: false },
            { text: "Secure Server Layer", correct: false },
            { text: "Safe Server Layer", correct: false }
        ]
    },
    {
        question: "What is the purpose of SSL certificates?",
        options: [
            { text: "To encrypt data transmitted between the client and server", correct: true },
            { text: "To manage server-side requests", correct: false },
            { text: "To create database schemas", correct: false },
            { text: "To track changes in files", correct: false }
        ]
    }
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

