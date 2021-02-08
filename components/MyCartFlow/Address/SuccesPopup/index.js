import React from 'react';
// import stick from '/successTick.png';
// import cancel from '/closee.png';
import { Modal } from 'reactstrap';
import styles from './SuccessPopup.module.scss';
import {useRouter} from 'next/router';


export default function SuccessPopup(props){
   const router = useRouter();
      let {modal,toggle} = props;
      return (
         <Modal isOpen={modal} toggle={toggle} className={styles.modals}>
            <div className={`row ${styles.order_MainContainer} d-flex justify-content-center`}>
               <div className={styles.RegConfirmMain}>
                  <div className={`${styles.contact_mr} d-flex justify-content-end`}>
                     <img className={styles.cancelImg} onClick={toggle} src={'/closee.png'} alt="cancel" />
                  </div>
                  <div className={`${styles.order_sec} d-flex justify-content-center`}>
                     <img className={styles.orderSuccessImg} src={'/successTick.png'} alt="success" />
                  </div>
                  <div className={`${styles.mr_med_lower} d-flex`}>
                     <div className={styles.contact_text}>
                        <p className={styles.mr_medcontact}>Order Successfully Placed!</p>
                        <p className={styles.enrolling_section}>prescription is being reviewed.</p>
                     </div>
                     <div className={styles.explore_med}>
                        <button onClick={() => router.push('/ShopProductComponent')} className={styles.explore_medBtn}>Continue Shopping</button>
                        <button onClick={() => router.push('/Accounts/Order')} className={styles.explore_medBtn}>My Orders</button>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      )
}