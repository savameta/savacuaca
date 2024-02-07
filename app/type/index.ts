export type ChipType = {
  price: number;
  id: number;
};

export type Player = {
  id: number;
  name: string;
};

export type PlayerChip = {
  player: Player;
  chip: ChipType;
};

export type PoolType =
  | "HINDI"
  | "BALLOT"
  | "CHICKEN"
  | "FISH"
  | "CRAB"
  | "SHRIMP";
