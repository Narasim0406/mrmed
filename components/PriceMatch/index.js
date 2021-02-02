import React from 'react'

import PriceDetail from '../PriceMatch/priceDetail/index'
import ProductDetail from '../PriceMatch/prodcutDetail/index'

import styles from './PriceMatch.module.scss';

function PriceMatchComponent(){
    return (
            <div>
                <div className="container">
                    <div className={`col-md-12 ${styles.indication}`}>
                        <br/>
                        <span>Home &gt; Shop Products &gt; Product Details &gt; Price Match</span>
                        <br/>
                        <b>Product Details</b>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <PriceDetail></PriceDetail>
                        </div>
                        <div className="col-md-5">
                            <ProductDetail></ProductDetail>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default PriceMatchComponent;