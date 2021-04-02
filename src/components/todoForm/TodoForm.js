// import style library
import { useEffect, useState } from 'react';
import './TodoForm.scss';

function TodoForm(props) {
    // declare state 
    const [valueForm, setValueForm] = useState(
        {
            id: '',
            name: '',
            price: '',
            status: true
        }
    )
    // get props;
    const {
        onCloseForm,
        onAddProduct,
        productSelectVal,
        onResetSelectProduct,
        onEditProduct
    } = props;

    // load data for form
    useEffect(
        () => {
                setValueForm(
                    {
                        ...valueForm,
                        id: productSelectVal.id,
                        name: productSelectVal.name,
                        price: productSelectVal.price,
                        status: productSelectVal.status
                    }
                )
            // eslint-disable-next-line
        },[productSelectVal]
    )


    // handle when click icon exit
    const onHandleClose = () => {
        onResetSelectProduct({
            id: '',
            name: '',
            price: '',
            status: true
        });
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
        
        let confirm =   window.confirm(
            "Sản phẩm: " + valueForm.name + 
            "\nGiá: " + valueForm.price + 
            "\nBạn có muốn lưu lại không?"
        );
        if (valueForm.id!=='') {
            if (confirm) {
                onEditProduct(valueForm);
            }
        }else{
            if (confirm) {
                onAddProduct(valueForm);
            }
        }

        onResetForm();
        onHandleClose();
    }

    // reset input 
    const onResetForm = () => {
        setValueForm({
            ...valueForm,
            id: -1,
            name: '',
            price: '',
            status: true
        })
    }

    return (
        <div className="todo-form">
            <form action="" method="" onSubmit={onHandleSubmit}>
                <div className='todo-form__form-group'>
                    <h3>
                        {
                            productSelectVal.id.trim()!==''?'Sửa sản phẩm':'Thêm sản phẩm'
                        }
                    </h3>
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
                            required
                        />
                </div>
                <div className='todo-form__form-group'>
                        <input type='number'
                            className='todo-form__form-control'
                            placeholder="Giá"
                            value={valueForm.price}
                            name='price'
                            min={0}
                            onChange={onHandleChangeInput}
                            required
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
                <button type='submit' className="todo-form__submit">Lưu lại</button>
            </form>
        </div>
    )
}
export default TodoForm;