import React from 'react'

import DeliveryEstimation from '../OrderPlaced/DeliveryEstimation/index';
import MedicineList from '../OrderPlaced/MedicineList/index'
import OrderPlacedSummary from '../OrderPlaced/OrderSummary/index'
import styles from './OrderPlacedComponent.module.scss';

function OrderPlacedComponent(){
    return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <div className={styles.indication}>
                                <span>Home &gt; My Orders &gt; Track Order</span>
                                <br/>
                                <b>Track your Order</b>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <DeliveryEstimation></DeliveryEstimation>
                    <div className="row">
                        <div className="col-md-8">
                            <MedicineList></MedicineList>
                        </div>
                        <div className="col-md-4">
                            <OrderPlacedSummary></OrderPlacedSummary>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default OrderPlacedComponent;