import React, { useState } from 'react';
import delete1 from  '../../../../assets/images/delete1.png';
import view from '../../../../assets/images/view.png';
import download from '../../../../assets/images/download.png';
import prescription from '../../../../assets/images/prescription-img.png';
import tick from '../../../../assets/images/tickmark.png';
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
                                                <img src={tick} alt="tickmark" />
                                            </div>
                                            <div className={styles.prescription_image}>
                                                <img src={prescription} alt="prescription" />
                                            </div>
                                            <div className={styles.icons_list}>
                                                <img src={delete1} alt="prescription" />
                                                <img src={view} alt="prescription" />
                                                <img src={download} alt="prescription" />
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
