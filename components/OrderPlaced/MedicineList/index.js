import React, { useState } from 'react'

import styles from './MedicineList.module.scss'

function MedicineList(){
    const [medicineDetails,setMedicineDetails] = useState([
        {
            name : "Natures Velvet Vitamin C 1000mg Tablets 60's",
            company : 'Natures Velvet Lifecare',
            discountPrice : '1399',
            actualPrice : '1899',
            quantity : '2',
            save : '15%'
        },
        {
            name : "Natures Velvet Vitamin C 1000mg Tablets 60's",
            company : 'Natures Velvet Lifecare',
            discountPrice : '1399',
            actualPrice : '1899',
            quantity : '2',
            save : '15%'
        },
        {
            name : "Natures Velvet Vitamin C 1000mg Tablets 60's",
            company : 'Natures Velvet Lifecare',
            discountPrice : '1399',
            actualPrice : '1899',
            quantity : '2',
            save : '15%'
        },
    ]);
    let medList = medicineDetails.map((value,index)=>{
    return(
            <div className={styles.medlist} key={index}>
                <div className="row">
                    <div className="col-2">
                        <img src={require('../../../assets/images/vitamin.png')} />
                    </div>
                    <div className="col-7">
                        <div className={styles.medDetail}>
                            <b>{value.name}</b>
                            <br/>
                            <span>Mfr: {value.company}</span>
                        </div>
                        <div className={styles.price}>
                            <b>₹ {value.discountPrice} </b>
                            <span>MRP ₹ {value.actualPrice}</span>
                        </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.fRight}>
                                <span>Qty {value.quantity}</span>
                                <br></br>
                                <button>Save {value.save}</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
        return(
            <div>
                <div>
                    <b>Medicine List</b>
                </div>
                {medList}
                <button className={styles.btnHome}>HOME</button>
                <button className={styles.btnHome}>MY ORDERS</button>
            </div>
        );
}

export default MedicineList;