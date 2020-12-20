import React,{useState}  from 'react'
import './App.css';


function App() {
  const[count,setCount]=useState(0)
  const[day,setDay]=useState(true)
  
  return (
<>
<h3>Variable = {count}</h3>
<button onClick={()=>setCount(count + 1)}>Click</button>
<div  className={`morning ${day ? 'morning' : 'night'}`}>
<h3>Day is = {day ? 'morning': 'night'}</h3>
<button onClick={()=>setDay(!day)}>Click</button>


</div>
</>
  );
}

export default App;
