import "./styles.css";
import project from "./projects";
import task from "./tasks";
import {fillProject} from "./dom";
import { closeTaskButton, newTaskButton, saveTaskButton } from "./buttons";

newTaskButton();
closeTaskButton();



let project1 = new project();
let project2 = new project();

saveTaskButton(project1);

let task1 = new task("dog walk","walk max","12/12/2045","high");
let task2 = new task("ptoateo","patata","12/12/2045","high");

project1.addTask(task1);
project1.addTask(task1);
project1.addTask(task1);

project2.addTask(task2);
project2.addTask(task2);
project2.addTask(task2);

fillProject(project1.tasks);

const p1 = document.getElementById("1");
const p2 = document.getElementById("2");

p1.addEventListener("click", () =>
{
    fillProject(project1.tasks);
})

p2.addEventListener("click", () =>
    {
        fillProject(project2.tasks);
    })

console.log(task1.title + task1.desc + task1.dueDate + task1.priority);