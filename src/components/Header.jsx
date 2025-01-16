import Searchbar from "./Searchbar";

const Header = ({ onSearch }) => {
  return (
    <header
      className="d-flex justify-content-between align-items-center px-4"
      style={{ backgroundColor: "#007BA7", color: "#fff", padding: "10px 0" }}
    >
      <h1 style={{ textAlign: "center" }}>Boolean Trip</h1>
      <Searchbar className="px-3" onSearch={onSearch} />
    </header>
  );
}

export default Header;