import React, {useState} from 'react';
import AddressCard from '../AddressCard';
import styles from './AddressDetails.module.scss';
import {useRouter} from 'next/router';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Link from 'next/link';
import Address from './Address'
import { connect, useDispatch, useSelector} from 'react-redux';

export default function AddressDetails(props){
    
    const router = useRouter();
    const dispatch = useDispatch();
        return (
            <Address router={router} dispatch={dispatch} handleSubmitedOrder={props.handleSubmitedOrder}></Address>
        )
}
