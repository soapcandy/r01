import { useState } from "react"


const product = [
    {pno : 1, pname : 'Americano', price : 7000},
    {pno : 2, pname : 'Latte', price : 6000},
    {pno : 3, pname : 'greenTea', price : 8000},
    {pno : 4, pname : 'milk Tea', price : 9000},
  ]


const Kiosk = () => {

    // 2-1 카트에 담기 (useState)
    const [items,setItems] = useState([])

    const handleClickBuy = (product) =>{
        console.log(product)

        // 2-2 filter (ele : 배열의 요소) 결과 = 배열
        const result = items.filter( ele => ele.pno === product.pno )

        console.log(result)

        // 필터의 배열의 length가 0 or 1
        //2-3 if 배열의 크기가 0이면 새상품, 1이면 있는 상품 qty += 1
        if(result.length === 0){

             //2-4 새 배열 만들기 (기존의 배열에 새 상품 추가 -> 카트쪽에 넣어줘야 함)
            setItems([...items, {...product, qty:1}])
            return
        }
        const cartItem = result[0]
        cartItem.qty += 1
        
        //2-5 리랜더링
        setItems([...items,])

       
    }

    // option1-1 파라미터 값이 있으면 람다식으로
    const handleClickQty = (pno, amount) =>{

        console.log("pno: ",pno,"amount : ",amount)
        // option1-3 타겟찾기
        const target = items.filter(item => item.pno === pno)[0]
        console.log("target",target)

        // option1-4 increase
        if(amount === 1){
            target.qty += 1
            setItems([...items])
        }else{
        // option1-5 decrease
            
            // qty가 0이 되어 사라질때 
            if(target.qty === 1){
                setItems(items.filter(ele => ele.pno !== pno) )
            }else{
                // qty !== 1
                target.qty -= 1
                setItems([...items])
            }
        }
        


    }

    // option2-1 전체 price값 구하기
    // 반환값이 있으면 표현식으로 가능
    const getTotal = (arr) => {
        // option2-2 reduce
        if(!arr || arr.length === 0){
            return 0
        }
        
        let sum = 0;
        for(const ele of arr){
            sum += (ele.price * ele.qty)
        }
        return sum

    }

    return (
        <div className="w-full h-{100vh} bg-slate-400 flex">
            <div className="w-2/3 bg-black">
                <div className="text-4xl font-extrabold text-cyan-400">Products</div>

                <ul>
                    {product.map( p => 
                    <li
                    key = {p.pno}
                    className="text-2xl underline m-3 p-3 bg-red-400"
                    onClick={() => {handleClickBuy(p)}}
                    >
                    {p.pno} - {p.pname} - {p.price}
                    <button className="border-2 m-2 rounded-sm border-blue-300">BUY</button>
                    </li>)}
                </ul>
            </div>
            <div className="w-1/3 ">
                <div className="text-4xl font-extrabold">Cart</div>
                <ul>
                    {items.map( (item, idx) => 
                    <li key = {idx} className="border-2">
                        {/*2_1_1 옵션 - 버튼 */}
                        <div className="flex text-3xl text-white m-3 p-3">
                            <div>{item.pno}-</div>
                            <div>{item.pname}-</div>
                            <div>{item.price}</div>
                        </div>
                        <div className="flex justify-center text-2xl">
                            <button className="rounded-lg bg-emerald-300 p-3 m-3"
                            // option1-2 클릭시 값이 오르거나 내리게 onclick
                            onClick = {()=> handleClickQty(item.pno,1)}
                            >+</button>

                            <p className="m-2 p-2 text-red-600">{item.qty}</p>
                            
                            
                            <button className="rounded-lg bg-emerald-300 p-3 m-3"
                            onClick = {()=> handleClickQty(item.pno,-1)}
                            >-</button>
                        </div>
                    </li>)}
                </ul>
                {/* option2-3 총합 화면 */}
                <div className=" bg-amber-400 text-5xl float-right">
                        TOTAL  {getTotal(items)}
                </div>
            </div>
        </div>
      );
}
 
export default Kiosk;