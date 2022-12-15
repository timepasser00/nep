import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Inner from './Inner';

const Home = () => {
    const currCount = useSelector((state) => state.count)
    // console.log(currCount);
  return (
    <>
        <div>
            <span>{currCount}</span>
        </div>

        <Inner />
    </>
  )
}

export default Home