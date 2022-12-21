document.addEventListener("DOMContentLoaded", function(){
    let url;
    let add_btn = document.querySelector(".add");
    
    let message = document.querySelector("#result");
    let user_input = document.getElementById("task_input");

    let complete_btn = document.querySelector(".complete_btn");
    let incomplete_btn = document.querySelector(".incomplete_btn");
    let all_btn = document.querySelector(".all_btn");
    let clear_btn = document.querySelector(".clear_btn");

    let all_tasks_list = [];



    incomplete_btn.addEventListener("click", function(e){
        showIncomplete();
    })

    complete_btn.addEventListener("click", function(e){
        showComplete();
    })

    all_btn.addEventListener("click", function(e){
        showAll();
    })

    clear_btn.addEventListener("click", function(e){
        clearAll();
    })

    function showIncomplete(){
        all_tasks_list.forEach(task => {
            if (task.classList.contains("completed")){
                task.classList.add("hide");
            }
            if (task.classList.contains("incomplete") && (task.classList.contains("hide"))){
                task.classList.remove("hide")
            }

        });
    }

    function showComplete(){

        all_tasks_list.forEach(task => {

            if (task.classList.contains("incomplete")){
                task.classList.add("hide");
            }
            if (task.classList.contains("completed") && (task.classList.contains("hide"))){
                task.classList.remove("hide")
            }
        });
    }

    function showAll(){

        all_tasks_list.forEach(task => {
            if (task.classList.contains("hide")){
                task.classList.remove("hide");
            }
        })
    }

    function clearAll(){

        all_tasks_list.forEach(task => {
            task.remove();
        })

        all_tasks_list = [];
    }


    
    function createTaskElement(userTask){

        /* creates the tasks directly into the html dom
            so it can be manipulated by js
        */

        html = userTask

        const div = document.createElement("div")
        div.className = "task incomplete"
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
        div3.appendChild(button)
        
        const bin_icon = document.createElement("i")
        bin_icon.className = "fa-solid fa-trash"
        button.appendChild(bin_icon)

        // adding checkboxes

        const checkbox_div = document.createElement("div");
        checkbox_div.className = "task_check"
        div.appendChild(checkbox_div);

        //adding all tasks to a list
        all_tasks_list.push(div)

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
            button = e.target;
            task_Node = button.parentNode.parentNode
            all_tasks_list.pop(task_Node);
            task_Node.remove()
        }

        if (e.target.classList.contains("task_check")){
            e.preventDefault();

            checkbox = e.target

            
            if (checkbox.childNodes.length==0){


                if (checkbox.parentNode.classList.contains("incomplete")){

                    checkbox.parentNode.classList.remove("incomplete")

                }
                const check_icon = document.createElement("i")
                check_icon.className = "fa-solid fa-check"
                checkbox.appendChild(check_icon)
                checkbox.parentNode.classList.add("completed")


            }

            else{
                if (checkbox.parentNode.classList.contains("completed")){
                    checkbox.parentNode.classList.remove("completed")
                }

                checkbox.parentNode.classList.add("incomplete")
                checkbox.firstChild.remove();
            }

            


        }
        
    })


})