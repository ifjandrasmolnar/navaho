import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/NavbarComponent";
import DesktopMainTable from "./components/DesktopMainTable";
import MobileMainTable from "./components/MobileMainTable";
import SearchComponent from "./components/SearchComponent";

function App() {
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileView, setIsMobileView] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      // Check screen size and set the state accordingly
      setIsMobileView(window.innerWidth <= 800);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>HELLOOO </h1>
      </div>
      <div style={{ marginTop: "40px" }}>
        <SearchComponent
          placeholder={"Keresés . . ."}
          onSearch={handleSearch}
        />
      </div>
      <div>{isMobileView ? <MobileMainTable /> : <DesktopMainTable />}</div>
    </>
  );
}

export default App;
