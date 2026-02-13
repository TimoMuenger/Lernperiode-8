---
TypeScript Tutorial
---

# Goal

In this tutorial, you will learn how to create a simple Task-App with TypeScript.

# Previous Knowledge

I'll assume you already know the basics of JavaScript and HTML.

# What you'll learn

You'll learn about Union Types, Interfaces, Arrays, Type Assertion and Functions

# Tutorial

```TS
// Union Types:
// Defines exactly which values are allowed
type Priority = "Low" | "Medium" | "High";
```
```TS
// Interfaces:
// If you define the shape of the object, every task has the same structur
interface Task {
    id: number;
    title: string;
    isCompleted: boolean;
    priority: Priority; 
}
```
```TS
// Arrays:
// This spesific array is only allowed to contain "Task" objects
let tasks: Task[] = [];
```
```TS
// Type Assertion 
// Other than in JavaScript you need to use as HTML...
let taskInput = document.getElementById("taskInput") as HTMLInputElement;
let priorityInput = document.getElementById("priorityInput") as HTMLSelectElement;
let addBtn = document.getElementById("addBtn") as HTMLButtonElement;
let taskList = document.getElementById("taskList") as HTMLUListElement;
```
```TS
// Union Types:
// Defines exactly which values are allowed
type Priority = "Niedrig" | "Mittel" | "Hoch";
```
```TS
// Functions:
// You need to define the return value of a fuction for example ": void"
function addTask(): void { 
    let title: string = taskInput.value;
    let priority = priorityInput.value as Priority; 

    if (title === "") return;

    let newTask: Task = {
        id: Date.now(),
        title: title,
        isCompleted: false,
        priority: priority
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = "";
}

function toggleTask(id: number): void {
    let task = tasks.find(t => t.id === id);
    if (task) {
        task.isCompleted = !task.isCompleted;
        renderTasks();
    }
}
```

# Result
If you add some Event Listeners and creat an appropriate HTML file the whole thing should look something like this:

![Recording 2026-02-13 110836](https://github.com/user-attachments/assets/c70305ad-abfb-4faa-96f6-ee87ced929ec)

# What could go wrong?

A very common mistake that often happened to me is that you forget to compile the TypeScript file to JavaScript (VS Terminal: tsc fileName.ts)
