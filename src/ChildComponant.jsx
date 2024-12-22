import React, { createContext, useContext } from 'react'
import { GrandContext } from './GrantparantComponant';

const ChildComponant = ({handleclick}) => {
    const value = useContext(GrandContext);
  return (
    <div className='box3'>
        <h2>$249.00</h2>
        <h2>FREE</h2>
        <h3>subtotal</h3>
        <h3>SHOPING</h3>
        <p>{value}</p>
        <button onClick={handleclick}>TOTAL :</button>
        <h4>$249.00</h4>
        <h5>Get Daily Cash with new card </h5>
    </div>
  )
}

export default ChildComponant;
