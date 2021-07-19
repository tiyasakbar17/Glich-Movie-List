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
    <div class="container">
			<div class="row">
				<div class="col-10">
					<h1 class="mt-3">List</h1>
					<table class="table">
						<thead class="table-dark">
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nama</th>
								<th scope="col">NIM</th>
								<th scope="col">Email</th>
								<th scope="col">Jurusan</th>
								<th scope="col">Aksi</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Hehe</th>
								<td>Hehe</td>
								<td>Hehe</td>
								<td>Hehe</td>
								<td>Hehe</td>
								<td>
									<a class="badge bg-success">detail</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
  );
}

export default Home;
