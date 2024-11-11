import React, { useState } from 'react'

function GameArea() {
    const [userChoice, setUserChoice] = useState("")
    const [cpuChoice, setCpuChoice] = useState("")
    const [userScore, setUserScore] = useState(0)
    const [cpuScore, setCpuScore] = useState(0)

    const checkWinner = (userChoice, cpuChoice) => {
        if(userChoice == "stone" && cpuChoice == "scissor"){
            return "win";
        }
        else if(userChoice == "paper" && cpuChoice == "stone"){
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
        const choices = ["scissor","stone","paper"];
        
        const cpuChoice = choices[random];
        setCpuChoice(cpuChoice)
        if(checkWinner(userChoice,cpuChoice) === "win"){
            setUserScore((prev) => prev+1);
        }
        else if(checkWinner(userChoice,cpuChoice) === "draw"){
            setCpuScore((prev) => prev+1);
            setUserScore((prev) => prev+1);
        }
        else{
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
    <div className='flex flex-col items-center '>
            <div 
                className={`border-2 border-black text-2xl w-[30%] rounded-lg m-2 text-center hover:scale-110 hover:bg-red-300 ${userChoice==='stone' ? "bg-red-400" : "bg-white"} cursor-pointer`}
                onClick={()=> setUserChoice("stone") }
            >
                STONE
            </div>

            <div 
                className={`border-2 border-black text-2xl w-[30%] rounded-lg m-2 text-center hover:scale-110 hover:bg-red-300 ${userChoice==='paper' ? "bg-red-400" : "bg-white"} cursor-pointer`}
                onClick={()=> setUserChoice("paper") }
            >
                PAPER
            </div>

            <div 
                className={`border-2 border-black text-2xl w-[30%] rounded-lg m-2 text-center hover:scale-110 hover:bg-red-300 ${userChoice==='scissor' ? "bg-red-400" : "bg-white"} cursor-pointer`}
                onClick={()=> setUserChoice("scissor") }
            >
                SCISSOR
            </div>
            
            <div 
                className={`border-2 border-black text-3xl w-[50%] rounded-lg m-2 mt-5 p-2 text-center hover:scale-110 hover:bg-red-400 cursor-pointer`}
                onClick={()=> submitBtn() }
            >
                SUBMIT
            </div>
            
            {
                cpuChoice !=="" ?
            <div>
                CPU CHOICE : {cpuChoice}
            </div>
            : null
            }

            {
                userChoice !=="" ?
            <div>
                USER CHOICE : {userChoice}
            </div>
            : null
            }

            <div>
                USER SCORE : {userScore}
            </div>

            <div>
                CPU SCORE : {cpuScore}
            </div>

            <div 
                className='m-2 border-2 border-black rounded-md p-1 cursor-pointer hover:bg-fuchsia-100'
                onClick={()=> refreshBtn()}
            >
                refresh
            </div>
    </div>
  )
}

export default GameArea