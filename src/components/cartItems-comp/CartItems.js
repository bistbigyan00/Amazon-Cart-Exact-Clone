import React from 'react'
import CartItem from './CartItem'
import './CartItems.css'

function CartItems({items,setCartItems}) {

    const changeItemQuantity = (e,index) =>{
        //items[index] set value to clicked one from CartItem.js
        //crearing deep clone, without this we cxan't use it
        let newItems = [...items]
        newItems[index].quantity = e.target.value;
        setCartItems(newItems);
    }

    const deleteItem = (indexToDelete) =>{
        //filter all the items accepts the tobe deleted one
        const newItems = items.filter((value,index) =>{
            return index !== indexToDelete;
        })
        setCartItems(newItems);
    }

    return (
        <div className="CartItems">
            <h1>Shopping Cart</h1>
            <hr/>
            <div className="CartItems-item"> 
                {items.map((item,index) => 
                    <CartItem 
                        key={index} 
                        item = {item}
                        changeItemQuantity = {changeItemQuantity}
                        deleteItem = {deleteItem}
                        index={index}
                    />
                )}
            </div>
        </div>
    )
}

export default CartItems
