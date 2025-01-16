import { useState } from "react"

const initialFormData = {
    nome: "",
    cognome: "",
    codiceFiscale: "",
    telefono: "",
    email: "",
}



export default function FormPartecipanti({ viaggio = {}, callback = () => { } }) {

    const [formData, setFormData] = useState(initialFormData)
    const [isFormValid, setIsFormValid] = useState(true)

    function handleForm(e) {
        const { value, name } = e.target

        setFormData(
            {
                ...formData,
                [name]: value
            }
        )
    };


    function storePartecipante(e) {
        e.preventDefault()
        setIsFormValid(true)

        const data = {

            nome: formData.nome.trim(),
            cognome: formData.cognome.trim(),
            codiceFiscale: formData.codiceFiscale.toUpperCase().trim(),
            telefono: formData.telefono.trim(),
            email: formData.email.trim(),

        }

        // validazione lato client
        if (!formData.nome || !formData.cognome || !formData.codiceFiscale || !formData.telefono || !formData.email || formData.codiceFiscale.length !== 16) {
            setIsFormValid(false)
            return
        }

        callback(data)





    }




    return (
        <form onSubmit={storePartecipante} >
            <p>
                <label htmlFor="nome">NOME *</label>
                <input required type="text" placeholder="inserisci il nome" name="nome" id="nome" value={formData.nome} onChange={handleForm} />

            </p>
            <p>
                <label htmlFor="cognome">COGNOME *</label>
                <input required type="text" placeholder="inserisci il cognome" name="cognome" id="cognome" value={formData.cognome} onChange={handleForm} />

            </p>
            <p>
                <label htmlFor="codiceFiscale">CODICE FISCALE *</label>
                <input required type="text" placeholder="inserisci il codice fiscale" name="codiceFiscale" id="codiceFiscale" value={formData.codiceFiscale} onChange={handleForm} />

            </p>
            <p>
                <label htmlFor="email">EMAIL *</label>
                <input required type="email" placeholder="inserisci l'email" name="email" id="email" value={formData.email} onChange={handleForm} />

            </p>
            <p>
                <label htmlFor="telefono">NUMERO DI TELEFONO *</label>
                <input required type="text" placeholder="inserisci il numero di telefono" name="telefono" id="telefono" value={formData.name} onChange={handleForm} />

            </p>

            <div>
                {isFormValid === false && <div>i dati non sono validi</div>}
                <button>invia</button>
            </div>




        </form>

    )
}