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

  return (
    <div>
      <input
        type="text"
        placeholder="Cerca una destinazione..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((viaggio) => (
          <li key={viaggio.id}>{viaggio.destinazione}</li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;
