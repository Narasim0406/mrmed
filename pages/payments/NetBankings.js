import React from 'react';
import NetBanking from '../../components/UploadPrescription/Payment/NetBanking/index';
import PaymentSide from '../../components/UploadPrescription/Payment/PaymentSide/index';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import OrderSummary from '../../components/UploadPrescription/Payment/OrderSummary/index';
export default function NetBankings(){
        return (
            <>
            <Header/>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-8">
                            <div className="d-flex flex-row justify-content-center">
                                <PaymentSide/>
                                <NetBanking/>
                            </div>
                    </div>
                    <div className="col-md-4">
                        <OrderSummary payment={true}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
