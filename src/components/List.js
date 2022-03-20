import {useState} from 'react';

const List = () => {

   const tasks = [
      {title: 'putzen', completed: false, key: 0},
      {title: 'kochen', completed: false, key: 1},
      {title: 'backen', completed: false, key: 2}
   ];

   return (
      <div className="list">
         List
         <ul>
            {tasks.map((task)=>(
            <li>
                  <div>
                  <p>{task.title}</p>
                  <button>complete</button>
                  <button>delete</button>
               </div>
            </li>
               ))}
         </ul>
         <form>
            <input type="text" />
            <button>Plus</button>
         </form>
      </div>
    )
}
  
  export default List;
  