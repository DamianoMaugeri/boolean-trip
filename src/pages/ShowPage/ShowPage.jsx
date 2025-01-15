import { Link, useParams } from "react-router-dom";
import viaggi from "../../data/viaggi";

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
                    <ul>
                        {viaggioFiltrato[0].partecipanti.map((partecipante, i) => (
                            <li key={i}>
                                <p><strong>Nome:</strong> {partecipante.nome} {partecipante.cognome}</p>
                                <p><strong>Codice Fiscale:</strong> {partecipante.codiceFiscale}</p>
                                <p><strong>Telefono:</strong> {partecipante.telefono}</p>
                                <p><strong>Email:</strong> {partecipante.email}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Viaggio non trovato</p>
            )}
        </div>
    );
}
