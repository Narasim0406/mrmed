import React from 'react';

import styles from './ProfileComponent.module.scss';
import Address from '../Address/index';

function ProfileComponent(){
    return(
            <div className={styles.trackBorder}>
                <div className={styles.personalDetail}>
                    <b>Personal Details</b>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.profileField}>
                            <span>Full Name</span>
                        </div>
                        <input className={styles.profileInput} type="text" placeholder="Enter Name" />
                    </div>
                    <div className="col-md-6">
                        <div className={styles.profileField}>
                            <span>Date of Birth</span>
                        </div>
                        <input className={styles.profileInput} type="text" placeholder="Enter Name" />
                    </div>
                    <div className="col-md-6">
                        <div className={styles.profileField}>
                            <span>Gender</span>
                        </div>
                        <input className={styles.profileInput} type="text" placeholder="Enter Name" />
                    </div>
                    <div className="col-md-6">
                        <div className={styles.profileField}>
                            <span>Blood Group</span>
                        </div>
                        <input className={styles.profileInput} type="text" placeholder="Enter Name" />
                    </div>
                </div>
                <button className={styles.btnSave}><b>SAVE</b></button>
                <Address/>
            </div>
        );
}

export default ProfileComponent;