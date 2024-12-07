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

function saveTaskButton() 
{
    const saveTask = document.getElementById("save-button");
    const taskDialog = document.getElementById("task-dialog");

    closeTask.addEventListener("click", (e) =>
    {
        e.preventDefault();
        taskDialog.close();
    })

}

export {newTaskButton, closeTaskButton};