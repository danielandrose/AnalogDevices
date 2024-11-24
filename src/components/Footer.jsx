import React from 'react';
import { BsInstagram} from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSnapchatSquare,FaFacebook } from "react-icons/fa";
import "../cssFiles/footer.css"

export const Footer = () => {
  return (
    <div className="footer">
        <p className="footer-details">Follow Us On</p>
        <div className="footer-icons">
            <BsInstagram className="footer-icon" />
            <FaSnapchatSquare className="footer-icon"/>
            <FaSquareXTwitter className="footer-icon" />
            <FaFacebook className="footer-icon" />
        </div>
        <footer>
            © 2024. All rights reserved.
        </footer>
    </div>
  );
};





