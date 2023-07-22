import React, { useContext,  } from 'react';
import Child from './Child';
import { CREATE_CONTEXT } from '../App';

const Parent = () => {
   const {count}=useContext(CREATE_CONTEXT)
    return (
      <div>
        <h1>From parent compo</h1>
        <h1>{count}</h1>
        <h1>From child compo</h1>
        <Child ></Child>
      </div>
    );
};

export default Parent;