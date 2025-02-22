import Price from "../component/Price";
import Header from "../component/Header";

export default function page() {
  return (
    <>
      <div>
       <Header/>
       

        <main className="mx-4 mt-11">
          <div className="rounded-lg">
            <img className="w-auto rounded-lg" src="/freefire.jpg" alt="Free Fire" />
          </div>

          <div className="mt-10 ml-4">
            <h1 className="font-extrabold text-2xl">Free Fire (Indonesia)</h1>
            <h2 className="text-lg">Rs 85 - Rs 9,870</h2>
          </div>

          {/* Left and Right Component Placement */}
          <div className="bg-[#336666] rounded-xl w-full  mt-8 p-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Left Side */}
              <div className="col-span-1 flex flex-col gap-4">
                <Price price="65" diamond="50 Diamond" />
                <Price price="220" diamond="240 Diamond" />
                <Price price="440" diamond="480 Diamond"/>
                <Price price="770" diamond="850 Diamond"/>
                <Price price="1100" diamond="1240 Diamond"/>
                <Price price="4400" diamond="5060 Diamond"/>
                <Price price="1100" diamond="Monthly Membership"/>
                <Price price="220" diamond="Level Up Pass"/>
              </div>

              {/* Right Side */}
              <div className="col-span-1 flex flex-col gap-4">
                <Price price="110" diamond="115 Diamond"/>
                <Price price="330" diamond="355 Diamond"/>
                <Price price="550" diamond="610 Diamond"/>
                <Price price="1000" diamond="1090 Diamond"/>
                <Price price="2200" diamond="2530 Diamond"/>
                <Price price="8800" diamond="10120 Diamond"/>
                <Price price="220" diamond="Weekly Membership"/>
                <Price price="80" diamond="Weekly Lite"/>
              </div>
            </div>
          </div>
          <div className="bg-[#336666] mt-10 pb-3">
            <h1 className="text-white font-extrabold">Player Id(UID)</h1>
            <input className="px-14 sm:px-96 ml-2" placeholder="enter player uid"></input>


          </div>
          <button className="font-extrabold text-white bg-[#336666] px-4 py-2 mt-5 rounded-xl">Buy Now</button>
          <div>
            <h1>How to purchase Free Fire BD Diamonds in Game Shop Np:</h1>
            <h2>
            First, select the Diamond Pack denomination.

Next, enter your Free Fire Player ID.

After that, check out and choose your payment method.

After payment is made, the Diamond you purchased will be credited to your account within 5 minutes
            </h2>
          </div>
        </main>
      </div>
    </>
  );
}
