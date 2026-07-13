import React from "react";
import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiClerk,
} from "@icons-pack/react-simple-icons";
import useLanguageStore from "../../stores/useLanguageStore";
import {
  DexScreenerIcon,
  VisaIcon,
  AmexIcon,
  MastercardIcon,
} from "../icons";
import birdeyeLight from "../../assets/birdeye/logo_light.png";
import birdeyeDark from "../../assets/birdeye/logo_dark.png";
import alchemyMark from "../../assets/alchemy/alchemy-mark-blue-gradient.png";
import heliusLogo from "../../assets/helius/Helius-Vertical-Logo.svg";
import jupiterMark from "../../assets/jupiter/logo-dark.svg";
import hardhatLogo from "../../assets/hardhat/hardhat.svg";
import etherscanLight from "../../assets/etherscan/etherscan-logo-circle-light.svg";
import etherscanDark from "../../assets/etherscan/etherscan-logo-circle.svg";
import lunarcrushLogo from "../../assets/lunarcrush/LunarCrush.png";
import legalzoomLogo from "../../assets/legalzoom/LegalZoom.jpeg";
import mercuryLogo from "../../assets/mercury/mercury_bank.png";

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

const HardhatIcon = ({ className}) => (
  <img src={hardhatLogo} alt="HardHat" className={`${className} object-contain`} />
);

const EtherscanIcon = ({ className}) => (
  <>
  <img src={etherscanLight} alt="Etherscan" className={`${className} block dark:hidden object-contain`} />
  <img src={etherscanDark} alt="Etherscan" className={`${className} hidden dark:block object-contain`} />
  </>
);

const LunarCrushIcon = ({ className}) => (
  <img src={lunarcrushLogo} alt="LunarCrush" className={`${className} object-contain`} />
);

const LegalZoomIcon = ({ className}) => (
  <img src={legalzoomLogo} alt="LegalZoom" className={`${className} object-contain`} />
);

const MercuryBankIcon = ({ className}) => (
  <img src={mercuryLogo} alt="MercuryBank" className={`${className} object-contain`} />
);

// Core technologies powering the SureStack app. `color="default"` renders each
// brand's official colour, all of which stay legible on light and dark surfaces.
const techStack = [
  { name: "React", Icon: SiReact, href: "https://react.dev" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, href: "https://tailwindcss.com" },
  { name: "Clerk", Icon: SiClerk, href: "https://clerk.com" },
  { name: "Birdeye", Icon: BirdeyeIcon, href: "https://birdeye.so" },
  { name: "Alchemy", Icon: AlchemyIcon, href: "https://www.alchemy.com" },
  { name: "Helius", Icon: HeliusIcon, hideLabel: true, href: "https://www.helius.dev" },
  { name: "Jupiter", Icon: JupiterIcon, href: "https://jup.ag" },
  { name: "DEX Screener", Icon: DexScreenerIcon, href: "https://dexscreener.com" },
  { name: "Hardhat", Icon: HardhatIcon, href: "https://hardhat.org" },
  { name: "Etherscan", Icon: EtherscanIcon, href: "https://sepolia.etherscan.io/" },
  { name: "LunarCrush", Icon: LunarCrushIcon, hideLabel: true, href: "https://lunarcrush.com/" },
  { name: "LegalZoom", Icon: LegalZoomIcon, href: "https://www.legalzoom.com" },
  { name: "MercuryBank", Icon: MercuryBankIcon, href: "https://mercury.com/" },
  { name: "Visa", Icon: VisaIcon, hideLabel: true, href: "https://visa.com/" },
  { name: "American Express", Icon: AmexIcon, hideLabel: true, href: "https://www.americanexpress.com/" },
  { name: "Mastercard", Icon: MastercardIcon, href: "https://www.mastercard.com/" },
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

        {/* <div className="flex flex-wrap justify-center gap-6"> */}
        <div className="grid grid-cols-6 gap-6 justify-items-center">
          {techStack.map(({ name, Icon, hideLabel, href }) => (
            <a key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              aria-label={`${name} — opens in a new tab`}
              className="group flex flex-col items-center justify-center w-32 h-32 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-500 backdrop-blur-sm hover:border-cyan-400 hover:shadow-neon-safe focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-all duration-300">
              <Icon
                color="default"
                className="w-11 h-11 transition-transform duration-300 group-hover:scale-110"
                aria-label={name} />
              {!hideLabel && (
                <span className="text-sm font-subheading font-semibold text-slate-300 dark:text-slate-300">
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
