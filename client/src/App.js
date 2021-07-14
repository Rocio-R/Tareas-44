
import Form from './form';
import List from './list';
import Task from './task';
import { useState } from 'react'; // importar hook de estado

const data = [
  {
    _id: 1,
    text: 'Asd',
    done: false
  },
  {
    _id: 2,
    text: 'Qeh',
    done: false
  },
  {
    _id: 3,
    text: 'Flk',
    done: true
  },
  {
    _id: 4,
    text: '123',
    done: true
  }
];


const App = () => {
  const [tasks, setTasks] = useState(data);
  const addTask = task => {
    setTasks([...tasks, task]);
  };
  return (
    <div>
      <div className="container">
       <h1> Lista de Tareas</h1>
       <Form addTask={addTask} />
       <List  tasks={tasks}/>
      </div>
    </div>
  );
};

export default App;
