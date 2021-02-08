import React, {useState} from 'react';
import AddressCard from '../AddressCard';
import styles from './AddressDetails.module.scss';
import {useRouter} from 'next/router';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Link from 'next/link';
import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { profiles_url, orders_url  } from '../../../../apiVariables';

class Address extends Component{

  state = {
    addressType: 0,
    modal: false,
    addressList: [],
  isOpen: false,
  formField: {
    name: "", 
    phoneNumber: "", 
    address: "", 
    city: "", 
    state: "", 
    pincode: "", 
    landmark: ""
  },
  selectedAddressindex: null,
  selectedAddress: {}
  }
  componentDidMount() {
    console.log(this.props.userDetail, "saasdfasdsgfs")
    this.getAddress()
  }

  getAddress = async() => {
    let { addressList } = this.state;
    let { userDetail } = this.props;
    await axios.get(`${profiles_url}/address/user/${userDetail.userId}`)
    .then(res => {
        let obj = res.data.data;
        addressList=res.data.data;
        this.setState({
          addressList
        });
        // this.props.dispatch(addressList)
        // this.props.dispatch(productList(res.data.data.list))
    })
  }

  handleAddAddress = async() => {
    let { addressList, formField, addressType } = this.state;
    let { userDetail } = this.props;
    let data = {
      userId: userDetail.userId,
      addressName: formField.name,
      addressMobile: formField.phoneNumber,
      address: formField.address,
      city: formField.city,
      state: formField.state,
      pinCode: formField.pincode,
      landMark: formField.landmark,
      type: addressType
    }
    await axios.post(`${profiles_url}/address`, data)
    .then(res => {
        let obj = res.data.data;
        addressList = res.data.data;
        formField = {
          name: "", 
          phoneNumber: "", 
          address: "", 
          city: "", 
          state: "", 
          pincode: "", 
          landmark: ""
        }
        this.setState({
          formField,
          addressList
        });
        this.toggle1()
        // this.props.dispatch(addressList)
        // this.props.dispatch(productList(res.data.data.list))
    })
  }
    
     handleAddressType0 = () =>{
        this.setState({
          addressType: 0
        })
    }

     handleAddressType1 = () =>{
      this.setState({
        addressType: 1
      })
    }

     handleAddressType2 = () =>{

      this.setState({
        addressType: 2
      })
    }
    toggle = () => {
      let { modal } = this.state;
      modal = !modal;
      this.setState({
        modal
      })
        
    }

     toggle1 = () => {
       let { isOpen } = this.state;
       isOpen = !isOpen
       this.setState({
         isOpen
       });
     }

     handleChange = (e) => {
       let { formField } = this.state;
       formField[e.target.name]= e.target.value
       this.setState({
         formField
       })
     }

     handleSelectAddress = (index, address) => {
      let { selectedAddressindex, selectedAddress } = this.state;
      selectedAddressindex = index;
      selectedAddress = address;
      console.log("sdfgghfhfgh", index, address)
      this.setState({
        selectedAddressindex,
        selectedAddress
      })
     }

     handlePlaceOrder = async() => {

      let { addressList, formField, addressType, selectedAddress } = this.state;
      let { userDetail, prescription, chooseMedicines } = this.props;
      let prescriptionUrl = prescription.uploadPrescription.map((data, index)=> data.url)
      let data = {
        "prescriptionUrls": prescriptionUrl,
        "dosageDuration": Number(chooseMedicines.chooseMedicine),
        "address": selectedAddress.address,
        "addressName": selectedAddress.addressName,
        "addressMobile": selectedAddress.addressMobile,
        "addressCity": selectedAddress.city,
        "addressState": selectedAddress.state,
        "addressPincode": String(selectedAddress.pinCode),
        "addressLandmark": selectedAddress.landMark,
        "addressType": selectedAddress.type==0?"Home":selectedAddress.type==1?"Office":"Other",
        "adminStatus": 0,
        "userStatus": 0,
        "orderType": 0,
        "items": []
    }
      await axios.post(`${orders_url}/order`, data)
      .then(res => {
      this.props.handleSubmitedOrder()
         
          // this.props.dispatch(addressList)
          // this.props.dispatch(productList(res.data.data.list))
      })
     }

     handleSubmitCall = async() => {
      let { addressList, formField, addressType, selectedAddress } = this.state;
      let { userDetail, prescription, chooseMedicines } = this.props;
      let prescriptionUrl = prescription.uploadPrescription.map((data, index)=> data.url)
      let data = {
        "prescriptionUrls": prescriptionUrl,
        "address": selectedAddress.address,
        "addressName": selectedAddress.addressName,
        "addressMobile": selectedAddress.addressMobile,
        "addressCity": selectedAddress.city,
        "addressState": selectedAddress.state,
        "addressPincode": String(selectedAddress.pinCode),
        "addressLandmark": selectedAddress.landMark,
        "addressType": selectedAddress.type==0?"Home":selectedAddress.type==1?"Office":"Other",
        "adminStatus": 0,
        "userStatus": 0,
        "orderType": 2,
        "items": []
    }
      await axios.post(`${orders_url}/order`, data)
      .then(res => {
      this.props.handleSubmitedOrder()
         
          // this.props.dispatch(addressList)
          // this.props.dispatch(productList(res.data.data.list))
      })
     }

    render() {
      let { formField, selectedAddressindex, selectedAddress } = this.state;
      let { name, phoneNumber, address, city, state, pincode, landmark, addressType } = formField;
        return (
            <div className={styles.addressDetails}>
                <h2>3.Address Details</h2>
                <div className="container">
                    <p>Saved Addrss Details</p>
                    <div className={`${styles.addressCards} col-md-12`}>
                        {
                            this.state.addressList.map((address,ind) => {
                                return(
                                    <>
                                        <AddressCard index={ind} address={address} selectedAddress={selectedAddressindex} selectAddress={()=>this.handleSelectAddress(ind, address)}/>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="col">
                        <div className={styles.addressItem}>
                            <div  onClick={this.toggle1} className={`${styles.deliverFlip} col-md-12`}>
                                <p>Deliver to new address</p>
                                <img  src={'/down.png'}/>
                            </div>
                        </div>
                        <Collapse className={styles.addForm} isOpen={this.state.isOpen}>
                                <p>Address Details</p>
                                <div>
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <label className="form-label">Name</label>
                                            <input onChange={this.handleChange} type="name" value={name} name="name" className="form-control" id="name" placeholder="Name"/>
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label className="form-label">Phone Number</label>
                                            <input onChange={this.handleChange} type="text" value={phoneNumber} name="phoneNumber" className="form-control" id="phoneNumber" placeholder="Phone Number"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group mb-3">
                                            <label className="form-label">Address</label>
                                            <textarea onChange={this.handleChange} value={address} name="address" className="form-control" id="address" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <label className="form-label">City</label>
                                            <input onChange={this.handleChange} type="city" value="city" name="city" className="form-control" id="city" placeholder="Name"/>
                                        </div>
                                        <div className={`col-md-6 form-group mb-3 ${styles.stateCol}`}>
                                            <label className="form-label">State</label>
                                            <select onChange={this.handleChange} className={styles.formSelect} value={state} name="state" id="state">
                                                <option selected>State</option>
                                                <option value="1">TamilNadu</option>
                                                <option value="2">Karnataka</option>
                                                <option value="3">Telungana</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <label className="form-label">Pin Code</label>
                                            <input onChange={this.handleChange} type="text" value={pincode} name="pincode" className="form-control" id="pincode" placeholder="Pin Code"/>
                                        </div>
                                        <div className="col-md-6 form-group mb-3">
                                            <label className="form-label">Landmark</label>
                                            <input onChange={this.handleChange} type="text" value={landmark} name="landmark" className="form-control" id="landmark" placeholder="Landmark"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={`btn-group col-md-12 form-group mb-3 mt-3 ${styles.place}`}>
                                            <p>Type of Place</p>
                                            <div>
                                            <label className={`toggle-btn ${styles.toggleBtn} ${this.state.addressType===0 ? styles.toggleBack :""}`} onClick={this.handleAddressType0}>Home</label>
                                            <input type="radio" name="options" id={styles.option} autoComplete="off"/>
                                            <label className={`toggle-btn ${styles.toggleBtn} ${this.state.addressType===1 ? styles.toggleBack :""}`} onClick={this.handleAddressType1}>Office</label>
                                            <input type="radio" name="options" id={styles.option} autoComplete="off"/> 
                                            <label className={`toggle-btn ${styles.toggleBtn} ${this.state.addressType===2 ? styles.toggleBack:""}`} onClick={this.handleAddressType2}>Other</label>
                                            <input type="radio" name="options" id={styles.option} autoComplete="off"/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-5 form-group mb-3">
                                            <button onClick={this.handleAddAddress} className={styles.save}>Add Address</button>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>
                            <div className="row mt-3">
                                <div className="col-md-5 form-group mb-3">
                                    <button onClick={this.props.chooseMedicines.chooseMedicine==="call" ? this.handleSubmitCall:this.handlePlaceOrder} className={styles.save}>save & place order</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
      }
}

const mapStateToProps = state => ({
  userDetail: state.auth.userDetails,
  chooseMedicines: state.chooseMedicines,
  prescription: state.prescription
});

export default connect(mapStateToProps)(Address)