import React from "react";
import styles from "./TravelList.module.css";
import viaggi from "../data/viaggi";

export default function TravelList() {
  function handleButtonClick(destinazione) {
    alert(`Hai cliccato su ${destinazione}`);
  }

  return (
    <div className={styles.container}>
      {viaggi.map((viaggio, index) => (
        <div key={index} className={styles.card}>
          <h2>{viaggio.destinazione}</h2>
          <p>
            <strong>Partenza:</strong> {viaggio.dataPartenza}
          </p>
          <p>
            <strong>Ritorno:</strong> {viaggio.dataRitorno}
          </p>
          <p>{viaggio.descrizione}</p>
          <button
            className={styles.button}
            onClick={() => handleButtonClick(viaggio.destinazione)}
          >
            Dettagli
          </button>
        </div>
      ))}
    </div>
  );
}
