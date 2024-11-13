import React from 'react'
import GameArea from '../../components/GameArea'


function RockPaperGame() {
  return (
      <div className='bg-indigo-700 h-screen font-serif gap-y-0'>     
        <div className='text-xl	rounded-lg h-full flex flex-col  items-center justify-around gap-y-0'>
          <h1>Rock Paper Scissor</h1>
            <div className='bg-white border-4 border-black flex justify-center rounded-lg h-[80%] w-[80%]' > 
                  <GameArea/>
            </div>
          
        </div>
    </div>
  )
}

export default RockPaperGame
