import task from "./tasks";
import project from "./projects";

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


function newProjectButton() 
{
    const addProject = document.getElementById("add-project");
    const projectDialog = document.getElementById("project-dialog");

    addProject.addEventListener("click", () => 
    {
        projectDialog.showModal();

    });
    
}

function closeProjectButton() 
{
    const closeProject = document.getElementById("project-cancel-button");
    const projectDialog = document.getElementById("project-dialog");

    closeProject.addEventListener("click", (e) =>
    {
        e.preventDefault();
        projectDialog.close();
    })

}

function saveProjectkButton(projectList) 
{
    const saveProject = document.getElementById("project-save-button");
    const projectDialog = document.getElementById("project-dialog");

    saveProject.addEventListener("click", (e) =>
    {
        e.preventDefault();

        const title = document.querySelector('.project-title').value;
        const description = document.querySelector('.project-description').value;

         let project1 = new project([], title, description);

         projectList.push(project1);
        
        projectDialog.close();
    })

}

export {newTaskButton, closeTaskButton, saveTaskButton, newProjectButton, closeProjectButton, saveProjectkButton};