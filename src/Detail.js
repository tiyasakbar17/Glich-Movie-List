import React, { useContext } from "react";
import { pagesMapping, RoutingContext } from "./Routing";

function Detail() {
  const { setPage } = useContext(RoutingContext);
  return (
    <div>
      <h1>Detail Bre</h1>
      <a className="btn btn-primary" onClick={() => setPage(pagesMapping.home)}>
        Back
      </a>
    </div>
  );
}

export default Detail;
