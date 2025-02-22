export default function Footer(){
    return(
        <>
       
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
        </>
    )
}