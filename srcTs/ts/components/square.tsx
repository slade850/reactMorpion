import React from "react";
import { SquareProps } from "../interface/game.interface";

const Square = ({ index, value, setValue, playerCheck }: SquareProps) => {
  const handelClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault;
    if (!value) {
      setValue((prev) => {
        const newArray = [...prev];
        newArray[index] = playerCheck;
        return newArray;
      });
    }
  };
  return (
    <button
      className={`square ${value ? value : ""}`}
      onClick={(e) => handelClick(e)}
    >
      {value}
    </button>
  );
};

export default Square;
