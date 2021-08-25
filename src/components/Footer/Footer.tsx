import React, {useState} from "react";
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p className="footer-copyright">&copy; 2021 BongaGuides.com</p>
                <ul className="footer-content__list">
                    <li className="footer-content__list-item">
                        <a className="footer-content__link" href="https://www.sgu.ru/">SSU</a>
                    </li>
                    <li className="footer-content__list-item">
                        <a className="footer-content__link" href="rules">Terms of Use</a>
                    </li>
                    <li className="footer-content__list-item">
                        <a className="footer-content__link" href="contacts">Contact Us</a>
                    </li>
                    <li className="footer-content__list-item">
                        <a className="footer-content__link" href="subscribe">Subscribe to our updates </a>
                    </li>
                    <li className="footer-content__list-item">
                        <a className="footer-content__link" href="#">Scroll to top</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
export default Footer;
