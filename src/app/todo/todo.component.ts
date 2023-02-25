import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  new:string="";
  todos:Todo[] = [
    {
      task: "Laundry",
      completed: false
    },
    {
      task: "Shopping",
      completed: false
    },
    {
      task: "Survive",
      completed: false
    },
    {
      task: "Learn Coding",
      completed: false
    },
  ];

  addTodo(){
    let addT: Todo = {
      task: this.new,
      completed: false
    };
    this.todos.push(addT);
  }

  CompleteTask(i: number) {
    this.todos[i].completed = true;
  }

}
