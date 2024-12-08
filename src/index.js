import "./styles.css";
import project, { addProject } from "./modules/projects";
import task from "./modules/tasks";
import { closeProjectButton, closeTaskButton, newProjectButton, newTaskButton, saveProjectButton, saveTaskButton } from "./modules/buttons";
import { fillProject } from "./modules/dom";

let list = [];

newTaskButton(list);
closeTaskButton();
newProjectButton();
closeProjectButton();


saveProjectButton(list);

let defaultProject = new project([], "Default", "na");

addProject(list, defaultProject);

saveTaskButton(defaultProject, list);


let task1 = new task("Dog Walk", "Take the dog for a walk in the park", "12/12/2045", "Low");
let task2 = new task("Grocery Shopping", "Buy milk, eggs, and bread from the supermarket", "12/12/2045", "Medium");
let task3 = new task("Workout Session", "Complete a 30-minute cardio workout at the gym", "12/12/2045", "Low");
let task4 = new task("Project Submission", "Submit the final report for the group project", "12/12/2045", "High");



defaultProject.addTask(task1);
defaultProject.addTask(task2);
defaultProject.addTask(task3);
defaultProject.addTask(task4);

fillProject(defaultProject.tasks);

