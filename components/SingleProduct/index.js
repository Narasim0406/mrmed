import React from 'react'

import Image from '../SingleProduct/product/image/index'
import Details from '../SingleProduct/product/details/index'
import AddCart from '../SingleProduct/addCart/index'
import ProductSpecs from '../SingleProduct/productSpecs/index'
import AlternateBrand from '../SingleProduct/alternateBrand/index'
import RelatedProduct from '../SingleProduct/relatedProduct/index'
import styles from './SingleProductComponent.module.scss';
import {useRouter} from 'next/router';

function SingleProductComponent(){
    const router = useRouter();
        return(
            <div>
                <div className="container">
                    <div className={`col-md-12 ${styles.indication}`}>
                        <br/>
                        <span onClick={() => router.push('/')}>Home &gt; </span><span onClick={() => router.push('/ShopProductComponent')}>Shop Products &gt; </span><span>Product Details</span>
                        <br/>
                        <b>Product Details</b>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <Image></Image>
                        </div>         
                        <div className="col-md-4">
                            <Details></Details>
                        </div>
                        <div className="col-md-3">
                            <AddCart></AddCart>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ProductSpecs></ProductSpecs>
                        </div>
                        {/* <div className="col-md-3">
                            <AlternateBrand></AlternateBrand>
                        </div> */}
                    </div>   
                </div>
                {/* <div className="container">
                    <div className={styles.title}>
                        <b>RELATED PRODUCTS</b>
                    </div>
                    <RelatedProduct></RelatedProduct>
                </div> */}
            </div>
        );
}

export default SingleProductComponent;
