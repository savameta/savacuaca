"use client";
import { ControlPanel, Pool } from "./components";
import { useStore } from "./store";
import { PoolType } from "./type";

export default function Home() {
  const ballotPool = useStore((state) => state.BALLOT);
  const hindiPool = useStore((state) => state.HINDI);
  const chickenPool = useStore((state) => state.CHICKEN);
  const fishPool = useStore((state) => state.FISH);
  const crabPool = useStore((state) => state.CRAB);
  const shrimpPool = useStore((state) => state.SHRIMP);
  const chip = useStore((state) => state.chip);

  const pushPool = useStore((state) => state.pushPool);

  const onPushPool = (poolType: PoolType) => {
    chip &&
      pushPool(
        {
          chip: chip,
          player: {
            id: 0,
            name: "hello",
          },
        },
        poolType
      );
  };

  console.log(hindiPool, ballotPool);
  return (
    <main className="flex">
      <div className="">1</div>

      <div className="w-[800px]">
        <div>
          <div className="grid grid-cols-3 h-[600px] w-[800px]">
            <div className="hindi" onClick={() => onPushPool("HINDI")}>
              <Pool playerChips={hindiPool} />
            </div>
            <div className="ballot" onClick={() => onPushPool("BALLOT")}>
              <Pool playerChips={ballotPool} />
            </div>
            <div className="chicken" onClick={() => onPushPool("CHICKEN")}>
              <Pool playerChips={chickenPool} />
            </div>
            <div className="fish" onClick={() => onPushPool("FISH")}>
              <Pool playerChips={fishPool} />
            </div>
            <div className="crab" onClick={() => onPushPool("CRAB")}>
              <Pool playerChips={crabPool} />
            </div>
            <div className="shrimp" onClick={() => onPushPool("SHRIMP")}>
              <Pool playerChips={shrimpPool} />
            </div>
          </div>
        </div>
        <div>
          <ControlPanel />
         
        </div>
      </div>
      <div>2</div>
    </main>
  );
}
