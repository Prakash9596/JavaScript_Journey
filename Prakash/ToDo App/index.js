let todoList = [
  {
    item: 'Buy Milk',
    dueDate: '2024-10-15'
  },
  {
    item: 'Go to College',
    dueDate: '2024-10-15'
  }
];                                                               // array jo sara input capture kre

displayItems();                                                  //page load hote hi body div ke content ke liye  

function addTodo() {                                             //add pe click krte hi ye call ho jayega 
  let inputElement = document.querySelector('#todo-input');      //target kiye user input wale element ko 
  let dateElement = document.querySelector('#todo-date');        //target kiye user selected date wale element ko
  let todoItem = inputElement.value;                             //text value store kr diye 
  let todoDate = dateElement.value;                              //date value store kr diye 
  todoList.push({item: todoItem, dueDate: todoDate});            //array me text aur date object ke form me bhej diye 
  inputElement.value = '';                                       //null kr diye taki phir se enter krne ke liye aaye  
  dateElement.value = '';                                        //null kr diye taki phir se enter krne ke liye aaye
  displayItems();                                                //content storing ho gya ab display krana hoga 
}

function displayItems() {                             
  let containerElement = document.querySelector('.todo-container');    //body div ko target kiye 
  let newHtml = '';                                                    //naya null variable bnaye
  for (let i = 0; i < todoList.length; i++) {                          //loop chalaye pure array ke liye
    let {item, dueDate} = todoList[i];                                 //object Destructuring kr diye
    newHtml += `                                                        
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1);
      displayItems();">Delete</button>
    `;                                                                   // naye variable me tino add kr diye + delete functionality daal diye
  }
  containerElement.innerHTML = newHtml;                                  //hr iteration ke baad div ka body content update kr diye
}