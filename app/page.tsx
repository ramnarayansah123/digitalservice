
import ProductCard from "./component/ProductCard";
export default function page(){
  return(
  <div >
    
<header className="p-5 shadow-lg bg-blue-400 flex gird grid-cols-4 gap-12 ">
  <div className="text-xl italic text-yellow-300 font-extrabold">Home</div>
  <div className="learn">Game</div>
  <div className="learn">home</div> 
  <div className="learn">home</div>

</header>


<main >
<h1 className="learn text-center p-2 mb-2 bg-red-50">Product</h1>

  <div className="flex justify-center flex-wrap ml-2 gap-4   ">

<ProductCard name="Burger1" about="this is burger" price="$6.00"/>
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
