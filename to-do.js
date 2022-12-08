document.addEventListener("DOMContentLoaded", function(){
    let add_btn = document.querySelector(".add");
    
    let message = document.querySelector("#result");
    let user_input = document.getElementById("task_input");

    
    function createTaskElement(userTask){

        /* creates the tasks directly into the html dom
            so it can be manipulated by js
        */

        html = userTask

        const div = document.createElement("div")
        div.className = "task"
        document.getElementById("result").appendChild(div)

        const div2 = document.createElement("div")
        div2.className = "task_text"
        div.appendChild(div2)

        const p = document.createElement("p")
        p.textContent = html
        div2.appendChild(p)

        const div3 = document.createElement("div")
        div3.className = "task_button_box"
        div.appendChild(div3)

        const button = document.createElement("button")
        button.className = "delete"
        button.setAttribute("type","submit")
        button.textContent = "Delete"
        div3.appendChild(button)
        

    }

    function required(input_task) {
     if (input_task.length == 0)
      { 
         alert("Please enter a task");  	
         return false; 
      }  	
      return true; 
    } 
    

    add_btn.addEventListener("click", function(e){
        e.preventDefault();
        user_task = user_input.value;

        if(required(user_task)){
            createTaskElement(user_task);
        }
    
    })

    
    // delete functionality
    message.addEventListener("click", function(e){
        if (e.target.classList.contains('delete')){
            e.preventDefault();
            button = e.target
            console.log(button.parentNode.parentNode)
            task_Node = button.parentNode.parentNode
            task_Node.remove()
        }
        
    })


})