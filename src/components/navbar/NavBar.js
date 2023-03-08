import React from "react";
import iconarrowdown from "../../images/icon-arrow-down.svg";
import iconarrowup from "../../images/icon-arrow-up.svg";
import iconmenu from "../../images/icon-menu.svg";

import { useState, useEffect } from "react";
import FeatureDropdown from "./FeatureDropdown";
import {
  featuresDropDownIcons,
  companyDropDownIcons,
} from "../../resources/data";
import BurgerMenu from "./BurgerMenu";
import CompanyDropDown from "./CompanyDropDown";

const NavBar = () => {
  const [featureList, setFeatureList] = useState(false);
  const [companyList, setCompanyList] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const burgerMenuBar = () => {
    setBurgerMenu((current) => !current);
  };

  return (
    <div className="navbar flex w-full md:p-4 p-8 mx-auto justify-between font-bold h-16">
      <div className="flex items-center [&>*]:mx-2 md:[&>*]:mx-4 text-sm md:text-base [&>.webview]:hidden sm:[&>.webview]:inline">
        <div>
          <div className="pb-2 text-4xl">snap</div>
        </div>
        <div
          onClick={() => setFeatureList((curr) => !curr)}
          className="webview dropdown inline-block cursor-pointer"
        >
          <button>Features</button>
          <img
            className="inline ml-2"
            src={featureList ? iconarrowup : iconarrowdown}
          />
          {featureList & (featuresDropDownIcons.length > 0) ? (
            <div
              class="absolute -left-8 p-2 px-32 m-2 text-xs leading-8 text-black drop-shadow-2xl"
              type="button"
            >
              <div className="border-stone-50 border-2 rounded-xl [&>*>*]:inline px-4">
                {featuresDropDownIcons.map((v) => (
                  <FeatureDropdown icon={v.icon} name={v.name} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div
          className="webview dropdown inline-block cursor-pointer"
          onClick={() => setCompanyList((curr) => !curr)}
        >
          <button>Company</button>
          <img
            className="inline ml-2"
            src={companyList ? iconarrowup : iconarrowdown}
          />
          {companyList & (companyDropDownIcons.length > 0) ? (
            <div
              className="absolute md:left-28 left-[7.5rem] m-2 p-2 px-24 md:px-32 text-xs leading-8 text-black drop-shadow-2xl"
              type="button"
            >
              <div className="border-stone-50 border-2 rounded-xl [&>*>*]:inline px-4 py-1">
                {companyDropDownIcons.map((v) => (
                  <CompanyDropDown text={v.text} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="webview">Careers</div>
        <button className="webview">About</button>
      </div>
      <div
        className="flex items-center md:[&>*]:mx-4 [&>button]:mx-2 text-sm md:text-base 
      [&>button]:hidden sm:[&>button]:inline"
      >
        <button>Login</button>
        <button className="border-solid border-gray-700 border-2 rounded-xl py-1 px-4">
          Register
        </button>
        <div className="sm:hidden">
          <button
            onClick={() => setBurgerMenu((current) => !current)}
            className="inline my-auto"
          >
            <img src={!burgerMenu ? iconmenu : null} />
          </button>
        </div>
        {burgerMenu && <BurgerMenu burgerMenuBar={burgerMenuBar} />}
      </div>
    </div>
  );
};

export default NavBar;