import App from '../App';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/Actions';
import { useEffect } from 'react';
import TodoForm from '../components/todoForm/TodoForm';
import TodoList from '../components/todoList/TodoList';

function AppContainer(props) {
    // get props
    const {
        toggleVal, 
        onToggleForm, 
        loadingVal, 
        onFetchProducts, 
        productsVal,
        onCloseForm,
        onAddProduct,
        onSelectProduct
    } = props;
    
    // return component todoForm
    const todoForm = () => {
        return <TodoForm 
            onCloseForm={onCloseForm}
            onAddProduct={onAddProduct}
        />
    }

    // return todoItem use in todo list
    const todoItems = productsVal.map(
        (element, index) => {
            return (
                <tr key={index}>
                    <td>{element.name}</td>
                    <td>{element.price} đ</td>
                    <td>
                        {
                            element.status?
                            <span className="todo-list__status-enable">Kích hoạt</span>:
                            <span className="todo-list__status-disable">Ẩn</span>
                        }
                    </td>
                    <td>
                        <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                        <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                    </td>
                </tr>
            )
        }
    )

    // return component todoList
    const todoList = () => {
        return <TodoList 
            todoItems={todoItems}
        />
    }

    // load data
    useEffect(
        () => {
            onFetchProducts();

            // eslint-disable-next-line
        },[]
    )

    return (
        <App 
            toggleVal={toggleVal}
            onToggleForm={onToggleForm}
            loadingVal={loadingVal}
            todoForm={todoForm}
            todoList={todoList}
        />
    )
}


AppContainer.propTypes = {
    toggleVal: PropTypes.bool,
    loadingVal: PropTypes.bool,
    onToggleForm: PropTypes.func,
    onFetchProducts: PropTypes.func,
    onCloseForm: PropTypes.func,
    onAddProduct: PropTypes.func,
    onSelectProduct: PropTypes.func
}

const mapStateToProps = state => {
    return {
        toggleVal: state.toggleForm,
        loadingVal: state.loading,
        productsVal: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.onToggle());
        },
        onFetchProducts: () => {
            dispatch(actions.onFetchProduct());
        },
        onCloseForm: () => {
            dispatch(actions.oncloseForm());
        },
        onAddProduct: product => {
            dispatch(actions.onAddProduct(product));
        },
        onSelectProduct: product => {
            dispatch(actions.onSelectProduct(product));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);