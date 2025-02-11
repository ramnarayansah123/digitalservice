export default function Google() {
    return (
        <div className="h-screen relative">
            {/* Navigation Bar */}
            <div className="flex justify-between m-3 bg-sky-200">
                <div className="flex gap-4">
                    <a>About</a>
                    <a>About</a>
                </div>
                <div className="flex gap-4">
                    <a>About</a>
                    <a>About</a>
                </div>
            </div>

            {/* Centered Google Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-44 w-[272px] h-[96px]  flex justify-center items-center">
                <img src="/google3.png" alt="Google Logo" />
            </div>

            {/* Input Box */}
            <div className="absolute top-80 left-1/2 -translate-x-28">
                <input className="border absolute -left-16 w-96 p-2 rounded-full shadow-xl" />
                <div className="w-5 absolute top-3 -left-14">
                    <img src="search.png"></img>
                </div>
            </div>
            <div className="flex flex-wrap  bg-red-50    gap-2 ">
                <h1 className="bg-[#f8f9fa] p-2  ">Google Search</h1>
                <h1 className="bg-[#f8f9fa] p-2  ">I'm Felling Lucky</h1>
            </div>
            <div className=" flex">
                <h2>Google offered in:</h2>
                <a className="text-[#1a0dab]">Nepali</a>
            </div>
            <div className=" bg-red-200  absolute top-full px-3 pb-4 border-b border-red-800 -translate-y-40 w-full ">
                <h1 >Nepal</h1>
            </div>
        </div>
    );
}
