import React from "react";
import items from "../data/items";
import { Link } from "react-router-dom";

function Items(props) {
  console.log(props);
  return (
    <>
      <div className="title">Items</div>
      <div className="menu">
        <div className="menu-label">Items</div>
        <ul className="menu-list">
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/items/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Items;
