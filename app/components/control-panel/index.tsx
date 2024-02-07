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
  const allClear = useStore((state) => state.allClear);

  console.log(chip);
  return (
    <div className="flex flex -">
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
      <button
        onClick={allClear}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        Bỏ Cược
      </button>
    </div>
  );
}
