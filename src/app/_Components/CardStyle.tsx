import React from "react";
import { HiFire } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";

const CardStyle = () => {
  const cards = [
    {
      id: 1,
      tag: "Deal of the Day",
      icon: <HiFire className="text-blue-200" />,
      title: "Fresh Organic Fruits",
      description: "Get up to 40% off on selected organic fruits",
      discount: "40% OFF",
      code: "ORGANIC40",
      buttonText: "Shop Now",
      bgClass:
        "bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#1e3a8a] border border-blue-300/25",
      tagBg: "bg-white/15",
      actionText: "text-blue-700",
    },
    {
      id: 2,
      tag: "New Arrivals",
      icon: <HiSparkles className="text-cyan-200" />,
      title: "Exotic Vegetables",
      description: "Discover our latest collection of premium vegetables",
      discount: "25% OFF",
      code: "FRESH25",
      buttonText: "Explore Now",
      bgClass:
        "bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] border border-slate-300/20",
      tagBg: "bg-white/15",
      actionText: "text-slate-700",
    },
  ];

  return (
    <div className="flex flex-col items-stretch justify-center gap-4 py-2 md:flex-row md:gap-6 md:py-4">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`${card.bgClass} card-enter card-enter-${index + 1} group relative overflow-hidden w-full max-w-137.5 min-h-64 md:min-h-70 rounded-[30px] p-6 md:p-8 text-white flex flex-col justify-between shadow-lg shadow-blue-950/10 hover:shadow-xl hover:shadow-blue-950/15 transition-all duration-300`}
        >
          <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -mr-12 -mt-12 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-white/5 via-transparent to-transparent" />

          <div className="z-10">
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${card.tagBg} backdrop-blur-md text-sm font-semibold mb-5 border border-white/15`}
            >
              {card.icon}
              <span>{card.tag}</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 tracking-tight">
              {card.title}
            </h2>
            <p className="text-white/85 text-sm md:text-base mb-7 max-w-[85%] font-medium leading-relaxed">
              {card.description}
            </p>
          </div>

          <div className="z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-black">
                {card.discount}
              </span>
              <div className="text-[11px] uppercase tracking-wider opacity-85 leading-tight">
                Use code: <br />
                <span className="font-bold text-sm opacity-100">
                  {card.code}
                </span>
              </div>
            </div>

            <button className="bg-white/95 text-slate-800 px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2.5 hover:bg-white transition-all duration-300 group/btn w-fit shadow-md shadow-black/10">
              <span className={card.actionText}>{card.buttonText}</span>
              <FaArrowRightLong
                className={`transition-transform group-hover/btn:translate-x-1 ${card.actionText}`}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardStyle;
