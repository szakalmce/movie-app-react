import React from "react";
import { BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  const date = new Date().getFullYear();

  console.log(date);

  return (
    <div className="footer">
      <div className="footer-inner">
        <ul className="flex center">
          <li className="nav-item">
            <a className="footer-nav-item" href="/">
              <BsGithub />
            </a>
          </li>
          <li className="nav-item">
            <a className="footer-nav-item" href="/">
              <BsInstagram />
            </a>
          </li>
          <li className="nav-item">
            <a className="footer-nav-item" href="/">
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
      <div className="sub-footer">
        <h4 className="sub-footer-text">
          All rights reserved / Tomasz Garbarz {date}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
