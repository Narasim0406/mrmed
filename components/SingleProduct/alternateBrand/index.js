import React, { useState} from 'react'

import styles from './AlternateBrand.module.scss';

function AlternateBrand(){
        const [alternateBrand,setAlterNateBrand] = useState([
            {
                name : 'Vitamin C 1000 mg',
                company : 'Dr.Reddy Lab',
                price : '₹140/Tablet',
                discount : '8% cheaper'
            },
            {
                name : 'Vitamin C 1000 mg',
                company : 'Dr.Reddy Lab',
                price : '₹140/Tablet',
                discount : '8% cheaper'
            },
            {
                name : 'Vitamin C 1000 mg',
                company : 'Dr.Reddy Lab',
                price : '₹140/Tablet',
                discount : '8% cheaper'
            },
            {
                name : 'Vitamin C 1000 mg',
                company : 'Dr.Reddy Lab',
                price : '₹140/Tablet',
                discount : '8% cheaper'
            }
        ]);
        let suggestion = alternateBrand.map((value,index)=>{
        return(
                <div key={index}>
                    <div className="row">
                        <div className="col-7">
                            <span className={styles.tabletName}>{value.name}</span>
                            <br></br>
                            <span className={styles.tabletBrand}>{value.company}</span>
                        </div>
                        <div className={`col-5 ${styles.right}`}>
                            <b className={styles.tabletPrice}>{value.price}</b>
                            <br></br>
                            <span className={styles.cheap}>{value.discount}</span>
                        </div>     
                    </div>
                    <hr/>
                </div>
            );
        })
        return(
            <div className={styles.alternateBrands}>
                <div className={styles.alternate}>
                    <b>Alternate Brands</b>
                </div>
                <hr/>
                <div className={styles.suggestion}>
                    {suggestion} 
                </div>
                <div className={styles.viewAll}>
                        <button className={styles.btnViewAll}>VIEW ALL</button>
                    </div>
            </div>
        );
    }
export default AlternateBrand;