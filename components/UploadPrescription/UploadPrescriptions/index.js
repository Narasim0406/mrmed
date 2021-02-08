import React, { useState } from 'react'
import styles from './UploadPrescriptions.module.scss';
// import upload from '/upload.png';
// import delete1 from '/delete1.png';
// import view from '/view.png';
// import download from '/download.png';
// import tick from '/tickmark.png';
// import bluetick from '/bluetick.png';
import { Component } from 'react';
import { products_url } from '../../../apiVariables';
import axios from 'axios';
import { LeakAddTwoTone } from '@material-ui/icons';
import { uploadPrescriptions } from '../../../actions';
class UploadPrescriptions extends Component {

    state = {
        
        uploadImages: []
    }
    componentDidMount() {
        this.setState({
            uploadImages: []
        })
    }

   

    handleFileUpload = async (e) => {
        let { uploadImages } = this.state;
        var formData = new FormData();
        let selectedFile = e.target.files[0];
        formData.append('file', selectedFile);

        await axios.post(`${products_url}/upload/uploadFile/single`, formData)
            .then(res => {
                let obj = res.data.data;
                uploadImages.push(obj)
                this.setState({
                    uploadImages
                });
                this.props.dispatch(uploadImages)
                // this.props.dispatch(productList(res.data.data.list))
            })
    }

    render() {
        let { uploadImages } = this.state;
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
                                <img src={"/upload.png"} alt="upload-image" className={styles.uploadImg} />
                                <p className={styles.diffDocs}>Drag & Drop or Browse files to upload photo of your<br /> prescription (JPG, PDF, Doc, etc.)</p>
                                <div>
                                    <label className={styles.upload_label} htmlFor={styles.upload_file}>Browse Files</label>
                                    <input onChange={this.handleFileUpload} type="file" id={styles.upload_file} />
                                </div>
                            </div>
                            <div className={styles.prescripList}>
                                <p className={styles.prescripListtext}>Upload Prescription</p>
                                <div className={`${styles.uploadprescripCards} d-flex`}>
                                    {
                                        uploadImages.length > 0 ? uploadImages.map((item, index)=>{
                                            return(
                                                <div className={`${styles.uploadprescripAttachContainer} d-flex justify-content-center align-items-center`}>
                                                    <div className={`${styles.uploadattachedPrescrip1} d-flex`}>
                                                        <div className={styles.uploadprescripTickmark}>
                                                            <img src={"/tickmark.png"} alt="tickmark" />
                                                        </div>
                                                        <div className={styles.uploadprescripImg}>
                                                            <img src={item.url} alt="prescription-img" />
                                                        </div>
                                                        <div className={`${styles.uploadIconsList} d-flex align-items-center`}>
                                                            <img src={"/delete1.png"} alt="delete-icon" />
                                                            <img src={"/view.png"} alt="view-icon" />
                                                            <img src={"/download.png"} alt="download-icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }):""
                                    }


                                    {/* <div className={`${styles.uploadprescripAttachContainer} d-flex justify-content-center align-items-center`}>
                                        <div className={`${styles.uploadattachedPrescrip1} d-flex`}>
                                            <div className={styles.uploadprescripTickmark}>
                                                <img src={"/tickmark.png"} alt="tickmark" />
                                            </div>
                                            <div className={styles.uploadprescripImg}>
                                                <img src={"/prescription-img.png"} alt="prescription-img" />
                                            </div>
                                            <div className={`${styles.uploadIconsList} d-flex align-items-center`}>
                                                <img src={"/delete1.png"} alt="delete-icon" />
                                                <img src={"/view.png"} alt="view-icon" />
                                                <img src={"/download.png"} alt="download-icon" />
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className={styles.uploadPrescripProceed}>
                                    <button onClick={()=>this.props.handleStep('next')} className={styles.uploadproceedButton}>CONTINUE</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4 ${styles.uploadPresBoxright}`}>
                            <p className={`col-md-12 ${styles.validPrescrip}`}>What is a valid prescription?</p>
                            {/* <div className="validprescrip-img"> */}
                            <img src={'/prescription-img.png'} className={`col-md-12 ${styles.validprescripImg}`} alt="valid-prescription image" />
                            {/* </div> */}
                            <div className="mt-4">
                                <div className={`col-md-12 ${styles.validTextend1} d-flex`}>
                                    <img src='/bluetick.png' alt="bluetick-image" className={styles.blueTickImg} />
                                    <p className={styles.validtextEnd}>Patient Details</p>
                                </div>
                                <div className={`col-md-12 ${styles.validTextend1} d-flex`}>
                                    <img src='/bluetick.png' alt="bluetick-image" className={styles.blueTickImg} />
                                    <p className={styles.validtextEnd}>Doctor’s Details</p>
                                </div>
                                <div className={`col-md-12 ${styles.validTextend1} d-flex`}>
                                    <img src={'/bluetick.png'} alt="bluetick-image" className={styles.blueTickImg} />
                                    <p className={styles.validtextEnd}>Doctor’s Sign + Stamp</p>
                                </div>
                                <div className={`col-md-12 ${styles.validTextend1} d-flex`}>
                                    <img src={'/bluetick.png'} alt="bluetick-image" className={styles.blueTickImg} />
                                    <p className={styles.validtextEnd}>Medicine Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default UploadPrescriptions;