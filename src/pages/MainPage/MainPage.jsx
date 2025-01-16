import { useState } from "react";
import TravelList from "../../components/TravelList";
import Header from "../../components/Header";
import viaggi from "../../data/viaggi";

export default function MainPage() {
  const [filteredViaggi, setFilteredViaggi] = useState(viaggi);

  const handleSearch = (results) => {
    setFilteredViaggi(results);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <TravelList viaggi={filteredViaggi} />
    </div>
  );
}
