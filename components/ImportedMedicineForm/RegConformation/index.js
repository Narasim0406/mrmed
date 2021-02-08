import React, { Component } from 'react';
// import phonering from '/phone-ring.png';
// import cancel from '/cancel-icon.png';
import styles from './RegConformation.module.scss';
import { Modal} from 'reactstrap';
import {useRouter} from 'next/router';

export default function RegConformation(props){
      let {modal,toggle} = props;
      const router = useRouter();
      return (
         <Modal isOpen={modal} toggle={toggle} className={styles.modals}>
            <div className={`row ${styles.Reg_maincontainer} d-flex justify-content-center`}>
               <div className={styles.RegConfirmMain}>
                  <div className={`${styles.contact_mr} d-flex justify-content-end`}>
                     <img className={styles.cancelImg} onClick={toggle} src={"/cancel-icon.png"} alt="cancel" />
                  </div>
                  <div className={`${styles.phone_ring_sec} d-flex justify-content-center`}>
                     <img className={styles.paymentSuccessImg} src={"/phone-ring.png"} alt="success" />
                  </div>
                  <div className={`${styles.mr_med_lower} d-flex`}>
                     <div className={`${styles.contact_text} d-flex justify-content-center`}>
                        <p className={styles.mr_medcontact}>our mr.Med representative will <br />contact you shortly</p>
                        <p className={styles.enrolling_section}>Thank you for enrolling to our personal assistance program</p>
                     </div>
                     <div className={styles.explore_med}>
                        <button onClick={() => router.push('/ShopProductComponent')} className={styles.explore_medBtn}>EXPLORE MEDICINE</button>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      )
}