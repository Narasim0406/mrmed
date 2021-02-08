import React from 'react'
// import stick from '/success.png';
// import cancel from '/closee.png';
import styles from './PresPopup.module.scss';
import { Modal } from 'reactstrap';
import {useRouter} from 'next/router';

export default function PresPopup(props) {
    let {modal,toggle} = props;
    const router = useRouter();

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={styles.modals}>
            <div className={`row ${styles.order_MainContainer} d-flex justify-content-center`}>
               <div className={styles.RegConfirmMain}>
                  <div className={`${styles.contact_mr} d-flex justify-content-end`}>
                     <img className={""} onClick={toggle} src={'/closee.png'} alt="cancel" />
                  </div>
                  <div className={`${styles.order_sec} d-flex justify-content-center`}>
                     <img className={""} src={'/success.png'} alt="success" />
                  </div>
                  <div className={`${styles.mr_med_lower} d-flex`}>
                     <div className={styles.contact_text}>
                        <p className={styles.mr_medcontact}>Thank You</p>
                        <p className={styles.enrolling_section}>We will reach you soon</p>
                     </div>
                     <div className={styles.explore_med}>
                        <button onClick={() => router.push('/ShopProductComponent')} className={styles.explore_medBtn}>Continue Shopping</button>
                        <button onClick={() => router.push('/Accounts/Order')} className={styles.explore_medBtn}>My Orders</button>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
        </div>
    )
}

