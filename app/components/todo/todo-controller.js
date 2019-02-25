import TodoService from "./todo-service.js";

const _ts = new TodoService()

function _drawTodos() {
	let template = ''
	let todos = _ts.Todos
	todos.forEach(t => {
		template += t.getTodoItem()
	})
}

function _drawError() {
	console.error('[TODO ERROR]', _ts.TodoError)
	//document.querySelector('#todo-error').textContent = `${_ts.TodoError.message}`
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
