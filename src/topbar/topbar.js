import React from 'react';
import './topbar.css';
import Groot from '../groot.jpg';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className='top'>
        {/* <div className='topleft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
        </div> */}
        <div className='topleft'>
            <img className='topImage' src={Groot} alt='nhi daal raha alt'></img>
        </div>
        <div className='topright'>
            <ul className='topList'>
                <li className='topListItem'>ABOUT-US</li>
                <Link className='link' to="/contact"><li className='topListItem'>CONTACT</li></Link>
                <li className='topListItem'>WRITE TO US</li>
            </ul>
        </div>
        
    </div>
  )
}
