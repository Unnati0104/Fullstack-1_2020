 //selectors
 var todoInput = document.querySelector(".todo-input");
 var todoButton = document.querySelector(".todo-btn");
 var todoList = document.querySelector(".todo-list");

 //event listeners
 todoButton.onclick = create;
 todoList.onclick = checkdelete;

 //functions
 function create(e){

     e.preventDefault();                                     //i.e. don't submit form-data to server

     var newDiv = document.createElement("div");
     newDiv.classList.add("todo");

     var newLi = document.createElement("li");
     newLi.classList.add("todo-item");
     newLi.innerHTML= todoInput.value;
     if(todoInput.value.length == 0){
         alert("Please input some text");
         newLi.innerHTML= none;
     }
     newDiv.appendChild(newLi);

     var checkbtn = document.createElement("button");
     checkbtn.classList.add("chk-btn");
     checkbtn.innerHTML = '<i class="fa fa-check"></i>';
     newDiv.appendChild(checkbtn);

     var delbtn = document.createElement("button");
     delbtn.classList.add("del-btn");
     delbtn.innerHTML = '<i class="fa fa-times"></i>';
     newDiv.appendChild(delbtn);

     todoList.appendChild(newDiv);
     todoInput.value ="";
 }

 function checkdelete(e){

 var item= e.target;
 if(item.classList[0]=="del-btn"){
     var parent =item.parentNode;
     parent.remove();
 }
 if(item.classList[0]=="chk-btn"){
     var parent =item.parentNode;
     
     parent.classList.toggle("completed");                   //toggle is used to add or delete class,on first click it adds class, on second click it deletes class
 }
 }