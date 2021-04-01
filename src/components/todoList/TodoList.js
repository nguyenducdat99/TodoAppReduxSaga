// import style library
import './TodoList.scss';

function TodoList() {
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
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                            <tr>
                                <td>Tivi</td>
                                <td>60.000</td>
                                <td>
                                    <span className="todo-list__status-enable">Kích hoạt</span>
                                    <span className="todo-list__status-disable">Ẩn</span>
                                </td>
                                <td>
                                    <i className="fa fa-pencil-square-o icon-edit" aria-hidden="true" title="Sửa"></i>&nbsp;
                                    <i className="fa fa-trash-o icon-delete" aria-hidden="true" title="Xóa"></i>
                                </td>
                            </tr>
                        </tbody>
                    
                    </table>
            </div>
        </div>
    )
}
export default TodoList;