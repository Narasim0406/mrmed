import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
import { Popover, PopoverBody } from "reactstrap";

import styles from './Details.module.scss';

function Details(){
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
            <div>
                <div className={styles.prescription}>
                    <img src={require('../../../../assets/images/prescription-1.png')} />
                    <span>Presciption Required</span>
                </div>
                <div className={styles.productTitle}>
                    <b>Bifilac Capsule</b>
                </div>
                {/* <div className={styles.rating}>
                    <img src={require('../../../../assets/images/rating-star.png')} />
                    <span className={styles.ratingNumber}>4.4</span>
                </div> */}
                <div className={styles.manufacturer}>
                    <span className={styles.composition}>Manufacturer</span>
                    <br/>
                    <span className={styles.productMg}>Natures Velvet Lifecare</span>
                </div>
                <div className={styles.specification}>
                    <span className={styles.composition}>Salt Composition</span>
                    <br/>
                    <span className={styles.productMg}>Rifaximin (550mg)</span>
                </div>
                <b className={styles.pack}>10 Tablets strip - 10 caps</b>
                <br/>
                {/* <NavLink to="/dashboard/papRegister"> */}
                    <button className={styles.btnPap}><b>PAP AVAILABLE</b></button>
                    <img id={"Popover-" + 2} style={{cursor:'pointer'}} onClick={toggle} src={require('../../../../assets/images/popi.png')} alt="i"/>
                {/* </NavLink> */}
                <Popover className={styles.my_custom_popover} placement="bottom" isOpen={popoverOpen}  target="Popover-2" toggle={toggle}>
                    <PopoverBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam adipiscing.</PopoverBody>
                </Popover>
            </div>
        );
}

export default Details;