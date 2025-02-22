import Link from "next/link";

export default function Header(){

    return(
        <>
        <header className="p-5 shadow-lg w-full bg-blue-400 flex justify-between">
          <div className="flex gap-2">
        
          <a href="/game" className="learn ">Home</a>
          <Link href="/game"  className="learn">Product</Link>
         
          <a href="" className="learn">Order</a>
          </div>
         
          <div className="flex gap-2">
        <img className="invisible sm:visible" src="/profile.svg"></img>
          <a className="font-bold">Login</a>
         
          </div>
        
        </header>
        
        </>
    )
}