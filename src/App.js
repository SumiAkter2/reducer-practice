
import { createContext, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SortForm from './Pages/SortForm';
import LongForm from './Pages/LongForm';
import Counter from './Pages/Counter';
export const CREATE_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value={count,setCount}
  return (
    // <CREATE_CONTEXT.Provider value={value}>
    //   <div className="App">
    //     <Parent />
    //   </div>
    // </CREATE_CONTEXT.Provider>
    <div className="App">
      {/* <Counter/> */}
      <LongForm/>
      {/* <SortForm /> */}
    </div>
  );
}

export default App;
