import React from 'react'
import GameArea from '../../components/GameArea'


function RockPaperGame() {
  return (
      <div className='bg-red-300 h-screen flex flex-col'>
        <div className='flex justify-center text-4xl pt-3 font-serif'>Rock Paper Scissor </div>
        <div className=' rounded-lg h-full m-2 flex items-center justify-around'>
            <div className='bg-white rounded-lg pt-2 h-[90%] w-[40%]' > 
                  <GameArea/>
            </div>
          
        </div>
    </div>
  )
}

export default RockPaperGame
