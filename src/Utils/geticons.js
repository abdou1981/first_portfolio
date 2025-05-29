import * as TfReactIcons from "react-icons/tfi";
import * as LuReactIcons from "react-icons/lu";
import * as FaReactIcons from "react-icons/fa6";
import * as BsReactIcons  from "react-icons/bs";

const getIcon = (iconName) => {
  if (iconName === "TfiWorld") {
    return TfReactIcons[iconName];
  }
  if (iconName === "LuSmartphone") {
    return LuReactIcons[iconName];
  }
  if (iconName === "FaGoogle") {
    return FaReactIcons[iconName];
  }
  if (iconName === "BsLightbulb") {
    return BsReactIcons[iconName];
  }
}

export {getIcon} ;