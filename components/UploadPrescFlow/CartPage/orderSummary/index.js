import React, {useState} from 'react'

import styles from './OrderSummary.module.scss'
import NeedSignIn from './NeedSigin';

function OrderSummary(props){
    const [deliveryCharge, setDeliveryCharge] = useState(40);
    const [modal, setModal] = useState(false);
   
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
                        <span className={styles.right}>₹{props.total}</span>
                    </div> 
                    <div className={styles.details}>
                        <span>Delivery Charge</span>
                        <span className={styles.right}>₹{deliveryCharge}</span>
                    </div>  
                    <div className={styles.details}>
                        <span>Saved Amount</span>
                        <span className={styles.right}>₹{props.savedAmount}</span>
                    </div>
                    <hr/>
                    <div className={styles.orderTotal}>
                        <b>Order Total</b>
                        <b className={styles.right}>₹{props.total!=0 ? (props.total+deliveryCharge-props.savedAmount).toFixed(2) : 0}</b>
                    </div>
                    <hr/>
                    <div className={styles.proceed}>
                        <button className={styles.btnProceed} onClick={toggle}><b>PROCEED TO BUY</b></button>
                    </div>
                </div>
                <div className={styles.couponBox}>
                    <b className={styles.apply}>APPLY COUPONS</b>
                    <input className={styles.applyField} type="text" placeholder="Apply coupon code here" />
                    <button className={styles.btnCode}><b>APPLY CODE</b></button>
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