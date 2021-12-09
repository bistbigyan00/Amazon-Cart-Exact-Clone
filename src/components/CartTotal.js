import React from 'react'
import './CartTotal.css';
import NumberFormat from 'react-number-format';

function CartTotal({items}) {   
    //get unique Elements
    const totalItems = items.reduce((acc,item) => acc+ item.quantity,0);

    const getTotalPrice = () =>{
        let total=0;
        let totalItems=0;
        items.forEach((item) => {
            total += (item.price * item.quantity);
            totalItems += (item.quantity*1);
        })
        return [total, totalItems];
    }

    return (
        <div className="CartTotal">
            <h3>Subtotal({getTotalPrice()[1]} items): 
            
                <span className="CartTotal-price">
                    {/** number format to two values */ }

                     <NumberFormat value={getTotalPrice()[0]} displayType={'text'} thousandSeperator={true} prefix={'$'} decimalScale={2} />
                </span>
            </h3>
            <button>Proceed to checkout</button>
            
        </div>
    )
}

export default CartTotal
