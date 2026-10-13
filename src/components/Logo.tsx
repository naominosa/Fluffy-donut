import Image from "next/image";
import { LOGO_ICON } from "@/data/config";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center font-display tracking-wide ${className}`} aria-label="Donut">
      D
      {/* The "O" slot. It is 0.9em tall, so it scales with the text size. */}
      <span className="mx-[0.06em] inline-grid h-[0.9em] w-[0.9em] place-items-center">
        {LOGO_ICON ? (
          <Image src={LOGO_ICON} alt="" width={96} height={96} className="h-full w-full object-contain" />
        ) : (
          <span className="h-full w-full rounded-full border-2 border-dashed border-current opacity-60" />
        )}
      </span>
      NUT
    </span>
  );
}