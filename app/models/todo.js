export default class Todo {
  constructor(data) {
    this._id = data.id || data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get TodoItem() {
    return `
    <div class="bg-transparent">
      <h5 class="todo-item">${this.description}</h5>
    </div>
    `
  }




}