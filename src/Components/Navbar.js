import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/Navbar.css'
import GGlogo from '../Images/GGlogo.png'

// import { useEffect, useState } from 'react'
// import axios from 'axios'


const menu = ['Home', 'Products', 'Calculator', 'Register', 'Login', 'About', 'Contact Us']
const menu1 = [
    {m:'Home', l: '/' },
    {m:'Products', l: '/product'},
    {m:'Calculator', l: '/calculator'},
    {m:'Register', l: '/register'},
    {m:'Login', l: '/login'},
    {m:'About', l: '/about'},
    {m:'Contact Us', l: '/contactus'}
]

    console.log(menu1);
export default function Navbar() {
    const image = {
        facebook: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
        insta: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
        twitter: 'https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png',
        whatsapp: 'https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png',
        linkedin: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
        youtube: 'https://w7.pngwing.com/pngs/963/811/png-transparent-youtube-logo-youtube-red-logo-computer-icons-youtube-television-angle-rectangle-thumbnail.png'
    };

    return (
        <>
            <div className='topbar'>
                <div style={{ display: 'flex' }}>
                    <img className='logo' src={GGlogo} alt='GGlogo' />
                    <h2>GAJRA GROUP OF INDUSTRIES</h2>
                </div>
                <div className="link">
                    <ul>
                        <li style={{ marginTop: '10px' }}><span> Follow Us On:</span></li>
                        <li><a href="https://www.facebook.com" target="_blank"><img src={image.facebook} alt="fb" /></a></li>
                        <li><a href="https://www.instagram.com" target="_blank"><img src={image.insta} alt="insta" /></a></li>
                        <li><a href="https://www.twitter.com" target="_blank"><img src={image.twitter} alt="twitter" /></a></li>
                        <li><a href="https://www.whatsapp.com" target="_blank"><img src={image.whatsapp} alt="whatsapp" /></a></li>
                        <li><a href="https://www.linkedin.com" target="_blank"><img src={image.linkedin} alt="Linkedin" /></a></li>
                        <li><a href="https://www.youtube.com" target="_blank"><img src={image.youtube} alt="Youtube" /></a></li>
                    </ul>
                </div>
            </div>
            <nav>
                <ul>
                    {menu1.map((item) => {
                        return(<li>{item.m}</li>)
                    })}
                </ul>
            </nav>

            <div>

            </div>

        </>
    )
}
