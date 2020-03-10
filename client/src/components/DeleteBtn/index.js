import React from "react";

// deleting the type, className, children and onClick props.
function DeleteBtn({ type = "default", className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={["btn btn-lg", `btn-${type}`, className].join(" ")}
    >
      {children}
    </button>
  );
}

export default DeleteBtn;
