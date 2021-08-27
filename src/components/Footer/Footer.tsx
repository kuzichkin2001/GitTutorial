import React, {useState} from "react";
import './Footer.css';

interface Props {}

interface NavigationItem {
   title:string,
   href?:string,
}

const scrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};

const Footer: React.FC<Props> = () => {

    const [navigationList,setnavigationList]=useState<Array<NavigationItem>>([
        {
            title:'SSU',
        },
        {
            title:'Terms of Use',
        },
        {
            title:'Contact us',
        },
        {
            title:'Subscribe',
        },
        ]);
    return(
        <footer>
            <div className="footer-content">
                <p className="footer-copyright">&copy; 2021 BongaGuides.com</p>
            <ul className="footer-content__list">
                {navigationList.map((item:NavigationItem)=>
                <li className="footer-content__list-item">
                    <a className="footer-content__link" href={item.href}>{item.title}</a>
                </li>
                )}
                <li className="footer-scroll-button">
                    <a className="footer-scroll-button-text" onClick={scrollToTop}>Scroll to Top</a>
                </li>
            </ul>
            </div>
        </footer>

    )

}
export default Footer;