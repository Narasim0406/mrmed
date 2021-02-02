import React, { Component } from 'react';
import styles from './DeliveryDetails.module.scss';

export default class DeliveryDetails extends Component {
    render() {
        return (
            <div className={styles.deliveryInfo}>
                <p>Delivery Details</p>
                <div className={styles.deliveryCard}>
                    <div className={styles.customer}>
                        <h3 className={styles.name}>John Doe</h3>
                        <p className={styles.number}>+91 56182 16548</p>
                    </div>
                    <div className={`col-md-9 ${styles.deliveryAddress}`}>
                        <div className={`col-md-8 ${styles.address}`}>
                            <p>
                                12 Random street in random city, Chennai, 
                                Tamil nadu - 600000
                            </p>
                        </div>
                        <div className={styles.adType}>
                            <p>Home</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
