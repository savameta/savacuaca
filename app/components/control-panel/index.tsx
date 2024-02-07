"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/app/store";
type Props = {};

type ChipType = {
  price: number;
  id: number;
};

const chipTypes: ChipType[] = [
  {
    id: 0,
    price: 5,
  },
  {
    id: 1,
    price: 10,
  },
  {
    id: 2,
    price: 25,
  },
  {
    id: 3,
    price: 50,
  },
  {
    id: 4,
    price: 100,
  },
];

export function ControlPanel({}: Props) {
  const chip = useStore((state) => state.chip);
  const setChip = useStore((state) => state.setChip);

  console.log(chip);
  return (
    <div>
      <div className="flex gap-2">
        {chipTypes.map((chipType) => (
          <motion.div
            className={`chip cursor-pointer ${
              chip?.id === chipType.id ? "relative bottom-5" : "relative"
            } `}
            key={chipType.id}
            onClick={() => setChip(chipType)}
            initial={{ y: 0 }} // Khởi tạo vị trí y ban đầu
            animate={{ y: chip?.id === chipType.id ? -5 : 0 }} // Animation vị trí y
            transition={{ type: "spring", stiffness: 300, damping: 20 }} // Cài đặt transition
          >
            <p className="font-bold h-full flex items-center justify-center text-[12px] text-yellow-400">
              {chipType.price}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
