import Image from "next/image";
import Wave from "./Wave";
import BasketButton from "./BasketButton";

// const floaters = [
//   { src: "/images/happy-donut.png", cls: "-left-10 -top-10 w-36 md:w-56", dur: 6, delay: 0 },
//   { src: "/images/heart-donut.png", cls: "left-[14%] bottom-0 w-20 md:w-32", dur: 5, delay: 1 },
//   { src: "/images/sweet.png", cls: "right-[10%] -top-14 w-24 md:w-40", dur: 7, delay: 0.5 },
//   { src: "/images/randon1.png", cls: "right-[24%] bottom-2 w-14 md:w-24", dur: 4.5, delay: 1.5 },
//   { src: "/images/3dweet.png", cls: "-right-8 -bottom-6 w-28 md:w-48", dur: 6.5, delay: 2 },
// ];


const floaters = [
  { src: "/images/happy-donut.png", cls: "-left-8 -top-8 w-24 sm:-left-10 sm:-top-10 sm:w-36 md:w-56", dur: 6, delay: 0 },
  { src: "/images/heart-donut.png", cls: "hidden sm:block left-[14%] bottom-0 w-20 md:w-32", dur: 5, delay: 1 },
  { src: "/images/sweet.png", cls: "-right-4 -top-10 w-20 sm:right-[10%] sm:-top-14 sm:w-28 md:w-40", dur: 7, delay: 0.5 },
  { src: "/images/randon1.png", cls: "hidden sm:block right-[24%] bottom-2 w-14 md:w-24", dur: 4.5, delay: 1.5 },
  { src: "/images/3dweet.png", cls: "-right-6 -bottom-4 w-24 sm:-right-8 sm:-bottom-6 sm:w-32 md:w-48", dur: 6.5, delay: 2 },
];


export default function CtaBand() {
  return (
    <section className="relative bg-sky py-24 md:py-28">
      <Wave fillClass="fill-sky" className="bottom-full translate-y-px" speed={18} />

      {floaters.map((f) => (
        <Image
          key={f.src}
          src={f.src}
          alt=""
          width={260}
          height={260}
          aria-hidden="true"
          className={`float absolute z-10 drop-shadow-xl ${f.cls}`}
          style={{ ["--dur" as string]: `${f.dur}s`, ["--delay" as string]: `${f.delay}s` }}
        />
      ))}

      <div className="relative mx-auto max-w-md px-6 text-center text-white">
        <h2 className="font-display text-3xl uppercase leading-tight md:text-4xl">
          Fill the taste that you&apos;ve never eat
        </h2>
        <p className="mt-3 uppercase tracking-wide text-white/85">Warm, delicious made to order</p>
        <div className="mt-6"><BasketButton variant="pink" /></div>
      </div>
    </section>
  );
}