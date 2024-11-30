/* eslint-disable no-unused-vars */
import React, { useRef, useState }  from 'react'

const UncForm = () => {
    const nameRef = useRef(null);
    const showName = () => {
        alert(nameRef.current.value);
        nameRef.current.value ="";
    }
    console.log(nameRef);
  return (
    <div>
        <label htmlFor="">Name : </label>
        <input className='border-2 m-2' type="text" placeholder='Enter Your Name ' ref={nameRef}/>
        <button onClick={showName} className='border-2'>Show Name</button>
    </div>
  )
}

export default UncForm