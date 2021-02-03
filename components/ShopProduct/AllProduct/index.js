import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import { useSelector} from 'react-redux';
import {products_url,profiles_url} from '../../../apiVariables';

import styles from './AllProduct.module.scss';

function AllProduct(){
    const [categories,setCategories] = useState(['Diabetes (12)','Eye Care (16)', 'Baby Care (28)', 'Mind Care (12)', 'Kidney Care (15)', 'Stomach Care (18)', 'Immunity Booster (4)', 'Respiratory Care (12)']);
    const [brands,setBrands] = useState(['Organic India (3)', 'Smart Air Fileters (4)', 'Venus (3)', 'Ansell (3)', 'Cipla (2)', 'Phzer (2)', 'BYD (6)', 'Beurer (2)']);
    const [discount, setDiscount] = useState(['Less than 10%', '10% and above', '20% and above', '30% and above']);
    const [capacity,setCapacity] = useState(['5mg', '10mg', '100g', '200g', '500g', '1000g']);
    const [products,setProducts] = useState([]);
    const [cartList,setCartList] = useState([]);
    const router = useRouter();
    const userDetails = useSelector((state) => state.auth);

    useEffect(() => {
        async function fetchProducts(){
            await axios.get(`${products_url}/product`)
            .then(res => {
                setProducts(res.data.data.list);
                console.log(products);
            })
        }
        fetchProducts();
    },[]);

    const addToCart = async(product) =>{
        product.addedToCart=true;
        let data = {
            userId:userDetails.userDetails.id,
            productId:product._id,
            quantity:product.quantity,
            original_price:product.original_price,
            discount_price:product.discount_price
        };
        const url = `${profiles_url}/cart`;
        let res = await httpPostRequest(url,data);
        console.log(res);
        if(res.status === 200 ) {
            alert(res.message);
        }
    }
    const httpPostRequest = async(url, body) => {
        console.log(body)
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await result
    }
    return (
            <div className="row">
                    {/* <div className="col-md-3">
                     <div className={styles.categoryBorder}>
                        <div className={styles.categoryTitle}>
                            <b>Categories</b>
                        </div>
                        {categories.map((value,index)=>{
                            return(
                                <div key={index} className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.customCheckbox} />
                                    <span>{value}</span>
                                </div>       
                            );
                        })}
                    </div>
                    <div className={styles.categoryBorder}>
                        <div className={styles.categoryTitle}>
                            <b>Brands</b>
                        </div>     
                        {brands.map((value,index)=>{
                            return(
                                <div key={index} className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.customCheckbox} />
                                    <span>{value}</span>
                                </div> 
                        );
                        })}
                    </div> 
                    <div className={styles.categoryBorder}>
                        <div className={styles.categoryTitle}>
                            <b>Discout</b>
                        </div>     
                        {discount.map((value,index)=>{
                            return(
                                <div key={index} className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.customCheckbox} />
                                    <span>{value}</span>
                                </div> 
                            );
                        })}
                    </div> */}
                    {/* <div className={styles.categoryBorder}>
                        <div className={styles.categoryTitle}>
                            <b>Capacity</b>
                        </div>       
                        {capacity.map((value,index)=>{
                            return(
                                <div key={index} className={styles.checkboxLabel}>
                                    <input type="checkbox" className={styles.customCheckbox} />
                                    <span>{value}</span>
                                </div> 
                            );
                        })}
                    </div></div> */}
                
                <div className="col-md-12">
                    <div className="row">
                        <div className={`col-md-6 ${styles.menu}`}>
                            <img src={'/menu.png'} />
                            <img src={'/list.png'} />
                        </div>
                        <div className="col-md-6">
                            <div className={styles.sortDropdown}>
                                <select>
                                    <option>Sorting By Popularity</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {products.map((product,index)=>{
                            let {id,medicineName,manufacturer,price,discountPrice,PAP,discountPercentage,
                                addedToCart=false } = product;
                            return(   
                                <div className="col-md-4" key={index} >  
                                    <div className={styles.bottom}>
                                        {/* <NavLink to="/dashboard/singleProduct">  */}
                                            <div className={styles.image} onClick={() => router.push('/SingleProduct')}>
                                                <div className={styles.offerBadge}>
                                                    <b>{discountPercentage}%</b>
                                                </div>
                                                <img src={'/product-3.png'} />  
                                            </div>
                                        {/* </NavLink> */}
                                        <div className={styles.category}>
                                            <span>Diabetes</span>
                                            <div className={styles.right}>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <b className={styles.name}>{medicineName}</b>
                                        {PAP && <img className={styles.prescriptionImg} src={'/prescription.png'} />}
                                        <br/>
                                        <span className={styles.company}>Manufacturer: {manufacturer}</span>
                                        <hr/>
                                        <b className={styles.discountPrice}>&#8377; {(price-discountPrice).toFixed(2)}</b>
                                        <span className={styles.actualPrice}>MRP &#8377; {price}</span>
                                        <div className={styles.right}>
                                            {addedToCart ? 
                                            <button key={id} className={styles.btnAdded}>&#x2713;</button>                                           
                                            : 
                                            <button className={styles.btnAdd} onClick={() => addToCart(product)}>+</button>
                                            }       
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
}

export default AllProduct;