import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  // fetch data from url, convert response to json, update setData state
  useEffect(() => {
    if (!url) {
      console.log("its broken");
      return;
    }
    const fetchData = async () => {
      const res = await fetch(url);

      const json = await res.json();

      setData(json);
    };

    fetchData();
  }, [url]);

  return { data };
};
