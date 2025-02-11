export default function SignUp(){ 
    return(<>
    <div className="bg-white w-64 m-2 p-2">
        <h1 className="learn text-centera">Sign up</h1>
        <h6 className="text-gray-400 text-xs">this is for sign up page so i request to fill this form </h6>
        <h2 className="text-sm font-semibold">Frist Name</h2>
        <input className="bg-red-200 " placeholder="Enter the name"></input>

        <h2 className="text-sm font-semibold">Last Name</h2>
        <input className="bg-red-200 " placeholder="Enter the name"></input>

        <h2 className="text-sm font-semibold">Email</h2>
        <input className="bg-red-200 " placeholder="Enter the name"></input>

        <h2 className="text-sm font-semibold space-y-5">Pasword</h2>
        <input className="bg-red-200 " placeholder="Enter the name"></input>

        <button className="text-sm  bg-black text-white  text-sm flex my-1 px-20 ">Sign Up</button>
        <text className="text-xs font-bold">Already have an acoount? </text>
        <span className="underline text-xs font-bold">Signup</span>


    </div>
    
    </>)
}