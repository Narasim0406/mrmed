import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import {productList,cartProduct} from '../../../actions';
import {useSelector,useDispatch} from 'react-redux';
import {products_url} from '../../../apiVariables';
import Details from './Detail';

function AllProduct(){
   
    const router = useRouter();
    const dispatch = useDispatch();
    const userDetail = useSelector((state) => state.auth);
    const {myCart} = router.query;
    return (
        <Details myCart={myCart} dispatch={dispatch} router={router} userDetail={userDetail}></Details>
        );
}

export default AllProduct;