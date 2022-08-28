import React from "react";
import classnames from "classnames";

function MenuCategory(props) {
  return (
    <>
      <div
        className={classnames("cursor-pointer  py-2 px-1 ", {
          "text-main-300 bg-main-50 border-r-4 border-main-300":
            props.isActive,
        })}
      >
        <h3 id={props.name} onClick={props.onClickHandler}>
          {props.name} ({props.items.length})
        </h3>
      </div>{" "}
    </>
  );
}

export default MenuCategory;