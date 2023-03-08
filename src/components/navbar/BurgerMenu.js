import React, {useState} from "react";
import iconclosemenu from "../../images/icon-close-menu.svg";
import iconarrowdown from "../../images/icon-arrow-down.svg";
import iconarrowup from "../../images/icon-arrow-up.svg";
import {
  featuresDropDownIcons,
  companyDropDownIcons,
} from "../../resources/data";
import FeatureDropdown from "./FeatureDropdown";
import CompanyDropDown from "./CompanyDropDown";

const BurgerMenu = ({ burgerMenuBar }) => {
  const [featureList, setFeatureList] = useState(false);
  const [companyList, setCompanyList] = useState(false);

  return (
    <div
      className="sm:hidden absolute right-0 top-0 h-full w-2/3 text-base leading-10 text-black font-medium shadow-[0px_220px_20px_400px_rgba(0,0,0,0.5)]"
      type="button"
    >
      <div className="px-8 pt-[1rem] h-full">
        <div className="flex flex-row-reverse pb-8 pr-1">
          <button onClick={burgerMenuBar}>
            <img src={iconclosemenu} />
          </button>
        </div>
        <div onClick={() => setFeatureList((curr) => !curr)}>
          <button>Features</button>
          <img
            className="inline ml-2"
            src={featureList ? iconarrowup : iconarrowdown}
          />
        </div>
        {featureList & (featuresDropDownIcons.length > 0) ? (
          <div className="[&>*>*]:inline px-8">
            {featuresDropDownIcons.map((v, i) => (
              <FeatureDropdown key={i} icon={v.icon} name={v.name} />
            ))}
          </div>
        ) : null}

        <div
          className="dropdown inline-block cursor-pointer"
          onClick={() => setCompanyList((curr) => !curr)}
        >
          <button>Company</button>
          <img
            className="inline ml-2"
            src={companyList ? iconarrowup : iconarrowdown}
          />
          {companyList & (companyDropDownIcons.length > 0) ? (
            <div>
              <div className="[&>*>*]:inline px-8 py-1">
                {companyDropDownIcons.map((v, i) => (
                  <CompanyDropDown key={i} text={v.text} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div>Careers</div>
        <button className="pb-8">About</button>
        <div className="[&>*]:block [&>*]:mx-auto">
          <button>Login</button>
          <button className="border-solid border-gray-700 border-2 rounded-xl py-0 px-10 mx-auto">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
