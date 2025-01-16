import { Link, useParams } from "react-router-dom";
import viaggi from "../../data/viaggi";
import Accordion from "react-bootstrap/Accordion";
import ParticipantCard from "../../components/ParticipantCard";

export default function ShowPage() {
  const { id } = useParams();
  const viaggioFiltrato = viaggi.filter((el) => el.id === parseInt(id));

  return (
    <div className="bg-travel-list">
      {viaggioFiltrato.length > 0 ? (
        <div>
          <div className="bg-header py-3 text-center">
            <div>
              <h1 className="m-2 fw-semibold">
                {viaggioFiltrato[0].destinazione}
              </h1>
              <p className="m-2">{viaggioFiltrato[0].descrizione}</p>
            </div>
          </div>
          <Link className="fixed-button" to="/">
            indietro
          </Link>
          <section className="container-show">
            <div className="container-show">
              <h2 className="my-4">Partecipanti:</h2>
              <Accordion className="my-4 rounded">
                {viaggioFiltrato[0].partecipanti.map((partecipante, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    key={index}
                    className="rounded mb-1"
                  >
                    <Accordion.Header>
                      {partecipante.nome} {partecipante.cognome}
                    </Accordion.Header>
                    <Accordion.Body>
                      <ParticipantCard
                        nome={partecipante.nome}
                        cognome={partecipante.cognome}
                        email={partecipante.email}
                        telefono={partecipante.telefono}
                        codiceFiscale={partecipante.codiceFiscale}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </section>
        </div>
      ) : (
        <p>Viaggio non trovato</p>
      )}
    </div>
  );
}
