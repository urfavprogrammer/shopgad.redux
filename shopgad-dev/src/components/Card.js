// import {useState } from "react";
// import { useFetch } from "../hooks";
// import watch from "../assets/watch.jpg";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import { useEffect, useState } from "react";

export const Card = ({product}) => {
    const dispatch = useDispatch();
    const cartList = useSelector(state=>state.cartState.cartList);
    const [ isInCart, setIsInCart ] = useState(false);
    const {id, name, price } = product;

    useEffect(() => {
        const productInCart = cartList.find(item => item.id === id);

        if(productInCart){
            setIsInCart(true);
        } else {
            setIsInCart(false);
        }
    }, [ cartList, id ])
    return (

        <>
           
                    <div className="product">
                        <img src={product.img} alt={name} />
                        <p className="name">{name}</p>

                        <div className="action">
                            <p>${price}</p>
                    {isInCart ? (<button onClick={() => dispatch(remove(product))} className="remove" >Remove</button>
): (<button onClick={() => dispatch(add(product))} id="addCart">Add To Cart</button>
)}
                        </div>
                    </div>
                
        </>
        
       
    )
}

