import React, { useState } from "react";
import "./style.css";

import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const uniqueCategory = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueCategory);

export default function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueCategory);
  console.log(menuList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category;
    });
    setMenuData(updatedList);
  };
  //   const filterLunchItem = (category) => {
  //     const updatedLunch = Menu.filter((currEle) => {
  //       return currEle.category === category;
  //     });
  //     setMenuData(updatedLunch);
  //   };

  //   const filterEvening = (category) => {
  //     const updatedEvening = Menu.filter((curEle) => {
  //       return curEle.category === category;
  //     });
  //     setMenuData(updatedEvening);
  //   };
  //   const filterDinner = (category) => {
  //     const updatedDinner = Menu.filter((curEle) => {
  //       return curEle.category === category;
  //     });
  //     setMenuData(updatedDinner);
  //   };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
}
