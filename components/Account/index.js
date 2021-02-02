import React from 'react';
import styles from './Account.module.scss';
import {useRouter} from 'next/router';
export default function Account(){
    const router = useRouter();
        return(
            <div className={styles.hideX}>
                <div className="container">
                    <div className="row">
                        <div className={`col-md-12 ${styles.myAccount} content`}>
                            <br/>
                            <span onClick={() => router.push('/')}>Home</span><span>&gt; My Accuount</span>
                            <br/>
                            <b>My Account Details</b>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}