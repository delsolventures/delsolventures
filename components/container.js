import React from "react";

export default function Container(props) {
  return (
    <div
      className={`container max-w-2xl p-4 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
