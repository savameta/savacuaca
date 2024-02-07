import React from "react";

type Props = {
  price: number | string;
  zIndex: number;
};

export function Chip({ price, zIndex }: Props) {
  const chipStyle: React.CSSProperties = {
    position: "absolute",
    top: `${Math.random() * 300}px`,
    left: `${Math.random() * 300}px`,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: zIndex,
  };

  return (
    <div className="chip" style={chipStyle}>
      <p className="font-bold h-full flex items-center justify-center text-[12px] text-yellow-400">
        {price}
      </p>
    </div>
  );
}
