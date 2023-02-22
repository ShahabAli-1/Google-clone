import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import Mic from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { selectSearch, setSearch } from "../../features/appSlice";

const Search = ({ hideButtons = false }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();
    dispatch(
      setSearch({
        search: input,
      })
    );
    navigate("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Mic />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
