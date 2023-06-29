import { useState } from "react"

const Counter = () => {

    console.log("render")

    const [num, setNum] = useState(1)
    
    const handleClick = (amount) => {

        setNum(num + amount)
        console.log("Click", num)
    }

    return ( 
        <div className=" w-full h-1/2 bg-lime-300">
            <div className="text-5xl text-white">
                {num}
            </div>
            <button className="bg-blue-400 text-white font-bold" onClick={(e) => {handleClick(1)}}>
                INC
            </button>
            <button className="bg-blue-400 text-white font-bold ml-10" onClick={(e) => {handleClick(-1)}}>
                DEC
            </button>
        </div>
     );
}
 
export default Counter;