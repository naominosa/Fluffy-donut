"use client";
import { donuts, money } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import Media from "./Media";
import TiltCard from "./TiltCard";
import FunButton from "./FunButton";

export default function DonutMenu() {
  const { add } = useCart();

  return (
    <section id="menu" className="bg-sky pb-28 pt-10">
      <h2 className="text-center font-display text-4xl uppercase tracking-wide text-white">
        Our donuts
      </h2>
<div className="mx-auto mt-40 grid max-w-4xl gap-x-6 gap-y-44 px-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* <div className="mx-auto mt-28 grid max-w-4xl gap-x-6 gap-y-28 px-6 sm:grid-cols-2 lg:grid-cols-3"> */}
        {donuts.map((d) => (
          <TiltCard
            key={d.id}
            className="rounded-2xl border border-white/30 bg-white/20 px-5 pb-6 pt-40 text-center text-white shadow-lg"
            // className="rounded-2xl border border-white/30 bg-white/20 px-5 pb-6 pt-28 text-center text-white shadow-lg"
          >
            {/* the donut pops out of the card in 3D */}
            <div className="absolute inset-x-0 -top-28 flex justify-center [transform:translateZ(80px)]">
  <Media
    src={d.image}
    alt={d.name}
    width={500}
    height={500}
    className="h-60 w-60 object-contain drop-shadow-xl md:h-64 md:w-64"
  />
</div>

            <h3 className="font-display text-xl uppercase tracking-wide">{d.name}</h3>
            <p className="mx-auto mt-3 min-h-10 max-w-[210px] text-sm leading-snug text-white">
              {d.description}
            </p>
            <p className="mt-3 font-display text-2xl">{money(d.price)}</p>

            <div className="mt-4">
              <FunButton className="bg-candy" onClick={() => add(d)}>
                Add to basket
              </FunButton>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}