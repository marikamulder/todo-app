import './Task.scss';
import { IoTrashOutline } from 'react-icons/io5';
import { MdPublishedWithChanges } from 'react-icons/md';

function Task(props) {
    const handleStatusClick = () => {
        const id = props.task.id;
        props.onStatusChange(id);
    }

    const handleRemoveClick = () => {
        const id = props.task.id;
        props.onTaskRemove(id);
    }

    return (
        <div className='taskBox'>
            <h3>{props.task.description}</h3>
            <div>Id: {props.task.id}</div>
            <div>
                Status: {props.task.done
                ? 'Completed'
                : 'Open'}
            </div>
            <div className='buttonTask'>
            <button onClick={handleStatusClick}><MdPublishedWithChanges />Change Status</button>
            <button onClick={handleRemoveClick}><IoTrashOutline />Remove Task</button>
            </div>
        </div>
    );
}
    
export default Task;