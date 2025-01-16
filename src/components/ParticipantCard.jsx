const ParticipantCard = ({ nome, cognome, email, telefono, codiceFiscale }) => {
    return (
      <div className="card mb-2 text-center" style={{ fontSize: "0.8rem", padding: "0.2rem" }}>
        <div className="card-body">
          <h5 className="card-title">{nome} {cognome}</h5>
          <p className="card-text"><strong>Email:</strong> {email}</p>
          <p className="card-text"><strong>Telefono:</strong> {telefono}</p>
          <p className="card-text"><strong>Codice Fiscale:</strong> {codiceFiscale}</p>
        </div>
      </div>
    );
  };
  
  export default ParticipantCard;