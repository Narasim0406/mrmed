import React, {useState} from 'react';
import AddressCard from '../AddressCard';
import styles from './AddressDetails.module.scss';
import {useRouter} from 'next/router';
import Link from 'next/link';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default function AddressDetails(){
    const [addressType, setAddressType] = useState(0);
    const [modal, setModal] = useState(false);
    const router = useRouter();
    const handleAddressType0 = () =>{
        setAddressType(0);
    }
    const handleAddressType1 = () =>{
        setAddressType(1);
    }
    const handleAddressType2 = () =>{
        setAddressType(2);
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [addressList,setAddressList] = useState([
        {
            name:'John Doe',
            type:'Home',
            phoneNumber:'+91 56182 16548',
            address:'12 Random street in random city Chennai, Tamil nadu - 600000',
        },
        {
            name:'John Doe',
            type:'Office',
            phoneNumber:'044 5468 3215',
            address:'12 Random street in random city Chennai, Tamil nadu - 600000',
        }
    ]);
        return (
            <div className={styles.addressDetails}>
                <h2>3.Address Details</h2>
                <div className="container">
                    <p>Saved Addrss Details</p>
                    <div className={`${styles.addressCards} col-md-12`}>
                        {
                            addressList.map((address,ind) => {
                                return(
                                    <>
                                        <AddressCard address={address}/>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col">
                        <div className={styles.addressItem}>
                            <div className={`${styles.deliverFlip} col-md-12`}>
                                <p>Deliver to new address</p>
                                <img  onClick={toggle} src={'/down.png'}/>
                            </div>
                        </div>
                        <Collapse className={styles.addForm} isOpen={isOpen}>
                                <p>Address Details</p>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <label for="name" className="form-label">Email address</label>
                                            <input type="name" className="form-control" id="name" placeholder="Name"/>
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label for="phoneNumber" className="form-label">Email address</label>
                                            <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group mb-3">
                                            <label for="address" className="form-label">Address</label>
                                            <textarea className="form-control" id="address" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <label for="city" className="form-label">City</label>
                                            <input type="city" className="form-control" id="city" placeholder="Name"/>
                                        </div>
                                        <div className={`col-md-6 form-group mb-3 ${styles.stateCol}`}>
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
                                        <div class="col-md-6 form-group mb-3">
                                            <label for="pincode" className="form-label">Pin Code</label>
                                            <input type="text" className="form-control" id="pincode" placeholder="Pin Code"/>
                                        </div>
                                        <div class="col-md-6 form-group mb-3">
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
                            </Collapse>
                    </div>
                </div>
            </div>
        )
}
