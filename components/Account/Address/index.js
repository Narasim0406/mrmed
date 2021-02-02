import React from 'react';

import styles from './AddressComponent.module.scss'

function AddressComponent(){
    return(
            // <div className={styles.trackBorder}>
            <>
                <div className={`${styles.addressDetail} mt-5`}>
                    <b>Saved Address Details</b>
                </div>
                <div className="row">
                    <div className="col-md-5 col-12">
                        <div className={styles.addressBox}>
                            <div className="row">
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
                        </div>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className={styles.addressBox}>
                            <div className="row">
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
                        </div>
                    </div>
                </div>
                <button className={styles.btnNew}><b>ADD NEW</b></button>
            {/* </div> */}
            </>
        );
}

export default AddressComponent;