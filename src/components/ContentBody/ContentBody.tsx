import React, {useState} from 'react';
import './ContentBody.css';
import GitHub from '../../assets/images/github-image.png';

interface Props {}

const ContentBody: React.FC<Props> = () => {
  return (
    <div className="body-main">
      <div className="main-section">
        <a href="https://github.com">
          <img className="main-section_image" src={GitHub} alt='github img'/>
        </a>
        <p className='main-section-content'>GitHub is, fundamentally, a hosting platform for coders. The cloud-based service allows coders to effectively manage and maintain open-source programming projects while collaborating with others.</p>
        <p className='main-section-content'>To understand how GitHub works, you have to have an understanding of "Git" and the idea of "version control" in relation to Git.</p>
        <p className='main-section-content'>Git, started by Linux creator Linus Torvalds, is an open-source version control system that tracks changes in files over time.</p>
        <p className='main-section-content'>Version control is an important system when it comes to coding. It enables coders to be nimble with programming, and allows for apps to constantly have new version releases, expansion to other platforms, and bug fixes, among other tracked changes.</p>
        <p className='main-section-content'>Version control systems like Git help maintain the integrity and security of ever-evolving code by safeguarding modifications, and those revisions are then hosted by GitHub, or an alternative "repository" hosting service — although GitHub is the most popular among developers.</p>
        <p className='main-section-content'>This allows developers to easily collaborate, allowing them to download a new version of the software, make changes, and upload the newest revision. Every developer can see these new changes, download them, and contribute.</p>
      </div>
      <div className="side-section">
        <ul className='side-section-list'>
          <li className="side-section-list-item">
            <a className='side-section-list_content' href=''>Getting started with Git</a>
          </li>
          <li className="side-section-list-item">
            <a className='side-section-list_content' href=''>How to push</a>
          </li>
          <li className="side-section-list-item">
            <a className='side-section-list_content' href=''>How to pull & fork</a>
          </li>
          <li className="side-section-list-item">
            <a className='side-section-list_content' href=''>How to clone</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContentBody;
