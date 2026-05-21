import React from "react";
import { Check } from "lucide-react";
import useLanguageStore from "../../stores/useLanguageStore";
import { Gift, Rocket, TrendingUp, ShieldCheck, Landmark, SquareCheckBig, Calendar, LockKeyhole, Star, ArrowRight } from 'lucide-react';
import { SignUp, useUser } from "@clerk/clerk-react";

const Pricing = () => {
  const { t, language } = useLanguageStore();
  const { isSignedIn } = useUser();
  const [showSignUp, setShowSignUp] = useState(false);

  const tiers = [
    {
      id: "free",
      buttonText:"NEW",
      icon: <Gift size={32} color="#0961d1" />,
      colour: "#0961d1",
      sub: t("pricing.tiers.free.sub"),
      blurb: t("pricing.tiers.free.blurb"),
      price: t("pricing.tiers.free.price"),
      name: t("pricing.tiers.free.name"),
      eaLabel: t("pricing.tiers.free.eaLabel"),
      includes: t("pricing.tiers.free.includes"),
      features: [
        t("pricing.tiers.free.features.0"),
        t("pricing.tiers.free.features.1"),
        t("pricing.tiers.free.features.2"),
        t("pricing.tiers.free.features.3"),
        t("pricing.tiers.free.features.4"),
        t("pricing.tiers.free.features.5"),
      ],
      cta: t("pricing.tiers.free.cta"),
    },{
      id: "starter",
      buttonText:"EARLY ACCESS",
      icon: <Rocket size={32} color="#a669f4" />,
      colour: "#4724b2",
      sub: t("pricing.tiers.starter.sub"),
      blurb: t("pricing.tiers.free.blurb"),
      price: "$29",
      eaPrice: "$27.5",
      name: t("pricing.tiers.starter.name"),
      eaLabel: t("pricing.tiers.starter.eaLabel"),
      includes: t("pricing.tiers.starter.includes"),
      features: [
        t("pricing.tiers.starter.features.0"),
        t("pricing.tiers.starter.features.1"),
        t("pricing.tiers.starter.features.2"),
        t("pricing.tiers.starter.features.3"),
        t("pricing.tiers.starter.features.4"),
        t("pricing.tiers.starter.features.5"),
      ],
      cta: t("pricing.tiers.starter.cta"),
    },{
      id: "growth",
      buttonText:"EARLY ACCESS",
      icon: <TrendingUp size={32} color="#2e8738" />,
      colour: "#2e8738",
      sub: t("pricing.tiers.growth.sub"),
      blurb: t("pricing.tiers.free.blurb"),
      price: "$149",
      eaPrice: "$149",
      name: t("pricing.tiers.growth.name"),
      eaLabel: t("pricing.tiers.growth.eaLabel"),
      includes: t("pricing.tiers.growth.includes"),
      features: [
        t("pricing.tiers.growth.features.0"),
        t("pricing.tiers.growth.features.1"),
        t("pricing.tiers.growth.features.2"),
        t("pricing.tiers.growth.features.3"),
        t("pricing.tiers.growth.features.4"),
        t("pricing.tiers.growth.features.5"),
      ],
      cta: t("pricing.tiers.growth.cta"),
      earlyAccess: false,
    },{
      id: "pro",
      buttonText:"EARLY ACCESS",
      icon: <ShieldCheck size={32} color="#064ea9" />,
      colour: "#064ea9",
      sub: t("pricing.tiers.pro.sub"),
      blurb: t("pricing.tiers.free.blurb"),
      price: "$349",
      eaPrice: "$349",
      name: t("pricing.tiers.pro.name"),
      eaLabel: t("pricing.tiers.pro.eaLabel"),
      includes: t("pricing.tiers.pro.includes"),
      features: [
        t("pricing.tiers.pro.features.0"),
        t("pricing.tiers.pro.features.1"),
        t("pricing.tiers.pro.features.2"),
        t("pricing.tiers.pro.features.3"),
        t("pricing.tiers.pro.features.4"),
        t("pricing.tiers.pro.features.5"),
      ],
      cta: t("pricing.tiers.pro.cta"),
    },{
      id: "enterprise",
      buttonText:"Custom Solution",
      icon: <Landmark size={32} color="#d37300" />,
      colour: "#d37300",
      sub: t("pricing.tiers.enterprise.sub"),
      blurb: t("pricing.tiers.free.blurb"),
      price: "Custom",
      eaPrice: "Custom",
      name: t("pricing.tiers.enterprise.name"),
      eaLabel: t("pricing.tiers.enterprise.eaLabel"),
      includes: t("pricing.tiers.enterprise.includes"),
      features: [
        t("pricing.tiers.enterprise.features.0"),
        t("pricing.tiers.enterprise.features.1"),
        t("pricing.tiers.enterprise.features.2"),
        t("pricing.tiers.enterprise.features.3"),
        t("pricing.tiers.enterprise.features.4"),
        t("pricing.tiers.enterprise.features.5"),
      ],
      cta: t("pricing.tiers.enterprise.cta"),
    },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
  }

  const comingSoon = async(e) => {
    e.preventDefault();
    alert("Coming Soon");
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    if (isSignedIn) {
      // Redirect to dashboard if already logged in
      window.location.href = "/dashboard";
    } else {
      setShowSignUp(true);
    }
  };

  return (
    <section id="pricing" className="relative py-20 bg-slate-900/50">
      
      {/* CLERK MODAL OVERLAY */}
      {showSignUp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative">
            <button 
              onClick={() => setShowSignUp(false)}
              className="absolute -top-10 right-0 text-white hover:text-slate-300 transition"
            >
              <X size={24} />
            </button>
            <SignUp routing="hash" signInUrl="/sign-in" />
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <h2 className="text-4xl font-heading text-white mb-4">
            {t("pricing.heading")}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t("pricing.sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 content-center items-center">

          {tiers.map((tier) => {

            return(
              <div key={tier.id}
                  className="p-2 h-full mt-auto rounded-2xl border transition-all duration-300 transform hover:brightness-150 hover:shadow-[0_0_10px_var(--shadow-color)]"
                  style={{borderColor: tier.colour, '--shadow-color': tier.colour }}>

                <div className="flex flex-row items-stretch justify-around w-full gap-2 h-20" 
                     style={{color: `color-mix(in srgb, ${tier.colour}, white 95%)`}}>

                  <span className="inline-flex items-center justify-center w-12 h-12 border rounded-full p-2" 
                        style={{borderColor: tier.colour}}>
                    {tier.icon}
                  </span>
                  <div className="flex flex-col">
                    <div className="font-bold text-xl" style={{color: tier.colour}}>{tier.name}</div>
                    <div className="text-white text-sm font-light">{tier.sub}</div>
                  </div>
                </div>

                <hr className="w-full h-2" style={{borderColor: tier.colour}}/>

                <div className="flex flex-col my-2.5">
                  <div className="text-xs">Starting at</div>
                  <div className="flex flex-row flex-1 items-baseline">
                    <span className="text-2xl font-bold" style={{color: `color-mix(in srgb, ${tier.colour}, white 30%)`}}>
                      {tier.price}
                    </span>
                    <span className="text-xs ml-2">/month</span>
                  </div>
                  <div className="text-xs">{tier.blurb}</div>
                </div>

                <hr className="w-full h-2" style={{borderColor: tier.colour}}/>

                <div className="flex flex-col justify-around h-60">

                  <div className="text-sm font-semibold py-1" 
                        style={{color: `color-mix(in srgb, ${tier.colour}, white 30%)`}}>
                      {tier.includes}
                  </div>

                  <ul className="space-y-4 mb-2 text-[11px]">
                    {tier.features.map((feature, i) => (
                      feature!=="null" ? (
                        <li key={i} className="flex items-start my-0">
                          <SquareCheckBig className="w-5 h-5 mr-2 shrink-0 mt-0.5" style={{color: tier.colour}}/>
                          <span>{feature}</span>
                        </li>
                      ) : (
                        <li key={i} className="">&nbsp;</li>
                      )
                    ))}
                  </ul>

                  <button className="w-[97%] mx-auto py-2 rounded-lg font-bold transition" 
                          style={{backgroundColor: tier.colour}}
                          onClick={comingSoon}>
                    {tier.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-stretch border rounded border-blue-500 my-2 p-2 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="shrink-0 m-2 text-blue-600" size={48} absoluteStrokeWidth/>
            <span className="text-base leading-tight">Digital Risk Support, Not Insurance</span>
          </div>
          <div className="w-px bg-linear-to-b from-transparent via-blue-600 to-transparent" />
          <div className="text-[11px] items-center w-[45%]">
            SureStack provides technology and services that help you identify, monitor, and respond to digital risks. We do not sell insurance, and nothing in our offering should be construed as insurance or a guarantee of any specific outcome.
          </div>
          <div className="w-px bg-linear-to-b from-transparent via-blue-600 to-transparent" />
          <div className="flex items-center gap-2">
            <span className="text-sm">Learn more about what we do</span>
            <ArrowRight className="flex text-blue-700 shrink-0" size={48} absoluteStrokeWidth/>
          </div>
        </div>

        <div className="flex items-stretch border rounded border-blue-500 p-2 gap-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex">
              <div className="inline-flex items-center justify-center min-w-12 min-h-12 border border-blue-600 rounded-full m-2">
                <LockKeyhole className="text-blue-600"/>
              </div>
              <div className="flex flex-col text-sm">
                <div className="font-bold mb-1">You're in control</div>
                <div className="text-[10px]">You make the decisions, we provide the insight</div>
              </div>
            </div>
            <div className="flex">
              <div className="inline-flex items-center justify-center min-w-12 min-h-12 border border-blue-600 rounded-full m-2">
                <ShieldCheck className="text-blue-600"/>
              </div>
              <div className="flex flex-col text-sm">
                <div className="font-bold mb-1">Privacy First</div>
                <div className="text-[10px]">Your data is protected by industry-leading practices</div>
              </div>
            </div>
            <div className="flex">
              <div className="inline-flex items-center justify-center min-w-12 min-h-12 border border-blue-600 rounded-full m-2">
                <Star className="text-blue-600"/>
              </div>
              <div className="flex flex-col text-sm">
                <div className="font-bold mb-1">Fast and reliable</div>
                <div className="text-[10px]">Real-time monitoring and rapid support when it matters</div>
              </div>
            </div>
            <div className="flex">
              <div className="inline-flex items-center justify-center min-w-12 min-h-12 border border-blue-600 rounded-full m-2">
                <Calendar className="text-blue-600"/>
              </div>
              <div className="flex flex-col text-sm">
                <div className="font-bold mb-1">Trusted by Many</div>
                <div className="text-[10px]">Built for investors, by experts in digital risk management</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm">
          {t("pricing.warning")}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
