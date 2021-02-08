import React, { useState, useEffect } from 'react';
// import delete1 from  '/delete1.png';
// import view from '/view.png';
// import download from '/download.png';
// import tick from '/tickmark.png';
import SwiperCore, { Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector} from 'react-redux'
import styles from './AttachedPrescription.module.scss';

SwiperCore.use([ Pagination, Scrollbar, A11y]);

export default function AttachedPrescription(){
    const [prescriptionsList,setPrescriptionsList] = useState([]);
    const attachedPrescription = useSelector(state => state.prescription)
    useEffect(()=>{
        setPrescriptionsList(attachedPrescription.uploadPrescription)
    })
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
                    prescriptionsList && prescriptionsList.length>0?prescriptionsList.map((prescriptions, ind) => {
                    return (
                        <SwiperSlide>
                            <div className={styles.prescriptionAttachContainer}>
                                
                                <div className={styles.attachedPrescription1}>
                                    <div className={styles.prescriptionTickmark}>
                                        <img src={"/tickmark.png"} alt="tickmark" />
                                    </div>
                                    <div className={styles.prescriptionImage}>
                                        <img src={prescriptions.url} alt="prescription" />
                                    </div>
                                    <div className={styles.iconsList}>
                                        <img src={"/delete1.png"} alt="prescription" />
                                        <img src={"/view.png"} alt="prescription" />
                                        <img src={"/download.png"} alt="prescription" />
                                    </div>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                        );
                    }):""
                }
            </Swiper>  
        </div>                      
    </div>
    )
}
