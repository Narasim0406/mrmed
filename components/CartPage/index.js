import React from 'react'

import MedicineDetail from '../CartPage/medicineDetail/index'
//import RelatedProduct from '../CartPage/relatedProduct/index'

import styles from './CartPageComponent.module.scss';
import {useRouter} from 'next/router';

function CartPageComponent(){
    const router = useRouter();
        return (
            <div>
                <div className="container">
                    <div className={`col-md-12 ${styles.indication}`}>
                        <br/>
                        <span onClick={() => router.push('/')}>Home</span> <span>&gt; Cart Details</span>
                        <br/>
                        <b>My Cart</b>
                        <hr/>
                    </div>
                    <div className={styles.medicineDetail}>
                        <b>Medicines Details</b>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <MedicineDetail></MedicineDetail>
                        </div>
                    </div>
                    <hr/>
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