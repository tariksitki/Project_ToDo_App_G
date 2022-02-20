
let inputText = document.getElementById("task");
let add_btn = document.querySelector(".add-btn");
let todolist_list_container = document.querySelector(".todolist-list-container"); /// class
let list_group = document.querySelectorAll(".list-group"); /// class
let unchecked = document.querySelector(".unchecked"); // class
let checked = document.querySelector(".checked"); //  class
let btn = document.getElementsByClassName("btn");
let checkedTasks = document.getElementById("checkedTasks");
let allTasks = document.getElementById("allTasks");
let form = document.getElementById("add-task");

    

    ///////   function:

    let createTask = (taskText) => {
        return `<div class="list-group">
                <li class="unchecked">${taskText} </li>
                <button class="btn">&#128473;</i></button>
                </div>`
    }


        // counter

    let completedTaskCount = () => {
        const checkedCount = document.getElementsByClassName("checked").length;
        const checkedTasks = document.getElementById("checkedTasks");  /// p element
        const taskCount = document.getElementsByClassName("list-group").length;
        const allTasks = document.getElementById("allTasks");
        checkedTasks.innerText = checkedCount;
        allTasks.innerText = taskCount;
        // // const ile tanimladik disari cikinca da ulasmak icin 
    }

    completedTaskCount();
    
        //// add task

    add_btn.addEventListener("click", e => {
        e.preventDefault();
        if (inputText.value) {
            todolist_list_container.innerHTML += createTask(inputText.value);
            Array.from(todolist_list_container.children).forEach(myFunction);
            form.reset();
            
        }   else {
            alert("Please Enter a Value for Task! ")
        }
        completedTaskCount();
        
    })



        /////  delete task:

        todolist_list_container.addEventListener("click", e => {
            if (e.target.classList.contains("btn")) {
                e.target.parentElement.remove();
                completedTaskCount();
            }
        })
        


        ///// check & uncheck Task:


                ////////   1. Method:  with classlist

        // todolist_list_container.addEventListener("click", e => {
        //     if (e.target.classList.contains("unchecked")) {
        //         e.target.className = "checked";
            
        //     }   else {
        //         e.target.className = "unchecked";
        //     }
        //     completedTaskCount();
        // })



                //////////  2. Method foreach ile:

        // Üstte method da atalarina ulastigimiz icin onun classlist ini return ettik
        /// ama burada elemanlarin bizzat kendilerine ulastik bu nedenle classname 
        // kullandik

            Array.from(todolist_list_container.children).forEach(myFunction);
        
            function myFunction(x) {
                
                    x.addEventListener("click", e => {
                    if (e.target.className == "unchecked") {
                        e.target.className = "checked";
                    
                    }   else if (e.target.className == "checked") {
                        e.target.className = "unchecked";
                    }
                    completedTaskCount();
                })
            }    

                /// burada kendimiz toggle yaptik
                // e.target.setAttribute("class","checked");


    // burada form kullandigimiz icin form un kendi özelliklerinden
    // tanimlama yapmadan enter calisiyor
    // dene keypress 

    ///  firstchild lastchild dene

    /// li before li den önce gelen elementi sekillendirmek icin 
    // uni code css nedir ??

    // privent önceden tanimlanan bir func ydaa birsey varsa defaulunda  olan özelliklerin eklenmesi bundan sonra ben sana yeni birsey tanimlayacagim