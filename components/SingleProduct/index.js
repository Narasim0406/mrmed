import React from 'react'

import Image from '../SingleProduct/product/image/index'
import Details from '../SingleProduct/product/details/index'
import AddCart from '../SingleProduct/addCart/index'
import ProductSpecs from '../SingleProduct/productSpecs/index'
import AlternateBrand from '../SingleProduct/alternateBrand/index'
import RelatedProduct from '../SingleProduct/relatedProduct/index'
import styles from './SingleProductComponent.module.scss';
import {useRouter} from 'next/router';
import AddedCart from './AddedCart'
import { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';
import { profiles_url, orders_url, products_url } from '../../apiVariables';

const SingleProductComponent = (props) => {
    const router = useRouter()
    const myCart = router.query;
    return <MyClass {...props} router={router} mycart={myCart} />
  }

class MyClass extends Component{
    constructor(props){
        super(props)
        this.state = {
            cartList: [],
            cartDetail: {}
        }
    }

    componentDidMount() {
        this.getCartList();
        this.getCartDetail();
    }

    getCartList = async() => {
        let { cartList } = this.state;
        let { userDetail } = this.props;
        await axios.get(`${products_url}/cart?userId=${userDetail.userId}`)
        .then(res => {
            let obj = res.data;
            cartList=res.data.data;
            this.setState({
                cartList
            });
            console.log("sdfgdhgfghdfhgdfj", cartList)
            // this.props.dispatch(addressList)
            // this.props.dispatch(productList(res.data.data.list))
        })
    }

    getCartDetail = async() => {
        let { cartDetail } = this.state;
        let { userDetail, mycart } = this.props;
        let { myCart, id } = mycart;
        await axios.get(`${products_url}/cart/${id}`)
        .then(res => {
            let obj = res.data.data;
            cartDetail.push(obj)
            this.setState({
                cartDetail
            });
            // this.props.dispatch(addressList)
            // this.props.dispatch(productList(res.data.data.list))
        })
    }

    render(){
        let { mycart, router } = this.props;
        let { cartDetail, cartList } = this.state;
        let { myCart, id } = mycart;
        return(
            <div>
                <div className="container">
                    <div className={`col-md-12 ${styles.indication}`}>
                        <br/>
                        <span onClick={() => router.push('/')}>Home &gt; </span><span onClick={() => router.push('/ShopProductComponent')}>All Products &gt; </span><span>Product Details</span>
                        <br/>
                        <b>Product Details</b>
                        <hr/>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {cartList && cartList.cartData && cartList.cartData.length>0 ? <AddedCart myCart={myCart} cartList={cartList}/>:""}
                        </div>
                        <div className="col-md-5">
                            <Image></Image>
                        </div>         
                        <div className="col-md-4">
                            <Details></Details>
                        </div>
                        <div className="col-md-3">
                            <AddCart myCart={myCart}></AddCart>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ProductSpecs></ProductSpecs>
                        </div>
                        {/* <div className="col-md-3">
                            <AlternateBrand></AlternateBrand>
                        </div> */}
                    </div>   
                </div>
                {/* <div className="container">
                    <div className={styles.title}>
                        <b>RELATED PRODUCTS</b>
                    </div>
                    <RelatedProduct></RelatedProduct>
                </div> */}
            </div>
        );
}
}

const mapStateToProps = state => ({
    userDetail: state.auth.userDetails,
    chooseMedicines: state.chooseMedicines,
    prescription: state.prescription
  });
  
  export default connect(mapStateToProps)(SingleProductComponent)