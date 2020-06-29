//JavaScript
// Arshdeep Singh
//referencing the ul defined in html document here
let ul = document.querySelector('ul');

//this is the main function in which all the elements including li, p, buttons chckboxes are defined here.
//I have also added classes to get them easily
//So after addition it also clears the input field making it user friendly
function newItem() {
    let input = document.getElementById('inputfield').value;    
    let li = document.createElement('li');
    let delBtn = document.createElement('button');
    let chkbox = document.createElement('input');
    let p = document.createElement('p');
    li.setAttribute('id', 'foodlist');
    chkbox.setAttribute('type', 'checkbox');
    chkbox.setAttribute('class', 'tickbox'); 
    chkbox.onclick = styleText;   
    chkbox.addEventListener('click',playSound);
    li.appendChild(chkbox);
    delBtn.innerHTML = 'Delete';
    delBtn.setAttribute('class', 'delete');
    delBtn.addEventListener('click',removeItem);
    p.setAttribute('class', 'junk');
    p.innerHTML = input;
    li.appendChild(p);
    li.appendChild(delBtn);
    ul.appendChild(li);
    document.getElementById('inputfield').value = '';
}



//this button is used to add new list items
let addbtn = document.getElementById('addtask');
addbtn.addEventListener('click', newItem);  


//JUST THIS FUNCTION HAS ONE LIMITING THING-:
/*
I have to double click it for the first time and then it woeks super cool, that's it and the rest is pretty much as expected
*/
function removeItem() {
    let delBtnClick = document.getElementsByClassName('delete');
    for (let j = 0; j < delBtnClick.length; j++) {
        delBtnClick[j].addEventListener('click', function(){
            let li = this.parentElement;
            li.remove();
        });
    }
}

//BONUS QUESTION FOR THE SOUND
function playSound() { 
    var myAudio = new Audio('https://www.freesoundslibrary.com/wp-content/uploads/2018/01/ding-sound-effect.mp3');
    myAudio.play();
}

//selecting the checkboxes and defininf the styling we need to have on the text in the next function
function textCheck(){
    var selectedText = document.getElementsByClassName('tickbox');
    for (let i = 0; i < selectedText.length; i++) {
        selectedText[i].addEventListener('click', styleText);
    }
}

//this function contains the styling part and on clicking the checkbox the list item-:
//GOES TO THE BOTTOM
//MAKES THE SOUND
//ADDS LINE THROUGH 
function styleText(e){
    let clicked = e.target.parentElement;
    let stylingLi = e.target.nextElementSibling;
    stylingLi.classList.toggle('checked');
    ul.appendChild(clicked);
}


