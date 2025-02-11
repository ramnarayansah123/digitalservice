import Searchbar from "./Searchbar";

export default function Appbar(){
    return(
        <>
        <div className="flex justify-between">
            <div>
                Youtube
            </div>

            <div>
                <Searchbar/>
            </div>

            <div>
                Sign In 
            </div>




        </div>

        
        </>
    )
}