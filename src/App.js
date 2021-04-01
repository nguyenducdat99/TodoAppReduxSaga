import './App.scss';
import TodoForm from './containers/TodoFormContainer';
import TodoList from './containers/TodoListContainer'
function App() {
	return (
		<>
			<h1>Thực hành Redux-saga</h1>
			<div className="todo-app">
				<TodoForm />
				<TodoList />
			</div>
		</>
	);
}

export default App;
