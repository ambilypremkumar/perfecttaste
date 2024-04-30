import React from 'react';

import App from "../../App.scss";



const Footer = () => {
    
    return (
        <div className='footer'>
            <p className="footer-title">Perfect taste</p>
            <div className="footer-social">
                <a href="" className="footer-icon"><img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/instagram-2752153-2284970.png' style={{ width: '30px', height: '30px' }}></img></a>
                <a href="" className="footer-icon"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png' style={{ width: '30px', height: '30px' }}></img></a>
                <a href="" className="footer-icon"><img src='https://cdn-icons-png.freepik.com/256/124/124021.png?semt=ais_hybrid' style={{ width: '30px', height: '30px' }}></img></a>
            </div>
            <p className='footer-copyright'>&#169; 2024 copyright all right reserved</p>
        </div>
    )
}

export default Footer