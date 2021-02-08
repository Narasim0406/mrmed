import React,{ useState,useEffect } from 'react';
import OrderSummary from '../orderSummary/index'
import styles from './MedicineDetail.module.scss'
import { connect } from 'react-redux';
import { Component } from 'react';
import axios from 'axios';
import { profiles_url, orders_url  } from '../../../../apiVariables';

class MedicineDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            cartProducts: []
        }
    }
  
    componentDidMount = () => {
        this.getOrderDetail();
    }
   

    getOrderDetail = async() => {
       
            let { cartProducts } = this.state;
            let { userDetail } = this.props;
            await axios.get(`${orders_url}/order/600e55d85b94cc6bcca44ef2`)
            .then(res => {
                let obj = res.data.data;
                cartProducts=res.data.data
                this.setState({
                    cartProducts
                });
                // this.props.dispatch(addressList)
                // this.props.dispatch(productList(res.data.data.list))
            })
          
    }
 
    render() {
        let { cartProducts } = this.state;
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
                    cartProducts && cartProducts.items && cartProducts.items.length > 0 ? cartProducts.items.map((product,ind) => {
                        return (
                            <div key={ind}>
                                 <div className="row">
                                    <div className="col-md-3">
                                        <div className={styles.background}>
                                            <img className={styles.img} src={'/product-3.png'} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className={styles.category}>
                                            <span>Diabetes</span>
                                        </div>
                                        <div className={styles.name}>
                                            <b>{product.medicineName}</b>
                                            <img className={styles.cartpiImg} src={'/prescription.png'} />
                                        </div>
                                        <div>
                                            <span className={styles.manufacturer}>{product.manufacturer}</span>
                                        </div>
                                        <div className={styles.quantity}>
                                            <table>
                                                <tbody>
                                                    <tr className={styles.quantityBtns}>
                                                        <td className={styles.tdCol}><img src={'/+.png'}/></td>
                                                        <td className={styles.tdCol}>{product.quantity}</td>
                                                        <td className={styles.tdCol}><img src={'/-.png'}/></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={`col-md-4 ${styles.priceRequest}`}>
                                        <img src={'/remove-cart.png'} alt="remove-cart"/>
                                        <div className={styles.price}>
                                            <b className={styles.discount}>₹{product.price}</b>
                                            <span className={styles.original}>MRP ₹{product.itemPrice}</span>
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
                    <OrderSummary total={500} savedAmount={100} cartProducts={cartProducts}/>
                </div>
            </div>
        );
}
}

const mapStateToProps = state => ({
    userDetail: state.auth.userDetails,
    chooseMedicines: state.chooseMedicines,
    prescription: state.prescription
  });
  
  export default connect(mapStateToProps)(MedicineDetail);