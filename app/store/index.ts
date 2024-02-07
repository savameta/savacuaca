import { create } from "zustand";
import { ChipType, PlayerChip, PoolType } from "../type";
import { MAX_CHIP_PRICE } from "../constants";

interface SavaCuaState {
  HINDI: PlayerChip[];
  BALLOT: PlayerChip[];
  CHICKEN: PlayerChip[];
  FISH: PlayerChip[];
  CRAB: PlayerChip[];
  SHRIMP: PlayerChip[];
  chip: ChipType | undefined;
  totalChipPriceUsed: number;

  pushPool: (playerChip: PlayerChip, poolType: PoolType) => void;
  setChip: (chip: ChipType) => void;
  allClear: () => void;
}

export const useStore = create<SavaCuaState>((set) => ({
  HINDI: [],
  BALLOT: [],
  CHICKEN: [],
  FISH: [],
  CRAB: [],
  SHRIMP: [],
  chip: undefined,
  totalChipPriceUsed: 0,

  setChip: (chip: ChipType) =>
    set(() => ({
      chip: chip,
    })),

  allClear: () => {
    set(() => ({
      HINDI: [],
      BALLOT: [],
      CHICKEN: [],
      FISH: [],
      CRAB: [],
      SHRIMP: [],
      chip: undefined,
      totalChipPriceUsed: 0,
    }));
  },

  pushPool: (playerChip: PlayerChip, poolType: PoolType) => {
    set((state) => {
      if (state.totalChipPriceUsed >= MAX_CHIP_PRICE) {
        throw new Error("max");
      }
      state.totalChipPriceUsed =
        state.totalChipPriceUsed + playerChip.chip.price;

      return {
        [poolType]: [...state[poolType], playerChip], // Thêm playerChip vào poolType tương ứng
      };
    });
  },
}));
