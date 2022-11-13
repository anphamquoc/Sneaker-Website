import React from "react";
import MenuData from "../../data/Footer/Menu.json";
import Menu from "../../wrapper/Footer/Menu";
import LogoShoes from "../../assets/images/LogoTeam.png";
// import LogoWatch from "../../assets/images/LogoWatch.png";
const Footer = () => {
  return (
    <div className="w-full flex flex-row justify-around py-10 bg-gray-100 mt-10">
      <div className="flex flex-col gap-1 text-gray-700">
        <img src={LogoShoes} alt="logo" className="w-28" />
        <span>© 2022 Thaba Shop</span>
        <span>All Right Reserved</span>
      </div>
      {MenuData.map((item, index) => (
        <Menu key={index} item={item} />
      ))}
    </div>
  );
};

export default Footer;
