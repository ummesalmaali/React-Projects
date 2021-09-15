import React, { useState } from "react";
import "./style.css";
// import image from "../../image/b1.jpg";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

export default function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const filterItem = (category) => {
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
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => {
              filterItem("lunch");
            }}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("evening")}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
}
