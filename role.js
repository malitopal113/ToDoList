// DOM Elements

let listDOM = document.querySelector('#list');
let taskDOM = document.querySelector('#task');
let buttonDOM = document.querySelector('#liveToastBtn');
let list_length = document.getElementsByTagName("li"); // I took all the li elements that exist here and assigned them to list_length, so we learned how many li items we have.

for(let i=0; i < list_length.length;i++){ 
    let closeButton = document.createElement("span"); //Since the close icon is in the span tag, I created a new span element and assigned it to the closeButton variable.
    closeButton.textContent = "\u00D7"; // I used "\u00D7" to create the cross sign in the list.
    closeButton.classList.add("close"); // I added the close class to this button.
    closeButton.onclick = removeButton; // and we said it should run the removeButton function when we hit the cross sign.
    list_length[i].append(closeButton); // By adding the closeButton variable to the indexes 0, 1, 2... of list_length, I actually added the cross button to the existing list using the for loop. 
    list_length[i].onclick = check; // Clicking on it will run the check function
}



// Events

buttonDOM.addEventListener('onclick', newElement);





// Functions

function check(){
    this.classList.toggle("checked"); // The toggle switch is generally used to indicate situations such as two options (yes, no or active passive). Here we have said to use toggle("checked") to strike out the clicked item and put a tick next to it.
  }
  
  function removeButton(){
    this.parentElement.remove();  //Here we used the parentElement.remove class to delete the item, that is, to delete the item with the cross.
  }


function newElement(){
    let isEmpty = taskDOM.value.trim();
    console.log(isEmpty);

    if (isEmpty.length > 0 ){

        $(".success").toast("show");

        //CREATE ND APPEND li ELEMENTS TO THE LIST

        let liDOM = document.createElement('li');
        liDOM.innerHTML = taskDOM.value;
        listDOM.append(liDOM);

        // clear input
        taskDOM.value = '';



        // REPEAT THE SAME OPERATIONS TO DELETE THE ADDED ITEMS

        liDOM.onclick = check;
        
        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;
        
        liDOM.append(closeButton);
        listDOM.append(liDOM);
        taskDOM.value = ("");


        
        

   


    }
    else{

        //? show danger alert
        $(".error").toast("show");

    }
}






