import {useState} from 'react';

const List = () => {
   const initialTasks = [
      {title: 'putzen', completed: false},
      {title: 'kochen', completed: false},
      {title: 'backen', completed: false},
   ];

   const [tasks, setTasks] = useState(
      initialTasks
   );

   const [input, setInput] = useState(
      ''
   );

   const deleteTask = (index) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1); //löscht eintrag bei newTasks[index]
      setTasks(newTasks);
   };

   const completeTask = (index) => {
      const newTasks = [...tasks];
      newTasks[index].completed = true;
      setTasks(newTasks);
   };

   const addTask = (title) => {
      setTasks([...tasks, {title}])
   };
   return (
      <div className="list">
         List
         <ul>
            {tasks.map((task, index)=>(
            <li key={index} className = {task.completed ? 'completed' : null}>
                  <div>
                  <p>{task.title}</p>
                  <button onClick={() => completeTask(index)}>complete</button>
                  <button onClick={() => deleteTask(index)}>delete</button>
               </div>
            </li>
               ))}
         </ul>
         <form onSubmit={(e) => {
            e.preventDefault();
            addTask(input);
            setInput('');
            }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
            <button>Plus</button>
         </form>
      </div>
    )
}
  
  export default List;
  