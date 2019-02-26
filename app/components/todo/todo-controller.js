import TodoService from "./todo-service.js";

const _ts = new TodoService()

// function _drawTodos() {
// 	let template = ''
// 	let todos = _ts.Todos
// 	todos.forEach(t => {
// 		template += t.getTodoItem()
// 	})
// }

function _drawTodos() {

	let template = ''
	let toDoList = _ts.Todos
	template += `
		<div class="text-light txt-shadow bg-dk-transparent d-inline-block rounded shadow p-2">
				<h3>Tasks</h3>
				<p>You have ${_ts.Todos.length} tasks</p>
				<ul class="pl-0 overflow-auto">
		`
	toDoList.forEach(td => {
		template += td.TodoItem
	})
	template += `		
	<form onsubmit="app.controllers.todoController.addTodo(event)">
			<input type="text" name="description" placeholder="Enter Task">
			<button class="btn btn-success" type="submit">Submit</button>
	</form>
	`
	document.querySelector('#todos').innerHTML = template
}


function _drawError() {
	console.error('[TODO ERROR]', _ts.TodoError)
	document.querySelector('#todo-error').textContent = `${_ts.TodoError.message}`
}

//Public
export default class TodoController {
	constructor() {
		_ts.addSubscriber('todos', _drawTodos)
		_ts.addSubscriber('error', _drawError)
		_ts.getTodos()
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			description: form.description.value
		}
		_ts.addTodo(todo)
		form.reset()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_ts.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_ts.removeTodo(todoId)
	}

}



