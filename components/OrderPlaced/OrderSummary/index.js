import React from 'react'
import {useRouter} from 'next/router';
import styles from  './OrderPlacedSummary.module.scss';

function OrderPlacedSummary(){
    const router = useRouter();
    return(
        <div>
            <div className={styles.placedBox}>
                <div className={styles.summary}>
                    <b>Order Summary</b>
                </div>
                <div className={styles.details}>
                    <span>Cart value</span>
                    <span className={styles.right}>₹560</span>
                </div> 
                <div className={styles.details}>
                    <span>Delivery Charge</span>
                    <span className={styles.right}>₹40</span>
                </div>  
                <div className={styles.details}>
                    <span>Saved Amount</span>
                    <span className={styles.right}>₹100</span>
                </div>
                <hr/>
                <div className={styles.orderTotal}>
                    <b>Order Total</b>
                    <b className={styles.right}>₹500</b>
                </div>
                <hr/>
                <div className={styles.deliveryDetails}>
                    <b>Delivery Details</b>
                </div>
                <div className={styles.placedAddress}>
                    <div className="row">
                        <div className="col-md-8 col-8">
                            <b className={styles.addressName}>John Doe</b>
                            <div className={styles.addressNumber}>
                                <span>+91 56182 16548</span>
                            </div> 
                            </div>
                            <div className="col-md-4 col-4">
                                <div className={styles.place}>
                                    <span>Home</span>
                                </div>
                            </div>
                        </div>
                        <p className={styles.address}>
                            12 Random street in random city Chennai,
                            Tamil nadu - 600000
                        </p>
                    </div>
                    <div className={styles.summaryBtn}>
                        <button>HELP/REPORT ISSUE</button>
                        <button onClick={() => router.push('/Orders/OrderCancel')}>CANCEL ORDER</button>
                    </div>
                </div>
            </div>
        );
}

export default OrderPlacedSummary;