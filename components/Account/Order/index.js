import { useRouter } from 'next/router';
import React from 'react';

import styles from  './OrderComponent.module.scss';

function OrderComponent(){
    const router = useRouter();
    return(
            <div className={styles.trackBorder}>
                <div className={styles.myOrder}>
                    <b>My Orders</b>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className={styles.orderStatus}>
                            <div className={`row ${styles.in_box}`}>
                                <div className={styles.pres_img}>
                                    <img src={'/prescription-img.png'} alt="prescription" />
                                </div>
                                <div className="col-md-6">
                                    <b className={styles.orderId}>Order ID: </b>
                                    <b className={styles.idNumber}>&nbsp;#3456856815</b>
                                    <div className={styles.orderReview}>
                                        <b className={styles.Order_header}>Order is Being Reviewed</b>
                                        <p className={styles.price_match}>Your prescription is being reviewed, We will <br/> update you soon</p>
                                    </div>
                                </div>
                                <div className={styles.order_esti}>
                                    <p className={styles.or_right}>Estimate Delivery to be calculated</p>
                                    <button onClick={() => router.push('/Orders/TrackYourOrders')}className={styles.btnTracks}>TRACK ORDER</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.orderStatus}>
                            <div className="row">
                                <div className="col-md-6">
                                    <b className={styles.orderId}>Order ID: </b>
                                    <b className={styles.idNumber}>&nbsp;#3456856815</b>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.orderShipped}>
                                        <span>Order Shipped</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={styles.orderName}>
                                        <b className={styles.orderName}>John Doe</b>
                                    </div>
                                    <div className={styles.orderAddress}>
                                        <span className={styles.orderAddress}>NO:115, Park Street, Mylapore, Chennai - 63</span>
                                    </div>
                                    <div className={styles.deliveryDate}>
                                        <span>Delivered on 20 Nov</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.amountDetails}>
                                        <span>Paid Amount:</span>
                                        <b>₹150</b>
                                        <button onClick={() => router.push('/Orders/ArTrackOrder')} className={styles.btnTrack}>TRACK ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.orderStatus}>
                            <div className="row">
                                <div className="col-md-6">
                                    <b className={styles.orderId}>Order ID: </b>
                                    <b className={styles.idNumber}>#3456856815</b>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.orderDelivered}>
                                        <span>Order Delivered</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className={styles.orderName}>
                                        <b className={styles.orderName}>John Doe</b>
                                    </div>
                                    <div className={styles.orderAddress}>
                                        <span className={styles.orderAddress}>NO:115, Park Street, Mylapore, Chennai - 63</span>
                                    </div>
                                    <div className={styles.deliveryDate}>
                                        <span>Delivered on 20 Nov</span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.amountDetails}>
                                        <span className={styles.paid}>Paid Amount:</span>
                                        <b className={styles.paidAmount}>₹150</b>
                                        <button className={styles.btnReorder}>REORDER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default OrderComponent;