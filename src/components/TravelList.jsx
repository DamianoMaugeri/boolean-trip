import React from "react";
import viaggi from "../data/viaggi";
import { Link } from "react-router-dom";

export default function TravelList() {
  return (
    <div className="container my-4">
      <div className="row">
        {viaggi.map((viaggio, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Link
              to={`/travel/${viaggio.id}`}
              className="card-link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="card h-100 shadow-sm"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  cursor: "pointer",
                }}
              >
                <div
                  className="card-img-top"
                  style={{
                    backgroundImage: `url(${viaggio.immagine})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                  }}
                ></div>
                <div className="card-body">
                  <h5 className="card-title">{viaggio.destinazione}</h5>
                  <p className="card-text">
                    <strong>Partenza:</strong> {viaggio.dataPartenza}
                    <br />
                    <strong>Ritorno:</strong> {viaggio.dataRitorno}
                    <br />
                    {viaggio.descrizione}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
