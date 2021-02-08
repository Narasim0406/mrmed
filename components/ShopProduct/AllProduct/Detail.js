import React, { Component } from 'react';
// import OrderSummary from '../orderSummary/index'
import {products_url} from '../../../apiVariables';
import axios from 'axios';
import { productList, cartProduct, userDetails } from '../../../actions';
import styles from './AllProduct.module.scss';
import { connect } from 'react-redux';
import { profiles_url, orders_url  } from '../../../apiVariables';

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [],
        cartData: [],
        cartIndexes: []
    };
  }

  componentDidMount = async() => {
    if(localStorage.userData){
       await this.props.dispatch(userDetails(JSON.parse(localStorage.userData)));

        // setuserData(JSON.parse(localStorage.userData))
    }
      console.log("sdfsdfgsdfg", this.props)
      this.fetchProducts();
      this.fetchCart();
  }

 fetchProducts = async() => {
    await axios.get(`${products_url}/product/allProducts?page=1&size=10&specialityProduct=&conditionProduct=`)
    .then(res => {
        this.setState({products:res.data.data.list});
        // this.props.dispatch(productList(res.data.data.list))
    })
}

  fetchCart = async() => {
    let { userDetail } = this.props;
    //let userId = "601cd4f10787cd421e6f6acc";
    console.log(userDetail, "get cart dsfgsdfgsdfg")
    const api=`${products_url}/cart?userId=${userDetail.userId}`;
    await axios.get(api)
    .then(res => {
        this.props.dispatch(cartProduct(res.data.data.cartData))
        this.setState({cartData:res.data.data.cartData})
    })
}
flows = (id)  => {
    console.log("asdfasdffadgdfgsdg", id)
    if(this.props.myCart){
        this.props.router.push({pathname:'/SingleProduct',query:{myCart : true, id: id._id }})
    }else{
        this.props.router.push({pathname:'/SingleProduct',query:{myCart : false, id: id._id }})
    }
}
   

// const compareWithCart = () => {
//     console.log(cartData)
//     for(var i=0;i<products.length;i++){
//         for(var j=0;j<cartData.length;j++){
//             //console.log(cartData.productId)
//             if(products[i]._id === cartData[i]?.productId) console.log(true)
//         }
//     }
// }
addToCart = async(product) =>{
    let { userDetail } = this.props;
    console.log(this.props, "add cart dsfgsdfgsdfg")
    let data = {
        userId: userDetail.userId,
        productId:product._id,
        quantity:1,
    };
    const url = `${products_url}/cart`;
    let res = await axios.post(url,data);
    if(res.status === 200 ) {
        console.log(res);
        this.fetchCart();
        let cartIndexes = await this.state.cartData.map((prod) => {
            return prod.productId === product._id ? product._id : -1;
        });
        console.log(cartIndexes)
        this.setState({cartIndexes:cartIndexes});
    }
    
}


  render() {
      let { cartProducts, cartDetails } = this.state;
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
            {/* <div className="col-md-6">
                <div className={styles.sortDropdown}>
                    <select>
                        <option>Sorting By Popularity</option>
                    </select>
                </div>
            </div> */}
        </div>
        <div className="row">
            {this.state.products.map((product,index)=>{
                let {id,medicineName,manufacturer,price,discountPrice,PAP,discountPercentage,
                    } = product;
                let myCart = this.props.myCart;
                return(   
                    <div className="col-md-4" key={index} >  
                        <div className={styles.bottom}>
                            {/* <NavLink to="/dashboard/singleProduct">  */}
                                <div className={styles.image} onClick={() => this.flows(product)}>
                                    <div className={styles.offerBadge}>
                                        <b>{discountPercentage}%</b>
                                    </div>
                                    <img src={'/product-3.png'} />  
                                </div>
                            {/* </NavLink> */}
                            <div className={styles.category}>
                                <span>Diabetes</span>
                                <div className={styles.right}>
                                    <span>{product.packingSize}</span>
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
                                {
                                   this.state.cartIndexes?.includes(id) ? <button key={id} className={styles.btnAdded}>&#x2713;</button>  
                                    :<button key={id} onClick={() => this.addToCart(product)} className={styles.btnAdd}>+</button>                                            }
                                
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
}

const mapStateToProps = state => ({
    userDetail: state.auth.userDetails,
    cartDetail: state.cartDetail,
    productList: state.productList
  });
  
  export default connect(mapStateToProps)(Detail)
