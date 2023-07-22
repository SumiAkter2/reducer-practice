
import { createContext, useState } from 'react';
import './App.css';
import Parent from './Pages/Parent';
export const CREATE_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value={count,setCount}
  return (
    <CREATE_CONTEXT.Provider value={value}>
      <div className="App">
        <Parent />
      </div>
    </CREATE_CONTEXT.Provider>
  );
}

export default App;
