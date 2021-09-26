import React from 'react'
import {CartArea,CartHeader, CartText, CartBody,CartIcon} from './styled';

export default () =>{
    return(
        <CartArea>
            <CartHeader>
                <CartIcon src="/assets/cart.png"/>
                <CartText>Meu Carinho (x)</CartText>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>
    )
}
