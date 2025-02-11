import Searchbar from "./Searchbar";

export default function Nav(){
    return(
        <>
        <div className="flex justify-between m-2">
            <div className="extrabold flex gap-3">
                <div>Drawer</div>
                <div>Logo</div>
            </div>


            <div className="extrabold flex gap-3">
            <div>
                <div className="w-44 sm:">< Searchbar/></div>
                </div>
            <div>Logo</div>
            </div>


            <div className="extrabold flex gap-3">
            <div>Drawer</div>
            <div>Logo</div>
            </div>

        </div>

        
        
        </>
    )
}