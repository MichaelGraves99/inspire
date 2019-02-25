export default class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description || 'Data Not Found'
    this.todoId = data._id
    this.user = data.user
    this.message = data.message
  }

  getTodoItem() {
    return `
    <div class="bg-transparent">
      <h5 class="todo-item">${this.description}</h5>
    </div>
    `
  }




}