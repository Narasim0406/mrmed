import React, { useState} from 'react'
import mainlogo from '../../../assets/images/logo.png';
import carouselImg from '../../../assets/images/carousel-tablets.png';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './CarouselForAll.module.scss';

SwiperCore.use([Pagination, Scrollbar, A11y]);

export default function CarouselForAll(){
    const [loginCarouselList,setLoginCarouselList] = useState([
        {
            id: '1',
            img: ''
        },
        {
            id: '2',
            img: ''
        },
        {
            id: '3',
            img: ''
        }
    ]);
    return (
            <>
                <div className="row">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            loginCarouselList.map((login,ind) => {
                                return (
                                    <SwiperSlide key={ind}>
                                        <div className={`col-md-11 ${styles.mrmed_maincontainer}`}>
                                            <div className={`${styles.mr_med_logo} d-flex align-items-center justify-content-end`}>
                                                <img className={`${styles.logo_img} object-fit-contain`} src={mainlogo} alt="cancel" />
                                            </div>
                                            <div className="row">
                                                <div className={`col-md-10 ${styles.mr_med_carinner} d-flex`}>
                                                    <div className={`${styles.mr_med_tablets} d-flex justify-content-center align-items-center`}>
                                                        <img className="caro_img object-fit-contain" src={carouselImg} alt="success" />
                                                    </div>
                                                    <p className={styles.now_medicine}>Know your medicine</p>
                                            
                                                    <p className={styles.mr_med_foottext}>Lorem ipsum is a placeholder text commonly used to demonstrate the visual<br /> form of a document </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </>
        )
}
