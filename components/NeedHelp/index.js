import React from 'react';
import Faq from './Faq';
import styles from './NeedHelp.module.scss';

function NeedHelp() {
    return (
        <div className="container">
             <div className={`col-md-12 ${styles.indication}`}>
                <br/>
                <span onClick={() => router.push('/')}>Home</span> <span>&gt; Need Help</span>
                <br/>
                <b>Help</b>
                <hr/>
            </div>
            <div className="d-flex">
                <div className={styles.helpBorder}>
                <div className="col-md-5 w-100">
                    <div className={styles.helpHeader}>
                        <p className={styles.helpHead}>We’re happy to Assist you.</p>
                        <p className={styles.helpSub}>Please provide details to reach you.</p>
                    </div>
                    <div>
                        <form>
                            <div className={styles.inputContainer}>
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter Here"/>
                            </div>
                            <div className={styles.inputContainer}>
                                <label>Email ID</label>
                                <input type="text" placeholder="Eg:asdg@domain.com"/>
                            </div>
                            <div className={styles.inputContainer}>
                                <label>Phone Number</label>
                                <input type="text" placeholder="Enter your mobile number"/>
                            </div>
                            <div className={styles.areaContainer}>
                                <label>Description</label>
                                <textarea rows="4" cols="27" placeholder="Enter your message here"/>
                            </div>
                            <button className={styles.helpBtn}>submit</button>
                        </form>
                    </div>
                </div>
                </div>
                <div className="col-md-7">
                    <Faq/>
                </div>
            </div>
        </div>
    )
}

export default NeedHelp
