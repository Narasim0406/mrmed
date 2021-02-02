import React, { useState} from 'react';
import {useRouter} from "next/router";

import styles from './ImportedMedicineComponet.module.scss';

function ImportedMedicineComponet(){
    const router = useRouter();
        const [content,setContent] = useState([
            {
                icon : 'icon-pap-1',
                slogan : 'Register with Mr. Med'
            },
            {
                icon : 'icon-pap-3',
                slogan : 'Request for imported medicine '
            },
            {
                icon : 'icon-pap-4',
                slogan : 'MrMed provides you with price and delivery details'
            },
            {
                icon : 'icon-pap-5',
                slogan : 'Genuine medicine door delivered '
            }
        ]);

        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <div className={styles.indication}>
                                <span onClick={() => router.push('/')}>Home</span><span> &gt; Imported Medicine</span>
                                <br/>
                                <b>Imported Medicine</b>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-1">
                            <p className={styles.papContent}>
                                Sometimes we need to reach across the globe to save lives. MrMed promises to procure 100% genuine medicines with passion and determination to meet urgent and chronic needs. 
                            </p>
                        </div>   
                    </div>
                </div>
                <div className="container">
                    <div className={`row ${styles.impList}`}>
                        {content.map((value,index)=>{
                            let {icon,slogan} = value;
                            return(
                                <div key={index} className={styles.impLi}>
                                    <div className={styles.importedCenter}>
                                        <div>
                                            <span>{'0'+(index+1)}</span>
                                            <i className={`${styles.icons} ${styles[icon]}`}></i>
                                        </div>
                                        <b>{slogan}</b>
                                    </div>
                                    <div>
                                        {index < 3 ? <img src={require('../../assets/images/pap-rarrow.png')} alt="arrow"/>:""}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={styles.alignCenter}>
                    {/* <NavLink to="/dashboard/importedMedicineForm"> */}
                        <button onClick={() => router.push('/ImportedMedicineFormComponet')} className={styles.papRequest}>REQUEST</button>
                    {/* </NavLink> */}
                </div>
            </div>
        );
}

export default ImportedMedicineComponet;