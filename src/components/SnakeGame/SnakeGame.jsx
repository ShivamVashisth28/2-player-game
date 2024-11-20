import React, { useEffect, useState } from "react";

function SnakeGame() {
  const [keyPressed, setKeyPressed] = useState("");
  const [snakePosition, setSnakePosition] = useState({ x: 0, y: 0 });
  const stepSize = 10; // Define step size for movement

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeyPressed(e.key);

      setSnakePosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (e.key === "ArrowDown") {
          newY += stepSize;
        } else if (e.key === "ArrowUp") {
          newY -= stepSize;
        } else if (e.key === "ArrowLeft") {
          newX -= stepSize;
        } else if (e.key === "ArrowRight") {
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

  return (
    <div className="h-full w-full relative ">
      <div
        className="snake w-10 h-10 bg-green-500 absolute"
        style={{
          top: `${snakePosition.y}px`,
          left: `${snakePosition.x}px`,
        }}
      >
      </div>
    </div>
  );
}

export default SnakeGame;
