import React from 'react'

import styles from './ProductDetail.module.scss'

function ProductDetail(){
        return (
            <div className={styles.productBox}>
                <div className={styles.detail}>
                    <b>Product Details</b>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className={styles.background}>
                            <img className={styles.detailImg} src={require('../../../assets/images/product-1.png')} />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className={styles.category}>
                            <span>Diabetes</span>
                        </div>
                        <div className={styles.name}>
                            <b>Bifilac Tablets</b>
                        </div>
                        <div className={styles.manufacture}>
                            <b>Manufacturer:</b> <span>Natures Velvet Lifecare</span>
                        </div>
                        <div className={styles.ourPrice}>
                            <span>Our Price</span>
                        </div>
                        <div>
                            <b className={styles.discout}>₹150</b><span className={styles.original}>MRP ₹200</span>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default ProductDetail;