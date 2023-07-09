import axios from "axios";
import React, { useEffect, useState } from "react";
import KIZILELMA from "../assets/kızılelma.png";

const UAV = () => {
  const [uavData, setUavData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/uav/");
        setUavData(response.data.results);
      } catch (error) {
        console.error("Error fetching UAV data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(uavData);

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {uavData.map((uav, index) => (
          <div className="col">
            <div className="card shadow-sm">
              <img
                src={KIZILELMA}
                alt="KIZIL ELMA UĞRUNA KILINÇ ÇEKİNCE KINDAN"
                height={350}
              />
              <div className="card-body">
                <p className="card-text text-center">BRAND: {uav.brand}</p>
                <p className="card-text text-center">MODEL: {uav.model}</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                  <button className="button">Reservation</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UAV;
