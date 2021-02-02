import React from 'react';
import mobik from '../../../../assets/images/mobiwik.png';
import paytm from '../../../../assets/images/payment.png';
import styles from './Wallets.module.scss';

export default function Wallets(){
        return (
            <div className={styles.wallets}>
                <div className="btn-group">
                    <div className={styles.wallet_payments}>
                        <div className={styles.wallet_payment}>
                            <input type="radio" name="payments" id="paytm" autocomplete="off" checked/>
                            <div>
                                <img className={styles.payment_img} src={paytm} alt="paytm"/>
                            </div>
                            <div className={styles.paytm_text}>
                                <label htmlFor="paytm" className="toggle">Paytm</label>
                            </div>
                            <p>Link</p>
                        </div>
                        <div className={styles.wallet_payment}>
                            <input type="radio" name="payments" id="amazon" autocomplete="off"/> 
                            <div className={styles.amazon_section}>
                                <svg width="61" height="30" viewBox="0 0 61 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="3" width="61" height="33" rx="5" fill="#F99115"/>
                                    <path d="M15 16.5148C15.1167 16.3015 15.2637 16.266 15.492 16.3879C16.0195 16.6723 16.5368 16.9668 17.0744 17.2359C19.1387 18.2719 21.2943 19.0437 23.5362 19.5871C24.5962 19.841 25.6613 20.0441 26.7417 20.1863C28.3393 20.3996 29.9472 20.491 31.56 20.4504C32.4426 20.4301 33.3251 20.359 34.2026 20.2574C37.0632 19.9172 39.8274 19.2012 42.4851 18.084C42.6322 18.023 42.7844 17.9824 42.9467 18.023C43.2865 18.1144 43.4031 18.4801 43.1546 18.7289C43.0126 18.8711 42.8351 18.9879 42.6677 19.1047C41.1106 20.1762 39.4115 20.9531 37.616 21.5371C36.3683 21.9383 35.1003 22.2379 33.8069 22.4308C32.9143 22.5629 32.0115 22.6543 31.1086 22.6746C31.0681 22.6746 31.0224 22.6848 30.9818 22.6898H29.9116C29.8711 22.6848 29.8254 22.6746 29.7848 22.6746C29.6023 22.6644 29.4197 22.6594 29.2421 22.6543C28.385 22.6187 27.5329 22.5223 26.6859 22.3851C25.2961 22.1566 23.9368 21.8062 22.608 21.3238C19.864 20.3285 17.4041 18.8558 15.2232 16.9058C15.1319 16.8246 15.071 16.7129 15 16.6164V16.5148ZM46 16.3574C45.9493 16.1035 45.7565 16.007 45.5384 15.9359C45.1936 15.8191 44.8334 15.7683 44.4733 15.7379C43.8089 15.682 43.1445 15.7125 42.4851 15.8344C41.7598 15.9715 41.07 16.2051 40.4563 16.6265C40.3853 16.6773 40.3143 16.7332 40.2687 16.8043C40.2331 16.8601 40.223 16.9465 40.2433 17.0074C40.2636 17.0836 40.3498 17.1039 40.4259 17.0988C40.4614 17.0988 40.502 17.0988 40.5375 17.0937C40.9331 17.0531 41.3236 17.0074 41.7192 16.9668C42.2974 16.9109 42.8807 16.8754 43.4589 16.9211C43.7024 16.9363 43.9509 16.9922 44.1893 17.0582C44.448 17.1293 44.5646 17.3223 44.5748 17.5863C44.5951 17.9926 44.5038 18.3836 44.3972 18.7695C44.1893 19.5515 43.8901 20.3082 43.5959 21.0598C43.5756 21.1105 43.5553 21.1613 43.5452 21.2121C43.5198 21.3594 43.606 21.4558 43.7531 21.4203C43.8393 21.4 43.9357 21.3543 43.9966 21.2933C44.2197 21.075 44.448 20.8566 44.6407 20.6129C45.2899 19.7801 45.6703 18.8203 45.8935 17.7894C45.9341 17.6066 45.9645 17.4187 46 17.2359V16.3574Z" fill="white"/>
                                </svg>
                            </div>
                            <div className={styles.paytm_text}>
                                <label htmlFor="amazon" id="amazon-label" className="toggle">Amazon Pay</label>
                            </div>
                            <p>₹100</p>
                        </div>
                        <div className={styles.wallet_payment}>
                            <input type="radio" name="payments" id="mobik" autocomplete="off"/>
                            <div>
                                <img className={styles.mobik_img} src={mobik} alt="mobik"/> 
                            </div>
                            <div className={styles.paytm_text}>
                                <label htmlFor="mobik" id="mobik-label" className="toggle">Mobikwik</label>
                            </div>
                            <p>Link</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}
