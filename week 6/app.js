var TaskButton = document.getElementById("addTask");
    var Input = document.getElementById("newTask");
    var todo = document.getElementById("todolist");

TaskButton.addEventListener('click', function(event) {
    
    var TaskName = Input.value;
    Input.value = "";
    
    var elem = document.createElement("h1");
    elem.innerHTML = TaskName;
    todo.appendChild(elem);
    
    
    
        press.onclick = function() {
            this.remove();
            elem.remove();
            
}
        

            
    todo.appendChild(press);
    
});
            
var TaskButton2 = document.getElementById("removeTask");
    document.getElementById("removeTask").onclick = function() {
    
    todo.innerHTML =""; // .remove();
            

}