import React,{useState} from 'react';

import styles from './AddressComponent.module.scss';
import {useRouter} from 'next/router';

function AddressComponent(){
    const router = useRouter();
   
    return(
            <>
                <div className={`${styles.addressDetail} mt-5`}>
                    <b>Saved Address Details</b>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className={styles.addressBox}>
                            <div className="row mt-2">
                                <div className="col-md-8 col-8">
                                    <b className={styles.addressName}>John Doe</b>
                                    <div className={styles.addressNumber}>
                                        <span>+91 56182 16548</span>
                                    </div> 
                                </div>
                                <div className="col-md-4 col-4">
                                    <div className={styles.place}>
                                        <span>Home</span>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.address}>
                                12 Random street in random city Chennai,
                                Tamil nadu - 600000
                            </p>
                            <div className={`${styles.addressBtns} d-flex justify-content-between`}>
                                <p className={styles.removeBtn}>Remove</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className={styles.addressBox}>
                            <div className="row mt-2">
                                <div className="col-md-8 col-8">
                                    <b className={styles.addressName}>John Doe</b>
                                    <div className={styles.addressNumber}>
                                        <span>+91 56182 16548</span>
                                    </div> 
                                </div>
                                <div className="col-md-4 col-4">
                                    <div className={styles.place}>
                                        <span>Office</span>
                                    </div>
                                </div>
                            </div>
                            <p className={styles.address}>
                                12 Random street in random city Chennai,
                                Tamil nadu - 600000
                            </p>
                            <div className={`${styles.addressBtns} d-flex justify-content-between`}>
                                <p className={styles.removeBtn}>Remove</p>
                                <p className={styles.setBtn}>Set as Primary Address</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.add} col-md-2 mt-5`}>
                        <p onClick={() => router.push('/NewAddress')} className={styles.addAddress}>+ Add Address</p>
                    </div>
                </div>
            </>
        );
}

export default AddressComponent;