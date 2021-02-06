import React from 'react'

import AllProduct from '../ShopProduct/AllProduct/index';

import styles from './ShopProductComponent.module.scss';
import {useRouter} from 'next/router';

function ShopProductComponent(){
    const router = useRouter();
        return (
            <div>
                <div className="container">
                    <div className={`col-md-12 ${styles.indication}`}>
                        <br/>
                        <span onClick={() => router.push('/')}>Home</span><span> &gt; All Products</span>
                        <br/>
                        <b>Products</b>
                        <hr/>
                    </div>
                    <AllProduct></AllProduct>
                </div>
            </div>
        );
}

export default ShopProductComponent;