import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import SectionData from "../../data/Header/SectionData.json";
import Action from "../../wrapper/Header/Action";
import Section from "../../wrapper/Header/DropdownSection";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-4 items-center fixed top-0 w-full z-50 shadow-sm bg-white">
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="w-[60px] h-[50px]" />
      </Link>
      <div className="flex flex-row gap-5">
        {SectionData.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
      <Action />
    </div>
  );
};

export default NavBar;
