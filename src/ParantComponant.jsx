import React from 'react'
import ChildComponant from './ChildComponant';

const ParantComponant = () => {
    const handleclick =() =>{
        console.log("button clicked");
    }
  return (
    <div className='box2'>
        <h1>WOLF SO GRIM AND MANGY</h1>
        <h4>REMOVE</h4>
        <img src="http://prodimage.images-bn.com/pimages/2940167449053_p0_v1_s1200x630.jpg" alt='prodiimage' width="200" height="300"></img>
        <div className='title'>
          <h5>Detail & Core</h5> 
          <h6 >Unleash the laughter and magic of humorous fantasy books with 'A Wolf So Grim and Mangy' by Caroline Noe. Let the wolf in you run free.</h6>
          
        </div>
        <ChildComponant  handleclick={handleclick}/>
    </div>
  )
}

export default ParantComponant;