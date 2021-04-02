// import style library
import './Loading.scss'
import icon from './iconLoading.gif';

function Loading() {
    return (
        <div className="loading">
            <img src={icon} alt='loading'/>
        </div>
    )
}

export default Loading;