import React from 'react'

import MedicineDetail from './medicineDetail/index'
import RelatedProduct from '../CartPage/relatedProduct/index'

import styles from './CartPageComponent.module.scss';
import {useRouter} from 'next/router';

function CartPageComponent(){
    const router = useRouter();
        return (
            <div>
                <div className="container">
                    <div className={styles.medicineDetail}>
                        <b>Medicines Details</b>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <MedicineDetail></MedicineDetail>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className={`col-md-12 ${styles.title}`}>
                            <b>RELATED PRODUCTS</b>
                        </div>
                        <div className="col-md-12">
                            <RelatedProduct></RelatedProduct>
                        </div>
                    </div> */}
                </div>
            </div>
        );
}

export default CartPageComponent;