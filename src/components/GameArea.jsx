import React, { useState } from 'react'

function GameArea() {
    const [userChoice, setUserChoice] = useState("")
    const [cpuChoice, setCpuChoice] = useState("")
    const [userScore, setUserScore] = useState(0)
    const [cpuScore, setCpuScore] = useState(0)

    const checkWinner = (userChoice, cpuChoice) => {
        if(userChoice == "rock" && cpuChoice == "scissor"){
            return "win";
        }
        else if(userChoice == "paper" && cpuChoice == "rock"){
            return "win";
        }
        else if(userChoice == "scissor" && cpuChoice == "paper"){
            return "win";
        }
        else if(userChoice == cpuChoice){
            return "draw";
        }
        else{
            return "lose";
        }
        
    }

    const submitBtn = () =>{
        const random = Math.floor(Math.random() * 3) 
        const choices = ["scissor","rock","paper"];
        
        const cpuChoice = choices[random];
        setCpuChoice(cpuChoice)
        if(checkWinner(userChoice,cpuChoice) === "win"){
            setUserScore((prev) => prev+1);
        }
        // else if(checkWinner(userChoice,cpuChoice) === "draw"){
            // setCpuScore((prev) => prev);
            // setUserScore((prev) => prev);
        // }
        else if(checkWinner(userChoice,cpuChoice) === "lose"){
            setCpuScore((prev) => prev+1);
        }
    }

    const refreshBtn = () =>{
        setCpuChoice("")
        setCpuScore(0)
        setUserChoice("")
        setUserScore(0)
    }
  return (
    <div className='flex flex-col items-center  justify-center w-[80%]' >
    
            <div className='w-full h-[50%] flex flex-row justify-center gap-x-24 text-2xl text-indigo-800'>
                <div className='flex flex-col items-center '>
                    <label >Player</label>
                    <div className='w-44 h-44 bg-indigo-800 content-center rounded-full border-4 border-indigo-900'>
                        {
                            userChoice !=="" ? <img className='w-[50%] block m-auto' src={`/rockPaperScissor/${userChoice}.svg`}/> : null
                        }
                    </div>
                    <label>Score: { userScore }</label>
                </div>
                
                <div className='w-44 h-44 mt-6 rounded-full content-center items-center flex'>
                    <img className='w-36 block m-auto' src="/rockPaperScissor/vs.svg"/>
                </div>

                <div className='flex flex-col items-center '>
                    <label>Computer</label>
                        <div className='w-44 h-44 bg-indigo-800 content-center rounded-full border-4 border-indigo-900'>
                            {
                                cpuChoice !=="" ? <img className='w-[50%] block m-auto' src={`/rockPaperScissor/${cpuChoice}.svg`}/> : null
                            }
                        </div>
                    <label>Score: { cpuScore }</label>
                </div>
            </div>

            <div className='flex flex-col justify-center'>

                <div className='flex flex-row w-full justify-center justify-around	'>
                    {/* ROCK */}

                    <button type="button" className={`border-2 border-indigo-800 text-xl rounded-lg m-1 hover:bg-indigo-800 hover:text-white  text-indigo-800 bg-white-800 focus:outline-none focus:ring-4 focus:ring-gray-300 px-8 py-1.5`}
                        onClick={()=> {
                            setUserChoice("rock") 
                            setCpuChoice("") 
                        }}>Rock</button>
            
                    {/* PAPER */}
                    <button 
                        className={`border-2 border-indigo-800 text-xl rounded-lg m-1 hover:bg-indigo-800 hover:text-white  text-indigo-800 bg-white-800 focus:outline-none focus:ring-4 focus:ring-gray-300 px-8 py-1.5`}
                        onClick={()=> {
                            setUserChoice("paper")
                            setCpuChoice("")
                        } 
                        }
                    >
                        Paper
                    </button>
            
                    {/* SCISSOR */}
                    <button 
                        className={`border-2 border-indigo-800 text-xl rounded-lg m-1 hover:bg-indigo-800 hover:text-white  text-indigo-800 bg-white-800 focus:outline-none focus:ring-4 focus:ring-gray-300 px-8 py-1.5`}
                        onClick={()=> {
                            setUserChoice("scissor") 
                            setCpuChoice("") 
                        } }
                    >
                        Scissor
                    </button>
                </div>

                <div className='flex flex-col w-full'>
                {/* SUBMIT */}
                <button 
                    className={`border-2 border-indigo-800 text-xl rounded-lg m-1 hover:bg-indigo-800 hover:text-white  text-indigo-800 bg-white-800 focus:outline-none focus:ring-4 focus:ring-gray-300 px-8 py-1.5`}
                    onClick={()=> submitBtn() }
                >
                    Submit
                </button>

                <button 
                    className={`border-2 border-indigo-800 text-xl rounded-lg m-1 hover:bg-indigo-800 hover:text-white  text-indigo-800 bg-white-800 focus:outline-none focus:ring-4 focus:ring-gray-300 px-8 py-1.5`}
                    onClick={()=> refreshBtn()}
                >
                    Refresh
                </button>
                </div>

            </div>
            
    </div>
  )
}

export default GameArea