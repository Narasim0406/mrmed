import React from 'react';
// import success from '/success.png';
// import cancel from '/cancel.png';
import { Modal} from 'reactstrap';
import styles from './PaymentSuccess.module.scss';

export default function PaymentSuccess(props){
        let {modal,toggle} = props;
        return (
        <>
              <Modal isOpen={modal} toggle={toggle} className={styles.payment_modal}>
                <div className={styles.payment_success}>
                    <img onClick={toggle} className={styles.cancel_img} src={"/cancel.png"} alt="cancel"/>
                    <div className="row">
                        <img className={styles.payment_success_img} src={"/success.png"} alt="success"/>
                    </div>
                    <div className={`row ${styles.pt_msg}`}>
                        <h3>Payment Successfull</h3>
                        <p className={styles.payment_msg}>Your Payment has been received</p>
                    </div>
                    <div className="row">
                        <div className={styles.track_your_order}>
                            <button className={styles.track_order_btn}>Track Your Order</button>
                        </div>
                    </div>
                </div>
              </Modal>
        </>
        )
}
