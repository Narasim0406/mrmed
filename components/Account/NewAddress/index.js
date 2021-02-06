import React,{useState} from 'react';
import styles from './NewAddress.module.scss';
import Link from 'next/link';

function NewAddress() {
    const [addressType, setAddressType] = useState(0);
    const handleAddressType0 = () =>{
        setAddressType(0);
    }
    const handleAddressType1 = () =>{
        setAddressType(1);
    }
    const handleAddressType2 = () =>{
        setAddressType(2);
    }
    return (
        <div className="container">
                <div className="row">
                    <div className={`col-md-12 ${styles.indication}`}>
                        <br/>
                        <span onClick={() => router.push('/')}>Home</span><span>&gt; My Accuount &gt; Profile &gt; New Address</span>
                        <br/>
                        <b>New Address Details</b>
                        <hr/>
                    </div>
                </div>
             <form>
                <div className="row">
                    <div className="col-md-4 form-group mb-3">
                        <label for="name" className="form-label">Email address</label>
                        <input type="name" className="form-control" id="name" placeholder="Name"/>
                    </div>
                    <div className="col-md-4 form-group mb-3">
                        <label for="phoneNumber" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 form-group mb-3">
                        <label for="address" className="form-label">Address</label>
                        <textarea className="form-control" id="address" rows="3"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 form-group mb-3">
                        <label for="city" className="form-label">City</label>
                        <input type="city" className="form-control" id="city" placeholder="Name"/>
                    </div>
                    <div className={`col-md-4 form-group mb-3 ${styles.stateCol}`}>
                        <label for="state" className="form-label">State</label>
                        <select className={styles.formSelect} id="state">
                            <option selected>State</option>
                            <option value="1">TamilNadu</option>
                            <option value="2">Karnataka</option>
                            <option value="3">Telungana</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div class="col-md-4 form-group mb-3">
                        <label for="pincode" className="form-label">Pin Code</label>
                        <input type="text" className="form-control" id="pincode" placeholder="Pin Code"/>
                    </div>
                    <div class="col-md-4 form-group mb-3">
                        <label for="landmark" className="form-label">Landmark</label>
                        <input type="text" className="form-control" id="landmark" placeholder="Landmark"/>
                    </div>
                </div>
                <div className="row">
                    <div className={`btn-group col-md-12 form-group mb-3 mt-3 ${styles.place}`}>
                        <p>Type of Place</p>
                    <div>
                    <label className={`toggle-btn ${styles.toggleBtn} ${addressType===0 ? styles.toggleBack :""}`} onClick={handleAddressType0}>Home</label>
                    <input type="radio" name="options" id={styles.option} autocomplete="off"/>
                    <label className={`toggle-btn ${styles.toggleBtn} ${addressType===1 ? styles.toggleBack :""}`} onClick={handleAddressType1}>Office</label>
                    <input type="radio" name="options" id={styles.option} autocomplete="off"/> 
                    <label className={`toggle-btn ${styles.toggleBtn} ${addressType===2 ? styles.toggleBack:""}`} onClick={handleAddressType2}>Other</label>
                    <input type="radio" name="options" id={styles.option} autocomplete="off"/> 
                </div>
            </div>
        </div>
        <div className="row">
            <div class="col-md-5 form-group mb-3">
                <button className={styles.save}><Link href="/Orders/OrderSuccessFull">save & place order</Link></button>
            </div>
        </div>
    </form>
        </div>
    )
}

export default NewAddress
