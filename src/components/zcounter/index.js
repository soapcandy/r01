import { useState } from "react";
import CountDisplay from "./ZCountDisplay";
import CountPannel from "./ZCountPannel";

const ZCounter = () => {

    const target = {
        p1:'A',
        p2:'B',
        p3:'C',
        p4:'D',
    }

    const [obj, setObj] = useState({num:10})
    const changeObj = (amount) => {
        obj.num+=amount
        setObj({...obj})
    }




    return ( 
        <div>
            <CountDisplay value={obj.num}/>

            <CountPannel fn={changeObj}/>

        </div>
     );
}
 
export default ZCounter;