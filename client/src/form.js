import {useState} from 'react'
const Form = props => {
  const [text, setText] = useState('');
  const {addTask} = props;
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Enviando el formulario...');
    let newTask ={
      text: text
    };
    addTask(newTask);
    setText('');
  };
  const handleChange = e => {
    setText(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={text}
        type="text"/>
      <input type="submit" value="Agregar"/>
    </form>
  );
};

export default Form
