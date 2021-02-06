import React, { Component } from 'react';
import OrderSummary from '../orderSummary/index'
import {profiles_url} from '../../../apiVariables';
import axios from 'axios';
import { cartProduct } from '../../../actions'
import styles from './MedicineDetail.module.scss'

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
      cartDetails: {}
    };
  }

  componentDidMount() {
      this.fetchCart();
  }


removeFromCart = async(id) => {
   await axios.delete(`http://180.151.69.138:2258/api/v1/cart/${id}`)
   .then(res => {
        console.log(res)
   });
   this.fetchCart();
}

fetchCart  = async(id) => {
    //let userId = "601cd4f10787cd421e6f6acc";
    const api=`http://180.151.69.138:2258/api/v1/cart?userId=601cd4f10787cd421e6f6acc`;
    await axios.get(api)
    .then(res => {
        this.setState({
            cartProducts: res.data.data.cartData,
            cartDetails: res.data.data
        })
        this.props.dispatch(cartProduct(res.data.data.cartData))
    })
}


  render() {
      let { cartProducts, cartDetails } = this.state;
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
              let {_id,medicineName,manufacturer,price,priceToCustomer} = product;
              return (
                  <div key={ind}>
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
                                  <b>{medicineName}</b>
                                  <img className={styles.cartpiImg} src={'/prescription.png'} />
                              </div>
                              <div>
                                  <span className={styles.manufacturer}>Manufacturer: {manufacturer}</span>
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
                              <img onClick={() => this.removeFromCart(_id)} src={'/remove-cart.png'} alt="remove-cart"/>
                              <div className={styles.price}>
                                  <b className={styles.discount}>₹{price}</b>
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
          <OrderSummary cartDetails={cartDetails}/>
      </div>
  </div>
    );
  }
}

export default Detail;