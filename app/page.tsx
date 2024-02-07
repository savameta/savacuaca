import Image from "next/image";
import { Chip, Pool } from "./components";

export default function Home() {
  return (
    <main className="flex justify-center items-center ">
      <div className="grid grid-cols-3 h-[671.82px] w-[1000px]">
        <div className="hindi">
          <Pool chips={[100, 200, 1, 30, 300, 400]} />
        </div>
        <div className="ballot">
          <Pool chips={[100, 300, 1, 30, 300, 400]} />
        </div>
        <div className="chicken">
          <Pool chips={[100, 50, 1]} />
        </div>
        <div className="fish">
          <Pool chips={[100, 50, 1]} />
        </div>
        <div className="crab">
          <Pool chips={[100, 50, 1]} />
        </div>
        <div className="shrimp">
          <Pool chips={[100]} />
        </div>
      </div>
    </main>
  );
}
