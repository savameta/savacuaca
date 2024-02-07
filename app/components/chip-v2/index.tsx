import React from "react";

type Props = {
  price: number;
};

export default function ChipV2({ price }: Props) {
  return (
    <div className="chip">
      <p className="font-bold h-full flex items-center justify-center text-[12px] text-yellow-400">
        {price}
      </p>
    </div>
  );
}
