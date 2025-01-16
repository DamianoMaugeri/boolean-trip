import React from "react";
import { Link } from "react-router-dom";

export default function TravelList({ viaggi }) {
  return (
    <div className="container my-4">
      <div className="row">
        {viaggi.map((viaggio, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ transition: "transform 0.3s ease-in-out" }}
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
              <div className="card-footer text-center">
                <Link to={`/travel/${viaggio.id}`} className="btn btn-primary">
                  Dettaglio
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}
