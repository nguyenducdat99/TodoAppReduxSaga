// import style library
import './TodoForm.scss';

function TodoForm() {
    return (
        <div className="todo-form">
            <form action="" method="">
                <div className='todo-form__form-group'>
                    <h3>Thêm sản phẩm</h3>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className='todo-form__form-group'>
                        <input type='text'
                            className='todo-form__form-control'
                            placeholder="Tên sản phẩm"
                        />
                </div>
                <div className='todo-form__form-group'>
                        <input type='number'
                            className='todo-form__form-control'
                            placeholder="Giá"
                            min={0}
                        />
                </div>
                <div className='todo-form__form-group'>
                        <label>
                            <input type="radio" name="status"/> Kích hoạt
                        </label>&nbsp;&nbsp;
                        <label>
                            <input type="radio" name='status'/> Ẩn
                        </label>
                </div>
                <button type='submit' className="todo-form__submit">Thêm</button>
            </form>
        </div>
    )
}
export default TodoForm;