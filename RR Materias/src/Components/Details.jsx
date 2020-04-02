import React, { Component } from 'react';
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'
class Details extends Component {
    render() {
        return (
           <ProductConsumer>
            {(value) =>{
                const {id,company,img,info,price,title,inCart } = value.detailProduct // Destruct do objeto detail
                return(
            <div className="container py-5">
                {/* tittle*/}
            <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                </div>
            </div>
                    <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src={img} alt="img" className="img-fluid"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <h2> Produto : {title} </h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                        Produzido por: <span className="text-uppercase">
                            {company}
                        </span>
                    </h4>
                    <h4 className="text-blue">
                       Preço: <span>$</span> {price}
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0"> Informações Sobre </p>
                    <p className="text-muted lead ">{info} </p>
                        <div>
                            <Link to="/">
                            <ButtonContainer
                            >
                              Voltar para os produtos
                            </ButtonContainer>
                             </Link>
                             <ButtonContainer
                             cart
                              disabled={inCart? true:false}
                              onClick={()=>{
                                  value.addToCart(id)
                                  value.openModal(id)
                              }}>
                                 {inCart? "inCart": "Adicionar ao Carrinho"}
                             </ButtonContainer>
                        </div>
                    </div>
                    </div>
            </div>
                )
            }}
           </ProductConsumer>
        );
    }
}

export default Details;