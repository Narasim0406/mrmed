import React,{ useState,useEffect } from 'react';
import OrderSummary from '../orderSummary/index'
import styles from './MedicineDetail.module.scss'
import { useSelector} from 'react-redux';
import {profiles_url} from '../../../apiVariables';
import axios from 'axios';

function MedicineDetail(){
    const [cartProducts,setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [savedAmount, setSavedAmount] = useState(0);
    const userDetails = useSelector((state) => state.auth);
    const userId = userDetails?.userDetails?.id;
    useEffect(() => {
        async function fetchCart(){
            const api=`${profiles_url}/cart?${userId}`;
            await axios.get(api)
            .then(res => {
                setCartProducts(res.data.data);
                console.log(products);
            })
        }
        fetchCart();
    },[]);

    const removeFromCart = async(id) =>{
       await axios.delete(`${profiles_url}/cart/${id}`)
       .then(res => {
           console.log(res)
       });
    }
    return (
            <div className="row">
                {/* <div className="row">
                    <div className="col-md-3">
                        <div className="background">
                            <img className="img" src={require('../../../assets/images/product-1.png')} />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="category">
                            <span>Diabetes</span>
                        </div>
                        <div className="name">
                            <b>Bifilac Tablets</b>
                        </div>
                        <div>
                            <span className="manufacturer">Manufacturer: Natures Velvet Lifecare</span>
                        </div>
                        <div className="quantity">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><img src={require('../../../assets/images/+.png')}/></td>
                                        <td>1</td>
                                        <td><img src={require('../../../assets/images/-.png')}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4 price-request">
                        <span>Price Match Requested</span>
                    </div>
                </div> <hr/>  */}
                <div className="col-md-8">
                {
                    cartProducts && cartProducts.length!==0 ? cartProducts.map((product,ind) => {
                        let {_id,medicineName,manufacturer,price,PAP,discountPrice} = product;
                        product.qty = product.qty > 0 ? product.qty : 0;
                        console.log()
                        return (
                            <div key={ind}>
                                 <div className="row">
                                    <div className="col-md-3">
                                        <div className={styles.background}>
                                            <img className={styles.img} src={require('../../../assets/images/product-3.png')} />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className={styles.category}>
                                            <span>Diabetes</span>
                                        </div>
                                        <div className={styles.name}>
                                            <b>{medicineName}</b>
                                            {PAP && 
                                            // <Link to="/dashboard/papAssistance">
                                                        <img className={styles.cartpiImg} src={require('../../../assets/images/prescription.png')} />
                                                    // </Link> 
                                                        }
                                        </div>
                                        <div>
                                            <span className={styles.manufacturer}>Manufacturer: {manufacturer}</span>
                                        </div>
                                        <div className={styles.quantity}>
                                            <table>
                                                <tbody>
                                                    <tr className={styles.quantityBtns}>
                                                        <td className={styles.tdCol} onClick={increaseQuantity(_id)}><img src={require('../../../assets/images/+.png')}/></td>
                                                        <td className={styles.tdCol}>{product.qty}</td>
                                                        <td className={styles.tdCol} onClick={decreaseQuantity(_id)}><img src={require('../../../assets/images/-.png')}/></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={`col-md-4 ${styles.priceRequest}`}>
                                        <button className={styles.btnMatch}>PRICE MATCH</button>
                                        <img onClick={removeFromCart(_id)} src={require('../../../assets/images/remove-cart.png')} alt="remove-cart"/>
                                        <div className={styles.price}>
                                            <b className={styles.discount}>₹{(price-discountPrice).toFixed(2)}</b>
                                            <span className={styles.original}>MRP ₹{price}</span>
                                        </div>  
                                    </div>
                                </div>
                                <hr/>          
                            </div>
                        )
                    }) : <div><p>Your Cart is Empty</p><p>Please Add products to the cart</p></div>
                }
                </div>
                <div className="col-md-4">
                    <OrderSummary total={total} savedAmount={savedAmount}/>
                </div>
            </div>
        );
}

export default MedicineDetail;