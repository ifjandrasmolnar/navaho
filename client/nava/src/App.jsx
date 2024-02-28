import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Container } from "react-bootstrap";
import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Navbar from "./components/NavbarComponent";
import Main from "./components/MainTable";
import SearchComponent from "./components/SearchComponent";

function App() {
  const [count, setCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (query) => {
    setSearchQuery(query);
    // You can perform search-related operations here
  };
  //return <Container className="bg-dark main-container" fluid></Container>;

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
      <Main />
    </>
  );
}

export default App;
