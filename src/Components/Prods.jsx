import React from "react";

const Prods = (props) => {
  console.log(props.prodData);
  //const data = ["superman", "batman", "ciclope"];
  return (
    <>
      {props.prodData.map((prod) => {
        return (
            <div 
            key={`${prod.title}`} 
            className="prod">
            <img
              //src={prod.image}
              alt={prod.title}
            />
            <div className="prod-info">
              <h3>{prod.title}</h3>
            </div>
            <div className="prices">
              <h3>{prod.price}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Prods;
