import React,{ useState,useEffect } from 'react';
import OrderSummary from '../orderSummary/index'
import styles from './MedicineDetail.module.scss'
import { cartProduct } from '../../../actions'
import { useDispatch, useSelector} from 'react-redux';
import {profiles_url} from '../../../apiVariables';
import axios from 'axios';
import Details from './Detail';

function MedicineDetail(){
    const dispatch = useDispatch();
   
    
    return (
           <Details dispatch={dispatch}></Details>
        );
}

export default MedicineDetail;