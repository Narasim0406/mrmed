import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useRouter} from 'next/router';
import {productList,cartProduct} from '../../../actions';
import {useSelector,useDispatch} from 'react-redux';
import {products_url} from '../../../apiVariables';
import Details from './Detail';
import styles from './AllProduct.module.scss';

function AllProduct(){
   
    const router = useRouter();
    const dispatch = useDispatch();
    const userDetail = useSelector((state) => state.auth);

    return (
        <Details dispatch={dispatch} router={router} userDetail={userDetail}></Details>
        );
}

export default AllProduct;