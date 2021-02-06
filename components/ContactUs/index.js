import React, { useState } from 'react'

import styles from './ContactUs.module.scss';

function ContactUs(){
    const [checkBox,setCheckBox] = useState([ {
        label : 'Yes',
        value : '0'
    },
    {
        label : 'No',
        value : '1'
    }]);
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <div className={styles.indication}>
                                <span>Home &gt; Contact Us</span>
                                <br/>
                                <b>Contact Us</b>
                                <hr/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.contact_box}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3>Contact</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <div className={styles.contact_info}>
                                            <img className={styles.num} src={"/call.png"} alt="mail"/>
                                            <div className={styles.contact_details}>
                                                <span>+91 65423 96325</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className={styles.contact_info}>
                                            <img className={styles.what} src={"/whatsapp-fab.png"} alt="WHAT"/>
                                            <div className={styles.contact_details}>
                                                <span>8939169999</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className={styles.contact_info}>
                                            <img className={styles.mail} src={"/mail.png"} alt="mail"/>
                                            <div className={styles.contact_details}>
                                                <span>support@mrmed.in</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className={styles.contact_box}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Get in Touch</h4>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles.contact_field}>
                                            <span>Full Name</span>
                                            <input 
                                                type="text"
                                                placeholder="Enter here"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles.contact_field}>
                                            <span>Phone Number</span>
                                            <input 
                                                type="text"
                                                placeholder="Enter here"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles.contact_field}>
                                            <span>Email Id</span>
                                            <input 
                                                type="text"
                                                placeholder="Enter here"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <span>Would you like to partner with us?</span>
                                            <div className={styles.btn_radio}>
                                                <input 
                                                    type="radio" 
                                                    id={styles.partner_label+1}
                                                    className="custom-radio"
                                                    name="partner" 
                                                    checked={true}
                                                    />
                                                <label for={styles.partner_label+1} className={styles.partner_label}></label>
                                                <span>Yes</span>
                                            </div>
                                            <div className={styles.btn_radio}>
                                                <input 
                                                    type="radio" 
                                                    id={styles.partner_label+2}
                                                    className="custom-radio"
                                                    name="partner" 
                                                    />
                                                <label for={styles.partner_label+2} className={styles.partner_label}></label>
                                                <span>No</span>
                                            </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={styles.contact_field}>
                                            <span>Message</span>
                                            <textarea 
                                                placeholder="Enter here"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <select className={styles.partner_dropdown}>           
                                                <option>Affiliate Marketing</option>
                                                <option>Partnerships</option>
                                                <option>Marketing</option>
                                                <option>Others</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button className={styles.btn_contact_send}>Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default ContactUs;