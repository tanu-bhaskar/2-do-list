import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  newTask : string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Create a To-Do-List',
        completed: false
      }
    ]
  }

  add() {
    if(this.newTask.length > 0) {
      this.todos.push({content: this.newTask, completed: false});
      this.newTask = '';
    }
  }

  toggleDone(id : number) {
    this.todos.map((v, i) => {
      if(i == id) {
        v.completed = !v.completed;
      }
    });
  }

  remove(id : number) {
    this.todos = this.todos.filter((v, i) => i!=id);
  }

}
