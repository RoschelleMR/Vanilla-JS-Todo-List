window.addEventListener("load", function(){
    let task;
    let add_btn = document.querySelector(".add");
    // let del_btn = document.querySelector(".delete");
    let message = document.querySelector(".result");
    let user_input = document.getElementById("task_input");
    

    add_btn.addEventListener("click", function(e){
        e.preventDefault();
        user_task = user_input.value;

        addTask(user_task);
    })

    // del_btn.addEventListener

    function addTask(user_task){
        console.log(user_task);
        task = `<div class="task"> <p>${user_task}</p> <button class="delete">Delete</button></div>`;
        console.log(task);
        message.innerHTML = task;
    }

})