
export default function ProductCard(props:any){
    return(
        
        <div>



<div className="  bg-amber-400 rounded-lg">
  <img  src={props.img} className="w-32 h-32 mx-2 py-2"></img>
  <div className="description px-5 flex-col "> 
    <h2 className="text-sm font-bold text-center ">{props.name}</h2>
    <p className="price text-xs text-center">{props.price}</p>
    
    
  </div>
 <a href={props.Url} className="ml-9 bg-blue-400 p-1 rounded-lg font-semibold text-sm hover:bg-blue-700 ">Buy Now</a>
</div>
</div>
        
    )
}