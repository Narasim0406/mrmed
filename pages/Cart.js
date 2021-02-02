import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import CartPageComponent from '../components/CartPage/index';

function Cart() {
    return (
        <div>
            <Header/>
            <CartPageComponent/>
            <Footer/>
        </div>
    )
}

export default Cart
