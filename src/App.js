import { useState, useEffect, useRef } from "react";
//import uuid from "react-uuid";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form"
import Help from "./components/Help/Help"
import HelpAdd from "./components/Help/HelpAdd"
import HelpRemove from "./components/Help/HelpRemove"
import HelpChange from "./components/Help/HelpChange"
import NotFound from "./components/NotFound/NotFound"
import './App.scss';
import { Routes, Route } from "react-router-dom";
import { ref, push, set, onValue, remove, update } from 'firebase/database';
import { database } from './components/Database/FirebaseConfig.js';

function App() {

  const db = database;
  const listRef = ref(db, '/tasks');
  const pushRef = push(listRef);
  const [loading, setLoading] = useState(true);

  const [mode, setMode] = useState('Dark mode');

  function onShiftMode() {
    
    if (mode === 'Dark mode') {
      setMode('Light mode');
      document.documentElement.setAttribute('data-theme', 'dark');

    } else if (mode === 'Light mode') {
      setMode('Dark mode');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  const [tasks, setTasks] = useState(
    [
      /*{
        id: uuid(),
        description: "Walk the dog",
        done: true
      }*/
    ]
  );

  const handleClearTasks = () =>{
    setTasks([]);

    remove(ref(db, '/tasks/'))
      .then(() => {
      console.log('All tasks deleted successfully!');
      })
      .catch((error) => {
      console.log('Error:', error);
      });
  }

  const handleStatusChange = (id) =>{

    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {

        const updates = {};
        updates['/tasks/' + id] = {
          id: task.id,
          description: task.description,
          done: !task.done
        };
        update(ref(db), updates)
          .then(() => {
          console.log('User successfully updated!');
          })
          .catch((error) => {
          console.log('Error:', error);
          });
          task.done = !task.done;
        }
        
    });
    setTasks(updatedTasks);

  }

  const handleTaskRemove = (id) => {

    remove(ref(db, '/tasks/' + id))
      .then(() => {
      console.log('Task successfully deleted!');
      })
      .catch((error) => {
      console.log('Error:', error);
      });

    const filteredTasks = tasks.filter(
        (task) => task.id !== id
      );
    setTasks(filteredTasks);

  }

  const handleAddTask = (description, status) => {
    setTasks([
    ...tasks,
      {
        id: pushRef.key,
        description: description,
        done: status
      }
    ]);
    const data = { id: pushRef.key, description: description, done: status };
    set(pushRef, data)
      .then(() => {
        console.log('Task successfully added:', pushRef.key);
      })
      .catch((error) => {
        console.log('Error:', error);
      });

  }

  function useOnceEffect() {
    const hasRun = useRef(false);
    useEffect(() => {
      if (!hasRun.current) {
      
      const dbRef = ref(db, '/tasks');
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        const found = tasks.some(el => el.id === childKey);
          if (!found) {
              setTasks((tasks) => [ 
                ...tasks,
                {
                  id: childData.id,
                  description: childData.description,
                  done: childData.done
                }
              ]);
          }
        });
        setLoading(false);
        }, { onlyOnce: true });

        hasRun.current = true;
      }
    }, []);
  }
  
  useOnceEffect();

  return (
    <div>
      <div className="colourMode">
        <Header/>
        <button className="colourButton" onClick={onShiftMode}>{mode}</button>
      </div>
      <div className="sizeShift">
      <Routes>
        <Route path="/" element={ <div>{loading ? (
          <div><h1>Loading...</h1></div>
          ) : (
        <div><Tasks
          tasks={tasks}
          onStatusChange={handleStatusChange}
          onTaskRemove={handleTaskRemove}
          onClearTasks={handleClearTasks}/> </div>)}</div> } />
        <Route path="/add" element={ <Form
          onAddTask={handleAddTask}
        /> } />
        <Route path="/help" element={ <Help /> }>
          <Route path="add" element={ <HelpAdd /> } />
          <Route path="remove" element={ <HelpRemove /> } />
          <Route path="change" element={ <HelpChange /> } />
        </Route>
        <Route path="*" element={ <NotFound /> } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
