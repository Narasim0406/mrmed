import React, {useState} from 'react'

import styles from './OrderSummary.module.scss'
import NeedSignIn from './NeedSigin';
import {useRouter} from 'next/router';

function OrderSummary(props){
    const [deliveryCharge, setDeliveryCharge] = useState(40);
    const [modal, setModal] = useState(false);
    const router = useRouter();
    const toggle=() => {
        setModal(!modal);
    }
    return (
            <div>
                <div className={styles.summaryBox}>
                    <div className={styles.orderSummary}>
                        <b>Order Summary</b>
                    </div>
                    <div className={styles.details}>
                        <span>Cart Value</span>
                        <span className={styles.right}>₹{props.cartDetails?.cartValue?.toFixed(2)}</span>
                    </div> 
                    <div className={styles.details}>
                        <span>Delivery Charge</span>
                        <span className={styles.right}>₹{props.cartDetails?.deliveryPrice}</span>
                    </div>  
                    <div className={styles.details}>
                        <span>Saved Amount</span>
                        <span className={styles.right}>₹{props.cartDetails?.savedPrice?.toFixed(2)}</span>
                    </div>
                    <hr/>
                    <div className={styles.orderTotal}>
                        <b>Order Total</b>
                        <b className={styles.right}>₹{props.cartDetails?.total}</b>
                    </div>
                    <hr/>
                </div>
                <div className={styles.couponBox}>
                    <b className={styles.apply}>APPLY COUPONS</b>
                    <input className={styles.applyField} type="text" placeholder="Apply coupon code here" />
                    <button className={styles.btnCode}><b>APPLY CODE</b></button>
                </div>
                <div className={styles.proceed}>
                        <button className={styles.btnProceed}><b>UPLOAD PRESCRIPTION</b></button> 
                    </div>
                <hr/>
                <div className={styles.couponNote}>
                    <b>ORDER ABOVE ₹500 TO SAVE ON DELIVERY CHARGES. FREE DELIVERY WITH CART VALUE ABOVE ₹1000</b>
                </div>
                <NeedSignIn modal={modal} toggle={toggle}/>
            </div>
        );
}

export default OrderSummary;