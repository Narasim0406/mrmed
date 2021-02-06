import React, {useState} from 'react'

import styles from './OrderSummary.module.scss'
import NeedSignIn from './NeedSigin';
import AttachedPrescriptions from '../Attached Prescriptions/index';

function OrderSummary(props){
    const [deliveryCharge, setDeliveryCharge] = useState(40);
    const [modal, setModal] = useState(false);
   
    const toggle=() => {
        setModal(!modal);
    }
    return (
        <>
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
                        <span>Saved Amount<p>(COUPON APPLIED)</p></span>
                        <span className={styles.right}>₹{props.savedAmount}</span>
                    </div>
                    <hr/>
                    <div className={styles.orderTotal}>
                        <b>Order Total</b>
                        <b className={styles.right}>₹{props.total!=0 ? (props.total+deliveryCharge-props.savedAmount).toFixed(2) : 0}</b>
                    </div>
                    <hr/>
                    <div className={styles.proceed}>
                        <button className={styles.btnProceed} onClick={toggle}><b>PROCEED TO PAY</b></button>
                        <button className={styles.btnPrescription}><b>Cancel Order</b></button> 
                    </div>
                </div>
                {/* <div className={styles.couponBox}>
                    <b className={styles.apply}>APPLY COUPONS</b>
                    <input className={styles.applyField} type="text" placeholder="Apply coupon code here" />
                    <button className={styles.btnCode}><b>APPLY CODE</b></button>
                </div>
                <hr/>
                <div className={styles.couponNote}>
                    <b>ORDER ABOVE ₹500 TO SAVE ON DELIVERY CHARGES. FREE DELIVERY WITH CART VALUE ABOVE ₹1000</b>
                </div> */}
                <NeedSignIn modal={modal} toggle={toggle}/>
            </div>
            <div className={styles.mddelivery__details__container}>
                <p className={styles.mddelivery__details}>Delivery Details</p>
                <div className={styles.mddelivery__inner_sec}>
                    <div className={`${styles.mddelPersonInnerContainer} d-flex`}>
                        <div className={styles.mddelPersonInnnerLeft}>
                            <p className={styles.mddel_person_name}>John Doe</p>
                            <p className={styles.mddel_person_number}>+91 56182 16548</p>
                        </div>
                        <div className={styles.mddel_person_innerRight}>
                            <p>Home</p>
                        </div>
                    </div>
                    <p className={styles.mdstreet}>12 Random street in random city Chennai,<br /> Tamil nadu - 600000</p>
                    <div className={styles.changeBtn}>
                        <button className={styles.report_order1}>CHANGE</button>
                    </div> 
                </div>
            </div>
            <AttachedPrescriptions/>
            </>
        );
}

export default OrderSummary;