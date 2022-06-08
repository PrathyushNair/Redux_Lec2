import React from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
function App() {
  let dispatch=useDispatch()
  // let count=useSelector((state)=>state.count)
  let todos=useSelector((state)=>state.todos)
  let [input,setInput]=React.useState("")
  return (
    <div className="App">
      <div>Redux Lec2</div>
      {/* <div>Count:{count}</div> */}
      {/* <input onChange={(e)=>setInput(e.target.value)}placeholder='Enter task'></input>
      <button onClick={()=>dispatch({type:"add",payload:input})}>Add task</button>

      {
        todos.map((el)=>(
          <div>{el.title}</div>
        ))
      } */}
    </div>
  );
}

export default App;
