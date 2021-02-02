import React from 'react';
import cancel from '../../../assets/images/cancel.png';
import { Modal} from 'reactstrap';
import styles from './NeedSigin.module.scss';

export default function NeedSignIn(props){
        let {modal,toggle} = props;
        return (
        <>
              <Modal isOpen={modal} toggle={toggle} className={styles.modals}>
                <div className={styles.needSignin}>
                    <img onClick={toggle} className={styles.cancelImg} src={cancel} alt="cancel"/>
                    <div className={`row ${styles.ptMsg}`}>
                        <h3>Need To Sigin!</h3>
                    </div>
                    <div className="row">
                        <div className={styles.needSignInBtns}>
                            <button className={styles.cancelBtn} onClick={toggle}>Cancel</button>
                            {/* <Link to="/auth/signIn"> */}
                                <button className={styles.signinBtn}>SignIn</button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
              </Modal>
        </>
        )
}
