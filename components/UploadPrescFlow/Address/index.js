import React, { Component } from 'react';
import AddressDetails from './AddressDetails';
import AttachedPrescriptions from '../Attached Prescriptions/index';


export  class Address extends Component {
   
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <AddressDetails/>
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
