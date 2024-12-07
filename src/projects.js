
class project 
{
    constructor(tasks = []) 
    {
        this.tasks = tasks;
    }

    get tasks() 
    {
        return this._tasks;
    }

    set tasks(value) 
    {
        this._tasks = value;
    }

    addTask(task) 
    {
        this._tasks.push(task);
    }
}

export default project;