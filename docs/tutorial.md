---
TypeScript Tutorial
---

# Goal

In this tutorial, you will learn how to create a simple Task-App.

# Previous Knowledge

I'll assume you already know the basics of JavaScript and HTML.

# What you'll learn

You'll learn about Union Types, Interfaces, Arrays, Type Assertion and Functions

# Tutorial

```TS
// Union Types:
// Defines exactly which values are allowed
type Priority = "Niedrig" | "Mittel" | "Hoch";
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
# Result

# What could go wrong?
