import React, { Component } from 'react';
import Title from '../Title'
import CartColumns from './CartColumns.jsx'
import EmptyCart from './EmptyCart'
import {ProductConsumer} from '../../context'
import CartList from './CartList'
import CartTotals from './CartTotals'

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return (
                                <>
                                <Title name="Seu" title=" Carrinho"/>
                                <CartColumns/>
                                <CartList value={value}/>
                                <CartTotals value={value}/>
                                </>
                            )
                        } else {
                            return (
                            <EmptyCart/>
                            )
                        }
                    }}
                </ProductConsumer>
            </section>
               
            
        )
    }
}

export default Cart;