import { Link, useParams } from "react-router-dom";
import viaggi from "../../data/viaggi";
import Accordion from "react-bootstrap/Accordion";
import ParticipantCard from "../../components/ParticipantCard";
import { useState } from "react";
import FormPartecipanti from "../../components/Formpartecipanti";

export default function ShowPage() {
    const { id } = useParams();

    const arrViaggioFiltrato = viaggi.filter((el) => el.id === parseInt(id));

    const [viaggioFiltrato, setViaggioFiltrato] = useState(arrViaggioFiltrato[0])

    const [isActive, setIsActive] = useState(false)

    const [partecipantiFiltrati, setPartecipantiFiltrati] = useState(viaggioFiltrato.partecipanti)

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        const results = viaggioFiltrato.partecipanti.filter((partecipante) =>
            partecipante.nome.toLowerCase().includes(term.toLowerCase()) || partecipante.cognome.toLowerCase().includes(term.toLowerCase())
        );
        setPartecipantiFiltrati(results);

    };

    function addPartecipante(n) {
        setViaggioFiltrato((prevState) => ({
            ...prevState,
            partecipanti: [...prevState.partecipanti, n]

        }))
        console.log(viaggioFiltrato.partecipanti)
        setPartecipantiFiltrati([...viaggioFiltrato.partecipanti, n])
        setIsActive(false)
        setSearchTerm("")

    }

    function toggleActive() {

        setIsActive(!isActive)
    }


    return (
        <div className="bg-travel-list">
            {arrViaggioFiltrato.length > 0 ? (
                <div className="">
                    <div className="bg-header py-3 text-center">
                        <div>
                            <h1 className="m-2 fw-semibold">
                                {viaggioFiltrato.destinazione}
                            </h1>
                            <p className="m-2">{viaggioFiltrato.descrizione}</p>
                        </div>
                    </div>
                    <Link className="fixed-button" to="/">
                        indietro
                    </Link>
                    <section className="container-show">
                        <div className="container-show">
                            <div className="d-flex justify-content-between align-items-center">
                                <h2 className="my-4">Partecipanti:</h2>
                                <input className="rounded" value={searchTerm} onChange={handleChange} type="text" placeholder="Cerca partecipanti..." />
                            </div>
                            <Accordion className="my-4 rounded">
                                {partecipantiFiltrati.map((partecipante, index) => (
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

                            {isActive ? <button onClick={toggleActive}>-</button>
                                : <button onClick={toggleActive}>+</button>}

                            {
                                isActive && <FormPartecipanti viaggio={viaggioFiltrato} callback={addPartecipante} />
                            }


                        </div>
                    </section>
                </div>
            ) : (
                <p>Viaggio non trovato</p>
            )}
        </div>
    );
}
