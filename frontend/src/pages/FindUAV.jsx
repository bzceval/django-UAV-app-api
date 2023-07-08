import React from "react";

const FindUAV = () => {
  return (
    <div className="search-container pt-5 pb-5">
      <div class="d-grid gap-2 col-6 mx-auto mt-3">
        <input
          type="search"
          className="form-control text-center shadow-sm"
          placeholder="Search UAV"
        />
      </div>
      <div class="d-grid gap-2 col-3 mx-auto mt-3">
        <button className="button">Search</button>
      </div>
    </div>
  );
};

export default FindUAV;
