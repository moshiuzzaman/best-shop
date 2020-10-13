import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    console.log(cart);
    const items=cart.length;
    const total =cart.reduce((acc, item) =>acc + item.price,0)
    const fixedTo=(num)=>{
        const fixed=num.toFixed(2)
        return Number(fixed)
    }
    let shipping =0;
    if(total >100){
        shipping=0;
    }else if(total>50){
        shipping=8.52;
    }else if(total>25){
        shipping=12.98
    }else if(total>0){
        shipping=15.98
    }
    const totalBeforeTax = total+shipping;
    const tax =totalBeforeTax/10;
    const grandTotal =totalBeforeTax+tax;
    return (
        <div>
            <h3>Cart Details</h3>
            <h5>added Items : {items} </h5>
            <p>total price: ${fixedTo(total)}</p>
            <p>Shipping Coust : {shipping}</p>
            <p>Total before tax : ${fixedTo(totalBeforeTax)}</p>
            <p>tax & vat : ${fixedTo(tax)}</p>
            <h3>Grand Total : ${fixedTo(grandTotal)}</h3>
        </div>
    );
};

export default Cart;