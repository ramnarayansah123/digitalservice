import Link from "next/link";
import TopUpPage from "../topup/page";
import Price from "../component/Price";

export default function page() {
  return (
    <>
      <div>
        <header className="p-5 shadow-lg bg-blue-400 flex justify-between gap-6">
          <div className="flex gap-2">
            <a href="/game" className="learn">
              Home
            </a>
            <Link href="/game" className="learn">
              Game
            </Link>
            <a href="" className="learn">
              home
            </a>
            <a href="" className="learn">
              home
            </a>
          </div>

          <div className="flex gap-3 items-center">
            <img className="h-8 w-8" src="/profile.svg" alt="Profile" />
            <a className="learn">Login</a>
            <a className="learn">SignUp</a>
          </div>
        </header>

        <main className="mx-4 mt-11">
          <div className="rounded-lg">
            <img className="w-full rounded-lg" src="/freefire.jpg" alt="Free Fire" />
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
                <Price />
                <Price />
                <Price />
                <Price />
                <Price />
                <Price />
                <Price />
                <Price />
              </div>

              {/* Right Side */}
              <div className="col-span-1 flex flex-col gap-4">
                <Price />
                <Price />
                <Price />
                <Price />
                <Price />
                <Price />
                <Price />
                <Price />
              </div>
            </div>
          </div>
          <div className="bg-[#336666] mt-10 pb-3">
            <h1 className="text-white font-extrabold">Player Id(UID)</h1>
            <input className="px-44 ml-2" placeholder="enter player uid"></input>


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
