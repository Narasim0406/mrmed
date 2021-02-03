import React, { useState } from 'react';
// import delete1 from  '/delete1.png';
// import view from '/view.png';
// import download from '/download.png';
// import prescription from '/prescription-img.png';
// import tick from '/tickmark.png';
import styles from './AttachedPrescription.module.scss';


export default function AttachedPrescription(){
    const [prescriptionList, setPrescriptionList] = useState([
        {
            img:''
        },
        {
            img:''
        }
    ]);
    return (
            <div className={styles.attached_prescription_container}>
                <div className={`col ${styles.attached_prescriptionslist}`}>
                    {
                        prescriptionList.map((prescriptions,ind) => {
                            return (
                                <div className={styles.prescription_right_box}>
                                    <div className={styles.prescription_attach_container}>
                                        <div className={styles.attached_prescription1}>
                                            <div className={styles.prescription_tickmark}>
                                                <img src={"/tickmark.png"} alt="tickmark" />
                                            </div>
                                            <div className={styles.prescription_image}>
                                                <img src={"/prescription-img.png"} alt="prescription" />
                                            </div>
                                            <div className={styles.icons_list}>
                                                <img src={"/delete1.png"} alt="prescription" />
                                                <img src={"/view.png"} alt="prescription" />
                                                <img src={"/download.png"} alt="prescription" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    } 
                </div>
            </div>
        )
}
