let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

// funtion for empty input
function inputLength (){
    return inputField.value.length;
}


// fintion for adding input
addToDoButton.addEventListener('click', function(){

    if (inputLength() > 0){
        var paragraph = document.createElement('p');
        paragraph.innerHTML = inputField.value;
        toDoContainer.appendChild(paragraph);
        paragraph.classList.add('afterinputText');

        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode("Delete"));
        paragraph.appendChild(btn);
        btn.classList.add('afterClick');

        inputField.value = "" ;  
    }

    else{
        alert ("Kindly fill the Task");
    }

// funtion for deleting
btn.addEventListener('click', function(){
    toDoContainer.removeChild(paragraph);
})
})
