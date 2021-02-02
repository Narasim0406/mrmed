import React,{useState,useEffect} from 'react'
import SignIn from '../Login/Signin/index';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Popover, PopoverBody } from 'reactstrap';
const whatsapp = require('../../assets/images/whatsapp-fab.png');
import {useRouter} from "next/router";
import { useSelector} from 'react-redux'
import styles from './Header.module.scss';

function Header(){

   const userDetails = useSelector((state) => state.auth);
   const cartProducts = useSelector(state => state.auth.cartProducts)
   let [langDropDown, setLangDropDown] = useState(false);
   let [locationPopOver, setLocationPopOver] = useState(false);
   let [userDropDown, setUserDropDown] = useState(false);
   const [modal,setModal] = useState(false);
   const router = useRouter();

    const userDropDowne = () => {
        setUserDropDown(!userDropDown);
    }
    const langDropDowns = () => {
        setLangDropDown(!langDropDown);
    }
    const locationPopOvers = () => {
        setLocationPopOver(!locationPopOver);
    }
    useEffect(() => {
        console.log(userDetails.userDetails,"dsfsf");
        if(userDetails.userToken){
            toggle();
        }
    }, [])

    const toggle = () => {
        setModal(!modal);
    }
    return(
            <div className={styles.headers}>
                <div className={styles.greyBack}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <img src={whatsapp}/>
                                <b>+91-941183088</b>
                                <img src={require('../../assets/images/phone.png')} style={{objectFit:'contain'}}/>
                                <b>+91-941183088</b>
                            </div>
                            <div className="col-md-2">
                                <Dropdown className={styles.lang} isOpen={langDropDown} toggle={langDropDowns}>
                                    <DropdownToggle caret tag="span" data-toggle="dropdown" aria-expanded={langDropDown}>
                                        <span>EN</span>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Language</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.logo}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                {/* <NavLink id="nav-link" to="/dashboard/landingPage"> */}
                                    <img onClick={() => router.push('/')} className={styles.imgLogo} src={require('../../assets/images/logo.png')} style={{cursor:'pointer'}}/>
                                {/* </NavLink> */}
                                <button id="Popover1" type="button" className={styles.btnLocation}>
                                    Chennai &#9660;
                                </button>
                                <Popover style={{'width':'175px'}} placement="auto-start" isOpen={locationPopOver} target="Popover1" toggle={locationPopOvers}>
                                    <PopoverBody>
                                        <div className={styles.locationDropdown}>
                                            <div className="row bottom">
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> */}
                                                    <span>Bangalore</span>
                                                </div>
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> */}
                                                    <span>Mumbai</span>
                                                </div>
                                            </div>
                                            <div className="row bottom">
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> */}
                                                    <span>Pune</span>
                                                </div>
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> */}
                                                    <span>Delhi</span>
                                                </div>
                                            </div>
                                            <div className="row bottom">
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> */}
                                                    <span>Noida</span>
                                                </div>
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> */}
                                                    <span>Gurgaon</span>
                                                </div>
                                            </div>
                                            <div className="row bottom">
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> */}
                                                    <span>Hyderabad</span>
                                                </div>
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> */}
                                                    <span>Chennai</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </PopoverBody>
                                </Popover>
                                <input type="text" placeholder="Search for medicines and health products" className="search-box" />
                                <img className={styles.searchIcon} src={require('../../assets/images/search.png')} />
                            </div>
                            <div className="col-md-3">
                                <div className={styles.headerIcon}>
                                    <div className="btn-group">
                                    <Dropdown isOpen={userDetails.userToken ? true : false} toggle={userDropDowne}>
                                        {/* <Dropdown isOpen={this.state.userDropDown} toggle={()=>this.userDropDown()}> */}
                                            <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={userDropDown}>
                                                <span className={styles.iconAlign} onClick={userDetails ? toggle : ""}>{userDetails.userDetails?.name ? userDetails.userDetails?.name : 'Login/Sign Up'}</span>
                                                <img className={styles.iconAlign} src={require('../../assets/images/user.svg')} style={{cursor:'pointer'}}/>
                                            </DropdownToggle>
                                            <DropdownMenu className={styles.dropdownMenu} >
                                                <DropdownItem className={styles.item} onClick={() => router.push('/Accounts/Profiles')}>
                                                    {/* <NavLink id="nav-link" to="/account/profile"> */}
                                                        <img className={styles.dropdownIcon} src={require('../../assets/images/user.svg')}/>
                                                        <span>My Profile</span>
                                                    {/* </NavLink>  */}
                                                </DropdownItem>
                                                <DropdownItem className={styles.item} onClick={() => router.push('/Accounts/Order')}>
                                                    {/* <NavLink id="nav-link" to="/account/order">  */}
                                                        <img className={styles.dropdownIcon} src={require('../../assets/images/delivery.svg')}/>
                                                        <span>My Orders</span>
                                                    {/* </NavLink> */}
                                                </DropdownItem>
                                                <DropdownItem className={styles.item} onClick={() => router.push('/Accounts/MyPrescription')}>
                                                    {/* <NavLink id="nav-link" to="/account/prescription"> */}
                                                        <img className={styles.dropdownIcon} src={require('../../assets/images/prescription.svg')}/>
                                                        <span>My Prescription</span>
                                                    {/* </NavLink>  */}
                                                </DropdownItem>
                                                {/* <DropdownItem>
                                                     <NavLink id="nav-link" to="/account/wishlist">  
                                                        <img className={styles.dropdownIcon} src={require('../../assets/images/wishlist.svg')}/>
                                                        <span>Wishlist</span>
                                                     </NavLink> 
                                                </DropdownItem> */}
                                                <DropdownItem className={styles.item} onClick={() => router.push('/Accounts/Payments')}>
                                                    {/* <NavLink id="nav-link" to="/account/payment">  */}
                                                        <img className={styles.dropdownIcon} src={require('../../assets/images/credit-card.svg')}/>
                                                        <span>Payments</span>
                                                    {/* </NavLink> */}
                                                </DropdownItem>
                                                <DropdownItem className={styles.item} onClick={() => router.push('/Accounts/logout')}>
                                                    <img className={styles.dropdownIcon} src={require('../../assets/images/exit.svg')}/>
                                                    <span>Logout</span>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <img className={styles.iconAlign} src={require('../../assets/images/line.png')}/>
                                    {/* <NavLink id="nav-link" to="/dashboard/cartPage"> */}
                                        <span onClick={() => router.push('/Cart')} className={styles.iconAlign}>Cart</span>
                                        <img onClick={() => router.push('/Cart')} src={require('../../assets/images/shopping-cart.png')} style={{cursor:'pointer'}}/>
                                        <button onClick={() => router.push('/Cart')} className={styles.cartBadge} id="cart-count">{cartProducts ? cartProducts.length : 0}</button>
                                    {/* </NavLink> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.greenBack}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul>
                                    <li onClick={()=> router.push('/SpecialityMed')}>
                                        <img className={styles.listImg} src={require('../../assets/images/wings.png')}/>
                                        <b> SPECIALITY MEDICINES</b>
                                    </li>
                                    {/* <Link id="nav-link" href="/pages/PapAssistance"> */}
                                        <li onClick={() => router.push('/PapAssistance')}>
                                            <img className={styles.listImg} src={require('../../assets/images/patient.png')}/>
                                            <b> PATIENT ASSISTANCE PROGRAMME</b>
                                        </li>
                                    {/* </Link> */}
                                    {/* <NavLink id="nav-link" to="/dashboard/importedMedicine"> */} 
                                        <li onClick={() => router.push('/ImportedMedicineComponet')}>
                                            <img className={styles.listImg} src={require('../../assets/images/tablet.png')}/>
                                            <b> IMPORTED MEDICINE</b>
                                        </li>
                                    {/* </NavLink> */}
                                    <li>
                                        <img className={styles.listImg} src={require('../../assets/images/heart-rate.png')}/>
                                        <b> WELLNESS</b>
                                    </li>
                                    {/* <NavLink to="/dashboard/stepperSuccess"> */}
                                        <div onClick={() => router.push('/UploadStepper')} className={styles.uploadPrescription}>
                                            <button className={styles.btnUpload}><b>UPLOAD PRESCRIPTION</b></button>
                                        </div>
                                    {/* </NavLink> */}
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                <SignIn modal={modal} toggle={toggle}/>
            </div>
        );
}

export default Header;