import Footer from "../component/Footer";
import Header from "../component/Header";

export default function page(){
    return(
        <>
        <div>
           <Header/>
           <main className="">
            <div className=" ">
            <h1 className="text-center">Please Scan QR for payment</h1>
            <img className="mx-auto" src="/qr.png"></img>
            </div>

            <div className="bg-[#336666] mt-10 pb-3 ">
            <h1 className="text-white font-extrabold">Upload Screenshot Of Payment</h1>
            <input type="file" className="px-14 sm:px-96 ml-2" placeholder="enter player uid"></input>
            <h1 className="text-white font-extrabold">Remark</h1>
            <input type="number" className="px-14 sm:px-96 ml-2" placeholder="Enter Remark"></input>
          </div>

          <button className="font-extrabold text-white bg-[#336666] px-4 py-2 mx-auto mt-10 rounded-xl">Buy Now</button>
          

           </main>
           <Footer/>

        </div>
        
        </>
    )
}