// import style library
import './TodoList.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function TodoList(props) {
    // declare state
    const [keyword,setKeyword] = useState('');


    // get props
    const {
        todoItems,
        onFilterProduct,
        onFetchProducts,
        recoverVal
    } = props;
    
    // handle when input keyword search
    const onHandleFilter = event => {
        const value = event.target.value;

        setKeyword(value);
    }
    // load data 
    useEffect(
        () => {
            if (keyword.trim() !== '') {
                onFilterProduct(keyword);
            }else{
                onFetchProducts();
            }
            
            //eslint-disable-next-line
        },[keyword]
    )
        
    useEffect(
        // reset keword
        () => { 
            if(!recoverVal) setKeyword('');
            // eslint-disable-next-line
        },[recoverVal]
    )
    
        return (
        <div className="todo-list">
            <input type='text'
                placeholder='Tìm kiếm nhanh...' 
                value={keyword}
                onChange={onHandleFilter}
            />
            <div className="todo-list__list-item">
                    <table>
                        <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                todoItems
                            }
                        </tbody>
                    
                    </table>
            </div>
        </div>
    )
}

TodoList.propTypes = {
    todoItems: PropTypes.array
}

export default TodoList;