import React from "react";
import { Chip } from "..";
import { PlayerChip } from "@/app/type";

type Props = {
  playerChips: PlayerChip[];
};

export function Pool({ playerChips }: Props) {

  return (
    <div style={{ position: "relative" }}>
      {playerChips.map((playerChip, index) => (
        <Chip price={playerChip.chip.price} key={index} zIndex={index + 1} />
      ))}
    </div>
  );
}
