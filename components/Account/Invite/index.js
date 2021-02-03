import React from 'react';

import styles from './InviteComponent.module.scss';

function InviteComponent(){
    return(
        <div className={styles.trackBorder}>
            <div className={styles.invite}>
                <b>Invite Friends</b>
            </div>
            <div className={styles.inviteText}>
                <span>Start Invite your friends and earn exciting offer Coupons. Thanks for the support!</span>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <b className={styles.inviteBy}>Invite by Email</b>
                    </div>
                    <div className={styles.inviteField}>
                        <span>Enter Email Address</span>
                    </div>
                    <input className={styles.inviteInput} type="text" placeholder="Enter Here" />
                </div>
                <div className="col-md-6">
                    <div>
                        <b className={styles.inviteBy}>Invite by Link</b>
                    </div>
                    <div className={styles.inviteField}>
                        <span>Short URL:</span>
                    </div>
                    <input className={styles.inviteInput} type="text" placeholder="Enter Here" />
                </div>
                <div className="col-md-6">
                    <div className={styles.inviteField}>
                        <span>Message</span>
                    </div>
                    <textarea className={styles.inviteTextArea} placeholder="Enter Here" />
                </div>
                <div className="col-md-6">
                    <div className={styles.inviteField}>
                        <span>Invite by Social</span>
                    </div>
                    <div className={styles.socialIcon}>
                        <img src={'/facebook.png'}/>
                        <img src={'/twitter.png'}/>
                        <img src={'/instagram.png'}/>
                        <img src={'/linkedin.png'}/>
                        <img src={'/youtube.png'}/>
                    </div>
                </div>
                </div>
                <button className={styles.btnInvite}><b>SEND INVITE</b></button>
            </div>
        );
}

export default InviteComponent;