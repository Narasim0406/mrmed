import React from 'react';
import styles from './AddressCard.module.scss';

export default function AddressCard(props){
    const btnStyle = { 
        width: '206px',
        height: '32px',
        border: '1px solid #6054E5',
        boxSizing: 'border-box',
        borderRadius: '2px',
        outline: 'none',
        backgroundColor: '#fff',
        fontWeight: '500',
        fontSize: '13px',
        lineHeight: '15px',
        textTransform: 'uppercase',
        color: '#6054E5'};
    return (
        <div className="container col-md-6 mb-3">
             {console.log("sadfafgsggh", props)}
            <div className={`card ${styles.card}`} style={{"width": "18rem"}}>
                <div className="card-body">
                <div className={styles.cardTop}>
                        <h5 className={styles.cardTitle}>{props.address.addressName}</h5>
                        <p className={styles.adType}>{props.address.type==0?"Home":props.address.type==0?"Office":"Other"}</p>
                    </div>
                    <p className={styles.adPn}>{props.address.addressMobile}</p>
                    <p className={styles.cardText}>{props.address.address}.</p>
                    <button 
                    style={btnStyle}
                    className={styles['sp_btn']}>Select Address</button>
                </div>
            </div>
        </div>
    )
}