import Task from './Task/Task';
import './Tasks.scss';
import { BsEraser } from 'react-icons/bs'

function Tasks({ tasks, onStatusChange, onTaskRemove, onClearTasks }) {  
    
    return (
        <div className='listedTasks'>
            <h2>These are the tasks:</h2>
            {tasks.map(
                (task, index) => (
                    <Task
                    key={index}
                    task={task}
                    onStatusChange={onStatusChange}
                    onTaskRemove={onTaskRemove}
                    />
                )
            )}
            
            <button className='eraseButton' onClick={onClearTasks}><BsEraser />Clear Tasks</button>
        </div>
    );
}
    
export default Tasks;
    