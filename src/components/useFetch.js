import { useEffect, useState } from "react";

function useFetch(url) {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err.message));
    }, 1000);
  }, [url]);

  return [posts, isLoading];
}

export default useFetch;
