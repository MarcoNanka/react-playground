import { useState, useEffect } from "react";

const List = () => {
  const [initialRender, setInitialRender] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const ls = localStorage.getItem("tasks");

    if (!initialRender) {
      if (ls) setTasks(JSON.parse(ls));
      setInitialRender(true);
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, initialRender]);

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1); // löscht eintrag bei newTasks[index]
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const addTask = (title) => {
    if (title) setTasks([...tasks, { title }]);
  };
  return (
    <div className="list">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTask(input);
          setInput("");
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="New task"
        />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map(
          (
            task,
            index //task is value, index is index
          ) => (
            <li key={index} className={task.completed ? "completed" : null}>
              <div>
                <p>{task.title}</p>
                <div>
                  <button onClick={() => completeTask(index)}>complete</button>
                  <button onClick={() => deleteTask(index)}>delete</button>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default List;
