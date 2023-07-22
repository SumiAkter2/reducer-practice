import React, { useContext } from 'react'
import { CREATE_CONTEXT } from '../App';

function Child() {
    const { count, setCount } = useContext(CREATE_CONTEXT);
    return (
      <div>
            <h1> {count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount((pvtState)=>pvtState+1)}>Increase</button>
      </div>
    );
}

export default Child
