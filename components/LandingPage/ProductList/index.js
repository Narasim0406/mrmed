import React, { Component , useState} from 'react'

import styles from './ProductList.module.scss';
import {useRouter} from 'next/router';

function ProductList(){
    const [list,setList] = useState(['All','Diabetes','Cancer','HIV','Osteoporosis','Arthiritis']);
    const [listStyle,setListStyle] = useState([true,false,false,false,false,false]);
    const router = useRouter();
    const [products,setProducts] = useState([
        {
        speciality : 'Diabetics',
        quantity : '10 Tablets',
        name : 'Bifilac Tablets',
        company : 'Natures Velvet Lifecare',
        actualPrice : '200',
        discountPrice : '150'
        },
        {
            speciality : 'Diabetics',
            quantity : '10 Tablets',
            name : 'Bifilac Tablets',
            company : 'Natures Velvet Lifecare',
            actualPrice : '200',
            discountPrice : '150'
        },
        {
            speciality : 'Diabetics',
            quantity : '10 Tablets',
            name : 'Bifilac Tablets',
            company : 'Natures Velvet Lifecare',
            actualPrice : '200',
            discountPrice : '150'
        },
        {
            speciality : 'Diabetics',
            quantity : '10 Tablets',
            name : 'Bifilac Tablets',
            company : 'Natures Velvet Lifecare',
            actualPrice : '200',
            discountPrice : '150'
        }
    ] );
        return (
            <div>
                <div className={styles.chronic}>
                    <b>Shop by Chronic Diseases</b>
                </div>
                <ul className={styles.landingList}>
                    {list.map((value,index)=>{
                        return(
                            <li key={index} className={listStyle[index] ? `${styles.activeList}` : `${styles.inActiveList}`}>{value}</li>
                        );
                    })}
                </ul>
                <div className="row">
                    {products.map((value,index)=>{
                        return(
                            <div className="col-md-3" key={index}>
                                <div className="bottom">
                                    {/* <NavLink id="nav-link" to="/dashboard/singleProduct"> */}
                                        <div className={styles.image}>
                                            <img src={require('../../../assets/images/product-3.png')} />  
                                        </div> 
                                    {/* </NavLink> */}
                                    <div className={styles.category}>
                                        <span>{value.speciality}</span>
                                        <div className={styles.right}>
                                            <span>{value.quantity}</span>
                                        </div>
                                    </div>
                                    <b className={styles.name}>{value.name}</b>
                                    <br/>
                                    <span className={styles.category}>Manufacturer: {value.company}</span>
                                    <hr/>
                                    <b className={styles.discountPrice}>&#8377; {value.discountPrice}</b>
                                    <span className={styles.actualPrice}>MRP &#8377; {value.actualPrice}</span>
                                    <div className={styles.right}>
                                        <button className={styles.btnArrow}><img src={require('../../../assets/images/arrow.png')}/></button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.view}>
                    {/* <NavLink id="nav-link" to="/dashboard/shopProduct"> */}
                        <button onClick={() => router.push('/ShopProductComponent')} className={styles.btnView}>VIEW MORE</button>
                    {/* </NavLink> */}
                </div>
            </div>       
        );
    }

export default ProductList;