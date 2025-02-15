"use client";

import { TopUpCard } from "@/app/component/TopUpCard"
export default function TopUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-800 to-teal-600 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Free Fire Indonesia Servers TopUp
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TopUpCard amount="5 Diamond" type="Basic Package" special={true} />
          <TopUpCard amount="12 Diamond" type="Starter Package" special={true} />
          <TopUpCard amount="50 Diamond" type="Standard Package" />
          <TopUpCard amount="70 Diamond" type="Popular Package" />
          <TopUpCard amount="140 Diamond" type="Value Package" />
          <TopUpCard amount="355 Diamond" type="Plus Package" />
          <TopUpCard amount="720 Diamond" type="Pro Package" />
          <TopUpCard amount="1450 Diamond" type="Premium Package" />
          <TopUpCard amount="2180 Diamond" type="Mega Package" />
          <TopUpCard amount="3640 Diamond" type="Ultra Package" />
          <TopUpCard amount="7290 Diamond" type="Super Package" />
          <TopUpCard amount="Level Up" type="Special Boost" />
          <TopUpCard amount="Weekly" type="Subscription" />
          <TopUpCard amount="Monthly" type="Premium Subscription" />
        </div>

        <div className="mt-8 text-center text-white">
          <p className="text-sm opacity-80">
            Select your preferred top-up package. All transactions are secure and instant.
          </p>
        </div>
      </div>
    </div>
  );
}