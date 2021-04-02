import TodoForm from '../components/todoForm/TodoForm'
import { connect } from 'react-redux';
import * as actions from '../actions/Actions';

function TodoFormContainer(props) {
    // get props
    const {onCloseForm} = props;
    
    return (
        <TodoForm 
            onCloseForm={onCloseForm}
        />
    )
}
const mapStateToProps = state => {
    return {
        toggleVal: state.toggleForm
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onCloseForm: () => {
            dispatch(actions.oncloseForm())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoFormContainer);