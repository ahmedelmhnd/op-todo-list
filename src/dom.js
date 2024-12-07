function renderCard(task) 
{
    const container = document.querySelector(".card-container");

    const card = document.createElement("div");
    card.classList = "card";

    const title = document.createElement("h1");
    title.textContent = task.title;

    const desc = document.createElement("p");
    desc.textContent = task.desc;

    const dueDate = document.createElement("h2");
    dueDate.textContent = task.dueDate;

    const priority = document.createElement("h2");
    priority.textContent = task.priority;

    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(dueDate);
    card.appendChild(priority);
}

function refresh() 
{
    const container = document.querySelector(".card-container");
    container.innerHTML = "";
}

function fillProject(projectTasks) 
{
    refresh();

    projectTasks.forEach(task => 
    {
        renderCard(task);
    });
}

export {fillProject};