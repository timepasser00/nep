import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Inner = () => {
    const [val, setVal] = useState(0);
    const countVal = useSelector((state) => state.count)
    const dispatch = useDispatch();
    // console.log('FROM INNER, countVal = ', countVal );
  return (
    <>
        <button onClick={(e) => {
            e.preventDefault()

            dispatch({
                type: 'INCREMENT',
            })
        }} >INCREMENT</button>
        <button onClick={(e) => {
            e.preventDefault()

            dispatch({
                type: 'DECREMENT'
            })
        }} >DECREMENT</button>

        <form onSubmit={
            (ev) => {
                ev.preventDefault();

                dispatch({
                    type: 'SETVAL',
                    payload: val
                })
            }
        }>
            <input onChange={(e) => {
                e.preventDefault()

                setVal(e.target.value)
            }} type={'text'} value={val} ></input>
            <button >Set Count</button>
        </form>
    </>
  )
}

export default Inner