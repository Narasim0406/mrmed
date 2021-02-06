import React,{useState} from 'react';
import styles from './AddedCart.module.scss';
import {useRouter} from 'next/router';

function AddedCart() {
    const router = useRouter();
    return (
            <div className={styles.addedCart}>
                <div className="d-flex">
                    <div className={styles.greenSqr}>
                        <img className={styles.green} src={'/greentick.png'} alt="greentick"/>
                    </div>
                    <p className={styles.addedTitle}>Added To cart</p>
                </div>
                <div className="d-flex">
                    <p className={styles.addedValue}>Cart value ( 1 item)</p>
                    <p className={styles.amt}>₹98</p>
                </div>
                <div>
                    <button onClick={() =>  router.push('/ShopProductComponent')} className={styles.btnExplore}>Expolre Medicine</button>
                    <button onClick={() =>  router.push('/CartDetails')} className={styles.btnBuy}>Proceed to buy</button>
                </div>
            </div>
    )
}

export default AddedCart;
