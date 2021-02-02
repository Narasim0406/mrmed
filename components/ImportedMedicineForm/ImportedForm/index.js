import React, {useState} from 'react'
//import SignIn from '../../Login/Signin';
import styles from './ImportedForm.module.scss';
import { useSelector} from 'react-redux'
import {products_url,medplans_url} from '../../../apiVariables';

function ImportedForm(){

    const userDetails = useSelector((state) => state.auth);
    const [modal,setModal] = useState(false);
    const [importedRegister, setImportedRegister] = useState({
        userId:userDetails.userDetails ? userDetails.userDetails.id : "",
        medicineDetails:"",
        quantity:"",
        notes:"",
    });
    const [prescriptionUrls,setPrescritpionUrls] = useState([]);
    const [documentUrls,setDocumentUrls] = useState([]);

    const uploadDocuments = async(documents) =>{
        const url=`${products_url}/upload/uploadFile`;
        let docs = [];
        await documents.map(async(prescription) => {
            const formData = new FormData();
            formData.append("file", prescription);
            let res = await fileUpload(url,formData);
            console.log(res)
            docs.push(res.data);
        })
        return docs;
    }
    const fileUpload = async() => {
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify(body)
        });
        return await result;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let {medicineDetails,quantity,notes} = importedRegister;
        const presc = uploadDocuments(prescriptionUrls);
        const docu = uploadDocuments(documentUrls);
        console.log({medicineDetails,quantity,notes,presc,docu});
        let data = {medicineDetails,quantity,notes,presc,docu};
        const url = `${medplans_url}/import`;
        let res = await httpPostRequest(url,data);
        console.log(res);
        if(res.status === 200 ) {
            alert(res.message);
            setImportedRegister({
                medicineDetails:"",
                quantity:"",
                notes:"",
            });
            setPrescritpionUrls([]);
            setDocumentUrls([]);
        }
        toggle();
    }
    const toggle = () => {
        setModal(!modal);
    }
    const onChangeForm = (e) => {
        const {name , value} = e.target
        setImportedRegister( prevState => ({
        ...prevState,
        [name] : value
        }))
    }
    const handleDocument = (e) => {
        setDocumentUrls(e.target.files);
    }
    const handlePrescription = (e) => {
        setPrescritpionUrls(e.target.files);
    }
    const httpPostRequest = async(url, body) => {
        console.log(body)
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await result
    }

    return(
            <div className="row">
                <div className="col-md-8">
                    <div className={styles.formBorder}>
                        <div className={styles.provideDetail}>
                            <b>Provide Details of Medicines</b>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-6">
                                <div className={styles.medDetail}>
                                    <span>Medicine Details</span>
                                </div>
                                <input 
                                className={styles.detailField} 
                                type="text" 
                                name="medicineDetails"
                                placeholder="Enter here" 
                                value={importedRegister.medicineDetails}
                                onChange={(e) => onChangeForm(e)}
                                required/>
                            </div>
                            <div className="col-6">
                                <div className={styles.medDetail}>
                                    <span>Quantity</span>
                                </div>
                                <input 
                                className={styles.detailField} 
                                type="text" 
                                name="quantity"
                                placeholder="Enter here" 
                                value={importedRegister.quantity}
                                onChange={(e) => onChangeForm(e)}
                                required/>
                            </div>
                        </div>
                        <div className={styles.note}>
                            <span>Notes</span>
                        </div>
                        <textarea 
                        className={styles.notesField} 
                        placeholder="Enter here" 
                        name="notes"
                        value={importedRegister.notes}
                        onChange={(e) => onChangeForm(e)}
                        required/>
                        <div className={styles.Label}>
                            <span>Upload  Your Prescription</span>
                        </div>
                        <div className={styles.uploadField}>
                            <img src={require('../../../assets/images/upload.png')} />
                            <br/>
                            <span>Upload prescription or photo here</span>
                            <br/>
                            <label className={styles.uploadLabel} htmlFor={styles.uploadFile1}><b>Browse files</b></label>
                            <input 
                            type="file" 
                            id={styles.uploadFile1} 
                            multiple 
                            onChange={(e) => handlePrescription(e)}/>
                        </div>
                        <div className={styles.Label}>
                            <span>Upload Documents</span>
                        </div>
                        <div className={styles.uploadField}>
                            <img src={require('../../../assets/images/upload.png')} />
                            <br/>  
                            <span>Upload any other related documents</span>
                            <br/>
                            <label className={styles.uploadLabel} htmlFor={styles.uploadFile}><b>Browse files</b></label>
                            <input 
                            type="file" 
                            id={styles.uploadFile} 
                            multiple 
                            onChange={(e) => handleDocument(e)}/>
                        </div>
                        <div className="submit">
                            <button type="submit" className={styles.btnSubmit}><b>SUBMIT YOUR REQUEST</b></button>
                        </div>
                    </form>
                    </div>
                </div>    
                {/* <SignIn modal={modal} toggle={toggle}/>      */}
            </div>
        );
}

export default ImportedForm;