import React,{useState} from 'react'

import styles from  './AddCart.module.scss';
import {useRouter} from 'next/router';

function AddCart(props){
    const router = useRouter();
    const [added, setAdded] = useState(false);
    const addCart = () => {
        setAdded(!added);
    }
    const flows = ()  => {
        if(props.myCart){
            router.push('/CartDetails')
        }else{
            router.push('/UploadPresFlow')
        }
    }
        return(
            <div className={styles.purchaseBox}>
                <div>
                    <span className={styles.price}>MRP <span className={styles.line}>&#8377; 110 </span></span>
                    <span className={styles.offer}>25% OFF</span>
                </div>    
                <div>
                    <span className={styles.priceTag}>Price </span>
                    <div className={styles.offerPrice}>
                        <b>&#8377; 98</b>
                    </div>
                </div>
                <span className={styles.tax}>Inclusive of all taxes</span>
                <div className={styles.quantityLabel}>
                    <span>Quantity</span>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <table>
                            <tbody>
                                <tr>
                                    <td className={styles.addCartCol}><img src={'/+.png'}/></td>
                                    <td className={styles.addCartCol}>1</td>
                                    <td className={styles.addCartCol}><img src={'/-.png'}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-5">
                        <div className={styles.tabletCount}>
                            <span>10 Tablets in 1 Strip</span>
                        </div>
                    </div>
                </div>
                {/* <NavLink to="/dashboard/cartPage"> */}
                    <button className={styles.btnAddCart} onClick={addCart}>{added ? "ADDED TO CART" : "ADD TO CART"}</button>
                {/* </NavLink> */}
                <br/>
                <button className={styles.btnPriceMatch} onClick={flows}>BUY NOW</button>
                {/* <NavLink to="/dashboard/priceMatch"> 
                   
                 </NavLink> */}
                <br/>
            </div>
        );
}

export default AddCart;