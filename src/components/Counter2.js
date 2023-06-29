import { useState } from "react";

const Counter2 = () => {

    const[obj, setobj] = useState({num:10})

    return ( 
        <div>
            {obj.num}
            <button onClick={() => 
                {obj.num += 1
                console.log(obj.num)

                // setobj({num: obj.num})
                setobj({...obj})
                
                }}>INC</button>
        </div>
     );
}
 
export default Counter2;