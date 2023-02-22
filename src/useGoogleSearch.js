import React from "react";
import { useState, useEffect } from "react";

import API_KEY from "./keys";
import axios from "axios";

const CONTEXT_KEY = "d64f97e455f3c42a9";

const useGoogleSearch = (searchTerm) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
        )
        .then((response) => {
          setData(response.data);
        });
    };
    fetchData();
  }, [searchTerm]);

  /*  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [searchTerm]);
*/
  return { data };
};

export default useGoogleSearch;
