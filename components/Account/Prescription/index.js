import React,{useState} from 'react';

import styles from  './PrescriptionComponent.module.scss';

function PrescriptionComponent(){
        const [prescription,setPrescription] = useState([
            {

            },
            {
                
            }
        ]);
        return(
            <div className={styles.trackBorder}>
                <div className={styles.prescriptionTitle}>
                    <b>My Prescription</b>
                </div>
                <div className="row">
                    {prescription.map((value,index)=>{
                        return(
                            <div className="col-md-5">
                                <div className={styles.prescriptionBox}>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <img src={require('../../../assets/images/prescription-img.png')} />
                                        </div>
                                        <div className="col-md-4">
                                            <div className={styles.alignRight}>
                                                <img src={require('../../../assets/images/deltee.png')} />
                                                <br/>
                                                <img src={require('../../../assets/images/elipse.png')} />
                                                <br/>
                                                <img src={require('../../../assets/images/download.png')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                        
                    })}
                </div>
            </div>
        );
}

export default PrescriptionComponent;