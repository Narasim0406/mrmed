import React, { useState} from 'react';

import styles from './WishlistComponent.module.scss';

function WishlistComponent(){
    const [products,setProducts] = useState([
        {
            speciality : 'Diabetics',
            quantity : '10 Tablets',
            name : 'Bifilac Tablets',
            company : 'Natures Velvet Lifecare',
            actualPrice : '200',
            discountPrice : '150'
        },
        {
            speciality : 'Diabetics',
            quantity : '10 Tablets',
            name : 'Bifilac Tablets',
            company : 'Natures Velvet Lifecare',
            actualPrice : '200',
            discountPrice : '150'
        }
    ]);
    return(
            <div className={styles.trackBorder}>
                <div className={styles.wishlistProduct}>
                    <b>Wishlisted Products</b>
                </div>
                <div className="row">
                    {products.map((value,index)=>{
                        return(
                            <div key={index} className="col-md-5">
                                <div className={styles.image}>
                                    <div className={styles.wishlistImg}>
                                        <img src={'/product-3.png'} />  
                                    </div>
                                </div>  
                                <div>
                                    <div className={styles.productCategory}>
                                        <span>{value.speciality}</span>
                                        <div className={styles.right}>
                                            <span>{value.quantity}</span>
                                        </div>
                                    </div>
                                    <b className={styles.productName}>{value.name}</b>
                                    <br/>
                                    <span className={styles.productCategory}>Manufacturer: Natures Velvet Lifecare</span>
                                    <hr/>
                                    <b className={styles.discountPrice}>&#8377; {value.discountPrice}</b>
                                    <span className={styles.actualPrice}>MRP &#8377; {value.actualPrice}</span>
                                    <div className={styles.right}>
                                        <button className={styles.btn-arrow}><img src={'/arrow.png'}/></button>
                                    </div>
                                </div> 
                            </div>
                        );
                    })}
                </div>
            </div>
        );
}

export default WishlistComponent;