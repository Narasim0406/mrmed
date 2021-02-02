import React from 'react'

import styles from './NoMedicineComponent.module.scss'

function NoMedicineComponent(){
        return(
            <div className="container">
                <div className={styles.noMed}>
                    <b>No Medicine Found</b>
                    <span>Please enter the following details to request for the medicine</span>
                </div>
                <hr/>
                <div className={styles.medField}>
                    <div className='row'>
                        <div className="col-md-4">
                            <span>Medicine Details</span>
                            <input type="text" placeholder="Enter here" />
                        </div>
                        <div className="col-md-4">
                            <span>Quantity</span>
                            <input type="text" placeholder="Enter here" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <span>Notes</span>
                            <textarea placeholder="Enter here" />
                        </div>
                        <div className="col-md-8">
                            <span>Upload Your Prescription</span>
                            <div className={styles.uploadPhoto}>
                                <img src={require('../../assets/images/upload.png')} />
                                <br/>  
                                <span>Upload prescription or photo here</span>
                                <br/>
                                <label htmlFor="uploadFile"><b>Browse files</b></label>
                                <input type="file" id={styles.uploadFile} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={styles.btnRequest}>SUBMIT A REQUEST</button>
                    </div>
                </div>
            </div>
        );
}

export default NoMedicineComponent;