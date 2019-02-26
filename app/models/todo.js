export default class Todo {
  constructor(data) {
    this._id = data.id || data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get TodoItem() {
    return `
    <div class="card" style="width: 18rem;">
      <li class="todo-item"><span>${this.description}   </span><span class="m-1" onclick="app.controllers.todoController.removeTodo('${this._id}')"><i class="fas fa-trash-alt"></i></span></li>
    </div >
      `
  }

}

