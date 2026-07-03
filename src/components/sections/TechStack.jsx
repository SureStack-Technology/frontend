import React from "react";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiClerk,
} from "@icons-pack/react-simple-icons";
import useLanguageStore from "../../stores/useLanguageStore";
import birdeyeLight from "../../assets/birdeye/logo_light.png";
import birdeyeDark from "../../assets/birdeye/logo_dark.png";
import alchemyMark from "../../assets/alchemy/alchemy-mark-blue-gradient.png";
import heliusLogo from "../../assets/helius/Helius-Vertical-Logo.svg";
import jupiterMark from "../../assets/jupiter/logo-dark.svg";

// Birdeye (birdeye.so) has no Simple Icons logo, so we use the official brand
// assets: the dark-ink mark on light surfaces and the green app-tile on dark.
// Accepts the same `className`/`color` props as the Simple Icons components for
// a uniform call site; `color` is intentionally ignored.
const BirdeyeIcon = ({ className }) => (
  <>
    <img src={birdeyeLight} alt="Birdeye" className={`${className} block dark:hidden object-contain`} />
    <img src={birdeyeDark} alt="Birdeye" className={`${className} hidden dark:block object-contain`} />
  </>
);

// Alchemy's blue-gradient mark reads well on both light and dark surfaces, so a
// single asset serves both themes.
const AlchemyIcon = ({ className }) => (
  <img src={alchemyMark} alt="Alchemy" className={`${className} object-contain`} />
);

// Helius: the full vertical logo (mark + wordmark). Because it's a stacked
// lockup that already includes its name, it uses its own taller sizing instead
// of the square 44px icon box, and the badge renders no separate label below.
const HeliusIcon = () => (
  <img
    src={heliusLogo}
    alt="Helius"
    className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
);

// Jupiter's green-to-cyan gradient mark reads well on both themes, so a single
// asset serves both.
const JupiterIcon = ({ className }) => (
  <img src={jupiterMark} alt="Jupiter" className={`${className} object-contain`} />
);

// DEX Screener ships a monochrome (solid black) mark, which would vanish on the
// dark tile. Inlining it with `fill="currentColor"` lets us theme it dark-on-light
// and light-on-dark so it stays visible in both modes.
const DexScreenerIcon = ({ className }) => (
  <svg
    viewBox="0 0 64 64"
    role="img"
    aria-label="DEX Screener"
    className={`${className} text-slate-900 dark:text-white`}>
    <g transform="translate(0,64) scale(0.1,-0.1)" fill="currentColor" stroke="none">
      <path d="M0 320 l0 -320 320 0 320 0 0 320 0 320 -320 0 -320 0 0 -320z m419
255 c28 -16 51 -23 64 -19 19 6 19 5 -2 -24 -12 -17 -40 -45 -63 -63 -79 -63
-178 -41 -253 56 -24 32 -25 36 -8 31 13 -4 37 3 64 19 61 34 137 34 198 0z
m-241 -141 c-1 -39 13 -60 48 -68 20 -5 23 -10 14 -26 -5 -10 -19 -22 -30 -25
-27 -9 -25 -17 10 -37 32 -18 75 -95 86 -155 9 -46 20 -41 33 13 18 69 47 121
81 141 36 21 37 27 5 41 -32 15 -32 40 -1 52 30 11 49 44 41 70 -3 11 0 29 8
40 14 20 14 20 25 -7 6 -15 13 -73 15 -128 3 -55 13 -120 21 -144 21 -56 21
-56 -13 -32 l-29 21 -22 -36 -22 -35 -25 23 c-16 15 -26 19 -31 11 -4 -6 -20
-34 -37 -62 -16 -28 -32 -51 -35 -51 -3 0 -17 21 -32 48 -48 82 -44 79 -71 54
l-25 -23 -22 35 -22 36 -31 -22 c-29 -21 -30 -21 -23 -2 20 47 36 135 36 200
0 39 5 86 12 104 10 30 12 32 24 15 7 -10 13 -33 12 -51z m74 -36 c-14 -14
-42 2 -42 23 0 19 1 19 26 3 14 -10 21 -21 16 -26z m182 17 c-7 -17 -32 -27
-46 -19 -7 4 -1 14 13 25 26 19 41 17 33 -6z m-92 -22 c8 -10 19 -31 22 -48 4
-16 12 -33 18 -37 7 -4 2 -18 -15 -38 -15 -17 -30 -42 -33 -56 -8 -33 -21 -30
-29 5 -3 16 -18 42 -32 57 -22 24 -23 28 -9 36 9 5 16 21 16 35 0 25 24 63 40
63 4 0 14 -8 22 -17z" />
    </g>
  </svg>
);

// Core technologies powering the SureStack app. `color="default"` renders each
// brand's official colour, all of which stay legible on light and dark surfaces.
const techStack = [
  { name: "React", Icon: SiReact, href: "https://react.dev" },
  { name: "Vite", Icon: SiVite, href: "https://vite.dev" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, href: "https://tailwindcss.com" },
  { name: "Clerk", Icon: SiClerk, href: "https://clerk.com" },
  { name: "Birdeye", Icon: BirdeyeIcon, href: "https://birdeye.so" },
  { name: "Alchemy", Icon: AlchemyIcon, href: "https://www.alchemy.com" },
  { name: "Helius", Icon: HeliusIcon, hideLabel: true, href: "https://www.helius.dev" },
  { name: "Jupiter", Icon: JupiterIcon, href: "https://jup.ag" },
  { name: "DEX Screener", Icon: DexScreenerIcon, href: "https://dexscreener.com" },
];

const TechStack = () => {

  const { t } = useLanguageStore();

  return (
    <section id="techstack" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading text-slate-900 dark:text-white mb-4">
            {t("techstack.heading")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 font-subheading max-w-2xl mx-auto">
            {t("techstack.sub")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map(({ name, Icon, hideLabel, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              aria-label={`${name} — opens in a new tab`}
              className="group flex flex-col items-center justify-center gap-3 w-32 h-32 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm hover:border-cyan-400 hover:shadow-neon-safe focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-300">
              <Icon
                color="default"
                className="w-11 h-11 transition-transform duration-300 group-hover:scale-110"
                aria-label={name} />
              {!hideLabel && (
                <span className="text-sm font-subheading font-semibold text-slate-600 dark:text-slate-300">
                  {name}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
