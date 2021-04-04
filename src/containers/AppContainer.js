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
        onSelectProduct,
        onDeleteProduct,
        productSelectVal,
        onResetSelectProduct,
        onEditProduct,
        onUpdateStatus,
        onFilterProduct
    } = props;
    
    // return component todoForm
    const todoForm = () => {
        return <TodoForm 
            onCloseForm={onCloseForm}
            onAddProduct={onAddProduct}
            productSelectVal={productSelectVal}
            onResetSelectProduct={onResetSelectProduct}
            onEditProduct={onEditProduct}
        />
    }

    // handle when delete product
    const onHandleDelete = id => {
        const confirm = window.confirm('Bạn muốn xóa chứ?');
        
        if (confirm) {
            onDeleteProduct(id)
        }
    }

    // handle when edit product
    const onHandleEdit = id => {
        onSelectProduct(id);
    }

    // hanlde when update status
    const onHandleUpdate = product => {
        const confirm = window.confirm("Bạn muốn thay đổi không?");

        if (confirm) {

            onUpdateStatus({
                ...product,
                status: product.status===true?false:true
            })
        }
    }

    // return todoItem use in todo list
    const todoItems = productsVal.map(
        (element, index) => {
            return (
                <tr key={index}>
                    <td>{element.name}</td>
                    <td>{element.price} đ</td>
                    <td>
                        <span 
                            className={
                                element.status?
                                "todo-list__status-enable":
                                "todo-list__status-disable"
                            }
                            onClick={
                                () => {
                                    onHandleUpdate(element)
                                }
                            }
                        >{
                            element.status?"Kích hoạt":"ẩn"
                        }</span>
                    </td>
                    <td>
                        <i className="fa fa-pencil-square-o icon-edit"
                            aria-hidden="true" 
                            title="Sửa"
                            onClick={
                                () => {
                                    onHandleEdit(element.id)
                                }
                            }
                        ></i>&nbsp;
                        <i className="fa fa-trash-o icon-delete" 
                            aria-hidden="true" 
                            title="Xóa"
                            onClick={
                                () => {
                                    onHandleDelete(element.id)
                                }
                            }
                        ></i>
                    </td>
                </tr>
            )
        }
    )

    // return component todoList
    const todoList = () => {
        return <TodoList 
            todoItems={todoItems}
            onFilterProduct={onFilterProduct}
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
            productSelectVal={productSelectVal}
            onResetSelectProduct={onResetSelectProduct}
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
    onSelectProduct: PropTypes.func,
    onDeleteProduct: PropTypes.func,
    productSelectVal: PropTypes.object,
    onResetSelectProduct: PropTypes.func,
    onEditProduct: PropTypes.func,
    onUpdateStatus: PropTypes.func,
    onFilterProduct: PropTypes.func
}

const mapStateToProps = state => {
    return {
        toggleVal: state.toggleForm,
        loadingVal: state.loading,
        productsVal: state.products,
        productSelectVal: state.productSelect
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
        onSelectProduct: id => {
            dispatch(actions.onSelectListen(id));
        },
        onDeleteProduct: id => {
            dispatch(actions.onDeleteProduct(id));
        },
        onResetSelectProduct: productDefault => {
            dispatch(actions.onSelectSuccess(productDefault));
        },
        onEditProduct: product => {
            dispatch(actions.onEditListen(product));
        },
        onUpdateStatus: product => {
            dispatch(actions.onUpdateListen(product));
        },
        onFilterProduct: keyword => {
            dispatch(actions.onFilterListen(keyword));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);