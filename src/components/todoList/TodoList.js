// import style library
import './TodoList.scss';
import PropTypes from 'prop-types';

function TodoList(props) {

    // get props
    const {
        todoItems
    } = props;
    
    return (
        <div className="todo-list">
            <input type='text' placeholder='Tìm kiếm nhanh...' />
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