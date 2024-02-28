import React, { useState } from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";

function SearchComponent({ placeholder, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Minden kategória"); // Default category

  const handleSearch = () => {
    onSearch(searchQuery, selectedCategory);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <Container>
        <InputGroup className="mb-3">
          {/* Category Selector Dropdown */}
          <Dropdown onSelect={handleCategoryChange}>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              {selectedCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="All">Minden kategória</Dropdown.Item>
              <Dropdown.Item eventKey="Category1">Category1</Dropdown.Item>
              <Dropdown.Item eventKey="Category2">Category2</Dropdown.Item>
              {/* Add more categories as needed */}
            </Dropdown.Menu>
          </Dropdown>
          {/* Search Input */}
          <FormControl
            placeholder={placeholder}
            aria-label="Search"
            aria-describedby="basic-addon2"
            value={searchQuery}
            onChange={handleChange}
          />
          {/* Search Button */}
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
    </div>
  );
}

export default SearchComponent;
