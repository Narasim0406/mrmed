import React from 'react';
import styles from './OrderDetails.module.scss';

function OrderDetails() {
    return (
        <div className="container">
            <div className="row">
                <div className={`col-md-12 ${styles.indication}`}>
                    <br/>
                    <span onClick={() => router.push('/')}>Home</span><span>&gt; My Order &gt; Profile &gt; Order Details</span>
                    <br/>
                    <b>Order Details</b>
                    <hr/>
                </div>
                <div className="col-md-5 ">
                    <h4 className="mb-3">Delivery Address</h4>
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
                </div>
                <div className="col-md-12">
                    <p>Prescription</p>
                </div>
                <div className={`${styles.uploadprescripCards} d-flex`}>
                    <div className={`${styles.uploadprescripAttachContainer} d-flex justify-content-center align-items-center`}>
                        <div className={`${styles.uploadattachedPrescrip1} d-flex`}>
                            <div className={styles.uploadprescripImg}>
                                <img src={"/prescription-img.png"} alt="prescription-img" />
                            </div>
                            <div className={`${styles.uploadIconsList} d-flex align-items-center`}>
                                <img src={"/ev.svg"} alt="view-icon" />
                                <img src={"/download.png"} alt="download-icon" />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.uploadprescripAttachContainer} d-flex justify-content-center align-items-center`}>
                        <div className={`${styles.uploadattachedPrescrip1} d-flex`}>
                            <div className={styles.uploadprescripImg}>
                                <img src={"/prescription-img.png"} alt="prescription-img" />
                            </div>
                            <div className={`${styles.uploadIconsList} d-flex align-items-center`}>
                                <img src={"/ev.svg"} alt="view-icon" />
                                <img src={"/download.png"} alt="download-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <p>Documents</p>
                </div>
                <div className={`${styles.uploadprescripCards} d-flex mb-5`}>
                    <div className={`${styles.uploadprescripAttachContainer} d-flex justify-content-center align-items-center`}>
                        <div className={`${styles.uploadattachedPrescrip1} d-flex`}>
                            <div className={styles.uploadprescripImg}>
                                <img src={"/prescription-img.png"} alt="prescription-img" />
                            </div>
                            <div className={`${styles.uploadIconsList} d-flex align-items-center`}>
                                <img src={"/ev.svg"} alt="view-icon" />
                                <img src={"/download.png"} alt="download-icon" />
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
)
}

export default OrderDetails;
