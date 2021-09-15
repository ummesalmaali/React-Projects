import React from "react";

export default function MenuCard({ menuData }) {
  console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curEle) => {
          const { id, name, image, category, description } = curEle;
          return (
            <div>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="food" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
