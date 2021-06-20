
import { useState } from 'react';
import './App.css';
import AddItem from './Components/AddItem';
import ListItems from './Components/ListItems';

function App() {
  const [all, setAll] = useState(true)
  const handleAll=(x)=>{
   setAll(x);
  };
  return (
    <div className="App">
      <AddItem handleAll={handleAll}/>
      <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-around",backgroundColor:"green",minHeight:"390px"}}>
      <ListItems all={all}/>
      </div>
    </div>
  );
}

export default App;
