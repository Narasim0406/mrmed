import React, { Component } from 'react'

import ImportedForm from '../ImportedMedicineForm/ImportedForm/index';
import styles from './ImportedMedicineFormComponet.module.scss';

function ImportedMedicineFormComponet(){
        return(
            <div>
                <div className="container">
                    <div className={`col-md-12 ${styles.indication}`}>
                        <br/>
                        <span>Home &gt; Imported Medicine</span>
                        <br/>
                        <b>Imported Medicine</b>
                        <hr/>
                    </div>
                    <ImportedForm></ImportedForm>
                </div>
            </div>
        );
}

export default ImportedMedicineFormComponet;


// import React, { Component } from 'react'
// import RegConformation from './RegConformation/index';

// class ImportedForm extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             modal:false,
//         }
//     }
//     toggle = () => {
//         console.log(this.state.modal+"dsfsfsdfs");
//         this.setState({modal:!this.state.modal});
//         console.log(this.state.modal+"dsf");
//     }
//     render(){
//         return(
//             <div className="row">
//                 <div className="col-md-8">
//                     <div className='form-border'>
//                         <div className="provide-detail">
//                             <b>Provide Details of Medicines</b>
//                         </div>
//                         <div className="row">
//                             <div className="col-6">
//                                 <div className="med-detail">
//                                     <span>Medicine Details</span>
//                                 </div>
//                                 <input className="detail-field" type="text" placeholder="Enter here" />
//                             </div>
//                             <div className="col-6">
//                                 <div className="med-detail">
//                                     <span>Quantity</span>
//                                 </div>
//                                 <input className="detail-field" type="text" placeholder="Enter here" />
//                             </div>
//                         </div>
//                         <div className="note">
//                             <span>Notes</span>
//                         </div>
//                         <textarea className="notes-field" placeholder="Enter here" />
//                         <div className="upload-label">
//                             <span>Upload  Your Prescription</span>
//                         </div>
//                         <div className="upload-field">
//                             <span>Upload prescription or photo here</span>
//                             <br/>
//                             <label htmlFor="upload-file"><b>Browse files</b></label>
//                             <input type="file" id="upload-file" />
//                         </div>
//                         <div className="upload-label">
//                             <span>Upload Documents</span>
//                         </div>
//                         <div className="upload-field">  
//                             <span>Upload any other related documents</span>
//                             <br/>
//                             <label htmlFor="upload-file"><b>Browse files</b></label>
//                             <input type="file" id="upload-file" />
//                         </div>
//                         <div className="submit">
//                             <button className="btn-submit" onClick={this.toggle}><b>SUBMIT YOUR REQUEST</b></button>
//                         </div>
//                         <div className="RegModal">
//                             <RegConformation modal={this.state.modal} toggle={this.toggle}/>
//                         </div>
//                     </div>
//                 </div>         
//             </div>
//         );
//     }
// }

// export default ImportedForm;
