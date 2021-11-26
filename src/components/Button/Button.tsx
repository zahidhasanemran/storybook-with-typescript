import React, { FC } from "react";

// type
export type PropButton = {
  text: string;
  varient: "black" | "blue" | "green";
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<PropButton> = ({
  text,
  varient = "black",
  handleClick,
}) => {
  // style
  const style = {
    backgroundColor: varient,
    border: "1px solid #ccc",
    fontSize: "14px",
    color: "#fff",
    borderRadius: "5px",
    padding: "10px 25px",
  };

  return (
    <button onClick={handleClick} style={style}>
      {text}
    </button>
  );
};
