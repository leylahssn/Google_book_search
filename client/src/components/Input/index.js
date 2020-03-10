import React from "react";
import "./style.css";

// This component lets use a bootstrap input element without worrying about class names
export function Input(props) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

// Deleting the type, className, children and onClick props, applying them to the button element
export function SearchButton({
  type = "default",
  className,
  children,
  onClick
}) {
  return (
    <button
      onClick={onClick}
      className={["search btn btn-lg", `btn-${type}`, className].join(" ")}
    >
      {children}
    </button>
  );
}
