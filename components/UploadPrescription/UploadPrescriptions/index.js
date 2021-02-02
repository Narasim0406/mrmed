import React, { useState } from 'react'
import styles from './UploadPrescriptions.module.scss';
import upload from '../../../assets/images/upload.png';
import delete1 from '../../../assets/images/delete1.png';
import view from '../../../assets/images/view.png';
import download from '../../../assets/images/download.png';
import tick from '../../../assets/images/tickmark.png';
import bluetick from '../../../assets/images/bluetick.png';
import PresPop from './PresPopup/index';

export default function UploadPrescriptions(){
    const [modal,setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className={`col-md-12 ${styles.uploadMainHead} d-flex`}>
                            Upload Prescription
                        </div>
                    </div>
                    <div className={`row ${styles.uploadPresMainContainer}`}>
                        <div className="col-md-8">
                            <div className={`${styles.uploadPresBox}  d-flex`}>
                                <img src={upload} alt="upload-image" className={styles.uploadImg} />
                                <p className={styles.diffDocs}>Drag & Drop or Browse files to upload photo of your<br /> prescription (JPG, PDF, Doc, etc.)</p>
                                <div>
                                    <label className={styles.upload_label} htmlFor={styles.upload_file}>Browse Files</label>
                                    <input type="file" id={styles.upload_file} />
                                </div>   
                            </div>
                            <div className={styles.prescripList}>
                                <p className={styles.prescripListtext}>Upload Prescription</p>
                                <div className={`${styles.uploadprescripCards} d-flex`}>
                                    <div className={`${styles.uploadprescripAttachContainer} d-flex justify-content-center align-items-center`}>
                                        <div className={`${styles.uploadattachedPrescrip1} d-flex`}>
                                            <div className={styles.uploadprescripTickmark}>
                                                <img src={tick} alt="tickmark" />
                                            </div>
                                            <div className={styles.uploadprescripImg}>
                                                <img src={require('../../../assets/images/prescription-img.png')} alt="prescription-img" />
                                            </div>
                                            <div className={`${styles.uploadIconsList} d-flex align-items-center`}>
                                                <img src={delete1} alt="delete-icon" />
                                                <img src={view} alt="view-icon" />
                                                <img src={download} alt="download-icon" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${styles.uploadprescripAttachContainer} d-flex justify-content-center align-items-center`}>
                                        <div className={`${styles.uploadattachedPrescrip1} d-flex`}>
                                            <div className={styles.uploadprescripTickmark}>
                                                <img src={tick} alt="tickmark" />
                                            </div>
                                            <div className={styles.uploadprescripImg}>
                                                <img src={require('../../../assets/images/prescription-img.png')} alt="prescription-img" />
                                            </div>
                                            <div className={`${styles.uploadIconsList} d-flex align-items-center`}>
                                                <img src={delete1} alt="delete-icon" />
                                                <img src={view} alt="view-icon" />
                                                <img src={download} alt="download-icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.uploadPrescripProceed}>
                                    <button onClick={toggle} className={styles.uploadproceedButton}>CONTINUE</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4 ${styles.uploadPresBoxright}`}>
                            <p className={`col-md-12 ${styles.validPrescrip}`}>What is a valid prescription?</p>
                            {/* <div className="validprescrip-img"> */}
                                <img src={require('../../../assets/images/prescription-img.png')} className={`col-md-12 ${styles.validprescripImg}`} alt="valid-prescription image"/>
                            {/* </div> */}
                            <div className={`col-md-12 ${styles.validTextend1} d-flex`}>
                                <img src={bluetick} alt="bluetick-image" className={styles.blueTickImg}/>
                                <p className={styles.validtextEnd}>Lorem ipsum is a placeholder text comn used to demonstrate.</p>
                            </div>
                            <div className={`col-md-12 ${styles.validTextend1} d-flex`}>
                                <img src={bluetick} alt="bluetick-image" className={styles.blueTickImg}/>
                                <p className={styles.validtextEnd}>Lorem ipsum is a placeholder text comn used to demonstrate.</p>
                            </div>
                        </div>
                    </div>
                    <PresPop modal={modal} toggle={toggle}/>
                </div>
            </>
        )
}
