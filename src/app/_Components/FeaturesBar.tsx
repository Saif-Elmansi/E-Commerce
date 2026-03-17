import React from 'react';
import { Truck, RotateCcw, ShieldCheck, HeadphonesIcon } from 'lucide-react';

export default function FeaturesBarBlue() {
  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over 500 EGP',
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: '14-day return policy',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payment',
      description: '100% secure checkout',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Contact us anytime',
    },
  ];

  return (
    <div className="w-full bg-[#f0f9ff] py-6 px-4 md:px-10">
      <div className=" flex  justify-center  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 shrink-0 bg-[#e0f2fe] text-[#0284c7] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm border border-[#bae6fd]">
                <feature.icon size={22} strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col gap-0.5">
                <h3 className="text-sm font-extrabold text-slate-800 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium whitespace-nowrap">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}