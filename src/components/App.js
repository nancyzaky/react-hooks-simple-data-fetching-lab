// create your App component here
import React, { useState, useEffect } from "react";
const url = "https://dog.ceo/api/breeds/image/random";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState("");
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setDog(data.message);
      });
  }, []);
  return (
    <>{loading ? <p>Loading...</p> : <img src={dog} alt="A Random Dog" />}</>
  );
};

export default App;
