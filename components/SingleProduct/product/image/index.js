import React from 'react'

import styles from './Image.module.scss'

function Image(){
        return (
            <div className="row">
                <div className="col-3">
                    <div className={styles.productView}>
                        <img className={styles.productViewImg} src={'/product-1.png'} />
                    </div>
                    <div className={styles.productView}>
                        <img className={styles.productViewImg} src={'/product-1.png'} />
                    </div>
                    <div className={styles.productView}>
                        <img className={styles.productViewImg} src={'/product-1.png'} />
                    </div>
                    <div className={styles.productView}>
                        <img className={styles.productViewImg} src={'/product-1.png'} />
                    </div>
                </div>
                <div className="col-9">
                    <div className={styles.singleProduct}>
                        <img className={styles.productImg} src={'/single-product.png'} />
                    </div>
                </div>
            </div>
        );
}

export default Image;