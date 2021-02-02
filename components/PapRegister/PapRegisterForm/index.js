import React, {useState} from 'react';
import RegConfirmation from '../../ImportedMedicineForm/RegConformation/index';
import styles from './PapForm.module.scss';
import {medplans_url} from '../../../apiVariables';

function PapForm(props){
    const [modal,setModal] = useState(false);
    const [papRegisterData,setPapRegisterData] = useState({
        userId: "23",
        name: "",
        phone: "",
        email: "",
        medicineDetails: "",
        quantity: "",
        callTime: "",
        message: "",
        status: 0,
    });
    const toggle = () => {
        setModal({modal:!modal});
    }
    const onChangeForm = (e) => {
        const {name , value} = e.target
        setPapRegisterData( prevState => ({
        ...prevState,
        [name] : value
        }))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        let url = `${medplans_url}/pap`;
        let data = papRegisterData;
        let res = await httpPostRequest(url,data);
        console.log(res);
        if(res.status === 200 ) {
            toggle();
        }
        setPapRegisterData({papRegisterData:{
                name:'',
                medicineDetails:'',
                phone:'',
                quantity:'',
                email:'',
                callTime:'',
                message:'',
        }});
    }
    const httpPostRequest = async(url, body) => {
        console.log(body)
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await result
    }
    return (
            <div className={styles.registerBox}>
                <div className={styles.patientRegister}>
                    <b>Register for Patient Assistance Programme</b>
                </div>
                <form onSubmit={handleSubmit} method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className={styles.inputField}>
                            <div className={styles.registerLabel}>
                                <span>Full Name</span>
                            </div>                              
                            <input name="name" 
                                   className={styles.registerField} 
                                   type="text" 
                                   placeholder="Enter here"
                                   value={papRegisterData['name']} 
                                   onChange={(e) => onChangeForm(e)}
                                   required/>
                        </div>
                        <div className={styles.inputField}>
                            <div className={styles.registerLabel}>
                                <span>Medicine Details</span>
                            </div>                              
                            <input name="medicine_details" 
                            className={styles.registerField} 
                            type="text" 
                            placeholder="Enter here" 
                            value={papRegisterData['medicineDetails']} 
                            onChange={(e) => onChangeForm(e)}
                            required/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.inputField}>
                            <div className={styles.registerLabel}>
                                <span>Phone Number</span>
                            </div>                              
                            <input name="phone" 
                            className={styles.registerField} 
                            type="text" 
                            placeholder="Enter here" 
                            value={papRegisterData['phone']} 
                            onChange={(e) => onChangeForm(e)}
                            required/>
                        </div>
                        <div className={styles.inputField}>
                            <div className={styles.registerLabel}>
                                <span>Quantity</span>
                                </div>                              
                            <input name="quantity" 
                            className={styles.registerField} 
                            type="text" 
                            placeholder="Enter here"
                            value={papRegisterData['quantity']} 
                            onChange={(e) => onChangeForm(e)}
                            required/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.inputField}>
                            <div className={styles.registerLabel}>
                                <span>Email</span>
                            </div>                              
                            <input name="email" 
                            className={styles.registerField} 
                             type="email" 
                             placeholder="Enter here" 
                             value={papRegisterData['email']} 
                             onChange={(e) => onChangeForm(e)}
                             required/>
                        </div>
                        <div className={styles.inputField}>
                            <div className={styles.registerLabel}>
                                <span>Preferable Call Time</span>
                            </div>                              
                            <input name="callTime" 
                            className={styles.registerField} 
                            type="text" 
                            value={papRegisterData['callTime']} 
                            onChange={(e) => onChangeForm(e)}
                            placeholder="Enter here" required/>
                        </div>
                    </div>
                </div>
                <div className={styles.inputField}>
                    <div className={styles.registerLabel}>
                        <span>Message</span>
                    </div>                              
                    <textarea name="message" 
                    className={styles.textField} 
                    type="text" 
                    value={papRegisterData['message']} 
                    onChange={(e) => onChangeForm(e)}
                    placeholder="Enter here" required/>
                </div>
                <button className={styles.btnRegister}><b>REGISTER</b></button>
                </form>
                <RegConfirmation modal={modal} toggle={toggle}/>
            </div>
        );
}

export default PapForm;