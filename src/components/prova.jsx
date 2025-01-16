import { Link, useParams } from "react-router-dom";
import viaggi from "../../data/viaggi";
import Accordion from 'react-bootstrap/Accordion';
import ParticipantCard from "../../components/ParticipantCard";
import FormPartecipanti from "../../components/Formpartecipanti";
import { useState } from "react";

export default function ShowPage() {
    const { id } = useParams();

    const arrViaggioFiltrato = viaggi.filter((el) => el.id === parseInt(id));

    const [viaggioFiltrato, setViaggioFiltrato] = useState(arrViaggioFiltrato[0])

    console.log(viaggioFiltrato)




    function addPartecipante(n) {
        console.log(n)
        setViaggioFiltrato((prevState) => ({
            ...prevState,
            partecipanti: [...prevState.partecipanti, n]

        }))

    }

    return (
        <div className="mb-4 w-75 mx-auto rounded">
            {arrViaggioFiltrato.length > 0 ? (
                <div>
                    <h1 className="mt-2">{viaggioFiltrato.destinazione}</h1>
                    <p className="mb-3">{viaggioFiltrato.descrizione}</p>
                    <Link to={"/"} className="btn btn-primary mb-4">
                        Torna ai viaggi
                    </Link>

                    <h2 className="mb-2">Partecipanti:</h2>

                    <Accordion className="mb-4 rounded">
                        {viaggioFiltrato.partecipanti.map((partecipante, index) => (

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

                    <FormPartecipanti viaggio={viaggioFiltrato} callback={addPartecipante} />
                </div>
            ) : (
                <p>Viaggio non trovato</p>
            )}
        </div>
    );
}
