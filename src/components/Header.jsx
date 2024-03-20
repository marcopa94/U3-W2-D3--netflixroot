import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "../styles.css";

class Header extends Component {
  handleGenreChange = (genre) => {
    this.props.onGenreChange(genre);
  };

  render() {
    return (
      <div className="header-main">
        <div className="header-button">
          <h2 className="header-text">{this.props.selectedGenre}</h2>
          <Dropdown>
            <Dropdown.Toggle className="genres-button">Genres</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.handleGenreChange("Harrry Potter")}>Comedy</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleGenreChange("")}>Drama</Dropdown.Item>
              <Dropdown.Item onClick={() => this.handleGenreChange("")}>Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Header;
