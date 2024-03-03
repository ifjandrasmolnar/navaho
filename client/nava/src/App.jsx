import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/responsive/Navbar";
import Navbar2 from "./components/responsive/Navbar2";
import SearchComponent from "./components/SearchComponent";
import MainComponent from "./components/MainComponent";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        const jsonData = JSON.parse(data);
        setJsonData(jsonData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 725 ? true : false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const handleSearch = (query, selectedCategory) => {
    setSearchQuery(query);
  };

  const handleDataUpdate = (updatedData) => {
    setJsonData(updatedData);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {isMobileView ? <Navbar2 /> : <Navbar />}
      <div style={{ marginTop: "20px" }}>
        {!isMobileView ? (
          <SearchComponent
            placeholder={"Keresés . . ."}
            onSearch={handleSearch}
          />
        ) : undefined}
      </div>
      {!jsonData ? (
        <div>Loading...</div>
      ) : (
        <MainComponent jsonData={jsonData} />
      )}
    </>
  );
}

export default App;
