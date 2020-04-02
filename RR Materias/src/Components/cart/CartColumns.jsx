import React from 'react';

// import { Container } from './styles';

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
    <div className="row">
        <div className="col10 mx-auto col-lg-2">
            <p className="text-uppercase">Produtos</p>
        </div>
        <div className="col10 mx-auto col-lg-2">
            <p className="text-uppercase">Nome do Produto</p>
        </div>
        <div className="col10 mx-auto col-lg-2">
            <p className="text-uppercase">Preço</p>
        </div>
        <div className="col10 mx-auto col-lg-2">
            <p className="text-uppercase">Quantidade</p>
        </div>
        <div className="col10 mx-auto col-lg-2">
            <p className="text-uppercase">Remover</p>
        </div>
        <div className="col10 mx-auto col-lg-2">
            <p className="text-uppercase">Total</p>
        </div>
    </div>


    </div>

  );
}
