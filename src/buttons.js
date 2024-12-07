import task from "./tasks";

function newTaskButton() 
{
    const addTask = document.getElementById("add-task");
    const taskDialog = document.getElementById("task-dialog");

    addTask.addEventListener("click", () => 
    {
        taskDialog.showModal();

    });
    
}

function closeTaskButton() 
{
    const closeTask = document.getElementById("cancel-button");
    const taskDialog = document.getElementById("task-dialog");

    closeTask.addEventListener("click", (e) =>
    {
        e.preventDefault();
        taskDialog.close();
    })

}

function saveTaskButton(project) 
{
    const saveTask = document.getElementById("save-button");
    const taskDialog = document.getElementById("task-dialog");

    saveTask.addEventListener("click", (e) =>
    {
        e.preventDefault();

        const title = document.querySelector('.title').value;
        const description = document.querySelector('.description').value;
        const dueDate = document.querySelector('.due-date').value;
        const priority = document.querySelector('.priority').value;

         let task1 = new task(title, description, dueDate, priority);

         project.addTask(task1);
        

        taskDialog.close();
    })

}

export {newTaskButton, closeTaskButton, saveTaskButton};