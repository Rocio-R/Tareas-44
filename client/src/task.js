const Task = props => {
  //props
  const { task } = props; //desestructurar  objetos
  //render
  return (
    <div className="task">
      <p className="taskText">{task.text}</p>
      <input type="checkbox" />
      <button className="trash">
       <i className="fa fa-lg fa-trash"></i>
      </button>
    </div>
  );
};

export default Task
