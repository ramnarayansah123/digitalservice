
import Header from "./component/Header";
import ProductCard from "./component/ProductCard";
export default function page(){




  return(
  <div >
<Header/>
<main >
<h1 className=" learn text-center p-2 mb-2 ">Product</h1>

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
<footer className="bg-green-400 mt-7 py-10">
  <div className="container mx-auto px-6 flex flex-col items-center">
    <h1 className="text-white text-4xl font-semibold mb-4">Follow Us</h1>
    <div className="flex space-x-6">
      <a href="#" className="text-white hover:text-green-800 transition duration-300">
        <i className="fab fa-facebook-f"></i> Facebook
      </a>
      <a href="#" className="text-white hover:text-green-800 transition duration-300">
        <i className="fab fa-twitter"></i> Twitter
      </a>
      <a href="#" className="text-white hover:text-green-800 transition duration-300">
        <i className="fab fa-instagram"></i> Instagram
      </a>
      <a href="#" className="text-white hover:text-green-800 transition duration-300">
        <i className="fab fa-linkedin-in"></i> LinkedIn
      </a>
    </div>
  </div>
</footer>



  </div>)
} 
