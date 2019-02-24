import TodoService from "./todo-service.js";

const _ts = new TodoService()

function _drawTodos() {
	//WHAT IS MY PURPOSE?
}

function _drawError() {
	console.error('[TODO ERROR]', _ts.TodoError)
	//document.querySelector('#todo-error').textContent = `${_ts.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_ts.addSubscriber('error', _drawError)
		_ts.getTodos()
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		_ts.addTodo(todo)
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
