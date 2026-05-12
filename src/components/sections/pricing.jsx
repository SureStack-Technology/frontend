import React from "react";
import { Check } from "lucide-react";
import useLanguageStore from "../../stores/useLanguageStore";
import { Gift, Rocket, TrendingUp, ShieldCheck, Landmark, SquareCheckBig, Calendar, LockKeyhole, Star } from 'lucide-react';

const Pricing = () => {
  const { t, language } = useLanguageStore();

  const tiers = [
    {
      id: "free",
      buttonText:"NEW",
      icon: <Gift size={32} color="#0961d1" />,
      colour: "#0961d1",
      sub: t("pricing.tiers.free.sub"),
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
      earlyAccess: false,
    },{
      id: "starter",
      buttonText:"EARLY ACCESS",
      icon: <Rocket size={32} color="#a669f4" />,
      colour: "#4724b2",
      sub: t("pricing.tiers.starter.sub"),
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
      earlyAccess: true,
    },{
      id: "growth",
      buttonText:"EARLY ACCESS",
      icon: <TrendingUp size={32} color="#2e8738" />,
      colour: "#2e8738",
      sub: t("pricing.tiers.growth.sub"),
      price: "$169",
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
      earlyAccess: true,
    },{
      id: "pro",
      buttonText:"EARLY ACCESS",
      icon: <ShieldCheck size={32} color="#064ea9" />,
      colour: "#064ea9",
      sub: t("pricing.tiers.pro.sub"),
      price: "$499",
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
      earlyAccess: true,
    },{
      id: "enterprise",
      buttonText:"Custom Solution",
      icon: <Landmark size={32} color="#d37300" />,
      colour: "#d37300",
      sub: t("pricing.tiers.enterprise.sub"),
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
      earlyAccess: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
                  className="p-2 h-full mt-auto rounded-2xl border transition-all duration-300 transform hover:-translate-y-2"
                  style={{borderColor: tier.colour}}>

                <span className="text-sm mb-2 uppercase border rounded-full px-3" 
                      style={{borderColor: tier.colour, color: `color-mix(in srgb, ${tier.colour}, white 30%)`}}>
                  {tier.buttonText}
                </span>

                <div className="flex flex-col items-center justify-center w-full" 
                     style={{color: `color-mix(in srgb, ${tier.colour}, white 95%)`}}>
                  <div>{tier.icon}</div>
                  <div className="font-bold text-xl">{tier.name}</div>
                  <div className="text-white text-sm">{tier.sub}</div>
                </div>

                {tier.earlyAccess ? ( 
                  <div className="flex flex-col items-center justify-center mb-6 border rounded my-2" 
                     style={{borderColor: tier.colour}}>
                     <div className="text-xs">{tier.eaLabel}</div>
                     <div className="text-2xl font-bold" style={{color: `color-mix(in srgb, ${tier.colour}, white 30%)`}}>{tier.eaPrice}</div>
                  </div>
                ) : (
                  <div className="h-20">&nbsp;</div>
                )
                }

                <div className="flex items-center justify-center mb-6 border rounded" 
                     style={{borderColor: tier.colour}}>
                  <div></div>
                  <span className="text-2xl font-bold" style={{color: `color-mix(in srgb, ${tier.colour}, white 30%)`}}>
                    {tier.price}
                  </span>
                  <span className="text-[10px] ml-2">/month</span>
                </div>

                <div className="border rounded p-2" style={{borderColor: tier.colour}}>
                  <div className="text-base">{tier.includes}</div>
                  <ul className="space-y-4 mb-2 text-[11px]">
                    {tier.features.map((feature, i) => (
                      feature!=="null" ? (
                        <li key={i} className="flex items-start my-0">
                          <SquareCheckBig className="w-5 h-5 mr-2 shrink-0 mt-0.5" style={{color: tier.colour}}/>
                          <span>{feature}</span>
                        </li>
                      ) : (
                        <li key={i} className="h-15">&nbsp;</li>
                      )
                    ))}
                  </ul>

                  <button className="w-[97%] mx-auto py-2 rounded-lg font-bold transition" style={{backgroundColor: tier.colour}}>
                    {tier.cta}
                  </button>

                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-stretch border rounded border-blue-500 my-2 p-2 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="shrink-0 m-2" style={{color:'#4c56d2'}} size={42} absoluteStrokeWidth/>
            <span className="text-base leading-tight">Early Access Coverage Commitment</span>
          </div>
          <div className="w-px bg-linear-to-b from-transparent via-blue-600 to-transparent" />
          <div className="text-[11px] items-center w-[50%]">
            When the full protection system goes live, you will receive coverage for the same number of months you have prepaid, according to your selected plan and early accesss pricing status. <br/>Example: Prepay 6 months today = 6 months coverage once the system is live
          </div>
          <div className="w-px bg-linear-to-b from-transparent via-blue-600 to-transparent" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="flex text-blue-700 shrink-0" size={48} absoluteStrokeWidth/>
            <span className="text-sm">Our commitment: Fair, Transparent, Protected</span>
          </div>
        </div>

        <div className="flex items-stretch border rounded border-blue-500 my-2 p-2 gap-4">
          <div className="flex border-r border-blue">
            <Calendar className="text-blue-600" size={42} absoluteStrokeWidth/>
          </div>
          <div className="w-px bg-linear-to-b from-transparent via-blue-600 to-transparent" />
          <div className="flex flex-col w-full">
            <div className="text-sm font-bold text-blue-600">
              How Early Acess Works
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="flex">
                <span className="inline-flex items-center justify-center w-10 h-10 border border-blue-600 rounded-full m-2">
                  <ShieldCheck className="text-blue-600"/>
                </span>
                <span className="text-sm">
                  <span className="font-bold">1. Lock in early pricing</span><br/> 
                  <span className="text-[10px]">Be one of the first 100 member in any paid plan</span>
                </span>
              </div>
              <div className="flex">
                <span className="inline-flex items-center justify-center w-10 h-10 border border-blue-600 rounded-full m-2">
                  <LockKeyhole className="text-blue-600"/>
                </span>
                <span className="text-sm">
                  <span className="font-bold">2. Keep ypur price</span><br/>
                  <span className="text-[10px]">Your early access price stays as long as you remain a member</span>
                </span>
              </div>
              <div className="flex">
                <span className="inline-flex items-center justify-center w-10 h-10 border border-blue-600 rounded-full m-2">
                  <Star className="text-blue-600"/>
                </span>
                <span className="text-sm">
                  <span className="font-bold">3. Better benefits</span><br/>
                  <span className="text-[10px]">Early members get more coverage for the same price</span>
                </span>
              </div>
              <div className="flex">
                <span className="inline-flex items-center justify-center w-10 h-10 border border-blue-600 rounded-full m-2">
                  <Calendar className="text-blue-600"/>
                </span>
                <span className="text-sm">
                  <span className="font-bold">4. One Year reservation</span><br/>
                  <span className="text-[10px]">Prepay for any number of months (1-12) and the price is locked for that period</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
