import React from 'react';
import './../assets/css/footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from "react-router-dom";
import logo from './../assets/img/logo.png';

function Footer() {
    return (
        <div className='footer'>
            <div className='usefull_links'>
                <div className='footer_section1'>
                    <div className='language'>
                        <select>
                            <option value='English'>English</option>
                            <option value='French'>French</option>
                        </select>
                    </div>
                    <div className='currency'>
                        <select>
                            <option value='USD'>USD</option>
                            <option value='INR'>INR</option>
                        </select>
                    </div>     
                </div>
                <div className='footer_section2'>
                    <h5 className='title'>Airbnb</h5>
                    <ul>
                        <li><Link to='/'>About us</Link></li>
                        <li><Link to='/'>Careers</Link></li>
                        <li><Link to='/'>Press</Link></li>
                        <li><Link to='/'>Policies</Link></li>
                        <li><Link to='/'>Help</Link></li>
                        <li><Link to='/'>Diversity & Belonging</Link></li>
                    </ul>
                </div>
                <div className='footer_section1'>
                    <h5 className='title'>Discover</h5>
                    <ul>
                        <li><Link to='/'>Trust & Safety</Link></li>
                        <li><Link to='/'>Travel Credit</Link></li>
                        <li><Link to='/'>Gift Cards</Link></li>
                        <li><Link to='/'>Airbnb Citizen</Link></li>
                        <li><Link to='/'>Business Travel</Link></li>
                        <li><Link to='/'>Guidebooks</Link></li>
                        <li><Link to='/'>Airbnbmag</Link></li>
                    </ul>
                </div>
                <div className='footer_section1'>
                    <h5 className='title'>Hosting</h5>
                    <ul>
                        <li><Link to='/'>Why Host</Link></li>
                        <li><Link to='/'>Hospitality</Link></li>
                        <li><Link to='/'>Responsible Hosting</Link></li>
                        <li><Link to='/'>Community Center</Link></li>
                    </ul>
                </div>
            </div>
            <div className='credits'>
                <div className='logo_section'>
                    <img
                        className='logo' 
                        src={logo}
                        alt=""
                    /> 
                    <p>Airbnb, Inc</p>
                </div>
                <div className='social_media'>
                    <ul className='links'>
                        <li>
                            <Link to='/'>
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                Site Map
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <FacebookIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <TwitterIcon />
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <InstagramIcon />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer