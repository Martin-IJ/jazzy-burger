import React from "react";

const LoadingPage = () => {
  return (
    <div className="loader">
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        {/* <span class="visually-hidden">Loading...</span> */}
      </div>
      {/* <div className="loading-txt">Loading...</div> */}
    </div>
  );
};

export default LoadingPage;
