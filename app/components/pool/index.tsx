import React from "react";
import { Chip } from "..";

type Props = {
  chips: (number | string)[];
};

export function Pool({ chips }: Props) {
  return (
    <div style={{ position: "relative" }}>
      {chips.map((chip, index) => (
        <Chip price={chip} key={index} zIndex={index + 1} />
      ))}
    </div>
  );
}
