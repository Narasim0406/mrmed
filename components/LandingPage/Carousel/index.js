import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useRouter} from 'next/router';


import styles from './Carousel.module.scss'


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



function Carousel(){
        const router = useRouter();
        return (
            <>
                <Swiper className={styles.carouselAlign}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide className={styles.carouselBackground}>
                        <div className="row">
                            <div className="offset-1">
                                <img className={styles.gaurantee} src={'/gaurentee.png'} />
                                <div className={styles.carouselTitle}>
                                    <b>Life Saving Medicines At <br/> Affordable Prices</b>
                                    <br/>
                                    <span>MrMed delivers affordable medicines at your door step</span>
                                </div>
                                {/* <NavLink to="/dashboard/shopProduct"> */}
                                    <button onClick={() => router.push('/ShopProductComponent')} className={styles.btnShop}>VIEW MEDICINE</button>
                                {/* </NavLink> */}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.carouselBackground}></SwiperSlide>
                    <SwiperSlide className={styles.carouselBackground}></SwiperSlide>
                </Swiper>
                <div className="row">
                    <div className="col-md-4">
                        <img className={styles.accessImg} src={'/accessability.png'} />
                        <div className={styles.textPosition}>
                            <b>Accessibility</b>
                        </div>
                    </div>
                    <div className="col-md-4">  
                        <img className={styles.accessImg} src={'/afford.png'} />
                        <div className={styles.textPosition}>
                            <b>Affordability</b>
                        </div>
                    </div>
                    <div className="col-md-4">          
                        <img className={styles.accessImg} src={'/relaiability.png'} />
                        <div className={styles.textPosition}>
                            <b>Reliability</b>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default Carousel;