import React from "react";
import styles from "./TravelList.module.css";
import viaggi from "../data/viaggi";
import { Link } from "react-router-dom";

export default function TravelList() {

  return (
    <div className={styles.container}>
      {viaggi.map((viaggio, index) => (
        <div
          key={index}
          className={styles.card}
          style={{ backgroundImage: `url(${viaggio.immagine})` }}
        >

          <h2>{viaggio.destinazione}</h2>

          <div className={styles.details}>
            <p>
              <strong>Partenza:</strong> {viaggio.dataPartenza}
            </p>
            <p>
              <strong>Ritorno:</strong> {viaggio.dataRitorno}
            </p>
            <p>{viaggio.descrizione}</p>
          </div>
          <Link className={styles.button} to={`/travel/${viaggio.id}`}>Dettaglio</Link>
        </div>
      ))}
    </div>
  );
}
