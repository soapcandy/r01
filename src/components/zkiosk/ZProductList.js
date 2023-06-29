const products = [
    {pno : 1, pname : 'Americano', price : 7000},
    {pno : 2, pname : 'Latte', price : 6000},
    {pno : 3, pname : 'greenTea', price : 8000},
    {pno : 4, pname : 'milk Tea', price : 9000},
  ]

const ZproductList = ({buyProduct, viewProduct}) => {

    return ( 
        <div className="w-full bg-indigo-500 text-3xl m-12 p-10">
            <ul>
                {products.map( p => 
                <li key={p.pno}>
                    {p.pname}
                    <button 
                    className="bg-red-400" 
                    onClick={() => buyProduct({...p})}>
                        BUY
                    </button>
                </li>)}
            </ul>
        </div>
     );
}
 
export default ZproductList;