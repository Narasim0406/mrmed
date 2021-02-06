import React, { useState } from 'react'
import {useRouter} from "next/router";


import styles from './PapAssistance.module.scss';

function PapAssistance(){
          const router = useRouter(); 
          const [papIconList,setPapIconList] = useState([
                {
                    no:'01',
                    icon:'icon-pap-1',
                    content:'Register with MrMed'
                },
                  {
                    no:'02',
                    icon:'icon-pap-2',
                    content:'Request enrollment in PAP'
                },
                  {
                    no:'03',
                    icon:'icon-pap-3',
                    content:'MrMed guides you through the process'
                 },
                //   {
                //     no:'04',
                //     icon:'icon-pap-4',
                //     content:'We will reach out to you with process details and documentation required for PAP registration'
                // }
                ,
                  {
                    no:'04',
                    icon:'icon-pap-5',
                    content:'Door delivery of PAP medicine '
                }
            ]);

        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={styles.indication}>
                                <br/>
                                <span onClick={() => router.push('/')}>Home &gt;</span><span>Patient Assistance Programme</span>
                                <br/>
                                <b>Patient Assistance Program Enquiry</b>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-1">
                            <p className={styles.papContent}>
                                Manufacturer of specialty medicines time to time offers various discounts on such
                                medicines under the Patients Assistance Programs to patients suffering from chronic
                                diseases, but such discounts are not offered by local chemists due to their own financial
                                benefits or they are not aware of such discounts. 
                            </p>
                            <p className={styles.papContents}>
                                MrMed holds your hand through this entire process and will ensure that you get your PAP medicine by coordinating with PAP program managers and pharmaceutical companies. MrMed promises up to date information of PAP program benefits and eligibility criteria such as indications permissible and documentation required.  
                            </p>
                        </div>   
                    </div>
                </div>
                <div className="container">
                    <div className={`row ${styles.papList}`}>
                        {
                            papIconList.map((pap,ind) => {
                                let {no,icon,content} = pap;
                                return (
                                    <div className={`col-md-2 ${styles.papLi}`} key={ind}>
                                        <div className={styles.papCenter}>
                                            <div>
                                                <span>{no}</span>
                                                <i className={`${styles.icons} ${styles[icon]}`}></i>
                                            </div>
                                            <b>{content}</b>
                                        </div>
                                        <div>
                                            {ind!=4 ? <img src={'/pap-rarrow.png'} alt="arrow"/>:""}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    
                </div>
                <div className={styles.alignCenter}>
                    {/* <NavLink to="/dashboard/papRegister"> */}
                        <button onClick={() => router.push('/PapRegisterComponent')} className={styles.papRequest}>ENQUIRE</button>
                    {/* </NavLink> */}
                </div>
            </div>
        );
}

export default PapAssistance;