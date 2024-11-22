import React, { useEffect, useRef, useState } from "react";

function SnakeGame() {
    const [keyPressed, setKeyPressed] = useState("");
    const [score, setScore] = useState(0)
    const [timer, setTimer] = useState(0)
    const [snakePosition, setSnakePosition] = useState({ x: 0, y: 0 });
    const playGroundRef = useRef()
    const snakeRef = useRef()
    const stepSize = 20; // Define step size for movement

  
    const collision = (ratDiv) => {
      const ratRect = ratDiv.getBoundingClientRect();
      const snakeRect = snakeRef.current.getBoundingClientRect();

      return !(
        ratRect.right < snakeRect.left ||
        ratRect.left > snakeRect.right ||
        ratRect.bottom < snakeRect.top ||
        ratRect.top > snakeRect.bottom
      );
    };

    const ratGenerator = () => {

      const playGroundHeight = playGroundRef.current.offsetHeight
      const playGroundWidth = playGroundRef.current.offsetWidth    

      const randomX = Math.random() * (playGroundWidth - 20);
      const randomY = Math.random() * (playGroundHeight - 20);
      
      const rat = document.createElement("div")
      playGroundRef.current.appendChild(rat)
      rat.className = "rat";
      rat.style.top = randomY + "px";
      rat.style.left = randomX + "px";

    }

    useEffect(() => {
      const handleKeyDown = (e) => {
        setKeyPressed(e.key);

        setSnakePosition((prev) => {
          let newX = prev.x;
          let newY = prev.y;

          if (e.key === "ArrowDown" && (newY + stepSize <= playGroundRef.current.offsetHeight - 20 )) {
            newY += stepSize;
          } else if (e.key === "ArrowUp" && (newY  >= 5)) {
            newY -= stepSize;
          } else if (e.key === "ArrowLeft" && (newX  >= 5)) {
            newX -= stepSize;
          } else if (e.key === "ArrowRight" && (newX + (2*stepSize) <= playGroundRef.current.offsetWidth ) ) {
            newX += stepSize;
          }

          return { x: newX, y: newY };
        });
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    useEffect(() => {
      ratGenerator();
    }, [score])

    useEffect(() => {
    const checkCollisions = () => {
      const rats = document.querySelectorAll(".rat");
      rats.forEach((rat) => {
        if (collision(rat)) {
          setScore((prev) => prev + 1); // Increment score
          rat.remove(); // Remove the rat from the playground
        }
      });
    };

    // Check for collisions on each render
    checkCollisions();
    }, [snakePosition]); // Re-run this effect when the snake moves

    useEffect(() => {
      setTimeout(()=>{
        setTimer((prev) => prev +1);
      }, 1000)
    },[timer])

    return (
      <>
        {timer <= 30 ? 
          <div
            ref={playGroundRef}   
            className="h-full w-full relative "
          >
            <div className="flex justify-around">
              <div>Score : {score}</div>
              <div>Time : {30 - timer}</div>
            </div>

            <div
              ref={snakeRef}
              className="snake w-10 h-10 bg-green-500 absolute"
              style={{
                top: `${snakePosition.y}px`,
                left: `${snakePosition.x}px`,
              }}
            >
            </div>
          </div>

          :

          <div>
            Game Over !!
            Score : {score}
            <button
              onClick={()=> location.reload() }
            >
              Restart
            </button>
          </div>
        }
      </>
    );
}

export default SnakeGame;
