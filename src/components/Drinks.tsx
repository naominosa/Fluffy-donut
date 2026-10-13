"use client";
import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { drinks, money } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import Wave from "./Wave";

function AddDrink({ id, name, price }: { id: string; name: string; price: number }) {
  const { add } = useCart();
  const [done, setDone] = useState(false);

  return (
    <button
      onClick={() => {
        add({ id, name, price });
        setDone(true);
        setTimeout(() => setDone(false), 900);
      }}
      aria-label={`Add ${name} to basket`}
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-white shadow-md transition active:scale-90 ${
        done ? "scale-110 bg-sky" : "bg-candy hover:scale-110"
      }`}
    >
      {done ? <Check size={18} /> : <Plus size={18} />}
    </button>
  );
}

export default function Drinks() {
  return (
    <section className="relative bg-mauve pb-32 pt-8">
      <Wave fillClass="fill-mauve" className="bottom-full translate-y-px" speed={16} />

      <h2 className="text-center font-display text-4xl uppercase tracking-wide text-white">Drinks</h2>

      <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/30 bg-white/25 p-4 shadow-lg backdrop-blur-sm sm:p-6 md:p-10">
        <ul className="grid gap-x-16 gap-y-3 md:grid-flow-col md:grid-rows-8">
          {drinks.map((d, i) => (
            <li key={i} className="flex items-center gap-3 uppercase tracking-wide text-white">
              <span className="flex-1 text-sm font-bold sm:text-base">{d.name}</span>
              <span className="font-display text-sky">{money(d.price)}</span>
              <AddDrink id={`drink-${i}`} name={d.name} price={d.price} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}