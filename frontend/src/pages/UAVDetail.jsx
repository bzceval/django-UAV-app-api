import React from "react";

const UAVDetail = () => {
  return (
    <div className="drink-detail-container my-5">
      <div className="container">
        <div className="row">
          <div className="drink-description text-center my-5">
            <h1>SEçilen UAV </h1>
            <p className="lead">select</p>
            <hr />
          </div>
          <div className="nested">
            <div className="row row-container">
              <div className="col-md-8 col-12 shadow p-3 mb-5">
                <small className="opacity-50 text-nowrap"> deneme</small>
                <p className="fw-bolder fs-6">Ingredient</p>
                <p className="fw-bolder fs-6 mb-0">Ingredient</p>
                <p className="fw-bolder fs-6 mb-0">Measure</p>
                <div class="d-grid gap-2 col-10 mx-auto mt-5">
                <button className="button">Reservation</button>
              </div>
              </div>
              <div className="col-md-4 col-12 mb-5">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UAVDetail;
