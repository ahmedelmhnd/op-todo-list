import "./styles.css";
import project, { addProject } from "./projects";
import task from "./tasks";
import { closeProjectButton, closeTaskButton, newProjectButton, newTaskButton, saveProjectButton, saveTaskButton } from "./buttons";
import { fillProject } from "./dom";

let list = [];

newTaskButton(list);
closeTaskButton();
newProjectButton();
closeProjectButton();


saveProjectButton(list);

let defaultProject = new project([], "Default", "na");
let project2 = new project();
addProject(list, defaultProject);

saveTaskButton(defaultProject, list);


let task1 = new task("dog walk","walk max","12/12/2045","high");
let task2 = new task("ptoateo","patata","12/12/2045","high");

list[0].addTask(task1);
defaultProject.addTask(task1);
defaultProject.addTask(task1);

project2.addTask(task2);
project2.addTask(task2);
project2.addTask(task2);

fillProject(defaultProject.tasks);

const p1 = document.getElementById("1");
const p2 = document.getElementById("2");

console.log(task1.title + task1.desc + task1.dueDate + task1.priority);