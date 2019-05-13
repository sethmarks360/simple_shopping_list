//Creating the variables for input box, enter button, and unordered list
var input = document.getElementById("input");
var enter = document.getElementById("enter");
var ul = document.getElementById("ull")

var listItems = document.getElementsByTagName("li");

//Call this function to immediately be able to check off items from the list
liEvent();

function inputLength()
{
    return input.value.length;
}

//Function to add new elements to the list
function createListElement()
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

enter.addEventListener("click", function(){
    
    if (inputLength() > 0)
    {
        createListElement();
    }

    liEvent();
});

input.addEventListener("keypress", function(event){
   
    if (inputLength() > 0 && event.keyCode === 13)
    {
        createListElement();
    }

    liEvent();
});

function liEvent()
{
    for(i = 0; i < listItems.length; i++)
    {
        listItems[i].addEventListener("click", strikeThrough)

    }
}

function strikeThrough()
{
    this.classList.toggle("done");
}



