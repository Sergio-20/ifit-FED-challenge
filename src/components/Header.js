import React from "react";

function Header() {
  return (
    <header className="site-header">

      <nav className="top-header">
        <ul>
          <li className="th-item"><a href="#">BLOG</a></li>  
          <li className="line-right"></li>
          <li className="th-item"><a href="#">NOURISH</a></li>
          <li className="line-right"></li>
          <li className="th-item"><a href="#">SHOP</a></li>  
          <li className="line-right"></li>
        </ul>  
      </nav>
      <div className="line-top"></div>
      <nav className="bottom-header">
        <a className="iFit-logo" href="#">
          <figure>
            <img src="/images/ifit-coach-logo.svg" alt="" />
          </figure>
        </a>
        <ul className="bottom-nav-links">
          <li>
            <a href="#">EXERCISE</a>
          </li>
          <li>
            <a href="#">NUTRITION</a>
          </li>
          <li>
            <a href="#">ACTIVITY</a>
          </li>
          <li>
            <a href="#">SLEEP</a>
          </li>
        </ul>
        <a className="primary-btn signup-btn" href="#">
          SIGN UP
        </a>
      </nav>
    </header>
  );
}

export default Header;
