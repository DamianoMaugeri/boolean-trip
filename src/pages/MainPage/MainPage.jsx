import { useState } from "react";
import TravelList from "../../components/TravelList";
import Searchbar from "../../components/Searchbar";
import viaggi from "../../data/viaggi";

export default function MainPage() {
  const [filteredViaggi, setFilteredViaggi] = useState(viaggi);

  const handleSearch = (results) => {
    setFilteredViaggi(results);
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <TravelList viaggi={filteredViaggi} />
    </div>
  );
}
