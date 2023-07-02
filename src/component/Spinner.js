import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          className="spinner-border text-info ms-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
