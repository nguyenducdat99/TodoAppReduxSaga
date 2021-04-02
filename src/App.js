import './App.scss';
import PropTypes from 'prop-types';
import Loading from './components/globalCoponent/loading/Loading';

// return ui
function App(props) {
	// get props
	const {
		toggleVal, 
		onToggleForm, 
		loadingVal,
		todoForm,
		todoList
	} = props;

	// handle when click button
	var onHandleButton = () => {
		onToggleForm();
	}

	return (
		<>
			{
				loadingVal?
				<Loading />:
				''
			}
			<div className="todo-app">
				<h1>Thực hành Redux-saga</h1>
				<div className={toggleVal?'todo-app__grid':''}>
					{
						toggleVal?
						<div className='todo-app__grid-1'>
							{
								todoForm()
							}	
						</div>:
						''
					}
					<div className='todo-app__grid-2'>
						<button type='text'
							className='todo-app__add-btn'	
							onClick={onHandleButton}
						>Thêm mới</button>
						{
							todoList()
						}
					</div>
				</div>
			</div>
		</>
	);
}

App.propTypes = {
	todoForm: PropTypes.func,
	todoList: PropTypes.func
}

export default App;
