import { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import './index.css';
import { addToDo, deleteToDo, getAllToDo, updateToDo } from './utils/HandleApi';

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, settoDoId] = useState("");
  

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text, expiryDate) => {
    setIsUpdating(true);
    setText(text);
    setExpiryDate(expiryDate);
    settoDoId(_id);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>SpectrumTasker</h1><br />
       
        <div className="input-box">
        <label><strong>TASK:</strong></label>
          <input
            type="text"
            placeholder="Add ToDo Item"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <label><strong>COMPLETION DATE:</strong></label>
          <input
            type="datetime-local"
           
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
          <div className="Add" onClick={isUpdating
            ? () => updateToDo(toDoId, text, expiryDate, setToDo, setText, setExpiryDate, setIsUpdating)
            : () => addToDo(text, expiryDate, setText, setExpiryDate, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
      </div>
      <div className="main-body">
        <div className="todo-list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              expiryDate={item.expiryDate}
              updateMode={() => updateMode(item._id, item.text, item.expiryDate)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
