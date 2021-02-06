import { useRouter } from 'next/router';
import React, { useState } from 'react';

import styles from  './OrderComponent.module.scss';

function OrderComponent(){
    const router = useRouter();
    const [reviewList, setReviewList] = useState([
        {
            id:" #3456856815",
            sub:"Import medicine order is Being Reviewed",
            content:"Your medicine will be imported soon!",
            estimation:"Estimate Delivery to be calculated",
            imp:true
        },
        {
            id:" #3456856815",
            sub:"Order is Being Reviewed",
            content:"Your presciption is being reviewed, we will update the order soon!",
            estimation:"Estimate Delivery to be calculated",
            imp:false
        },
        {
            id:" #3456856815",
            sub:"Order is Being Reviewed",
            content:"Your presciption is being reviewed, we will update the order soon!",
            estimation:"Your Order is reviewed",
            imp:false
        }
    ]);
    return(
            <div className={styles.trackBorder}>
                <div className={styles.myOrder}>
                    <b>My Orders</b>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {
                            reviewList.map((review,ind) => {
                                return <div key={ind} className={styles.orderStatus}>
                                    <div className={`row ${styles.in_box}`}>
                                        <div className={styles.pres_img}>
                                            <img src={'/prescription-img.png'} alt="prescription" />
                                        </div>
                                        <div className="col-md-6">
                                            <b className={styles.orderId}>Order ID: </b>
                                            <b className={styles.idNumber}>&nbsp;#3456856815</b>
                                            <div className={styles.orderReview}>
                                                <b className={styles.Order_header}>{review.sub}</b>
                                                <p className={styles.price_match}>{review.content}</p>
                                            </div>
                                        </div>
                                        <div className={styles.order_esti}>
                                            <p className={styles.or_right}>{review.estimation}</p>
                                            <button onClick={() => router.push('/Orders/OrderDetail')}className={styles.btnTracks}>VIEW ORDER</button>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
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