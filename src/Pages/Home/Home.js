import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../../Components/Search/Search";

const Home = () => {
  return (
    <div className="home">
      {/* header */}
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/about">Images</Link>
          <AppsIcon />

          <Avatar />
        </div>
      </div>
      {/* Body */}
      <div className="home__body">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
