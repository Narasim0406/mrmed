import React from 'react'

import styles from './CominSoon.module.scss'

const ComingSoonComponent = () => {
    return(
        <div className={styles.coming_soon}>
            <div className={styles.coming_header}>
                    <img src={'/mr_med_logo.png'} />
                    <ul>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
            </div>
            <div className={styles.coming_content}>
                <div className={styles.coming_content_img}>
                    <img src={'/Medicine-amico 1.png'} />
                </div>
                <div className={styles.coming_content_text}>
                    <b>Coming Soon</b>
                    <br></br>
                    <span>We are building our website. Stay Tuned!</span>
                    <div className={styles.social_icons}>
                        <img src={'/fb.png'}/>
                        <img src={'/tr.png'}/>
                        <img src={'/insta.png'}/>
                        <img src={'/lin.png'}/>
                        <img src={'/yt.png'}/>
                    </div>
                </div>
            </div>
            <div className={styles.coming_terms}>
                <span>Copyright © 2021 Eazymed Technologies Private Limited</span>
            </div>
        </div>
    );
}

export default ComingSoonComponent;