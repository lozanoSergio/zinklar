import { useState, useEffect } from "react";
import { frequencyCounter, getFileExtension } from "../helpers";

const useRecusriveQuery = (url, maxDep = 50) => {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoaded(false);

    const fetchData = async (urls = [], counter) => {
      if (!urls.length || counter === -1) return setLoaded(true);

      try {
        const response = await fetch(urls.shift(), {
          headers: { "Content-Type": "application/vnd.github.v3+json" },
        });
        const parsedData = await response.json();

        const newUrls = parsedData.tree
          .filter((data) => data.type === "tree")
          .map(({ url }) => url);
        const newData = parsedData.tree
          .filter((data) => data.type === "blob")
          .map(({ path }) => getFileExtension(path));

        setData((prevData) => {
          return frequencyCounter(prevData, newData);
        });

        fetchData([...urls, ...newUrls], counter - 1); // maxDep avoid exceeding the quota
      } catch (error) {
        setError(error);
        throw new Error(error);
      }
    };

    fetchData([url], maxDep);
  }, [url, maxDep]);

  return [data, loaded, error];
};

export default useRecusriveQuery;
