import React from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import CancelOrder from '../../components/CancellationReason/index';
function OrderSuccessFull() {
    return (
        <div>
            <Header/>
            <CancelOrder/>
            <Footer/>
        </div>
    )
}

export default OrderSuccessFull;
