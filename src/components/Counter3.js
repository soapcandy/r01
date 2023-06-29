import { useState } from "react";

const Counter3 = () => {

    console.log("rendering")

    const [num, setNum] = useState(0)

    const handler = function(amount){
        setNum(num+amount)
        console.log("Click",num)
    }

    return ( 
        <div>
            <button onClick={(e)=>{handler(1)}}>+</button>
            <div>{num}</div>
            <button onClick={(e)=>{handler(-1)}}>+</button>



        </div>
     );
}
 
export default Counter3;