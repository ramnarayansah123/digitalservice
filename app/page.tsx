
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
<h1 className="learn text-center p-3">Product</h1>

<main className="flex justify-center flex-wrap ml-2 gap-4   ">
<ProductCard name="Burger1" about="this is burger" price="$6.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
<ProductCard name="Cauliflower" about="this is this is " price="$1.00"/>
</main>

  </div>)
} 
