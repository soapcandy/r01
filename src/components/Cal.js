import { useState } from "react";

const Cal = () => {

    const [number, setNumber] = useState(0)

    const plusNum = (e) =>{
        setNumber(preNum=>preNum+1)
    }

    const minusNum = (e)=>{
        setNumber(minNum=>minNum-1)
    }

    return ( 

        <div className="grid place-items-center">
            <button className="text-3xl" onClick={plusNum}>+</button>
            <div>{number}</div>
            <button className="text-3xl" onClick={minusNum}>-</button>
        </div>

     );
}
 
export default Cal;