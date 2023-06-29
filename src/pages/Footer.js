import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-dark text-light text-center p-3">
      <p className="">&copy; 2023 Apurbo Deb Nath</p>
        {/* <Link className=" fa-2x">
          <AiFillLinkedin />
        </Link>
        <Link className=" text-2xl">
          <AiOutlineGithub />
        </Link> */}
      </div>
    
  );
};

export default Footer;
