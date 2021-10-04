import React from "react";

export interface PlayerObject {
  X: string;
  O: string;
}

export interface GridProps {
  player: Readonly<PlayerObject>;
}

export interface SquareProps {
  index: number;
  value: "X" | "O" | null;
  setValue: React.Dispatch<React.SetStateAction<("X" | "O" | null)[]>>;
  playerCheck: "X" | "O";
}
