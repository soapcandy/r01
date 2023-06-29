const CountPannel = ({fn}) => {
    return ( 
        <div className="bg-red-400 flex p-6">
            <button className="m-6 p-2 bg-blue-500"
            onClick={()=>fn(1)}
            >
                ing
                </button>

            <button className="m-6 p-2 bg-blue-500"
            onClick={()=>fn(-1)}
            >
                minus
                </button>
        </div>
     );
}
 
export default CountPannel;