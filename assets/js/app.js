// grab input and button elements
// queryselector
// getelementsbytagname
// getelementsbyclassname
// querySelectorall
var submitBtn = document.getElementById("submit-btn");
var todoInput = document.getElementById('todo-input');
var todoList = document.querySelector(".todo-list");
var todoItemArray = [];
var date = new Date();
var hour = date.getHours();
var seconds = date.getSeconds();
var dom = date.getDay()
var month = date.getMonth();

// addeventListener
submitBtn.addEventListener('click', function (event) {
  // 1. to test ========= console anything
  // console.log("anything")
  event.preventDefault();
  var todoValue = todoInput.value;
  // console.log(todoValue);
  // 9. add pushItems function to click event
  pushItemsToArray(todoValue);
  // 11. add function for forLoop to add items to page
  loopThruWordsArray();
  todoInput.value = "";
})
// 6. create array to push todos to
// 7. create function to push items to an array
function pushItemsToArray(todoValue) {
  // 8. use push method to add items to array;
  // 15. push objects to array to be able to use id's to grab todo easier
  // 15b. also will use ID's to update isComplete when we get to localStorage
  todoItemArray.push({
    id: hour + seconds + dom + month,
    isComplete: false,
    todoValue: todoValue
  });
  console.log(todoItemArray)
  // return todoItemArray
}

// 10. write for loop to loop thru our words array
function loopThruWordsArray() {
  // 13. call function before for loop
  clearTodoListHtml();
  for (var i = 0; i < todoItemArray.length; i++) {
    // 2. create element on click
    var todoItemDiv = document.createElement("div");
    // 3. add class todo created
    todoItemDiv.setAttribute("class", "todo-item-div");
    // 4. get text of todo and attach to element
    todoItemDiv.innerHTML = "<div class='d-flex justify-content-between'><p><i class='far fa-check-square'></i></p>" +
      "<p>" + todoItemArray[i].todoValue + "</p>" + "<p><i class='far fa-trash-alt'></i></p></div><hr/>"
    //5. attach element to todolist div in html
    todoList.appendChild(todoItemDiv);
  }
}
// 12. function to empty todolist in html
function clearTodoListHtml() {
  todoList.innerHTML = ""
}