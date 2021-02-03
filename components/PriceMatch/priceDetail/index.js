import React from 'react'

import styles from './PriceDetail.module.scss'

function PriceDetail(){
        return (
            <div className={styles.fieldBox}>
                <div className={styles.provide}>
                    <b>Provide Details for Better Price</b>
                </div>
                <div className={styles.priceMatch}>           
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.fieldLabel}>
                                <span>Expected Price</span>
                            </div>
                            <input className={styles.detailField} type="text" placeholder="Enter here" />
                        </div>
                        <div className="col-md-6">
                            <div className={styles.fieldLabel}>
                                <span>URL of the Site</span>
                            </div>
                            <input className={styles.detailField} type="text" placeholder="Paste here" />
                        </div>
                        <div className="col-md-12">
                            <div className={styles.upload}>
                                <div className={styles.alignCenter}>
                                    <img src={'/upload.png'} />
                                    <br/>
                                    <span>Upload Photo or Screenshot of the better price</span>
                                    <br/>
                                    <label className={styles.uploadLabel} htmlFor="uploadFile"><b>Browse files</b></label>
                                    <input type="file" id={styles.uploadFile} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className={styles.register}>
                    <button className={styles.btnRequest}><b>SUBMIT YOUR REQUEST</b></button>
                </div>
            </div> 
        );
}

export default PriceDetail;