import React from "react";

interface StackProps {
  children: React.ReactNode | React.ReactChild[];
  spacing: number;
  wrap: boolean;
  direction: "row" | "column";
}

const Stack = ({
  children,
  spacing = 2,
  wrap = false,
  direction = "row",
}: StackProps) => {
  const styles = {
    display: "flex",
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? "wrap" : "nowrap",
    flexDirection: direction,
  } as const;

  return <div style={styles}>{children}</div>;
};

export default Stack;
