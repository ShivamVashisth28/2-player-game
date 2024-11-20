import React, { useState } from 'react'
import SnakeGame from '../../components/SnakeGame/SnakeGame';

function Snake() {
  
  // snake 
  // increae snake lenght with each rat
  // randomly generate rats in the area
  // collision detectino with rats and itself
  // moving the snake
  
  const [isGameOn, setIsGameOn] = useState(false);

  return (
    <div className='bg-black h-screen w-screen flex justify-center items-center'>
        <div className='bg-green-200 h-2/3 w-2/4 border-2 border-red-700'>
              {
                isGameOn 
                  ? 
                    <SnakeGame/> 
                  : 
                    <div className='flex justify-center items-center h-full'>
                        <button 
                          onClick={ () => setIsGameOn(true)}
                          className='text-3xl hover:scale-110'
                        >
                          Click to Start
                        </button>
                    </div> 
              }
        </div>
    </div>
  )
}

export default Snake