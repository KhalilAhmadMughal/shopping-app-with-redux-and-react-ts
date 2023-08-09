import React from "react";

import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex bg-[rgba(0,0,0,.05)] mt-10 border-t-2 border-t-[#3F3E45] py-4 justify-between items-center sm:px-6">
      <p className="text-xs">
        Copyright &copy; 2023 ShoppingApp. All Rights Reserved.
      </p>
      <div className="flex gap-4">
        <AiFillTwitterSquare
          size="24px"
          className="hover:cursor-pointer hover:text-purple"
        />
        <AiFillFacebook
          size="24px"
          className="hover:cursor-pointer hover:text-purple"
        />
        <AiFillInstagram
          size="24px"
          className="hover:cursor-pointer hover:text-purple"
        />
        <AiFillLinkedin
          size="24px"
          className="hover:cursor-pointer hover:text-purple"
        />
      </div>
    </footer>
  );
};

export default Footer;
