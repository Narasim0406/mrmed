import React, {useState} from 'react'

import styles from './CancellationReasonComponent.module.scss';
import img from '../../assets/images/prescription-img.png';
import {useRouter} from 'next/router';

function CancellationReasonComponent(){
        const router = useRouter();
        const [radioOption,setRadio] = useState([
            {
                option : 'I am unhappy with the discount'
            },
            {
                option : 'Order is delayed'
            },
            {
                option : 'I am unhappy with estimated delivery date'
            },
            {
                option : 'I have placed a duplicate order'
            },
            {
                option : 'You are not delivering full order'
            },
            {
                option : 'I have already purchased the medicines'
            },
            {
                option : 'I was just trying out'
            },
            {
                option : 'Other'
            }
        ]);
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className={`col-md-12 ${styles.title}`}>
                            <div className={styles.indication}>
                                <span>Home &gt; My Orders &gt; Track Order &gt; Cancel</span>
                                <br/>
                                <b>Order Cancellation</b>
                                <hr/>
                            </div>   
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className={styles.orderCancel}>
                                <div className={styles.reason}>
                                    <b>Reason for cancellation</b>
                                </div>
                                {radioOption.map((value,index)=>{
                                    return(
                                        <div key={index} className={styles.btnRadio}>
                                            <input type="radio" id={"radio-label"+index} className={styles.custom_radio} name="reason" value={value.option} checked={index===0}/>
                                            <label for={"radio-label"+index} className={styles.radio_label}></label>
                                            <span>{value.option}</span>
                                        </div>
                                    );
                                })}
                                <div className={styles.comment}>
                                    <span>Comments</span>
                                </div>
                                <textarea className={styles.otherField} placeholder="Description (maximum 120 Characters)" />
                                <button onClick={() => router.push('/Orders/OrderCancel')} className={styles.btnCancel}>CANCEL ORDER</button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className={styles.orderCancel}>
                                <div className={styles.orderDetail}>
                                    <b>Order details</b>
                                </div>
                                <div className="row">
                                    <div className={`col-md-4 ${styles.order_pmg}`}>
                                        <div className={styles.pres_img}>
                                            <img src={img} alt="prescription" />
                                        </div>
                                    </div>
                                    <div className={`col-md-8 ${styles.cancelId}`}>
                                        <div>
                                            <b>Order ID: #34324234324</b>
                                        </div>
                                        <div className={styles.cancelDate}>
                                            <span>Ordered on 02/09/2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        );
}

export default CancellationReasonComponent;