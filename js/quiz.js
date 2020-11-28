var quizSettings = {};
var qv = {};
var questionview = [];
var quizQuestion = " ";
var x;

const quizSetup = document.querySelectorAll('quiz-setup')
var option = `<input type="text" class="form-control" placeholder="Option">`
function setQuestion() {
    document.getElementById("quiz-setup").style.display='none';
    document.getElementById("question").style.display='block' ;
    document.getElementById("takequiz").style.display='none' ;
    let questionDiv = document.getElementById('question-container');
    num = quizSettings.numQuest;  
    console.log(num);
    var qB = `<textarea id="txta0" cols="30" rows="10"></textarea>
    <input type="text" id="correctAns0" class="form-control" placeholder="Correct Answer">
    <input type="text" id="optone0" class="form-control" placeholder="Option1">
    <input type="text" id="opttwo0" class="form-control" placeholder="Option2"></input>`;
    for (let index = 1; index < quizSettings.numQuest; index++) {
        qB += `<textarea id="txta${index}" cols="30" rows="10"></textarea>
        <input type="text" id="correctAns${index}" class="form-control" placeholder="Correct Answer">
        <input type="text" id="optone${index}" class="form-control" placeholder="Option1">
        <input type="text" id="opttwo${index}" class="form-control" placeholder="Option2"></input>`;
    }
         questionDiv.innerHTML = qB;
}

function takeQuiz() {
    document.getElementById("quiz-setup").style.display='none';
    document.getElementById("question").style.display='none' ;
    document.getElementById("takequiz").style.display='block' ;
    // document.getElementById("quizDisplay" ).style.display='block' ;
 
    for (let index = 0; index < quizSettings.numQuest; index++) {
        quizQuestion +=`<ul class="list-group">
        <li id="txta${index}" class="list-group-item"></li>
        <li  id="correctAns${index}" class="list-group-item"></li>
        <li id="optone${index}" class="list-group-item"></li>
        <li  id="opttwo${index}" class="list-group-item"></li>
   </ul>`;

    
    };
    for (index in qv) {
        quizQuestion += qv[index] + " ";
      }
    
    document.getElementById("takequiz-container").innerHTML=quizQuestion;
    quizQuestion = JSON.stringify(questionview).display
}

function setQuiz() {
    document.getElementById("quiz-setup").style.display='block';
    document.getElementById("question").style.display='none' ;
    document.getElementById("takequiz").style.display='none' ;
    document.getElementById("quizDisplay" ).style.display='none' ;
}

function submitSetup() {
    quizSettings = {
        name: document.getElementById('name').value,
        Subject: document.getElementById('subject').value,
        numQuest: document.getElementById('numbers').value,
        duration: document.getElementById('duration').value,
        noOfAnsOpt: document.getElementById('ansOpt').value || 2
    }
    console.log(quizSettings)
}

function doneSet() {
    for (let index = 0; index < quizSettings.numQuest; index++) {
            qv = {
                quest: document.getElementById(`txta${index}`).value,
                corectAnswer: document.getElementById(`correctAns${index}`).value,
                optionI: document.getElementById(`optone${index}`).value,
                optionT: document.getElementById(`opttwo${index}`).value
            };
            console.log(qv);
        questionview.push(qv);
        
    };
        console.log(questionview);
}


























// function startQuiz() {
//     document.getElementById("quiz-setup").style.display='none';
//     document.getElementById("question").style.display='none' ;
//     document.getElementById("takequiz").style.display='none' ;
//     document.getElementById("quizDisplay" ).style.display='block' ;
// }