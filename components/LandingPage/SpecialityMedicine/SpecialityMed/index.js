import { useRouter } from 'next/router';
import React, { useState } from 'react'

import styles from '../SpecialityMed/SpecialityMed.module.scss'

function SpecialityMed(){
    const router = useRouter();
        const [specialityMed,setSpecialityMed] = useState([
            {
                name : 'Medical Gastroenterology',
                img : '/medical.png'
            },
            {
                name : 'Surgical Gastroenterology',
                img : '/surgical.png'
            },
            {
                name : 'Medical Gastroenterology',
                img : '/liver.png'
            },
            {
                name : 'Medical Gastroenterology',
                img : '/medical.png'
            },
            {
                name : 'Surgical Gastroenterology',
                img : '/surgical.png'
            },
            {
                name : 'Medical Gastroenterology',
                img : '/liver.png'
            },
            {
                name : 'Medical Gastroenterology',
                img : '/medical.png'
            },
            {
                name : 'Surgical Gastroenterology',
                img : '/surgical.png'
            },
            {
                name : 'Medical Gastroenterology',
                img : '/liver.png'
            }
        ]); 
    return(
            <div className={styles.specialityMed}>
                <div className={styles.speciality}>
                    <b>Speciality Medicines </b>
                    <div className={styles.seeAll} onClick={()=> router.push('/SpecialityMed')}>
                        <span>See All</span>
                        <img className={styles.landingArrow} src={'/arrow-1.svg'} />
                    </div>
                </div>
                <div className="row">
                    {specialityMed.map((value,index)=>{
                        return(
                            <div className="col-md-4" key={index}>
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
        );
}

export default SpecialityMed;