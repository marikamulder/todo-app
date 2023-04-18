import { useState } from "react";
import './Form.scss';
import { HiPlus } from 'react-icons/hi';

function Form({ onAddTask }) {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleFormSubmission = (event) => {
        event.preventDefault();

        if (description === '') {
            setErrorMessage('Enter a description.');
        }
        else {
            onAddTask(description, status);
            
            setDescription('')
            setStatus(false);
            setErrorMessage('');
        }
    }
        
    return (
        <form onSubmit={handleFormSubmission}>
            <h2>Add a new task:</h2>

            {errorMessage !== '' && (
                <div>{errorMessage}</div>
            )}
            <div className="formBox">
                <label className="descriptInput">
                Description:
                    <input
                    type='text'
                    maxLength={150}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    />
                </label>

                <div className="formBottomBox">
                    <label className="selectInput">
                    Status:
                        <select
                            value={status}
                            onChange={(event) => setStatus(event.target.value)}
                        >
                        <option value={false}>Open</option>
                        <option value={true}>Completed</option>
                        </select>
                    </label>
                    <button><HiPlus className="plusCircle"/>Add</button>
                </div>
            </div>
        </form>
    );
}
    
export default Form;