import React, { useState } from 'react';
// import tick from '/tickmark.png';
import DeliveryDetails from './DeliveryDetails/index';
import styles from './OrderSuccess.module.scss';
import AttachedPrescription from './AttachedDescription/index';
import SuccessPop from '../Address/SuccesPopup/index';

export default function OrderSuccess(){
    const [modal, setModal] = useState(true);
    const toggle = () => {
        setModal(!modal);
    }
        return (
            <div className="container">
                <div className={`col-md-12 ${styles.indication}`}>
                    <br/>
                    <span>Home &gt; Upload Prescription</span>
                    <br/>
                    <b>Upload Prescription</b>
                    <hr/>
                </div>
                <div className="row">
                    <div className={`col-md-12 ${styles.orderSuccess}`}>
                        <img src={"/tickmark.png"} alt="tick"/>
                        <p className={styles.successMsg}>Order Successfully Placed</p>
                        <h3 className={styles.orderReview}>Price match and description is being reviewed</h3>
                    </div>
                    <div className={styles.successBorder}></div>
                    <div className={`col-md-12 ${styles.orderDetail}`}>
                        <h3 className={styles.orderId}>Order id : <span className="price">#34324234324</span></h3>
                        <p className={styles.orderMsg}>Your order is being processed by our team</p>
                    </div>
                    <div className={`col-md-12 ${styles.deliveryDetails}`}>
                        <DeliveryDetails/>
                    </div>
                    <div className={`col-md-12 ${styles.attachedPrescriptions}`}>
                        <AttachedPrescription/>
                    </div>
                    <div className={`${styles.btnContent} col-md-12 mt-5 mb-5`}>
                        <button className={styles.track_btn}>Track Order</button>
                    </div>
                </div>
                <SuccessPop modal={modal} toggle={toggle}/>
            </div>
        )
}
