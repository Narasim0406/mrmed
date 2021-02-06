import React from 'react';

import styles from './Footer.module.scss';
import {useRouter} from 'next/router';

function Footer(){
    const router = useRouter();
        return(
            <div className={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={'/footer-logo.png'}/>
                            <br></br>
                            <p>
                                MrMed is the first choice of Indian Online Pharmacy for many satisfied customers for buy
                                medicines online with discount for life-threatening diseases like cancer, HIV/AIDS, Hepatitis and
                                many others, everyone knows how expensive medical treatment is &amp; with the increasing cost of
                                medicines it has become unaffordable to buy essential medicines.
                            </p>
                            <div className={styles.footerIconAlign}>
                                <img src={'/facebook.png'}/>
                                <img src={'/twitter.png'}/>
                                <img src={'/instagram.png'}/>
                                <img src={'/linkedin.png'}/>
                                <img src={'/youtube.png'}/>
                            </div>                    
                        </div>
                        <div className="col-md-7 offset-md-1">
                            <div className="container">
                                <div className={`row ${styles.footerRight}`}>
                                    <div className="col-md-4">
                                        <b>COMPANY</b>
                                        <span>About Us</span>
                                        <span onClick={() => router.push('/Career')}>Careers</span>
                                        <span>Partner with mrMED</span> 
                                        <span onClick={() => router.push('/NeedHelps')}>FAQ</span> 
                                        <span onClick={() => router.push('/Contact')}>Contact Us</span>
                                    </div>
                                    <div className="col-md-4">
                                        <b>Speciality Medicines</b>
                                        <span>Personal care</span>
                                        <span>Diabetics</span>
                                        <span>Fitness &amp;  Supplement</span>
                                        <span>Health conditions</span>
                                        <span>Health care devices</span>
                                        <span>Corona virus prevention</span>
                                    </div>
                                    <div className="col-md-4">
                                        <b>Policy Info</b>
                                        <span>Editorial Policy</span>
                                        <span>Privacy Policy</span>
                                        <span>Terms and Conditions</span>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <hr className={styles.footerLine}/>
                    <div className={styles.copyright}>
                        <span>Copyright © 2021 Eazymed Technologies Private Limited</span>
                        {/* <div className={styles.terms}>
                            <b>Privacy / Terms &#38; Conditions / Contact Us</b>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
export default Footer;