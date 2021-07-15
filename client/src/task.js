import {useState} from 'react';
const Task = props => {
  //props
  const { task, removeTask, check } = props; //desestructurar  objetos
  const [done, setDone] = useState(task.done);
  const handleClick = e => {
    console.log(task._id);
    removeTask(task._id)
  };
  const handleCheck = e => {
    setDone(prev => !prev);
    console.log(done);
  }
  const style = {
    textDecoration: done ? 'line-through' : 'none'
  };
  //render
  return (
    <div className="task">
      <p style={style} className="taskText">{task.text}</p>
      <input
       onClick={handleCheck}
       className="check"
       type="checkbox"
       defaultChecked={done} />
      <button
        onClick={handleClick}
        className="trash">
       <i className="fa fa-lg fa-trash"></i>
      </button>
    </div>
  );
};

export default Task
