import { Link, useParams } from "react-router-dom";
import viaggi from "../../data/viaggi";
import Accordion from 'react-bootstrap/Accordion';
import ParticipantCard from "../../components/ParticipantCard";

export default function ShowPage() {
    const { id } = useParams();
    const viaggioFiltrato = viaggi.filter((el) => el.id === parseInt(id));

    return (
        <div className="mb-4 w-75 mx-auto rounded">
            {viaggioFiltrato.length > 0 ? (
                <div>
                    <h1 className="mt-2">{viaggioFiltrato[0].destinazione}</h1>
                    <p className="mb-3">{viaggioFiltrato[0].descrizione}</p>
                    <Link to={"/"}  className="btn btn-secondary mb-4">
                    Torna ai viaggi
                    </Link>

                    <h2 className="mb-2">Partecipanti:</h2>

                    <Accordion className="mb-4 rounded">
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
            ) : (
                <p>Viaggio non trovato</p>
            )}
        </div>
    );
}
