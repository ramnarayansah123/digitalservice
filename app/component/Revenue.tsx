export default function Revenue(props:any){
    return(
        <>
        <div className="bg-white rounded shadow-md p-4 w-96">
            <div className="text-gray-700">
            {props.tittle}
            ?
            </div>
            <div className="flex justify-between">
            <div>
             $ {props.amount}
            </div>
            <div>
                 13 order(s) {'>'}
            </div>

            </div>
            


        </div>
        
        </>
    )
}