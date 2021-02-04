import React from 'react'

import styles from '../WhyMrMed/WhyMrMed.module.scss'

function WhyMrMed(){
        return (
            <div className={`row ${styles.whyMeds}`}>
                <div className={`col-md-12 ${styles.whyMed}`}>
                    <b>Why MrMed?</b>
                </div>
                <div className={`col-md-12 ${styles.wholeContainer}`}>
                    <div>
                        <div className={styles.whyBox}>
                            <img src={'/doctor.png'}/>
                            <div className={styles.whyContent}>
                                <b>Super Specialty Pharmaceutical Experts</b>
                                <p>
                                    The team at MrMed comprises of pharmacists, distributors and clinicians
                                    with over 40 years of experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.whyBox}>
                            <img src={'/dollor.png'}/>
                            <div className={styles.whyContent}>
                                <b>Patient Oriented at Best Prices </b>
                                <br/>
                                <br/>
                                <p>
                                    We have the largest inventory of medicine and are focused on offering
                                    the best price to patients. We will procure any medicine not in our database
                                    within hours.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.whyBox}>
                            <img src={'/quality-med.png'}/>
                            <div className={styles.whyContent}>
                                <b>Highest Quality &amp; Genuine medicines</b>
                                <p>
                                    We assure you of ethical practices, genuine invoices that match 
                                    dispatched medicine batch number.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.whyBox}>
                            <img src={'/delivery-truck.png'}/>
                            <div className={styles.whyContent}>
                                <b>Timely Delivery - Handled with Care </b>
                                <p>
                                    Cold chain logistics, on-time delivery 
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <div className={styles.whyBox}>
                            <img src={'/terms.png'}/>
                            <div className={styles.whyContent}>
                                <b>Dedicated team of Pharmacists</b>
                                <p>
                                    Our in-house pharmacists will assist you with your prescription,
                                    patient assistance programs offered by pharma companies and much more
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.whyBox}>
                            <img src={'/doctor.png'}/>
                            <div className={styles.whyContent}>
                                <b>Super Specialty Pharmaceutical Experts</b>
                                <p>
                                    The team at MrMed comprises of pharmacists, distributors and clinicians
                                    with over 40 years of experience.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div> */}
            </div>
        </div>
        );
}

export default WhyMrMed;