import type { Metadata } from "next";
import FormOrder from "./_Components/FormOrder";
import PaymentHero from "./_Components/PaymentHero";
import PaymentOrderSummary from "./_Components/PaymentOrderSummary";

export const metadata: Metadata = {
  title: "Payment | MEGA STORE",
  description: "Complete your order — secure checkout.",
};

export default function PaymentPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-6 pb-12 md:pb-16">
      <div className="pt-2 md:pt-4">
        <PaymentHero />
      </div>

      <div className="mt-20 grid grid-cols-1 gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-10 ">
        <div className="lg:col-span-8 xl:col-span-8 ">
          <FormOrder />
        </div>
        <div className="lg:col-span-5 xl:col-span-4">
          <PaymentOrderSummary />
        </div>
      </div>
    </div>
  );
}
