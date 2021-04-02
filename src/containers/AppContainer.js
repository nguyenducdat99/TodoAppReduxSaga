import App from '../App';
import { connect } from 'react-redux';
import * as actions from '../actions/Actions';

function AppContainer(props) {
    // get props
    const {toggleVal, onToggleForm} = props;
    
    return (
        <App 
            toggleVal={toggleVal}
            onToggleForm={onToggleForm}
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
        onToggleForm : () => {
            dispatch(actions.onToggle());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);