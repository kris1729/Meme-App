import React, { useEffect, useState } from "react";
import MemeCard from "../Component/MemeCard";
import { getAllMmemes } from "../api/memes";
// import "bootstrap/dist/css/bootstrap.min.css"


const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMmemes().then((memes) => setData(memes.data.memes));
  }, []);

  return (
    <div className="all-memes" >
      {/* use all memes in row from */
      data.map((el)=>(<MemeCard img={el.url} title  = {el.name} />))
      
      }
     
    </div>
  );
};

export default Home;
