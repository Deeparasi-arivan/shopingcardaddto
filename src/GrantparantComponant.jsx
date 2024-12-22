import React from 'react'
import ParantComponant from './ParantComponant';
import { createContext } from 'react';

const GrantparantComponant = () => {
    const data ="hello from garantparant deepa";
  return (
    <div className='box'>
        <h1> React UseContext TASK</h1>
        <h4><button>1</button>$249.00</h4>
        <GrandContext.Provider value={data}>
    <ParantComponant />
    </GrandContext.Provider>
    </div>

  )
}

export default GrantparantComponant;
export const GrandContext = createContext();