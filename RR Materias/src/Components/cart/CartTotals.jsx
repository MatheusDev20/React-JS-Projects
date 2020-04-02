import React from 'react';
import {Link} from 'react-router-dom'
// import { Container } from './styles';

export default function CartTotals({value,history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
  return (
    <>
        <div className="container">
        <div className="row">
            <div className="col-10 mt-2 ml-5-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">

                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button"
                    onClick={()=>clearCart()}>
                        Limpar Carrinho
                        </button>
                </Link>
                <h5>
                <span className="text-title">
                        Subtotal :</span>
                        <strong> $ {cartSubTotal} </strong>
                </h5>
                <h5>
                    <span className="text-title">
                        Taxa :</span>
                        <strong> $ {cartTax} </strong>
                </h5>
                <h5>
                    <span className="text-title">
                        Total :</span>
                        <strong> $ {cartTotal}</strong>
                </h5>
            </div>

        </div>
        </div>

    </>


   
  );
}
