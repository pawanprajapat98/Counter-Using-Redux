import { useDispatch, useSelector } from 'react-redux'
import { incriment,decriment } from './CounterSlice'
import React from 'react'

function Counters() {
const dispatch =useDispatch();
const init =useSelector((state)=>{
  return  state.Counter
})
  return (
    <div>
        <button onClick={() => dispatch(incriment())}>increment</button>
        <p>{init.Counter}</p>
        <button onClick={() => dispatch(decriment())}>decriment</button>
    </div>
  )
}

export default Counters
