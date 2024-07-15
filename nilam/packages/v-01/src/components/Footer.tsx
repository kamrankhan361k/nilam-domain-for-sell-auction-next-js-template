import React from "react";
import { AiFillHeart } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="py-6 text-center text-white bg-gray-900">
      <div className="container">
        <p className="flex items-center gap-1 justify-center">
          &copy; {new Date().getFullYear()} All right reserved. Made with
          by <AiFillHeart />{" "}
          <a href="https://themeforest.net/user/themeatelier">ThemeAtelier</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
