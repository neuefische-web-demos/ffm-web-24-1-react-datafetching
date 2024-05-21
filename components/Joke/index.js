import { useState } from "react";
import useSWR from "swr";

//const fetcher = (url) => fetch(url).then((res) => res.json());

// async function fetcher1(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

export default function Joke() {
  //const [joke, setJoke] = useState();
  const [id, setId] = useState(0);

  const {
    data: joke,
    error,
    isLoading,
  } = useSWR(`https://example-apis.vercel.app/api/bad-jokes/${id}`);

  // useEffect(() => {
  //   async function startFetching() {
  //     const response = await fetch(
  //       `https://example-apis.vercel.app/api/bad-jokes/${id}`
  //     );
  //     const joke = await response.json();

  //     setJoke(joke);
  //   }

  //   startFetching();
  // }, [id]);

  function handlePrevJoke() {
    setId(joke.prevId);
  }

  function handleNextJoke() {
    setId(joke.nextId);
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <small>ID: {id}</small>
      <h1>{joke.joke}</h1>
      <div>
        <button type="button" onClick={handlePrevJoke}>
          ← Prev Joke
        </button>
        <button type="button" onClick={handleNextJoke}>
          Next Joke →
        </button>
      </div>
    </>
  );
}
