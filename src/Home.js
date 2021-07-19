import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/movies');
      const payload = await response.json();
      setMovies(payload.data);
    }
    getData();
  }, []);
  return (
    <div className="container">
			<div className="row">
				<div className="col-10">
					<h1 className="mt-3">List</h1>
					<div style={{width: "100%"}} className="d-flex flex-wrap justify-content-between">
            {
              movies.map(item => {
                return (
                <div className="card mt-2" style={{width: "18rem", display:'inline'}}>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{item.tagline || "-"}</h6>
                    <p className="card-text">{item.overview.slice}</p>
                    <a className="card-link btn btn-success">Details</a>
                  </div>
                </div>)
              })
            }
          </div>
				</div>
			</div>
		</div>
  );
}

export default Home;
