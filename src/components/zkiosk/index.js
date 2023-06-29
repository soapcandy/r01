import { useState } from "react"
import ZproductList from "./ZProductList"
import ZCart from "./ZCart"

const ZKiosk = () => {

    const [items, setItems] = useState([])

    const buyProduct = (product) => {
        console.log("buyProduct", product)

        const target = items.filter(item => item.pno === product.pno)

        if(target.length === 0) {
            setItems([...items, {...product, qty:1}])
            return
        }

        target[0].qty += 1
        setItems([...items])
    }

    const viewProduct = () => {
        console.log("viewProduct")
    }

    const changeQty = (pno, amount) => {
        console.log("changeQty")

        const target = items.filter(item => item.pno === pno)[0]
        target.qty += amount

        if(target.qty === 0) {

            setItems(items.filter(item => item.pno !== pno))

            return
        }
        setItems([...items])
    }

    return (
        <>
            <ZproductList buyProduct={buyProduct} viewProduct={viewProduct}></ZproductList>
            <ZCart arr={items} changeQty={changeQty}></ZCart>
        </>
    );
}
 
export default ZKiosk;