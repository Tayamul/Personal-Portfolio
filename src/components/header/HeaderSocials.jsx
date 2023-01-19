import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/tayamul-rai/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://twitter.com/Taya351" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="https://github.com/Tayamul" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
