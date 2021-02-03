import React, { useState } from "react"

import styles from './RelatedProduct.module.scss';
import {useRouter} from 'next/router';

function RelatedProduct(){
    const router = useRouter();
    const [products,setProducts] = useState( [
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
        },
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
            <div>
                <div className="row">
                    {products.map((value,index)=>{
                        return(
                            <div className="col-md-3" key={index}>
                                <div className={styles.bottom}>
                                    <div className={styles.image}>
                                        <div className={styles.alignCenter}>
                                            <img src={'/product-3.png'} />  
                                        </div>
                                    </div>  
                                    <div>
                                        <div className={styles.category}>
                                            <span>Diabetes</span>
                                            <div className={styles.right}>
                                                <span>{value.quantity}</span>
                                            </div>
                                        </div>
                                        <b className={styles.productName}>{value.name}</b>
                                        <br/>
                                        <span className={styles.manufacture}>Manufacturer: {value.company}</span>
                                        <hr/>
                                        <b className={styles.discountPrice}>&#8377; {value.discountPrice}</b>
                                        <span className={styles.actualPrice}>MRP &#8377; {value.actualPrice}</span>
                                        <div className={styles.right}>
                                            <button className={styles.btnAdd}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.alignCenter}>
                    <button onClick={() => router.push('/ShopProductComponent')} className={styles.btnView}><b>VIEW MORE</b></button>
                </div>  
            </div>
        );
}

export default RelatedProduct;