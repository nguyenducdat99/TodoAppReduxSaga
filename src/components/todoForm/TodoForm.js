// import style library
import { useState } from 'react';
import './TodoForm.scss';

function TodoForm(props) {
    // declare state 
    const [valueForm, setValueForm] = useState(
        {
            id: -1,
            name: '',
            price: 0,
            status: true
        }
    )

    // get props;
    const {
        onCloseForm,
        onAddProduct
    } = props;

    // handle when click icon exit
    const onHandleClose = () => {
        onCloseForm();
    }

    // handle when change value input
    const onHandleChangeInput = event => {
        const value = event.target.value;
        const name = event.target.name;

        setValueForm(
            {
                ...valueForm,
                [name]: value
            }
        )
    }

    //handle when form submit
    const onHandleSubmit = event => {
        event.preventDefault();
        onAddProduct(valueForm);
        onResetForm();
        onHandleClose();
    }

    // reset input 
    const onResetForm = () => {
        setValueForm({
            ...valueForm,
            id: -1,
            name: '',
            price: 0,
            status: true
        })
    }

    return (
        <div className="todo-form">
            <form action="" method="" onSubmit={onHandleSubmit}>
                <div className='todo-form__form-group'>
                    <h3>Thêm sản phẩm</h3>
                    <i className="fa fa-times" aria-hidden="true"
                        title="Thoát"
                        onClick={onHandleClose}
                    ></i>
                </div>
                <div className='todo-form__form-group'>
                        <input type='text'
                            className='todo-form__form-control'
                            placeholder="Tên sản phẩm"
                            value={valueForm.name}
                            name='name'
                            onChange={onHandleChangeInput}
                        />
                </div>
                <div className='todo-form__form-group'>
                        <input type='number'
                            className='todo-form__form-control'
                            placeholder="Giá"
                            min={0}
                            value={valueForm.price}
                            name='price'
                            onChange={onHandleChangeInput}
                        />
                </div>
                <div className='todo-form__form-group'>
                        <select
                            name='status'
                            value={valueForm.status}
                            className="todo-form__form-control"
                            onChange={onHandleChangeInput}
                        >
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                </div>
                <button type='submit' className="todo-form__submit">Thêm</button>
            </form>
        </div>
    )
}
export default TodoForm;