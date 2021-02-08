import React from 'react';
import styles from './AddedCart.module.scss';
import {useRouter} from 'next/router';

function AddedCart(props) {
    const router = useRouter();
    const flows = ()  => {
        console.log(props.myCart);
        if(props.myCart){
            router.push('/CartDetails')
        }else{
            router.push('/UploadPresFlow')
        }
    }
    return (
            <div className={styles.addedCart}>
                <div className="d-flex">
                    <div className={styles.greenSqr}>
                        <img className={styles.green} src={'/greentick.png'} alt="greentick"/>
                    </div>
                    <p className={styles.addedTitle}>Added To cart</p>
                </div>
                <div className="d-flex">
                    <p className={styles.addedValue}>Cart value ( {props && props.cartList && props.cartList.cartData ? props.cartList.cartData.length:""} item)</p>
                    <p className={styles.amt}>₹ {props && props.cartList ? props.cartList.cartValue:""}</p>
                </div>
                <div>
                    <button onClick={() =>  router.push('/ShopProductComponent')} className={styles.btnExplore}>Expolre Medicine</button>
                    <button onClick={flows} className={styles.btnBuy}>Proceed to buy</button>
                </div>
            </div>
    )
}

export default AddedCart;
