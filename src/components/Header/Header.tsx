import React, {useState} from 'react';
import githubLogo from '../../assets/images/github-logo-big.png';
import './Header.css';

interface Props {}

interface NavigationItem {
    href?: string,
    title: string,
}

const Header: React.FC<Props> = () => {
    const [navigationList, setNavigationList] = useState<Array<NavigationItem>>([
        {
            title: 'Main',
            href: 'sosubeznog',
        },
        {
            title: 'Articles',
        },
        {
            title: 'Dictionary',
        },
        {
            title: 'About us',
        },
    ]);

    return (
        <header className="header-content">
            <a href="main" className="header-content__logo-wrapper">
                <img className="header-content__logo" src={githubLogo} alt="github logo" />
                <h1 className="header-content__title">Github Tutorial</h1>
            </a>
            <ul className="header-content__list">
                {navigationList.map((item: NavigationItem) => (
                  <li className="header-content__list-item">
                      <a href={item.href} className="header-content__link">{item.title}</a>
                  </li>
                ))}
                {/*<li className="header-content__list-item">*/}
                {/*    <a className="header-content__link" href="sosubeznog">Main</a>*/}
                {/*</li>*/}
                {/*<li className="header-content__list-item">*/}
                {/*    <a className="header-content__link" href="">Articles</a>*/}
                {/*</li>*/}
                {/*<li className="header-content__list-item">*/}
                {/*    <a className="header-content__link" href="">Dictionary</a>*/}
                {/*</li>*/}
                {/*<li className="header-content__list-item">*/}
                {/*    <a className="header-content__link" href="">About us</a>*/}
                {/*</li>*/}
            </ul>
        </header>
    );
}

export default Header;
