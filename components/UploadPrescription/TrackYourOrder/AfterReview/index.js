import React, { Component } from 'react';
import styles from './ArTracktOrder.module.scss';
import bifac from '../../../../assets/images/product-1.png';
import dustbin from '../../../../assets/images/delete.png';
import blue from '../../../../assets/images/blue-circle.png';
import percentage from '../../../../assets/images/percentage-icon.png';
import OrderSummary from '../../OrderSummary/index';
import AttachedPrescriptions from '../../Attached Prescriptions/index';

export default function ArTracktOrder(){
           const medicineList = [
            {
                img: bifac,
                img_dust: dustbin,
                img_blue: blue,
                usage: "Diabetes",
                tablet: "Bifilac Tablets",
                manufacturer: "Natures Velvet Lifecare",
                price: '150',
                strike_out: "200",
            },
            {
                img: bifac,
                img_dust: dustbin,
                img_blue: blue,
                usage: "Diabetes",
                tablet: "Bifilac Tablets",
                manufacturer: "Natures Velvet Lifecare",
                price: '150',
                strike_out: "200"
            },
            {
                img: bifac,
                img_dust: dustbin,
                img_blue: blue,
                usage: "Diabetes",
                tablet: "Bifilac Tablets",
                manufacturer: "Natures Velvet Lifecare",
                price: '150',
                strike_out: "200"
            }
        ]
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className={`col-md-7 ${styles.MedList__container}`}>
                        <div className={`col-md-12 ${styles.medList_top_header} d-flex`}>
                            <p className={styles.Med_orderID}>ORDER ID :<span> #34324234324</span></p>
                            <p className={styles.Med_orderDate}>Ordered on 02/09/2020</p>
                        </div>
                        <p className={styles.medList__headertext}>Medicine List</p>
                        {
                            medicineList.map(med_list =>
                                <div className={styles.medlist_overall_contain}>
                                    <div className={`col-md-12 ${styles.medicine_inner_section}`}>
                                        <div className={styles.medcineList_left_sec}>
                                            <div className={styles.bifac_img}>
                                                <img src={med_list.img} alt="Medicine image" className={styles.bifacmed_img} />
                                            </div>
                                            <div className={styles.medList_section}>
                                                <p className={styles.tablet_usage}>{med_list.usage}</p>
                                                <div className={`${styles.tablet__name_sec} d-flex`}>
                                                    <p className={styles.tablet_name}>{med_list.tablet}</p>
                                                    <img src={blue} alt="blue-color" className={styles.blue_circle_rx}/>
                                                </div>
                                                <p className={styles.manufacturer_name}>Manufacturer:{med_list.manufacturer}</p>
                                                <div className={styles.medicine_list_button}>
                                                    <button className={styles.medicine_minus}>-</button>
                                                    <p className={styles.medice_value}>1</p>
                                                    <button className={styles.medicine_plus}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.price__dust} d-flex`}>
                                            <div className={styles.dustbin_container}>
                                                <img src={med_list.img_dust} alt="dustbin image" className={styles.dustbin_image} />
                                            </div>
                                            <div className={`${styles.price__list_section} d-flex`}>
                                                <div className={styles.original_price}><p>₹{med_list.price}</p></div>
                                                <div className={styles.strike_price}><p>MRP₹{med_list.strike_out}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.medlist_border_container}>
                                        <div className={styles.medlist_border}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className={`col-md-4 ${styles.medList__summary__container}`}>
                        <OrderSummary ArOrder={true}/>
                        <div className={styles.md_dotteddown_container}>
                            <div className={`${styles.md_dotted_inner} d-flex`}>
                                <img src={percentage} alt="percentage Image" className={styles.percentage_icon}/>
                                <p className={styles.apply_coupons}> APPLY COUPONS</p>
                            </div>
                            <div className={`${styles.apply_code_container} d-flex`}>
                                <input type="text" name="coupon" className={styles.apply_code_input} placeholder="Apply your coupon code here"/>
                                <button className={styles.apply__code_btn}>APPLY CODE</button>
                            </div>
                        </div>
                        <AttachedPrescriptions/>
                </div>
            </div>
        </div>
        </>
        )
}
