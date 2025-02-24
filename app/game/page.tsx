"use client"
import Price from "../component/Price";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useState } from "react";
import Link from "next/link";

export default function page() {
  const [name,setNames]=useState("ram")
  //this is for left part
  function addText65(){
    setNames("44")
  }
  function addText220(){
    setNames("220")
  }
  function addText440(){
    setNames("440")
  }
  function addText770(){
    setNames("770")
  }
  function addText1100(){
    setNames("1100")
  }
  function addText4400(){
    setNames("4400")
  }
  function addText1100l(){
    setNames("1100")
  }
  function addText220l(){
    setNames("220")
  }
// this is for right part
function addText110(){
  setNames("110")
}
function addText330(){
  setNames("330")
}
function addText550(){
  setNames("550")
}
function addText1000(){
  setNames("1000")
}
function addText2200(){
  setNames("2200")
}
function addText8800(){
  setNames("8800")
}
function addText220w(){
  setNames("220")
}
function addText80w(){
  setNames("80")}
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
                <button onClick={addText65}>
                   <Price price="65" diamond="50 Diamond" />
                </button>
                
                <button onClick={addText220}>
                <Price price="220" diamond="240 Diamond" />
                </button>

                <button onClick={addText440}>
                <Price price="440" diamond="480 Diamond"/>
                </button>

                <button onClick={addText770}>
                <Price price="770" diamond="850 Diamond"/>
                </button>

                <button onClick={addText1100}>
                <Price price="1100" diamond="1240 Diamond"/>
                </button>

                <button onClick={addText4400}>
                   <Price price="4400" diamond="5060 Diamond"/>
                </button>

                <button onClick={addText1100l}>
                <Price price="1100" diamond="Monthly Membership"/>
                </button>

                <button onClick={addText220l}>
                <Price price="220" diamond="Level Up Pass"/>
                </button>
                
              </div>

              {/* Right Side */}
              <div className="col-span-1 flex flex-col gap-4">
                <button onClick={addText110}>

                <Price price="110" diamond="115 Diamond"/>
                </button>

               
                <button onClick={addText330}>

                <Price price="330" diamond="355 Diamond"/>
                </button>
                <button onClick={addText550}>

                <Price price="550" diamond="610 Diamond"/>
                </button>
                <button onClick={addText1000}>

                <Price price="1000" diamond="1090 Diamond"/>
                </button>
                <button onClick={addText2200}>

                <Price price="2200" diamond="2530 Diamond"/>
                </button>
                <button onClick={addText8800}>

                <Price price="8800" diamond="10120 Diamond"/>
                </button>
                <button onClick={addText220w}>

                <Price price="220" diamond="Weekly Membership"/>
                </button>
                <button onClick={addText80w}>

                <Price price="80" diamond="Weekly Lite"/>
                </button>
              </div>
            </div>
          </div>
          <h1>Price: {name}</h1>
          <div className="bg-[#336666] mt-10 pb-3">
            <h1 className="text-white font-extrabold">Player Id(UID)</h1>
            <input type="number" className="px-14 sm:px-96 ml-2" placeholder="enter player uid"></input>


          </div>
          <Link href="/checkout" className="font-extrabold text-white bg-[#336666] px-6 py-2 mt-24 rounded-xl">Buy Now</Link>
          <div>
            <h1>Price: {}</h1>
            <h1>How to purchase Free Fire BD Diamonds in Game Shop Np:</h1>
            <h2>
            First, select the Diamond Pack denomination.

Next, enter your Free Fire Player ID.

After that, check out and choose your payment method.

After payment is made, the Diamond you purchased will be credited to your account within 5 minutes
            </h2>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}
