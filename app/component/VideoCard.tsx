export default function VideoCard(props:any){
    return(
        <div>
            <img src="/photo.png"></img>
            <div className="grid grid-cols-12">
                <img className="col-span-2 rounded-full w-20 h-20" src="/photo.png"></img>
                <div className="col-span-10 ">
                    <div>
                    {props.tittle}
                    </div>
                    <div className=""> {props.author}</div>
                    <div className="">{props.views}</div>
                    </div>
                
            </div>
        </div>
    )
} 