import {useState} from 'react';
import './App.css';

function App() {

  const [text,settext] = useState(0);

  const changeval=(op)=>{
    if(op===1)
  {
    settext(text+1)
  }
  else{
    settext(text-1)
  }
}
  return (
    <div className="App">
   <h2 className="h">COUNTER</h2>
   <button onClick={()=>changeval(1)}>+</button>
   <h2>{text}</h2>
   <button onClick={()=>changeval(0)}>-</button>
    </div>
  );
}

export default App;
