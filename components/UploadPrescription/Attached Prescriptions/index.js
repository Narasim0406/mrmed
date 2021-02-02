import React, { useState } from 'react';
import delete1 from  '../../../assets/images/delete1.png';
import view from '../../../assets/images/view.png';
import download from '../../../assets/images/download.png';
import tick from '../../../assets/images//tickmark.png';
import SwiperCore, { Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './AttachedPrescription.module.scss';

SwiperCore.use([ Pagination, Scrollbar, A11y]);

export default function AttachedPrescription(){
    const [prescriptionsList,setPrescriptionsList] = useState([
        {
            id:'1',
            img:''
        },
        {
            id:'2',
            img:''
        }
    ]);
    return (
        <div>
            <div className={`${styles.attachedPrescription} font-weight-bold`}>
                Attached Prescription
            </div>
            <div className={styles.prescriptionRightBox}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                {
                    prescriptionsList.map((prescriptions, ind) => {
                    return (
                        <SwiperSlide>
                            <div className={styles.prescriptionAttachContainer}>
                                <div className={styles.attachedPrescription1}>
                                    <div className={styles.prescriptionTickmark}>
                                        <img src={tick} alt="tickmark" />
                                    </div>
                                    <div className={styles.prescriptionImage}>
                                        <img src={require('../../../assets/images/prescription-img.png')} alt="prescription" />
                                    </div>
                                    <div className={styles.iconsList}>
                                        <img src={delete1} alt="prescription" />
                                        <img src={view} alt="prescription" />
                                        <img src={download} alt="prescription" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        );
                    })
                }
            </Swiper>  
        </div>                      
    </div>
    )
}
