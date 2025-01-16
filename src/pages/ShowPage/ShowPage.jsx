import { Link, useParams } from "react-router-dom";
import viaggi from "../../data/viaggi";
import Accordion from 'react-bootstrap/Accordion';
import ParticipantCard from "../../components/ParticipantCard";

export default function ShowPage() {
    const { id } = useParams();
    const viaggioFiltrato = viaggi.filter((el) => el.id === parseInt(id));

    return (
        <div>
            {viaggioFiltrato.length > 0 ? (
                <div>
                    <h1>{viaggioFiltrato[0].destinazione}</h1>
                    <p>{viaggioFiltrato[0].descrizione}</p>
                    <Link to={"/"}>Torna ai viaggi</Link>
                    <h2>Partecipanti:</h2>

                    <Accordion>
                        {viaggioFiltrato[0].partecipanti.map((partecipante, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
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
