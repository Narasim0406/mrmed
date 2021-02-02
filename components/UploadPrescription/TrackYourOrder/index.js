import React, { useState } from 'react'
import styles from './TrackYourOrder.module.scss';
import tabBottle from '../../../assets/images/tab-bottle.png';
import PaymentSuccess from '../Payment/PaymentSuccess/index';
import OrderSummary from '../OrderSummary/index';

export default function TrackYourOrder(){
    const [modal,setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    } 
    return (
            <div className="container">
                <div className={`col-md-12 ${styles.indication}`}>
                    <br/>
                    <span>Home &gt; My Orders &gt; Track Order</span>
                    <br/>
                    <b>Upload Prescription</b>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-md-8 d-flex flex-column">
                        <div className={styles.orderSection_left_inner}>
                            <p className={styles.orderID}>ORDER ID :<span> #34324234324</span></p>
                            <p className={styles.orderDate}>Ordered on 02/09/2020</p>
                        </div>
                        <div className={styles.orderStatus}>
                            <div className={styles.pres_img}>
                                <img src={require('../../../assets/images/prescription-img.png')} alt="prescription" />
                            </div>
                            <div className="col-md-6">
                                <b className={styles.Order_header}>Order is Being Reviewed</b>
                                <p className={styles.price_match}>Your prescription is being reviewed, We will update you soon</p>
                            </div>
                            <div className={styles.order_esti}>
                                <p className={styles.or_right}>Estimate Delivery to be calculated</p>
                            </div>
                        </div>
                        <div className={styles.main_margin_bottom}/>
                        <div className={`${styles.medicine_soon} d-flex justify-content-center align-items-center`}>
                            <img src={tabBottle} className={styles.tablet_bottle} alt="Medicine bottle" />
                            <p className={styles.generate_soon}>Medicine list to be generated soon!</p>
                        </div>
                    </div>
                    <div className={`col-md-4 ${styles.overall__summary__container}`}>
                        <div>
                            <OrderSummary trackYourOrder={true}/>
                        </div>
                    </div>
                </div>
                <div className={`col-md-4 ${styles.overall__summary__container}`}>
                    <div className={styles.cols}>
                        <PaymentSuccess modal={modal} toggle={toggle}/>
                    </div>
                </div>
            </div>
    )
}
