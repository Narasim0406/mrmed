import React from 'react';

import styles from './Payment.module.scss';

function Payment(){
    return(
        <div className={styles.trackBorder}>
            <div className={styles.paymentDetail}>
                <b>Payments Details</b>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className={styles.creditCardBox}>
                        <div className="row">
                            <div className="col-md-8">
                                <div>
                                    <img src={require('../../../assets/images/master-card.png')} />
                                    <b className={styles.masterCardName}>John Doe</b>
                                </div>
                                <div className={styles.masterCardNumber}>
                                    <span>99XXXXXXXXXXX9999</span>
                                </div>
                                </div>
                                <div className="col-md-3">
                                    <div className={styles.creditCard}>
                                        <b>Credit card</b>
                                    </div>         
                                </div>
                                <div className="col-md-1">      
                                    <img src={require('../../../assets/images/delete.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className={styles.creditCardBox}>
                            <div className="row">
                                <div className="col-md-8">
                                    <div>
                                        <img src={require('../../../assets/images/master-card.png')} />
                                        <b className={styles.masterCardName}>John Doe</b>
                                    </div>
                                    <div className={styles.masterCardNumber}>
                                        <span>99XXXXXXXXXXX9999</span>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className={styles.creditCard}>
                                        <b>Credit card</b>
                                    </div>         
                                </div>
                                <div className="col-md-1">      
                                    <img src={require('../../../assets/images/delete.png')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={styles.btnNew}><b>ADD NEW</b></button> 
            </div>
        );
}

export default Payment;