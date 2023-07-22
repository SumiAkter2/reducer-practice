
import { createContext, useState } from 'react';
import './App.css';
import Parent from './Pages/Parent';
import SortForm from './Pages/SortForm';
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
      <SortForm />
    </div>
  );
}

export default App;
