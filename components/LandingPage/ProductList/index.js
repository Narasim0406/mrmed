import React, { useState} from 'react'

import styles from './ProductList.module.scss';
import {useRouter} from 'next/router';

function ProductList(){
    const [diseases,setDiseases] = useState([
        {
            id:'1',
            type:'All',
            listStyle:true
        },
        {
            id:'2',
            type:'Diabetes',
            listStyle:false
        },
        {
            id:'3',
            type:'Cancer',
            listStyle:false
        },
        { 
            id:'4',
            type:'HIV',
            listStyle:false
        },
        {
            id:'5',
            type:'Osteoporosis',
            listStyle:false
        },
        {
            id:'6',
            type:'Arthiritis',
            listStyle:false
        }
    ]);
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
    const handleType = (value) => {
        const diseaseList = diseases.map((disease) => {
            if(disease.id === value.id){
                disease.listStyle=true;
            }else{
                disease.listStyle=false;
            }
            return disease;
        });
        setDiseases(diseaseList);
    }
        return (
            <div>
                <div className={styles.chronic}>
                    <b>Life Saving Medicines</b>
                </div>
                <ul className={styles.landingList}>
                    {diseases.map((value,index)=>{
                        return(
                            <li onClick={() => handleType(value)} key={index} className={value.listStyle  ? `${styles.inActiveList} ${styles.activeList}` : `${styles.inActiveList}`}>{value.type}</li>
                        );
                    })}
                    <img style={{marginRight:"30px",cursor:'pointer'}}src={'/chronicLeft.png'} alt="left"/>
                    <img style={{cursor:'pointer'}} src={'/chronicRight.png'} alt="right"/>
                </ul>
                <div className="row">
                    {products.map((value,index)=>{
                        return(
                            <div className="col-md-3" key={index}>
                                <div className="bottom">
                                    {/* <NavLink id="nav-link" to="/dashboard/singleProduct"> */}
                                        <div className={styles.image}>
                                            <img src={'/product-3.png'} />  
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
                                        <button className={styles.btnArrow}><img src={'/arrow.png'}/></button>
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