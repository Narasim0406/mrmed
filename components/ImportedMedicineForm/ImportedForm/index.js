import React, {useState,useEffect} from 'react'
//import SignIn from '../../Login/Signin';
import styles from './ImportedForm.module.scss';
import { useDispatch} from 'react-redux';
import { userDetails} from '../../../actions';
import {medplans_url} from '../../../apiVariables';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import RegConfirm from '../RegConformation/index';


function ImportedForm(){
    const dispatch = useDispatch();
    const [modal,setModal] = useState(false);
    const [importedRegister, setImportedRegister] = useState({
        userId:"601cd4f10787cd421e6f6acc",
        medicineDetails:"",
        quantity:"",
        notes:"",
        status:0
    });
    const [prescriptionUrl,setPrescritpionUrl] = useState([]);
    const [documentUrl,setDocumentUrl] = useState([]);
    const [userData,setuserData] = useState({});

    useEffect(() => {
        if(localStorage.userData){
            dispatch(userDetails(JSON.parse(localStorage.userData)));
            setuserData(JSON.parse(localStorage.userData))
        }
    }, [])

    const uploadDocuments = async(documents) =>{
        const url=`http://180.151.69.138:2258/api/v1/upload/uploadFile/single`;
        console.log(documents,"documents")
        let docs = [];
        if(documents){
            for(var i=0;i<documents.length;i++) {
                async function call(){
                    let formData = new FormData();
                    let file = documents[i];
                    formData.append("file",file);
                    let res = await axios.post(url,formData,{headers: {
                        "Content-Type": "multipart/form-data"
                      }}
                    );
                    if(res.status ===200) {
                        console.log(res.data.data.url);
                        docs.push(res.data.data.url);
                    }
                }
                await call();
            }
        }
        return docs;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let {medicineDetails,quantity,notes} = importedRegister;
        const prescriptionUrls = uploadDocuments(prescriptionUrl);
        const documentUrls = uploadDocuments(documentUrl);
        //console.log({prescriptionUrls,documentUrls});
        let user = jwt_decode(userData.token);
        let data = {
            userId: user && user.id,
            userName: user && user.name,
            medicineDetails,
            quantity,
            notes,
            prescriptionUrls,
            documentUrls,
            status:0,
            address: "344B",
            addressName: "bharathi",
            addressMobile: "9290876754",
            addressCity: "salem",
            addressState: "tamilnadu",
            addressPincode: "636010",
            addressLandmark: "temple",
            addressType: "home"
        };
        const url = `${medplans_url}/import`;
        let res = await axios.post(url,data);
        if(res.status === 200 ) {
            setImportedRegister({
                medicineDetails:"",
                quantity:"",
                notes:"",
                status:0
            });
            setPrescritpionUrl([]);
            setDocumentUrl([]);
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
        setDocumentUrl(e.target.files);
    }
    const handlePrescription = (e) => {
        setPrescritpionUrl(e.target.files);
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
                            <img src={'/upload.png'} />
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
                            <img src={'/upload.png'} />
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
                <RegConfirm modal={modal} toggle={toggle}/>
            </div>
        );
}

export default ImportedForm;