import { Phone } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTelegram, FaXTwitter } from "react-icons/fa6";
import Wave from "./Wave";
import Logo from "./Logo";
const socials = [
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaTelegram, label: "Telegram", href: "#" },
  { icon: FaXTwitter, label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-mauve pb-10 pt-20">
      <Wave fillClass="fill-mauve" className="bottom-full translate-y-px" speed={20} />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">

        <Logo className="text-3xl text-sky" />
        {/* <span className="font-display text-2xl text-sky">DONUT</span> */}

        <div className="text-center text-white">
          <p className="text-xs uppercase tracking-wide">We are on social networks</p>
          <div className="mt-3 flex justify-center gap-5 text-2xl text-sky">
            {socials.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} className="transition hover:-translate-y-1">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <a href="tel:+2348147617293" className="flex items-center gap-2 text-white">
          <Phone size={16} />
          <span className="text-xs leading-tight">
            +234 814 761 7293
            <br />
            <span className="opacity-70">order a call back</span>
          </span>
        </a>
      </div>
    </footer>
  );
}
