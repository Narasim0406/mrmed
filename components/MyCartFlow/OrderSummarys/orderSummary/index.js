import React, {useState} from 'react'
import { connect } from 'react-redux';
import styles from './OrderSummary.module.scss'
import NeedSignIn from './NeedSigin';
import AttachedPrescriptions from '../Attached Prescriptions/index';
import { Component } from 'react';
import { profiles_url, orders_url  } from '../../../../apiVariables';
import axios from 'axios';

class OrderSummary extends Component{
    constructor(props){
        super(props);
        this.state = {
            deliveryCharge: 40,
            modal: false
        }
    }

   
   
    setDeliveryCharge = () => {

    }


    setModal = () => {
        let { modal } = this.state;
        modal = !modal;
        this.setState({
            modal
        })
    }

    render() {
        let { deliveryCharge, modal } = this.state;
        let { cartProducts } = this.props;
    return (
        <>
            <div>
                <div className={styles.summaryBox}>
                    <div className={styles.orderSummary}>
                        <b>Order Summary</b>
                    </div>
                    <div className={styles.details}>
                        <span>Cart Value</span>
                        <span className={styles.right}>₹{cartProducts.totalPrice}</span>
                    </div> 
                    <div className={styles.details}>
                        <span>Delivery Charge</span>
                        <span className={styles.right}>₹{cartProducts.deliveryPrice}</span>
                    </div>  
                    <div className={styles.details}>
                        <span>Saved Amount<p>(COUPON APPLIED)</p></span>
                        <span className={styles.right}>₹{cartProducts.savedAmount}</span>
                    </div>
                    <hr/>
                    <div className={styles.orderTotal}>
                        <b>Order Total</b>
                        <b className={styles.right}>₹{cartProducts.totalPrice ? (cartProducts.totalPrice+cartProducts.deliveryCharge-cartProducts.savedAmount).toFixed(2) : 0}</b>
                    </div>
                    <hr/>
                    <div className={styles.proceed}>
                        <button className={styles.btnProceed} onClick={this.setModal}><b>PROCEED TO PAY</b></button>
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
                <NeedSignIn modal={modal} toggle={this.setModal}/>
            </div>
            <div className={styles.mddelivery__details__container}>
                <p className={styles.mddelivery__details}>Delivery Details</p>
                <div className={styles.mddelivery__inner_sec}>
                    <div className={`${styles.mddelPersonInnerContainer} d-flex`}>
                        <div className={styles.mddelPersonInnnerLeft}>
                            <p className={styles.mddel_person_name}>{cartProducts.addressName}</p>
                            <p className={styles.mddel_person_number}>{cartProducts.addressMobile}</p>
                        </div>
                        <div className={styles.mddel_person_innerRight}>
                            <p>{cartProducts.addressType==0?"Home":cartProducts.addressType==0?"Office":"Others"}</p>
                        </div>
                    </div>
                    <p className={styles.mdstreet}>{cartProducts.address}</p>
                    <div className={styles.changeBtn}>
                        <button className={styles.report_order1}>CHANGE</button>
                    </div> 
                </div>
            </div>
            <AttachedPrescriptions cartProducts={this.props.cartProducts}></AttachedPrescriptions>
            </>
        );
}
}


const mapStateToProps = state => ({
    userDetail: state.auth.userDetails,
    chooseMedicines: state.chooseMedicines,
    prescription: state.prescription
  });
  
  export default connect(mapStateToProps)(OrderSummary);