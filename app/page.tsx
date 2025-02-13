
import ProductCard from "./component/ProductCard";
import Link from "next/link";
export default function page(){




  return(
  <div >
    
<header className="p-5 shadow-lg bg-blue-400 flex justify-between gap-6 ">
  <div className="flex gap-2">

  <a href="/game" className="learn ">Home</a>
  <Link href="/game"  className="learn">Game</Link>
  <a href="" className="learn">home</a> 
  <a href="" className="learn">home</a>
  </div>
 
  <div className="flex gap-3">
<img className="" src="/profile.svg"></img>
  <a>Login</a>
  <a>SignUp</a>
  </div>

</header>


<main >
<h1 className="learn text-center p-2 mb-2 bg-red-50">Product</h1>

  <div className="flex justify-center flex-wrap ml-2 gap-4   ">

<ProductCard  name="Burger1" about="this is burger" price="$6.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
  </div>

  <h1 className="learn text-center p-2 bg-red-50 mt-2 mb-2" >Subscription</h1>
  <div className="flex justify-center flex-wrap ml-2 gap-4   ">

<ProductCard name="Burger1" about="this is burger" price="$6.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
  </div>

  <h1 className="learn text-center p-2 bg-red-50 mt-2 mb-2" >Gift Card</h1>
  <div className="flex justify-center flex-wrap ml-2 gap-4   ">

<ProductCard name="Burger1" about="this is burger" price="$6.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
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
