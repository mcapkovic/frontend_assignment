import React from "react";

function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
