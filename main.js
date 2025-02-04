// setting Up Variables
let theInput = document.querySelector('.add-task input');
let addButton = document.querySelector('.add-task .plus');
let tasksContainer = document.querySelector('.task-content');
let taskcount = document.querySelector('.task-count span');
let taskcomplated = document.querySelector('.task-complated span');
let msg = document.querySelector('.alert');

// focus on input field
window.onload=function(){
    theInput.focus();
}


// Adding The Task

addButton.onclick=function(){
    // If is Empty
    if(theInput.value === ''){
        msg.classList.add('up')
    }
    else{

        let noTaskMsg = document.querySelector('.no-tasks-massge');

        // check if span with No Tasks Msg is Exist
        if(document.body.contains(document.querySelector('.no-tasks-massge'))){
               //Remove no Task Messge
               noTaskMsg.remove();
        }


        msg.classList.remove("up")

        // creat span element
        let mainSpan = document.createElement('span');

        // creat Delete btn
        let DeleteElement = document.createElement('span');

        // creat the span text
        let text = document.createTextNode(theInput.value);

        // Creat the delete btn text
        let deletText = document.createTextNode("Delete");

        // Add text to span
        mainSpan.appendChild(text);

        // Add class To span
        mainSpan.className='task-box';

        // Add text to Delet Button
        DeleteElement.appendChild(deletText);

        // Add class To Delet Button
        DeleteElement.className='delete';

        // Add delet Button to span
        mainSpan.appendChild(DeleteElement);

        // Add the Task To the container
        tasksContainer.appendChild(mainSpan);

        // Empty The input
        theInput.value="";

        // focus on field
        theInput.focus();

        CalculateTasks();
    }
}



document.addEventListener('click',(e)=>{
    
    if(e.target.className == 'delete'){
        e.target.parentNode.remove()

        // Check Number Of Task Inside The Container
        if(tasksContainer.childElementCount == 0){
            creatNoTask()
        }
    }

    if(e.target.classList.contains('task-box')){
        e.target.classList.toggle('finished')
        CalculateTasks();
    }
    
    CalculateTasks();

})



// function to creat no task msg
function creatNoTask(){

    // creat Message Span Element
    let msgSpan = document.createElement('span');

    // Creat Text msg 
    let textMsg = document.createTextNode('No Task To Show');

    // add textMsg To MsgSpan
    msgSpan.appendChild(textMsg);

    // Add class To MsgSpan
    msgSpan.className = 'no-tasks-massge'

    // Append The Massage Span Element To The Task Container
    tasksContainer.appendChild(msgSpan);
}


// Function To Calculate Task

function CalculateTasks(){

    // Calculate All Tasks
    taskcount.innerHTML = document.querySelectorAll(".task-content .task-box").length

        // Calculate Compelated Tasks
        taskcomplated.innerHTML = document.querySelectorAll(".task-content .finished").length
}