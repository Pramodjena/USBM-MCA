/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const Memes = () => {
  const [memes, setMemes] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchMemes = async () => {
    // const data = axios
    //   .get("https://meme-api.com/gimme/wholesomememes")
    //   .then((data) => setMemes(data))
    //   .catch((error) => {
    //     console.log(error);
    //   });
    try {
      const res = await axios.get("https://meme-api.com/gimme/wholesomememes");
      setMemes(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //   loading ? <p>Loading...</p> : null;
  loading && <p>Loading...</p>;

  useEffect(() => {
    fetchMemes();
  }, []);

  console.log(memes);

  return (
    <div>
      <div className=" w-[500px] border-2" key={memes.id}>
        <img className="w-[500px]" src={memes.url} alt={memes.title} />
        <p>Title: {memes.title}</p>
        <p>Author: {memes.author}</p>
      </div>
    </div>
  );
};

export default Memes;
