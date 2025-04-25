import React from "react";
import "./App.css"; 

export default function BackgroundChanger() {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeBackgroundColor = () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  };

  return (
    <div class="changer">
       <button class= "vut" 
        onClick={changeBackgroundColor}
      >
       
        Change Background Color
      </button>
    </div>
  );
}
