import React, { Component } from 'react';
import CashOnDelivery from './CashOnDelivery/index';
import NetBanking from './NetBanking/index';
import OtherPayment from './OtherPayment/index';
import CrediDebitCard from './CreditDebitCard/index';
import Wallets from './Wallets/index';
import PaymentSide from './PaymentSide/index';

import styles from './Payment.module.scss';
import OrderSummary from '../OrderSummary/index';
export class Payment extends Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-8">
                        {/* <Router> */}
                            <div className={styles.inner_routing}>
                                <PaymentSide/>
                                {/* <Switch>
                                    <Route exact path="/dashboard/stepperSuccess"> */}
                                        <Wallets/>
                                    {/* </Route>
                                    <Route exact path="/dashboard/stepperSuccess/creditdebitcard"> */}
                                        {/* <CrediDebitCard/> */}
                                    {/* </Route>
                                    <Route exact path="/dashboard/stepperSuccess/netbanking"> */}
                                        {/* <NetBanking/> */}
                                    {/* </Route>
                                    <Route exact path="/dashboard/stepperSuccess/cashondelivery"> */}
                                        {/* <CashOnDelivery /> */}
                                    {/* </Route>
                                    <Route exact path="/dashboard/stepperSuccess/otherpayment"> */}
                                        {/* <OtherPayment /> */}
                                    {/* </Route>
                                </Switch> */}
                            </div>
                        {/* </Router> */}
                    </div>
                    <div className="col-md-4">
                        <OrderSummary payment={true}/>
                    </div>
                </div>
            </div>
        )
    }
}
