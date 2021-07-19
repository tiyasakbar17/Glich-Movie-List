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
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" onClick={()=>setPage(pagesMapping.home)} role="button">Back</a>
        </p>
      </div>
    </div>
  );
}

export default Detail;
