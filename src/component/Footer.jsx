import React from "react";

import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsGithub,
} from "react-icons/bs";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="_content_sec _discribe _1">
          <h2>FrameWork</h2>
          <ul>
            <li>React JSX</li>
            <li>Scss</li>
          </ul>
        </div>
        <div className="_content_sec _discribe _2">
          <h2>Function</h2>
          <ul>
            <li>Responesive</li>
            <li>Dark Mode</li>
            <li>Calendar</li>
          </ul>
        </div>
        <div className="_content_sec _discribe _3">
          <h2>Developer</h2>
          <ul>
            <li>Me</li>
          </ul>
        </div>
        <div className="_content_sec _social_media">
          <BsFacebook className="icon" />
          <BsTwitter className="icon" />
          <BsInstagram className="icon" />
          <BsYoutube className="icon" />
          <BsGithub className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
