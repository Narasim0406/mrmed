import React, { useState } from 'react';
import styles from './ChooseMedicine.module.scss';
import AttachedPrescriptions from '../Attached Prescriptions/index';
import CallPop from './CallPopup/index';
import {useRouter} from 'next/router';
import { connect, useDispatch, useSelector} from 'react-redux';
import { chooseMedicine } from '../../../actions';

function ChooseMedicine(props){
    const [choose,setChoose] = useState(1);
    const [modal,setModal] = useState(false);
    const [got,setGot] = useState("asperp");
    const router = useRouter();
    const [noDay, handleChange] = useState("");
    const dispatch = useDispatch();
    const prescription = useSelector((state) => state);
    const handleChoose1 = () => {
        setChoose(1);
        setGot("asperp");
    }
    const handleChoose2 = () => {
        setChoose(2);
        setGot("product");
        //router.push('/ShopProductComponent');
    }
    const handleChoose3 = async() => {
        setChoose(3);
        setGot("call");
        await dispatch(chooseMedicine("call"))
    }
    const toggle = () => {
        setModal(!modal);
    }
    const handleChangeNoDay = async(e) => {
        handleChange(e.target.value)
        await dispatch(chooseMedicine(e.target.value))
        console.log("jkljasdlfkjasdf", props)
    }
    const handleProd = () => {
        router.push({pathname:'/ShopProductComponent',query:{myCart:true}});
    }
    return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className={`col-md-6 Roboto ${styles.prescriptionHeader}`}>
                            2.Choose your Medicines Option
                        </div>
                    </div>
                    <div className={`row ${styles.boxContainer}`}>
                        <div className={`col-md-7 ${styles.prescriptionLeftBox}`}>
                            <div className={`col-md-12 ${styles.radioOption} mt-5`}>
                            <div className={styles.btn_radio}>
                                <input type="radio" id="radio-label-1" className={styles.custom_radio} name="pap" checked={choose===1 ? true:false}/>
                                <label onClick={handleChoose1} htmlFor="radio-label-1" className={styles.radio_label}></label>
                                <span>Order everything as per prescription</span>
                            </div>
                            { choose === 1 ?
                                <div className={`col-md- 12 ${styles.selectOptionInnerForm}`}>
                                    <label className={styles.dosageDurationLabel}>Duration of dosage</label>
                                    <input value={noDay} onChange={handleChangeNoDay} type='text' id='dosage-input' name='dosage-duration' placeholder="Enter number of days" className={styles.dosageInputBox} />
                                </div> : ""
                            }
                            <div className={styles.btn_radio}>
                                <input type="radio" id="radio-label-2" className={styles.custom_radio} name="pap" />
                                <label onClick={handleChoose2} htmlFor="radio-label-2" className={styles.radio_label}></label>
                                <span>Search and add medicines</span>
                            </div>
                            {
                                choose === 2 ? 
                                <div className={styles.searchMed}>
                                    <span>You will be directed to product page.</span>
                                </div> : ""
                            }
                            <div className={styles.btn_radio}>
                                <input type="radio" id="radio-label-3" className={styles.custom_radio} name="pap" />
                                <label onClick={handleChoose3} htmlFor="radio-label-3" className={styles.radio_label}></label>
                                <span>Ask MrMed to call</span>
                            </div>
                            {
                                //choose === 3 ?
                                // <div className={`row ${styles.callForm}`}>
                                //     <div className="col-md-6">
                                //         <div className={styles.profileField}>
                                //             <span>Full Name</span>
                                //         </div>
                                //         <input className={styles.profileInput} type="text" placeholder="Enter Name" />
                                //     </div>
                                //     <div className="col-md-6">
                                //         <div className={styles.profileField}>
                                //             <span>Mobile Number</span>
                                //         </div>
                                //         <input className={styles.profileInput} type="text" placeholder="Enter Number" />
                                //     </div>
                                //     <div className="col-md-12">
                                //         <div className={styles.profileField}>
                                //             <span>Reason</span>
                                //         </div>
                                //         <textarea className={styles.profileTextarea} placeholder="Enter the Reason" />
                                //     </div>
                                // </div> :""
                            }
                            </div>
                            <div className={styles.prescriptionProceedButton}>
                                <button onClick={choose !== 2 ? props.handleStep : handleProd} className={styles.proceedButton}>PROCEED</button>
                            </div>
                        </div>
                        <div className={`col-md-5 ${styles.attaches}`}>
                            <AttachedPrescriptions/>
                        </div>
                    </div>
                </div>
                <CallPop modal={modal} toggle={toggle}/>
            </div>
        )
}

const mapStateToProps = state => ({
    post: state
});

export default connect(mapStateToProps)(ChooseMedicine)