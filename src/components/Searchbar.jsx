import { useState } from "react";
import viaggi from "../data/viaggi";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(viaggi);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setSearchResults(
      viaggi.filter((viaggio) => {
        return viaggio.destinazione
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
  };

  const buttonClick = () => {
    setSearchResults(
      viaggi.filter((viaggio) => {
        return viaggio.destinazione
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
      )
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Cerca una destinazione..."
        value={searchTerm}
        onChange={handleChange}
        style={{ width: "250px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "20px" }}
      />

      <button onClick={buttonClick} style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#007BFF", color: "#fff", border: "none", cursor: "pointer" }}>
        Cerca
      </button>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {searchResults.map((viaggio) => (
          <li key={viaggio.id} style={{ margin: "5px 0" }}>{viaggio.destinazione}</li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;
