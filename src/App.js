import './App.scss';
import TodoForm from './containers/TodoFormContainer';
import TodoList from './containers/TodoListContainer'

// return ui
function App(props) {
	// get props
	const {toggleVal,onToggleForm} = props;

	// handle when click button
	var onHandleButton = () => {
		onToggleForm();
	}

	return (
			<div className="todo-app">
				<h1>Thực hành Redux-saga</h1>
				<div className={toggleVal?'todo-app__grid':''}>
					{
						toggleVal?
						<div className='todo-app__grid-1'>
							<TodoForm />
						</div>:
						''
					}
					<div className='todo-app__grid-2'>
						<button type='text'
							className='todo-app__add-btn'	
							onClick={onHandleButton}
						>Thêm mới</button>
						<TodoList />
					</div>
				</div>
			</div>
	);
}

export default App;
