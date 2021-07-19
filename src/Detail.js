import React, { useContext, useState, useEffect } from "react";
import { pagesMapping, RoutingContext } from "./Routing";

function Detail() {
  const { setPage, detail } = useContext(RoutingContext);
  
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    async function getData() {
      const response = await fetch(`/api/movie/${detail}`);
      const payload = await response.json();
      setMovie(payload.data);
    }
    getData();
  }, []);
  
  return (
    <div className="container mt-5">
      <div class="jumbotron">
        <h1 class="display-4">{movie.title}</h1>
        <span className="text-muted">{movie.status}</span>
        <br/>
        <span>Release Date: {movie.release_date}</span>
        <p>Run Time: {movie.runtime} minutes</p>
        <p class="lead">{movie.tagline || "-"}</p>
        <hr class="my-4"/>
        <p>{movie.overview}</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" onClick={()=>setPage(pagesMapping.home)} role="button">Back</a>
        </p>
      </div>
    </div>
  );
}

export default Detail;
