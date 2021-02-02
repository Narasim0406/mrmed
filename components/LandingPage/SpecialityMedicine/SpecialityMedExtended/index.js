import { useRouter } from 'next/router';
import React, { useState } from 'react'

import styles from '../SpecialityMedExtended/SpecialityMedicineExtended.module.scss'

function SpecialityMedicineExtended(props){
    const router = useRouter();
    const [hide,setHide] = useState(false);
    const [specialityMed, setSpecialityMed] = useState([
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/medical.png')
        },
        {
            name : 'Surgical Gastroenterology',
            img : require('../../../../assets/images/surgical.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/liver.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/medical.png')
        },
        {
            name : 'Surgical Gastroenterology',
            img : require('../../../../assets/images/surgical.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/liver.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/medical.png')
        },
        {
            name : 'Surgical Gastroenterology',
            img : require('../../../../assets/images/surgical.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/liver.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/medical.png')
        },
        {
            name : 'Surgical Gastroenterology',
            img : require('../../../../assets/images/surgical.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/liver.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/medical.png')
        },
        {
            name : 'Surgical Gastroenterology',
            img : require('../../../../assets/images/surgical.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/liver.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/medical.png')
        },
        {
            name : 'Surgical Gastroenterology',
            img : require('../../../../assets/images/surgical.png')
        },
        {
            name : 'Medical Gastroenterology',
            img : require('../../../../assets/images/liver.png')
        }
    ]);
     
    const hideSpecialityMed = () =>{
        router.push('/SpecialityMed');
    }
    return(
        <div className="container">
            <div className={`col-md-12 ${styles.indication}`}>
                <br/>
                <span onClick={() => router.push('/')}>Home &gt;</span><span> Speciality Medicines</span>
                <br/>
                <hr/>
                </div>
             <div className={styles.specialityMed}>
                <div className={styles.speciality}>
                    <b>Speciality Medicines </b>
                    <div className={styles.seeAll} onClick={hideSpecialityMed}>
                        {/* <span>Close</span>
                        <img className={styles.landingArrow} src={require('../../../../assets/images/close.png')} /> */}
                    </div>
                </div>
                <div className="row">
                    {specialityMed.map((value,index)=>{
                        return(
                            <div className="col-md-2" key={index}>
                                <div className={styles.specialityImg}>
                                    <img src={value.img} />
                                    <div className={styles.specialityName}>
                                        <span>{value.name}</span>
                                    </div>                                          
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
        );
}

export default SpecialityMedicineExtended;