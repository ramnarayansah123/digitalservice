
import ProductCard from "./component/ProductCard";
import Link from "next/link";
export default function page(){




  return(
  <div >
    
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


<main >
<h1 className=" learn text-center p-2 mb-2 w-full bg-red-50">Product</h1>

  <div className="flex justify-center flex-wrap ml-2 gap-4   ">

<ProductCard  name="FreeFire"  price="Rs 65 -- Rs 1000" img="freefire.jpg" Url="/game"/>
<ProductCard name="Coming Soon"  price="$1.00" img="comming.png"/>
<ProductCard name="Coming Soon"  price="$1.00" img="comming.png"/>
<ProductCard name="Coming Soon"  price="$1.00" img="comming.png"/>
  </div>

  <h1 className="learn text-center p-2 bg-red-50 mt-2 mb-2" >Subscription</h1>
  <div className="flex justify-center flex-wrap ml-2 gap-4   ">

<ProductCard name="Coming Soon"  price="$6.00" img="comming.png"/>
<ProductCard name="Coming Soon" price="$1.00" img="comming.png"/>
<ProductCard name="Coming Soon"  price="$1.00" img="comming.png"/>
<ProductCard name="Coming Soon"  price="$1.00" img="comming.png"/>
  </div>

  <h1 className="learn text-center p-2 bg-red-50 mt-2 mb-2" >Gift Card</h1>
  <div className="flex justify-center flex-wrap ml-2 gap-4   ">

<ProductCard name="Coming Soon"  price="$6.00" img="comming.png"/>
<ProductCard name="Coming Soon"  price="$1.00" img="comming.png"/>
<ProductCard name="Coming Soon"  price="$1.00" img="comming.png"/>
<ProductCard name="Coming Soon"  price="$1.00" img="comming.png"/>
  </div>

</main>
<footer>
  <div className="bg-green-400  pb-20"> 
    <div className="flex gap-4 ml-8 mt-2">
    <a className="mt-2">Product</a>
    <a className="mt-2">Product</a>
    <a className="mt-2 ">Product</a>


    </div>

  </div>
</footer>

  </div>)
} 
