import React,{ useState,useEffect } from 'react';
import OrderSummary from '../orderSummary/index'
import styles from './MedicineDetail.module.scss'

function MedicineDetail(){
    const [cartProducts,setCartProducts] = useState([
        {
            id:1
        },
        {
            id:2
        }
    ]);
    const [notcartProducts,setNotCartProducts] = useState([
        {
            id:1
        }
    ]);
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
                <div className="col-md-12">
                    <b>Items Prescription Required</b>
                {
                    cartProducts && cartProducts.map((product,ind) => {
                        return (
                            <div key={ind} className="mt-3 mb-3">
                                 <div className="row">
                                    <div className="col-md-3">
                                        <div className={styles.background}>
                                            <img className={styles.img} src={'/product-3.png'} />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className={styles.category}>
                                            <span>Diabetes</span>
                                        </div>
                                        <div className={styles.name}>
                                            <b>Bifilac Tablets</b>
                                            {/* {PAP && 
                                            // <Link to="/dashboard/papAssistance">
                                                        <img className={styles.cartpiImg} src={require('../../../../assets/images/prescription.png')} />
                                                    // </Link> 
                                                        } */}
                                        </div>
                                        <div>
                                            <span className={styles.manufacturer}>Manufacturer: Natures Velvet Lifecare</span>
                                        </div>
                                        <div className={styles.quantity}>
                                            <table>
                                                <tbody>
                                                    <tr className={styles.quantityBtns}>
                                                        <td className={styles.tdCol}><img src={'/+.png'}/></td>
                                                        <td className={styles.tdCol}>{product.qty}</td>
                                                        <td className={styles.tdCol}><img src={'/-.png'}/></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={`col-md-4 ${styles.priceRequest}`}>
                                        <img src={'/remove-cart.png'} alt="remove-cart"/>
                                        <div className={styles.price}>
                                            <b className={styles.discount}>₹150</b>
                                            <span className={styles.original}>MRP ₹200</span>
                                        </div>  
                                    </div>
                                </div>
                                <hr/>          
                            </div>
                        )
                    }) 
                }
                </div>
                <div className="col-md-12">
                    <b>Items Prescription NOT Required</b>
                {
                    notcartProducts && notcartProducts.map((product,ind) => {
                        return (
                            <div key={ind} className="mt-5">
                                 <div className="row">
                                    <div className="col-md-3">
                                        <div className={styles.background}>
                                            <img className={styles.img} src={'/product-3.png'} />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className={styles.category}>
                                            <span>Diabetes</span>
                                        </div>
                                        <div className={styles.name}>
                                            <b>Bifilac Tablets</b>
                                            {/* {PAP && 
                                            // <Link to="/dashboard/papAssistance">
                                                        <img className={styles.cartpiImg} src={require('../../../../assets/images/prescription.png')} />
                                                    // </Link> 
                                                        } */}
                                        </div>
                                        <div>
                                            <span className={styles.manufacturer}>Manufacturer: Natures Velvet Lifecare</span>
                                        </div>
                                        <div className={styles.quantity}>
                                            <table>
                                                <tbody>
                                                    <tr className={styles.quantityBtns}>
                                                        <td className={styles.tdCol}><img src={'/+.png'}/></td>
                                                        <td className={styles.tdCol}>{product.qty}</td>
                                                        <td className={styles.tdCol}><img src={'/-.png'}/></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={`col-md-4 ${styles.priceRequest}`}>
                                        <img src={'/remove-cart.png'} alt="remove-cart"/>
                                        <div className={styles.price}>
                                            <b className={styles.discount}>₹150</b>
                                            <span className={styles.original}>MRP ₹200</span>
                                        </div>  
                                    </div>
                                </div>
                                <hr/>          
                            </div>
                        )
                    }) 
                }
                </div>
                </div>
                <div className="col-md-4">
                    <OrderSummary total={300} savedAmount="100"/>
                </div>
            </div>
        );
}

export default MedicineDetail;