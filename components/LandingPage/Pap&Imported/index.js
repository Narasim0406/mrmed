import React, { Component } from 'react';
import {useRouter} from 'next/router';

import styles from '../Pap&Imported/Pap&Imported.module.scss';

function PapImported(){
        const router = useRouter();
        return (
            <div>
                <div className={styles.whatDo}>
                    <b>What We Do?</b>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img className={styles.papImg} src={require('../../../assets/images/pap.png')} />
                        <div className={styles.papText}>
                            <b className={styles.pap}>Patient Assistance Programme</b>
                            <br/>
                            <span>Manufacturer of specialty medicines time to time offers various discounts</span>
                            <br/>
                            <div className={styles.knowMore}>
                                {/* <NavLink id="nav-link" to="/dashboard/papAssistance"> */}
                                    <button onClick={() => router.push('/PapAssistance')} className={styles.btnKnow}>KNOW MORE</button>
                                {/* </NavLink>  */}
                            </div>  
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className={styles.papImg} src={require('../../../assets/images/imported.png')} />
                        <div className={styles.papText}>
                            <b className={styles.pap}>Imported medicines</b>
                            <br/>
                            <span>Genuine imported medicines imported directly in patient name</span>
                            <br/>
                            <div className={styles.knowMore}>
                                {/* <NavLink id="nav-link" to="/dashboard/importedMedicine"> */}
                                    <button onClick={() => router.push('/ImportedMedicineComponet')} className={styles.btnKnow}>KNOW MORE</button>
                                {/* </NavLink> */}
                            </div>  
                        </div>
                    </div>
                </div>
            </div>  
        );
}


export default PapImported;