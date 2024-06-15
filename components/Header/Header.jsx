import React, { useState } from "react";
import useStore from "../../store/store"; // Make sure the path to your store is correct
import "./Header.css";

function Header() {
  const [username, setUsername] = useState("miriammugure");
  const { fetchData } = useStore((state) => ({
    fetchData: state.fetchData,
  }));

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(username); // Fetch data using the provided username
  };

  return (
    <div className="HeaderContainer">
      <div className="logoName">
        <h1>github finder</h1>
      </div>

      <div className="logoLink">
        <p>
          by <a href="https://github.com/miriammugure">miriam mugure</a>{" "}
        </p>
      </div>
      <div className="searchContainer">
        <form onSubmit={handleSearch}>
          <div className="inputBox">
            <input
              type="text"
              placeholder="enter a username"
              value={username}
              onChange={handleInputChange}
            />
            <button type="submit">search</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
