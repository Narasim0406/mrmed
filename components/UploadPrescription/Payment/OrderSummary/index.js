import React from 'react';
import styles from './OrderSummary.module.scss';

export default function OrderSummary(){
    return (
        <div className={styles.overall__summary__container1}>
            <div className={styles.overall__summary__inner1}>
                <p className={styles.or_order_summary1}>Order Summary</p>
            <div className={styles.list_of_charges1}>
            <div className={`${styles.cart_values1} d-flex`}>
                <p className={styles.detail_s1}>Cart Value</p>
                <p>₹560</p>
            </div>
            <div className={`${styles.cart_values1} d-flex`}>
                <p className={styles.detail_s}>Delivery Charge</p>
                <p>₹40</p>
            </div>
            <div className={`${styles.cart_values1} d-flex`}>
                <p className={styles.detail_s1}>Saved Amount</p>
                <p>₹100</p>
            </div>
            <div className={styles.borderLine_bottom1}/>
                <div className={`${styles.order_total_main1} d-flex`}>
                    <p className={styles.detail_total1}>Order Total</p>
                    <p className={styles.detail_total_generate1}>₹500</p>
                </div>
                <div className={styles.borderLine_bottom1} />
                    <div className={styles.delivery__details__container1}>
                        <p className={styles.delivery__details1}>Delivery Details</p>
                        <div className={styles.delivery__inner_sec1}>
                            <div className={`${styles.del_person_inner_container1} d-flex`}>
                                <div className={styles.del_person_innnerLeft1}>
                                    <p className={styles.del_person_name1}>John Doe</p>
                                        <p className={styles.del_person_number1}>+91 56182 16548</p>
                                </div>
                                <div className={styles.del_person_innerRight1}>
                                    <p>Home</p>
                                </div>
                                </div>
                                    <p className={styles.street1}>12 Random street in random city Chennai,<br /> Tamil nadu - 600000</p>
                                    <div className={styles.changeBtn}>
                                        <button className={styles.report_order1}>CHANGE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
}
