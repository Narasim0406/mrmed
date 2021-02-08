import React, { Component } from 'react';
import AddressDetails from './AddressDetails/index';
import AttachedPrescriptions from '../Attached Prescriptions/index';


export  class Address extends Component {
   handleSubmited = () => {
       console.log("props working fine")
    this.props.handleSubmitedOrder();
   }
   componentDidMount() {
    console.log("sdfgsfghsfghfg", this.props, this.props.match)
 }
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <AddressDetails handleSubmitedOrder={this.handleSubmited}/>
                    </div>
                    <div className="col-md-5">
                        <AttachedPrescriptions/>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
