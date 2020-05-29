import React, { useState } from "react";

function Footer() {

  const languagePreference = (selectedLang, langText) => {
    let instances = document.querySelectorAll(".lang-pref");
    instances.forEach((language) => {
      language.classList.remove("active");
    });
    document.getElementById(selectedLang).classList.add("active");
    document.getElementById("current-language").innerText = langText;
    document.querySelector(".language-container").style.opacity = "0";
  };

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <div className="footer-links">
          <ul>
            <li className="link-header">Company</li>
            <li>
              <a href="#">About</a>
              <a href="#">Contact Us</a>
              <a href="#">Careers</a>
            </li>
          </ul>
          <ul>
            <li className="link-header">Account</li>
            <li>
              <a href="#">Log In</a>
              <a href="#">Create Account</a>
            </li>
          </ul>
          <ul>
            <li className="link-header">Support</li>
            <li>
              <a href="#">Help Center</a>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>
        <div className="line-top"></div>
        <div className="footer-social">
          <div className="social-link">
            <a className="gradient-box" href="#">
              <div className="icon-wrapper">
                <img src="/images/youtube.png" alt="" />
              </div>
            </a>
          </div>
          <div className="social-link">
            <a className="gradient-box" href="#">
              <div className="icon-wrapper">
                <img src="/images/pinterest.png" alt="" />
              </div>
            </a>
          </div>
          <div className="social-link">
            <a className="gradient-box" href="#">
              <div className="icon-wrapper">
                <img src="/images/facebook.png" alt="" />
              </div>
            </a>
          </div>
          <div className="social-link">
            <a className="gradient-box" href="#">
              <div className="icon-wrapper">
                <img src="/images/twitter.png" alt="" />
              </div>
            </a>
          </div>
          <div className="social-link">
            <a className="gradient-box" href="#">
              <div className="icon-wrapper">
                <img src="/images/instagram.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </nav>
      <div className="line-top"></div>
      <div className="footer-meta">
        <div className="meta-language" onClick={()=> { document.querySelector(".language-container").style.opacity = "1"; }}>
          <p>
            <span style={{ cursor: "pointer" }}>
              <span id="current-language">English</span>
              <i
                className="fa fa-angle-down"
                aria-hidden="true"
                style={{ marginLeft: "0.5rem" }}
              ></i>
            </span>
          </p>
        </div>
        <div className="meta-links">
          <a href="#">© iFit.com. All Rights Reserved.</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
      <div className="language-picker">
        <div className="language-container">
          <ul>
            <li
              id="german"
              className="lang-pref"
              onClick={() => {
                languagePreference("german", "Deutsch");
              }}
            >
              Deutsch
            </li>
            <li
              id="english"
              className="active lang-pref"
              onClick={() => {
                languagePreference("english", "English");
              }}
            >
              English
            </li>
            <li
              id="spanish"
              className="lang-pref"
              onClick={() => {
                languagePreference("spanish", "Español");
              }}
            >
              Español
            </li>
            <li
              id="french"
              className="lang-pref"
              onClick={() => {
                languagePreference("french", "Français");
              }}
            >
              Français
            </li>
            <li
              id="italian"
              className="lang-pref"
              onClick={() => {
                languagePreference("italian", "Italiano");
              }}
            >
              Italiano
            </li>
            <li
              id="norwegian"
              className="lang-pref"
              onClick={() => {
                languagePreference("norwegian", "Norsk");
              }}
            >
              Norsk
            </li>
            <li
              id="dutch"
              className="lang-pref"
              onClick={() => {
                languagePreference("dutch", "Nederlands");
              }}
            >
              Nederlands
            </li>
            <li
              id="russian"
              className="lang-pref"
              onClick={() => {
                languagePreference("russian", "Русский");
              }}
            >
              Pусский
            </li>
            <li
              id="mandarin"
              className="lang-pref"
              onClick={() => {
                languagePreference("mandarin", "中文(简体)");
              }}
            >
              中文(简体)
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
