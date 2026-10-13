"use client";
import { useRef } from "react";
import { Flame, Truck, Donut, Timer } from "lucide-react";
import Media from "./Media";
import Wave from "./Wave";
import BasketButton from "./BasketButton";

const HERO_SRC = "/images/strawberry-donut.mp4"; // <- change to your current hero file

const features = [
  { icon: Flame, title: "Fresh baking", text: "Only from the oven" },
  { icon: Truck, title: "Free shipping", text: "When ordering from 30 $" },
  { icon: Donut, title: "Create donut", text: "Any ingredients" },
  { icon: Timer, title: "We cook quickly", text: "5 beats per second" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", String(((e.clientX - r.left) / r.width - 0.5) * 2));
    el.style.setProperty("--py", String(((e.clientY - r.top) / r.height - 0.5) * 2));
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--px", "0");
    ref.current?.style.setProperty("--py", "0");
  };

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative overflow-hidden bg-gradient-to-br from-[#e692ae] to-[#d97f9d] pb-40 pt-28 md:pb-52"
    >
      {/* soft blobs that drift the opposite way to your mouse */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-white/25 blur-3xl transition-transform duration-300 ease-out"
        style={{ transform: "translate3d(calc(var(--px, 0) * -50px), calc(var(--py, 0) * -50px), 0)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-20 h-96 w-96 rounded-full bg-sky/40 blur-3xl transition-transform duration-300 ease-out"
        style={{ transform: "translate3d(calc(var(--px, 0) * 60px), calc(var(--py, 0) * 40px), 0)" }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="font-display text-5xl uppercase leading-[1.05] text-white drop-shadow-[0_4px_0_rgba(214,36,122,0.35)] md:text-7xl">
              Fill the taste that you&apos;ve never eat
            </h1>
            <p className="mt-6 text-xl font-bold uppercase tracking-wide text-white">
              Warm, delicious made to order
            </p>
            <div className="mt-8">
              <BasketButton />
            </div>
          </div>

          {/* image lives in its own column now, so it can never cover the text */}
          <div
            className="flex justify-center transition-transform duration-200 ease-out"
            style={{
              transform:
                "translate3d(calc(var(--px, 0) * 28px), calc(var(--py, 0) * 22px), 0) rotate(calc(var(--px, 0) * 4deg))",
            }}
          >
            <Media
            //   src={HERO_SRC}
            src="/images/donuts.png"
              alt="Pink glazed donut with sprinkles"
              width={700}
              height={560}
              priority
              className="float h-auto max-h-[460px] w-full max-w-sm object-contain drop-shadow-2xl md:max-w-md"
            />
          </div>
        </div>

        <ul className="relative z-10 mt-14 grid grid-cols-2 gap-6 md:mt-20 md:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <li key={title} className="group flex cursor-pointer items-center gap-3 text-white">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sky shadow-md transition duration-300 group-hover:rotate-12 group-hover:scale-125 group-hover:bg-white group-hover:text-sky">
                <Icon size={24} />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold uppercase tracking-wide">{title}</span>
                <span className="text-xs font-semibold">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Wave fillClass="fill-sky" className="bottom-0" />
    </section>
  );
}