import React from 'react';
import styles from './OrderSummary.module.scss';
import {useRouter} from 'next/router';
export default function OrderSummary(props){
    const router = useRouter();
        return (
            <div className={`col-md-12 ${styles.medList__summary__inner}`}>
                <p className={styles.md_order_summary}>Order Summary</p>
                <div className={styles.mdListOfCharges}>
                    <div className={`${styles.mdcartValues} d-flex`}>
                        <p className={styles.mddetail_s}>Cart Value</p>
                        <p class>-</p>
                    </div>
                    <div className={`${styles.mdcartValues} d-flex`}>
                        <p className={styles.mddetail_s}>Delivery Charge</p>
                        <p>-</p>
                    </div>
                    <div className={`${styles.mdcartValues} d-flex`}>
                        <p className={styles.mddetail_s}>Saved Amount</p>
                        <p>-</p>
                    </div>
                    <div className={styles.mdborderLineBottom}/>
                    <div className={`${styles.mdorderTotalMain} d-flex`}>
                        <p className={styles.mddetail_total}>Order Total</p>
                        <p className={styles.mddetail_total_generate}>To be generated</p>
                    </div>
                    <div className={styles.mdborderLineBottom} />
                    {
                        props.ArOrder ? 
                        <div className={`${styles.md_proceed_pay} d-flex justify-content-center align-items-center`}>
                            <button className={styles.mdproceed_pay_inner}>PROCEED TO PAY</button>
                        </div> :""
                    }
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
                            {
                                props.payment ? 
                                <div className={styles.changeBtn}>
                                    <button className={styles.report_order1}>CHANGE</button>
                                </div> 
                                :""
                            }
                        </div>
                    </div>
                    {
                        props.trackYourOrder ? 
                            <div className={`${styles.report_cancel} d-flex`}>
                                <button className={styles.report_order1}>HELP/REPORT ISSUE</button>
                                <button onClick={() => router.push('/Orders/OrderCancel')} className={styles.report_order2}>CANCEL ORDER</button>
                            </div> :""
                    }
                </div>
            </div>
        )
}
