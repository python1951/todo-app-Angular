import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-App';
  todos = [
    {
      label:"Eating Breakfast",
    },
    {
      label:"Giving Lunch",
    },
    {
      label:"Going to Office",
    }
  ];
  addTodo(newtodolabel: any){
   var  newtodo ={
     label : newtodolabel,
   }
   this.todos.push(newtodo);
  }
  deleteTodo(todo: any){
    this.todos = this.todos.filter( p=> p.label !== todo.label)


  }
}
