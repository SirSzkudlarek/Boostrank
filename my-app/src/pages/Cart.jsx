import React from 'react';
import LayoutDefaultNoNavigation from '../layouts/default/defaultNoNavigation';
import CartHeader from '../sections/cartSections/headerCart/headerCart';
import FooterCart from '../sections/cartSections/footerCart/footerCart';
import MainContentCart from '../sections/cartSections/mainContentCart/mainContentCart';


function Cart() {
    return (
      <LayoutDefaultNoNavigation>
        <CartHeader></CartHeader>
        <MainContentCart></MainContentCart>
        <FooterCart></FooterCart>
      </LayoutDefaultNoNavigation>
    );
}

export default Cart;