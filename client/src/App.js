
import Form from './form';
import List from './list';
import Task from './task';
import { useState, useEffect } from 'react'; // importar hook de estado
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks')
      .then(res => {
        console.log(res.data);
        setTasks(res.data);
      });
  }, [])

  const addTask = task => {
    axios.post('/api/tasks', task)
     .then(res => {
       console.log(res.data);
       setTasks([...tasks, res.data]);
     })
  };
  const removeTask = id => {
    axios.delete('/api/tasks/' + id)
    .then(res => {
      const newTasks = tasks.filter(t => t._id !== id);
      setTasks(newTasks);
    })

  };
  return (
    <div>
      <div className="container">
       <h1> Lista de Tareas</h1>
       <Form addTask={addTask} />
       <List
         removeTask={removeTask}
         tasks={tasks}/>
      </div>
    </div>
  );
};

export default App;
