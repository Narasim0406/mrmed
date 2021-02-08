import React from 'react'
// import stick from '/success.png';
// import cancel from '/closee.png';
import styles from './PresPopup.module.scss';
import { Modal } from 'reactstrap';
import {useRouter} from 'next/router';
import { connect } from 'react-redux';
import axios from 'axios';
import { Component } from 'react';

const PresPopup = (props) => {
   const router = useRouter()
   return <MyClass {...props} router={router} />
 }

class MyClass extends Component {
   constructor(props) {
      super(props)
      this.state = {
        loc: props.router.query.loc,
        loaded: false
      };
    }
   componentDidMount() {
      console.log("sdfgsfghsfghfg", this.props)
   }
   
   render() {
   let {modal,toggle, router} = this.props;
   return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={styles.modals}>
            <div className={`row ${styles.order_MainContainer} d-flex justify-content-center`}>
               <div className={styles.RegConfirmMain}>
                  <div className={`${styles.contact_mr} d-flex justify-content-end`}>
                     {/* <img className={styles.cancelImg} onClick={toggle} src={"/closee.png"} alt="cancel" /> */}
                  </div>
                  <div className={`${styles.order_sec} d-flex justify-content-center`}>
                     <img className={styles.orderSuccessImg} src={"/success.png"} alt="success" />
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
}

const mapStateToProps = state => ({
   userDetail: state.auth.userDetails,
   chooseMedicines: state.chooseMedicines,
   prescription: state.prescription
 });
 
 export default connect(mapStateToProps)(PresPopup)
