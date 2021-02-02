import React from 'react';

import styles from './ChangeNumberComponent.module.scss';

function ChangeNumberComponent(){
    return(
        <div className={styles.trackBorder}>
            <div className={styles.change}>
                <b>Change Your Number</b>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className={styles.changeField}>
                        <span>Enter New Mobile Number</span>
                    </div>
                    <input className={styles.changeInput} type="text" placeholder="Enter Here" />
                </div>
                <button className={styles.btnVerify}>VERIFY</button>
            </div>
        </div>
     );
}

export default ChangeNumberComponent;