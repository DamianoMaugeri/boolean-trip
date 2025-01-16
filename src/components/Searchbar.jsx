import { useState } from "react";
import viaggi from "../data/viaggi";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    const results = viaggi.filter((viaggio) =>
      viaggio.destinazione.toLowerCase().includes(term.toLowerCase())
    );
    onSearch(results);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Cerca una destinazione..."
        value={searchTerm}
        onChange={handleChange}
        style={{ width: "250px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "20px" }}
      />
    </div>
  );
};

export default Searchbar;
